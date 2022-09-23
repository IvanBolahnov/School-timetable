let createTable = (data) => {
    let table = document.querySelector(".table"),
    tableRows = table.querySelectorAll(".table__row")
    
    table.querySelector(".table__name").textContent = data.name;
    
    for (let i = 0; i < tableRows.length; i++) {
        let row = tableRows[i],
        number = row.querySelector(".table__row--number"),
        time = row.querySelector(".table__row--time"),
        lesson = row.querySelector(".table__row--lesson"),
        additional = [row.querySelector(".table__row--additional--name"), row.querySelector(".table__row--additional--cabinet")];
        
        number.textContent = "";
        time.textContent = "";
        lesson.textContent = "";
        additional[0].textContent = "";
        additional[1].textContent = "";

        number.textContent = i + 1;
        time.textContent = minutesToHour(data.time[i][0]) + "-" + minutesToHour(data.time[i][1]);
        if (data.lesson[i]){
            lesson.textContent = data.lesson[i][0];
            additional[0].textContent = data.lesson[i][1];
            additional[1].textContent = "№" + data.lesson[i][2];
        }
    
    }
    function minutesToHour(minutes) {
        h = Math.floor(minutes / 60);
        min = minutes - (h * 60);
        if (min < 10) {
            min = "0" + min;
        }
    
        return h+":"+min;
    }
}

let now = new Date

let Sunday = {
    name: "УРА КАНИКУЛЫ!!!! ВСЕМ ПОКА",
}

let DAYS = [Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday]

let weeks = now.getDay()
createTable(DAYS[weeks-1])

setInterval(() => {
    now = new Date;
    if (now.getDay() != weeks) {
        weeks = now.getDay()
        createTable(DAYS[weeks-1])            
    }
}, 1000)
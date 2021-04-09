const date = new Date();

const renderCalendar = () => {
    date.setDate(1);

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const monthDays = document.querySelector(".days");

    const lastDay = new Date(
        date.getFullYear(), date.getMonth() + 1, 0).getDate();

    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

    //const firstDayIndex = date.getDay(); settings if week begin with <sunday>
    let firstDayIndex = date.getDay() - 1;
    if (firstDayIndex === -1) {
        firstDayIndex = 6;
    }


    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

    //const nextDays = 7 - lastDayIndex - 1; settings if week begin with <sunday>
    const nextDays = 7 - lastDayIndex;

    const months = [
        "Janvier",
        "Février",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Août",
        "Septembre",
        "Octobre",
        "Novembre",
        "Décembre"
    ];

    document.querySelector(".date h1").innerHTML = months[date.getMonth()];
    document.querySelector('.date p').innerHTML = new Date().toLocaleDateString("fr-FR", options)

    let days = "";

    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }


    for (let i = 1; i <= lastDay; i++) {
        let k = date;
        let t = new Date(k);
        t.setDate(t.getDate() - 1 + i);
        //check current date
        if (i === new Date().getDate() && date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear()) {
            days += `<a href="/calendar?date=${i}/${date.getMonth() + 1}/${date.getFullYear()}"><div class="today">${i}</div></a>`;
        } else {
            //check if is weekend
            if (is_weekend(t) === true) {
                if (i < new Date().getDate() && date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear()) {
                    days += `<div class="weekend">${i}</div>`;
                } else {
                    days += `<a href="/calendar?date=${i}/${date.getMonth() + 1}/${date.getFullYear()}"><div class="weekend">${i}</div></a>`;
                }

            } else {
                //check if dates are in the past
                if (i < new Date().getDate() && date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear()) {
                    days += `<div class="current">${i}</div>`;
                } else {
                    days += `<a href="/calendar?date=${i}/${date.getMonth() + 1}/${date.getFullYear()}"><div class="current">${i}</div></a>`;

                }
            }
        }
    }


    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`;
        monthDays.innerHTML = days;
    }
};



/**********************************************************************************/
let contor = date.getMonth();
let currentYear = date.getFullYear();

document.querySelector(".prev").addEventListener("click", () => {
    let contor2 = (date.getMonth() - 1);

    let currentYear2 = date.getFullYear();
    if (contor2 != contor - 1 || currentYear2 !== currentYear) {
        date.setMonth(date.getMonth() - 1);
    }
    renderCalendar();
});


document.querySelector(".next").addEventListener("click", () => {

    date.setMonth(date.getMonth() + 1);
    renderCalendar();

});



//check if a date is weekend function
const is_weekend = function (date1) {
    var dt = new Date(date1);

    if (dt.getDay() == 6 || dt.getDay() == 0) {
        return true;
    }
    return false;
}

renderCalendar();


//const y = new Date(); 
//document.getElementById('datevalue').value = y.getDate()+ '/' + (y.getMonth()+1) +'/'+ y.getFullYear();

// const f = (val)=>{
//     return document.getElementById('datevalue').value = val;
// }

const g = (val) =>{
    return document.getElementById('heurevalue').value = val;
}




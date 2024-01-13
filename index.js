MicroModal.init(); 

dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);

let userTimezone = dayjs.tz.guess();

window.addEventListener("load",() =>{
    let now = dayjs();
    document.getElementById("userTimezone").innerHTML = userTimezone;
    document.getElementById("currentTime").innerHTML = now.format('hh:mm:ss');
    document.getElementById("currentDate").innerHTML = now.format('dddd, D MMMM, YYYY')
    window.setInterval(() =>{
        let now = dayjs();
        now = dayjs.tz(now, userTimezone);
        document.getElementById("userTimezone").innerHTML = userTimezone;
        document.getElementById("currentTime").innerHTML = now.format('hh:mm:ss');
        document.getElementById("currentDate").innerHTML = now.format('dddd, D MMMM, YYYY')

    }, 1000);
});

ChangeTimezone = (value) =>{
    if(value == ""){
        value = dayjs.tz.guess();
    }
    userTimezone = value;
};

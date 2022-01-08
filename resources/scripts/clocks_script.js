window.onload = function (){

    let clock = document.getElementById("clock").innerText;
    let hours = document.getElementById("hours").innerText;
    let minutes = document.getElementById("minutes").innerText;
    let seconds = document.getElementById("seconds").innerText;

    let calendar = document.getElementById("calendar").innerText;
    let day = document.getElementById("day").innerText;
    let month = document.getElementById("month").innerText;
    let year = document.getElementById("year").innerText;

    console.log(hours + " ч " +minutes + " м " + seconds + " с ");
    console.log(day + " д " +month + " м " + year + " г ");

    //setInterval(refresh,1000 );
    //setInterval(time, 8000);
    setInterval(reload,1000);
}

function reload() {
    window.reload();
}

function refresh() {
    let seconds = document.getElementById("seconds");
    let intSeconds = parseInt(seconds.innerText);
    if (intSeconds<59) {
        intSeconds++;
        seconds.innerText = intSeconds+"";
    } else {
        intSeconds=0;
        let minutes = document.getElementById("minutes");
        let intMinutes = parseInt(minutes.innerText);
        if (intMinutes<59) {
            intMinutes++;
            minutes.innerText = intMinutes+"";
        } else {
            intMinutes=0;
            let hours = document.getElementById("hours");
            let intHours = parseInt(hours.innerText);
            intHours++;
            hours.innerText = intHours+"";
        }
    }
}
function time() {
    $("#clocks").load(location.href + " #clocks");
}

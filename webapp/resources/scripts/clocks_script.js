window.onload = function (){

    let clock = document.getElementById("clock").innerText;
    let hours = document.getElementById("hours").innerText;
    let minutes = document.getElementById("minutes").innerText;
    let seconds = document.getElementById("seconds").innerText;

    let calendar = document.getElementById("calendar").innerText;
    let day = document.getElementById("day").innerText;
    let month = document.getElementById("month").innerText;
    let year = document.getElementById("year").innerText;

    setInterval(reload,7000);
}

function reload() {
    window.reload();
}

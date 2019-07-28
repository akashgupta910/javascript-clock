// On Page Load Clock function called
window.addEventListener('load', Clock());

// Clock function called after every one second
setInterval(() => { Clock() }, 1000);

// Clock function
function Clock() {
    const date = new Date;

    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();

    let handSecond = document.querySelector(".hand-sec");
    let handMinute = document.querySelector(".hand-min");
    let handHour = document.querySelector(".hand-hour");

    handSecond.style.transform = `rotate(${seconds*6}deg)`;
    handMinute.style.transform = `rotate(${minutes*6}deg)`;
    handHour.style.transform = `rotate(${hours*30}deg)`;
}
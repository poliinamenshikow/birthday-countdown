const timeLeft = document.getElementById('time-left');

const birthday = new Date('05/15/2022');

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24; //milliseconds
let timerId;

function countDown() {
    const today = new Date();
    const timeSpan = birthday - today;
    
    if (timeSpan <= -day) {
        timeLeft.innerHTML = "Hope you had a nice Birthday!";
        clearInterval(timerId);
        return;
    } else if (timeSpan <= 0) {
        timeLeft.innerHTML = "Happy Birthday!";
        clearInterval(timerId);
        return;
    }

    const daysLeft = Math.floor(timeSpan / day);
    const hoursLeft = Math.floor((timeSpan % day) / hour);
    const minutesLeft = Math.floor((timeSpan % hour) / minute);
    const secondsLeft = Math.floor((timeSpan % minute) / second);

    timeLeft.innerHTML = 'To your Birthday left: <br>' + daysLeft + ' days ' + hoursLeft + ' hours ' + minutesLeft +' minutes ' + secondsLeft + ' seconds ';

}

timerId = setInterval(countDown, second);
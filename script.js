const timeLeft = document.getElementById('time-left');

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24; //milliseconds
let timerId;
let countDown;
let birthday = new Date('01/01/1970');

document.querySelector('.btn-1').addEventListener('click', countDown = () => {

        birthday = new Date(document.querySelector('.eventDate').value);
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

})


timerId = setInterval(countDown, second);
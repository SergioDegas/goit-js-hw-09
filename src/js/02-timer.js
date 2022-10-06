import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const dateTime = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('button[data-start]');
const timerDiv = document.querySelector('.timer');
const spanElDays = document.querySelector('span[data-days]');
const spanElHours = document.querySelector('span[data-hours]');
const spanElMin = document.querySelector('span[data-minutes]');
const spanElSec = document.querySelector('span[data-seconds]');
const spanValue = document.querySelectorAll('.value')
console.log(spanValue);
// console.group(timerDiv);
let userDate = null;

btnStart.disabled = true;

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = pad(Math.floor(ms / day));
  const hours = pad(Math.floor((ms % day) / hour));
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
function pad(value) {
  return String(value).padStart(2, '0');
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] < Date.now()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      btnStart.disabled = true;
      userDate = new Date();
    } else {
      btnStart.disabled = false;

      userDate = selectedDates[0];
    }
  },
};

class Timer {
  constructor() {
    this.isActive = false;
    this.timerId = null;
    btnStart.disabled = true;
  }
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.timerId = setInterval(() => {
      const currentTime = Date.now();
      const nextTime = userDate - currentTime;

      const convertTime = convertMs(nextTime);
      console.log(nextTime);

         if (nextTime <= 0) {
           clearInterval(this.timerId);
    
           return;
         }
     
      spanElSec.textContent = convertTime.seconds;
      spanElMin.textContent = convertTime.minutes;
      spanElHours.textContent = convertTime.hours;
      spanElDays.textContent = convertTime.days;
    }, 1000);
  }
}

const timer = new Timer();

flatpickr(dateTime, options);

btnStart.addEventListener('click', () => {
  timer.start();
});
// console.log(message)


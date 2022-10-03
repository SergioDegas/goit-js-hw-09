const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
btnStop.addEventListener('click', btnStopClick);
btnStart.addEventListener('click', btnStartClick);
const body = document.querySelector('body');

let timerId = null;
btnStart.disabled = false;
btnStop.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function addBgc() {
  body.style.backgroundColor = getRandomHexColor();
}

function btnStartClick() {
  timerId = setInterval(() => {
    addBgc();
  }, 1000);
  btnStart.disabled = true;
  btnStop.disabled = false;
}

function btnStopClick() {
  clearInterval(timerId);

  btnStart.disabled = false;
  btnStop.disabled = true;
}

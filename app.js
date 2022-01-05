const hours = document.querySelector('input[name="hours"]');
const minutes = document.querySelector('input[name="minutes"]');
const seconds = document.querySelector('input[name="seconds"]');
const startStopButton = document.querySelector(".start");
const resetButton = document.querySelector(".reset")
let remainhours = document.querySelector('.remainhours');
let remainminutes = document.querySelector(".remainminutes");
let remainseconds = document.querySelector(".remainseconds");
let  pomodoro;
let stop = false

let remainTimeinSeconds = hours.value * 3600 + minutes.value * 60 + seconds.value / 1;

const updateRemainTime = function() {
    remainhours.innerHTML = parseInt(remainTimeinSeconds / 3600) < 10 ? `0${parseInt(remainTimeinSeconds / 3600)}` : parseInt(remainTimeinSeconds / 3600);
    remainminutes.innerHTML = parseInt( (remainTimeinSeconds % 3600) / 60) < 10 ? `0${parseInt( (remainTimeinSeconds % 3600) / 60)}` : parseInt( (remainTimeinSeconds % 3600) / 60);
    remainseconds.innerHTML = parseInt(remainTimeinSeconds % 3600 % 60) < 10 ?  `0${parseInt(remainTimeinSeconds % 3600 % 60)}` : parseInt(remainTimeinSeconds % 3600 % 60) ;    
}

const remainTime = function() {

    remainTimeinSeconds--;

    if(remainTimeinSeconds < 0) {
       resetPomodoro();
    }
    updateRemainTime();
};

const startStopPomodoro = function() {
  if(!stop) {
    pomodoro = setInterval(remainTime, 1000);
    stop = true;
  } else {
    clearInterval(pomodoro);
    stop = false;
  }
}

const resetPomodoro = function() {
  clearInterval(pomodoro);
  stop = false;
  remainhours.innerHTML = parseInt(hours.value) < 10 ? `0${hours.value}` : parseInt(hours.value);
  remainminutes.innerHTML = parseInt(minutes.value) < 10 ? `0${minutes.value}` : parseInt(minutes.value);
  remainseconds.innerHTML = parseInt(seconds.value) < 10 ? `0${seconds.value}` : parseInt(seconds.value);
  remainTimeinSeconds = hours.value * 3600 + minutes.value * 60 + seconds.value / 1;
}

updateRemainTime();

hours.addEventListener('change' , function() {
    remainTimeinSeconds = hours.value * 3600 + minutes.value * 60 + seconds.value / 1;
    updateRemainTime()
});

minutes.addEventListener('change' , function() {
    remainTimeinSeconds = hours.value * 3600 + minutes.value * 60 + seconds.value / 1;
    updateRemainTime()
});

seconds.addEventListener('change' , function() {
    remainTimeinSeconds = hours.value * 3600 + minutes.value * 60 + seconds.value / 1;
    updateRemainTime();
});

startStopButton.addEventListener('click', startStopPomodoro);
resetButton.addEventListener('click', resetPomodoro);
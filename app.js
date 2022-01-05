const hours = document.querySelector('input[name="hours"]');
const minutes = document.querySelector('input[name="minutes"]');
const seconds = document.querySelector('input[name="seconds"]');
let countdownhours = parseInt(hours.value);
let countdownminutes = parseInt(minutes.value);
let countdownseconds = parseInt(seconds.value);

let remainhours = document.querySelector('.remainhours');
let remainminutes = document.querySelector(".remainminutes");
let remainseconds = document.querySelector(".remainseconds");

remainhours.innerHTML = parseInt(hours.value) < 10 ? `0${hours.value}` : parseInt(hours.value);
remainminutes.innerHTML = parseInt(minutes.value) < 10 ? `0${minutes.value}` : parseInt(minutes.value);
remainseconds.innerHTML = parseInt(seconds.value) < 10 ? `0${seconds.value}` : parseInt(seconds.value);


const startStopButton = document.querySelector(".start");
const resetButton = document.querySelector(".reset")

hours.addEventListener('change' , function() {
    countdownhours = parseInt(hours.value);
    remainhours.innerHTML = parseInt(hours.value) < 10 ? `0${hours.value}` : parseInt(hours.value);
});

minutes.addEventListener('change' , function() {
    countdownminutes = parseInt(minutes.value);
    remainminutes.innerHTML = parseInt(minutes.value) < 10 ? `0${minutes.value}` : parseInt(minutes.value);
});

seconds.addEventListener('change' , function() {
    countdownseconds = parseInt(seconds.value);
    remainseconds.innerHTML = parseInt(seconds.value) < 10 ? `0${seconds.value}` : parseInt(seconds.value);
});

let  pomodoro;
let stop = false

const remainTime = function() {
    countdownseconds--;   
    remainhours.innerHTML = countdownhours < 10 ? `0${countdownhours}` : countdownhours ;
    remainminutes.innerHTML = countdownminutes < 10 ? `0${countdownminutes}` : countdownminutes;
    remainseconds.innerHTML = countdownseconds < 10 ? `0${countdownseconds}` : countdownseconds;
 
   if(countdownseconds < 0) {
       countdownseconds = 59;
       countdownminutes--;
   }

   if(countdownminutes < 0) {
       countdownminutes = 59;
       countdownhours--;
   }
   
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
  countdownhours = parseInt(hours.value);
  countdownminutes = parseInt(minutes.value);
  countdownseconds = parseInt(seconds.value);

  remainhours.innerHTML = parseInt(hours.value) < 10 ? `0${hours.value}` : parseInt(hours.value);
  remainminutes.innerHTML = parseInt(minutes.value) < 10 ? `0${minutes.value}` : parseInt(minutes.value);
  remainseconds.innerHTML = parseInt(seconds.value) < 10 ? `0${seconds.value}` : parseInt(seconds.value);
}

startStopButton.addEventListener('click', startStopPomodoro);
resetButton.addEventListener('click', resetPomodoro);
const hours = document.querySelector('input[name="hours"]');
const minutes = document.querySelector('input[name="minutes"]');
const seconds = document.querySelector('input[name="seconds"]');
let countdownhours = hours.value / 1;
let countdownminutes = minutes.value / 1;
let countdownseconds = seconds.value / 1;


hours.addEventListener('input', function(){
    countdownhours = hours.value / 1;
});

minutes.addEventListener('input', function(){
    countdownminutes = minutes.value / 1;
});

seconds.addEventListener('input', function(){
    countdownseconds = seconds.value / 1;
});

let remainhours = document.querySelector('.remainhours');
let remainminutes = document.querySelector(".remainminutes");
let remainseconds = document.querySelector(".remainseconds");

const startStopButton = document.querySelector(".start");
const resetButton = document.querySelector(".reset")


const remainTime = function() {
    remainhours.innerHTML = countdownhours;
    remainminutes.innerHTML = countdownminutes;
    remainseconds.innerHTML = countdownseconds;
    console.log(countdownminutes, countdownseconds);
    countdownseconds--;    
   
   if(countdownseconds < 1) {
       countdownseconds = 59;
       countdownminutes--;
   }

   if(countdownminutes < 1) {
       countdownminutes = 59;
       countdownhours--;
   }
};

let stop = true;

const startStopPomodoro = function() {
    let start;
    if(!stop) {
        start = setInterval(remainTime, 1000);
        stop = false;
        console.log(stop);
    } else {
        clearInterval(start);
        stop = true;
        console.log(stop);
    }
};

startStopButton.addEventListener('click', startStopPomodoro);
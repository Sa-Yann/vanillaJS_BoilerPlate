console.log('clock_Js.js');

// const timeInCase = new Date();

// const secondsInCase = timeInCase.getSeconds()
// const hoursInCase = timeInCase.getHours();
// const minutesInCase = timeInCase.getMinutes()

// const divHrs = document.createElement('div');
// const hrs = document.createTextNode(`${hoursInCase}`);
// divHrs.appendChild(hrs);
// document.getElementById('divHrs').appendChild(divHrs);

// const divMin = document.createElement('div');
// const min = document.createTextNode(minutesInCase);
// divMin.appendChild(min);
// document.getElementById('divMin').appendChild(divMin)

// const divSec = document.createElement('div');
// const sec = document.createTextNode(secondsInCase);
// divSec.appendChild(sec)
// document.getElementById('divSec').appendChild(divSec)



// function rotatePointers() {
//     document.querySelector('.hour').style.transform = 'rotate(90deg) translate(-50%, -2000%)';
// }

// rotatePointers();

// when value hour is differentform value hour theh value our take the new value 
// 360 / 12 

function setDate() {

const time = new Date();
// console.log("file: clock_Js.JS ~ line 3 ~ time", time);

// const hours = time.getHours()
// console.log("file: clock_Js.JS ~ line 6 ~ hours", hours)

// const minutes = time.getMinutes()
// console.log("file: clock_Js.JS ~ line 6 ~ minutes", minutes)

const seconds = time.getSeconds()
// console.log("file: clock_Js.JS ~ line 6 ~ seconds", seconds);
const secInDegrees = (90 + (360/60*seconds));
// console.log(secInDegrees);
document.querySelector('.seconds').style.transform = `rotate(${secInDegrees}deg)`;


// const divSec = document.createElement('div');
// const sec = document.createTextNode(seconds);
// divSec.appendChild(sec)
// divSec.setAttribute("id", "#divTest");
// // console.log("file: clock_Js.JS ~ line 57 ~ setDate ~ divSec", divSec);
// document.getElementById('divSec').appendChild(divSec)
// document.querySelector('#divTest').replaceWith(`<div>${seconds}</div>`);

const minutes = time.getMinutes()
// console.log("file: clock_Js.JS ~ line 6 ~ seconds", seconds);
const minInDegrees = (90 + (360/60*minutes));
// console.log(secInDegrees);
document.querySelector('.minutes').style.transform = `rotate(${minInDegrees}deg)`;


const hours = time.getHours();
const hrsInDegrees = (360/24*hours + 90)
document.querySelector('.hours').style.transform = `rotate(${hrsInDegrees}deg)`;

// const divSec = document.createElement('div');
// const sec = document.createTextNode(secondsInCase);
// divSec.appendChild(sec)
// document.getElementById('divSec').appendChild(divSec)

}

setInterval(setDate, 1000);


// if(hours = hours + 1){
//    console.log(hours); 
// }


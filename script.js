var moment = require("moment");
let divTag = document.querySelector('.date');
let dateTime = new Date();


const dmy = document.createElement('h3');
const dayName = document.createElement('h2');
const time = document.createElement('h2');

dmy.classList.add('h2CSS0');
dayName.classList = 'h2CSS1';
time.classList = 'h2CSS2';


let myCoolDmy = moment(dateTime).format('LL');
let myCoolDayName = moment(dateTime).format('dddd');
let myCoolTime = moment(dateTime).format('LTS');

dmy.innerHTML = myCoolDmy;
dayName.innerHTML = myCoolDayName;
time.innerHTML = myCoolTime;


divTag.appendChild(dmy);
divTag.appendChild(dayName);
divTag.appendChild(time);

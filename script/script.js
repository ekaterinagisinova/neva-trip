// Работа с ближайшим временем
let date = new Date();
let hour = date.getHours();
let schedule = [...document.querySelectorAll('.time')];

for (let i=0; i < schedule.length; i++){    
    let scheduleTime = [...schedule[i].querySelectorAll('.timeItem')];
    // console.log(scheduleTime);    
    for(let i = 0; i<scheduleTime.length; i++){
        let scheduleHour = scheduleTime[i].getAttribute('data-time');
        // console.log(scheduleHour)
        if (hour < +scheduleHour){
            scheduleTime[i].classList.add('active');
            break;
        }
    }
}

// Определение ширины сайта
let pageWidth = document.documentElement.clientWidth;
console.log(pageWidth);

// Появление кнопки 'Еще'
let countSchedule =[...document.querySelectorAll('.time')]
// console.log(countSchedule);
countSchedule.forEach(el => {
    let countTime = [...el.querySelectorAll('.timeItem')];    
    if  ( pageWidth < 353 && countTime.length > 3) {
        for (let i = 2; i < countTime.length; i++){
            countTime[i].classList.add('hidden');
            el.querySelector('.btn__more').classList.remove('hidden');
        }
    }
    else if (countTime.length > 4) {
        for (let i = 3; i < countTime.length; i++){
            countTime[i].classList.add('hidden');
            el.querySelector('.btn__more').classList.remove('hidden');
        }
    } 
});

// Срабатывание кнопки 'Еще'
let openHiddenSchedule = (event) => {
    let scheduleHidden = [...event.target.closest('.time').querySelectorAll('.hidden')];
    scheduleHidden.forEach(el => {
        el.classList.remove('hidden');        
    })
    event.target.classList.add('hidden');

    if (pageWidth > 1100 && event.target.closest('.container').querySelectorAll('.timeItem').length >= 5) {// event.target.closest('.excursion__info__price').style.paddingTop = 3`rem`;
    event.target.closest('.container').querySelector('.excursion__info').style.margin =`1.4rem 0 0 0`;
    }
}

// Определение устройства
let device = window.navigator.userAgent;
let deviceReg = device.toLowerCase().match('mobile');
let btnMore = [...document.querySelectorAll('.btn__more')];

if (deviceReg === null) {
    console.log('desktop');
    btnMore.forEach(el => el.addEventListener('click', openHiddenSchedule));   
}
else {
    console.log('mobile');
    btnMore.forEach(el => el.addEventListener('touchstart', openHiddenSchedule));
}


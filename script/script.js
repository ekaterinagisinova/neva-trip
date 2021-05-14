// Работа с ближайшим временем
let date = new Date();
let hour = date.getHours();
let schedule = [...document.querySelectorAll('.excursion__schedule')];

for (let i=0; i < schedule.length; i++){    
    let scheduleTime = [...schedule[i].querySelectorAll('.excursion__schedule__time')];
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
let countSchedule =[...document.querySelectorAll('.excursion__schedule')]
// console.log(countSchedule);
countSchedule.forEach(el => {
    let countTime = [...el.querySelectorAll('.excursion__schedule__time')];    
    if (countTime.length > 4) {
        for (let i = 3; i < countTime.length; i++){
            countTime[i].classList.add('hidden');
            el.querySelector('.btn__more').classList.remove('hidden');
        }
    }   
});

// Срабатывание кнопки 'Еще'
let openHiddenSchedule = (event) => {
    let scheduleHidden = [...event.target.closest('.excursion__schedule').querySelectorAll('.hidden')];
    scheduleHidden.forEach(el => {
        el.classList.remove('hidden');        
    })
    event.target.classList.add('hidden');

    if (pageWidth > 1200 && event.target.closest('.excursion__schedule').querySelectorAll('.excursion__schedule__time').length > 5) {// event.target.closest('.excursion__info__price').style.paddingTop = 3`rem`;
    event.target.closest('.container').querySelectorAll('.excursion__info__price')[0].style.marginTop +=`3rem`;
    event.target.closest('.container').querySelectorAll('.excursion__info__more')[0].style.marginTop +=`3rem`;
    event.target.closest('.excursion__schedule').style.top=`50%`
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


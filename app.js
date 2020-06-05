const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const loading = document.querySelector('.loading');
const timer = document.getElementById('timer');
const year = document.querySelector('.year');

const currentYear = new Date().getFullYear();
year.innerHTML = currentYear + 1;

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);


// UPDATE COUNTDOWN TIME
const updateCountdown = () => {

    const currentTime = new Date();
    const diff = newYearTime - currentTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
}

// SHOW LOADER BEFORE LOAD COUNTDOWN
setTimeout(() => {
    timer.style.display = 'block';
    loading.style.display = 'none';
},2000)

// RUN EVERY SECOND
setInterval(updateCountdown, 1000);



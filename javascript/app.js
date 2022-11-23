const remainTime = document.querySelector('#remain-time');

function dDay() {
    const openTime = new Date("2022-12-07");
    const todayTime = new Date();

    const dday = openTime - todayTime;

    const ddayDay = Math.floor(dday / (1000*60*60*24));
    const ddayHour = Math.floor((dday / (1000*60*60)) % 24);
    const ddayMin = Math.floor((dday / (1000*60)) % 60);
    const ddaySec = Math.floor(dday / 1000 % 60);

    remainTime.innerText = `${ddayDay}일 ${ddayHour}시간 ${ddayMin}분 ${ddaySec}초`;
}

dDay();
setInterval(dDay, 1000);
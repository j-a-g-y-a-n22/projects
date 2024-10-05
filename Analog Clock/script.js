setInterval(() => {
    let time = new Date()
    let chour = time.getHours()
    let cminute = time.getMinutes()
    let cseconds = time.getSeconds()
    console.log(cseconds);
    let color = "black"
    second.style.transform = `rotate(${6*cseconds}deg)`
    minute.style.transform = `rotate(${6*cminute}deg)`
    hour.style.transform = `rotate(${30*chour+ 0.5*cminute}deg)`
    hr.innerText = chour;
    min.innerText = ": "+ cminute
    sec.innerText = cseconds
}, 1000);

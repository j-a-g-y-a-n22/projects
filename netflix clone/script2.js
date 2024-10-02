let x1 = 0, y1 = 0;
window.client
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0),
    dist_to_draw = 50,
    delay = 1000,
    fsize = ['1.1rem', '1.4rem', '.8rem', '1.7rem'],
    colors = ['cyan',
        'red',
        'blue',
        'yellow',
        'green',
        'white'],
    rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
    selRand = (o) => o[rand(0, o.length - 1)],
    distanceTo = (x1, y1, x2, y2) =>
        Math.sqrt((Math.pow(x2 - x1, 2)) + (Math.pow(y2 - y1, 2))),
    shouldDraw = (x, y) =>
        (distanceTo(x1, y1, x, y) >= dist_to_draw),
    addStr = (x, y) => {
        const str = document.createElement("div");
        str.innerHTML = '&#10;';
        str.className = 'star';
        str.style.top = `${y + rand(-20, 20)}px`;
        str.style.left = `${x}px`;
        str.style.color = selRand(colors);
        str.style.fontSize = selRand(fsize);
        document.body.appendChild(str);
        // console.log(rand(0, 3));
        
        const fs = 10 + 5 * parseFloat(getComputedStyle(str).fontSize);
        // console.log(vh, y, fs);
        // console.log((y+fs)>vh?vh-y:fs);
        str.animate({
            translate: `0 ${(y + fs) > vh ? vh - y : fs}px`,
            opacity: 0,
            transform: `rotateX(${rand(1, 500)}deg) rotateY(${rand(1, 500)}deg)`
        }, {
            duration: delay,
            fill: 'forwards',

        });
        setTimeout(() => {
            str.remove();
        }, 1000);
    }

addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e;
    if (shouldDraw(clientX, clientY)) {
        addStr(clientX, clientY);
        x1 = clientX;
        y1 = clientY;
    }
});




// let lastX = 0, lastY = 0;
// const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0),
//     distToDraw = 50,
//     delay = 1000,
//     fontSizes = ['1.1rem', '1.4rem', '.8rem', '1.7rem'],
//     colors = ['cyan', 'red', 'blue', 'yellow', 'green', 'white'];

// const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
// const selRand = (arr) => arr[rand(0, arr.length - 1)];
// const distanceTo = (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1);
// const shouldDraw = (x, y) => distanceTo(lastX, lastY, x, y) >= distToDraw;

// const createStar = (x, y) => {
//     const star = document.createElement("div");
//     star.innerHTML = '&#10;';  // Line break character
//     star.className = 'star';
//     star.style.top = `${y + rand(-20, 20)}px`;
//     star.style.left = `${x}px`;
//     star.style.color = selRand(colors);
//     star.style.fontSize = selRand(fontSizes);
//     document.body.appendChild(star);

//     const offset = 10 + 5 * parseFloat(getComputedStyle(star).fontSize);
//     const translateY = (y + offset > vh) ? vh - y : offset;

//     star.animate({
//         transform: `translateY(${translateY}px) rotateX(${rand(1, 500)}deg) rotateY(${rand(1, 500)}deg)`,
//         opacity: 0
//     }, {
//         duration: delay,
//         fill: 'forwards'
//     });

//     setTimeout(() => star.remove(), delay);
// };

// window.addEventListener("mousemove", ({ clientX, clientY }) => {
//     if (shouldDraw(clientX, clientY)) {
//         createStar(clientX, clientY);
//         lastX = clientX;
//         lastY = clientY;
//     }
// });

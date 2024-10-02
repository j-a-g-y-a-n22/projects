document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.imgcont');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    function updateButtonVisibility() {
        const scrollLeft = container.scrollLeft;
        const scrollWidth = container.scrollWidth;
        const clientWidth = container.clientWidth;

        prevBtn.style.opacity = scrollLeft > 0 ? '1' : '0';
        nextBtn.style.opacity = scrollLeft < (scrollWidth - clientWidth) ? '1' : '0';
    }

    prevBtn.addEventListener('click', function () {
        container.scrollBy({ left: -container.clientWidth / 2, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', function () {
        container.scrollBy({ left: container.clientWidth / 2, behavior: 'smooth' });
    });

    container.addEventListener('scroll', updateButtonVisibility);

    // Initial visibility check
    updateButtonVisibility();
});



let frtP =document.querySelectorAll(".frstp");
let sndP =document.querySelectorAll(".sndp")
let AfTp = Array.from(frtP);
let BsdP = Array.from(sndP);


AfTp.forEach(e => {
    console.log(e);
    
    // e.addEventListener("click",()=>{
    //     console.log(e.index);
        
    // })
});






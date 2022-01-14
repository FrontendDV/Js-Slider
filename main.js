const carouselSlide = document.querySelector('.carousel-slide');
const carousleImg = document.querySelectorAll('.carousel-slide img');

// Buttons

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// Counter

let counter = 1;
const size = carousleImg[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// Button listeners 

nextBtn.addEventListener('click',()=>{
    if(counter >= carousleImg.length -1) return;
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})


prevBtn.addEventListener('click',()=>{
    if(counter <= 0) return;
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})


carouselSlide.addEventListener('transitionend', ()=>{
    if(carousleImg[counter].id === "lastClone"){
        carouselSlide.style.transition = 'none';
        counter = carousleImg.length -2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(carousleImg[counter].id === "firstClone"){
        carouselSlide.style.transition = 'none';
        counter = carousleImg.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})

// Text animation

const text = document.querySelector('#text')
let tl = gsap.timeline({default:{duration:2,ease:"sine.out"}});
tl.fromTo('#text',{y:0},{y:-10,yoyo:true,repeat:-1})



// Mouse follow circle

document.addEventListener('DOMContentLoaded', () => {
    let mousePosX = 0,
        mousePosY = 0,
        mouseCircle = document.getElementById('mouse-circle');

    document.onmousemove = (e) => {
        mousePosX = e.pageX;
        mousePosY = e.pageY;
    }
    let delay = 6,
    revisedMousePosX = 0,
    revisedMousePosY = 0;

function delayMouseFollow() {
    requestAnimationFrame(delayMouseFollow);

    revisedMousePosX += (mousePosX - revisedMousePosX) / delay;
    revisedMousePosY += (mousePosY - revisedMousePosY) / delay; 

    mouseCircle.style.top = revisedMousePosY + 'px';
    mouseCircle.style.left = revisedMousePosX + 'px';
}
delayMouseFollow();
});



function toggle() {
    let bg = document.querySelector('.landing');
    
    bg.classList.toggle("active");
}

document.getElementById('ver2').addEventListener('click', function(){
    toggle();
});

document.getElementById('ver1').addEventListener('click', function(){
    toggle();
})

const tl = gsap.timeline({
    default: {
        ease: "power2.out"
    }
});

tl.fromTo(".landing-txt-ani", {
    y: "100%",
    opacity: 0
},{
    duration: 2,
    y: "0%",
    opacity: 1,
    ease: "power1.out",
});

tl.to(".loading-ani", {
    duration: 2.5,
    opacity: 0,
    display: "none",
    ease: "power1.out"
},"+=1");

tl.fromTo(".landing-txt-ani2", {
    y: "100%",
    opacity: 0
},{
    duration: 1.5,
    y: "0%",
    opacity: 1,
},"-=1");

tl.fromTo(".logo", {
    y: "100%",
    opacity: 0
},{
    duration: 1,
    y: "0%",
    opacity: 1
},"-=0.5");

tl.fromTo(".nav1 , .nav2", {
    y: "100%",
    opacity: 0
},{
    duration: 2,
    y: "0%",
    opacity: 1,
    delay: 0.25,
    stagger: 0.25
},"-=1");






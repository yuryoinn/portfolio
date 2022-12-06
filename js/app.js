gsap.registerPlugin(ScrollTrigger);

const scenes = gsap.utils.toArray('.sec');

scenes.forEach((sec ,i) => {
    ScrollTrigger.create({
        trigger: sec,
        start: "bottom bottom",
        pin: true,
        pinSpacing: false,
        // snap: 1
    })
});

// ScrollTrigger.create({
//     snap: 1 / 4 // snap whole page to the closest section!
//   });




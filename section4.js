let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".text-container",
        start: "30% bottom",
        end: "200% bottom",
        scrub: 1,
        ////markers: true,
    },
});

tl.from([".text-1"], {
    x: -300,
    scale: 0.5,
    transformOrigin: "50% 50%",
    opacity: 0,
    stagger: 0.05,
});

tl.from([".text-2"], {
    y: 300,
    scale: 0.5,
    transformOrigin: "50% 50%",
    opacity: 0,
    stagger: 0.05,
});


const lenis = new Lenis();
lenis.on("scroll", (e) => {
    console.log(e);
});
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);


//   let t1 = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".animated-element-left",
//       start: "100% bottom",
//       end: "200% bottom",
//       scrub: true,
//       ////markers: true,
//     },
//   });

//   t1.from(".animated-element-left", {
//     x: 100,
//     scale: 1,
//     duration: 10,
//     transformOrigin: "-10% 100%",
//     opacity: 0,
//     stagger: 0.05,
//   });


// let t2 = gsap.timeline({
//     scrollTrigger: {
//         trigger: '.section3-left',
//         start: 'top center',
//         end: 'bottom center',
//         scrub: true
//     }
// })

// t2.from('.section3-left-text', {
//     opacity: 0,
//     x: '0%',
//     y: '0%',
//     scale: 0.5,
//     duration: 1
// })
// t2.to('.section3-left-text', {
//     opacity: 1,
//     scale: 1,
//     duration: 1
// });




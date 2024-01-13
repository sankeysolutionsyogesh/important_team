// function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

//   const locoScroll = new LocomotiveScroll({
//     el: document.querySelector("#main"),
//     smooth: true,
//   });
//   locoScroll.on("scroll", ScrollTrigger.update);

//   ScrollTrigger.scrollerProxy("#main", {
//     scrollTop(value) {
//       return arguments.length
//         ? locoScroll.scrollTo(value, 0, 0)
//         : locoScroll.scroll.instance.scroll.y;
//     },

//     getBoundingClientRect() {
//       return {
//         top: 0,
//         left: 0,
//         width: window.innerWidth,
//         height: window.innerHeight,
//       };
//     },

//     pinType: document.querySelector("#main").style.transform
//       ? "transform"
//       : "fixed",
//   });
//   ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
//   ScrollTrigger.refresh();
// }
// locomotive();

const canvas1 = document.querySelector("canvas");
const context1 = canvas1.getContext("2d");

canvas1.width = window.innerWidth;
canvas1.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas1.width = window.innerWidth;
  canvas1.height = window.innerHeight;
  render();
});

function files1(index) {
  console.log("File ", index)
  var data = `
        ./images/DR_INTRO_000.webp
        ./images/DR_INTRO_001.webp
        ./images/DR_INTRO_002.webp
        ./images/DR_INTRO_003.webp
        ./images/DR_INTRO_004.webp
        ./images/DR_INTRO_005.webp
        ./images/DR_INTRO_006.webp
        ./images/DR_INTRO_007.webp
        ./images/DR_INTRO_008.webp
        ./images/DR_INTRO_009.webp
        ./images/DR_INTRO_010.webp
        ./images/DR_INTRO_011.webp
        ./images/DR_INTRO_012.webp
        ./images/DR_INTRO_013.webp
        ./images/DR_INTRO_014.webp
        ./images/DR_INTRO_015.webp
        ./images/DR_INTRO_016.webp
        ./images/DR_INTRO_017.webp
        ./images/DR_INTRO_018.webp
        ./images/DR_INTRO_019.webp
        ./images/DR_INTRO_020.webp
        ./images/DR_INTRO_021.webp
        ./images/DR_INTRO_022.webp
        ./images/DR_INTRO_023.webp
        ./images/DR_INTRO_024.webp
        ./images/DR_INTRO_025.webp
        ./images/DR_INTRO_026.webp
        ./images/DR_INTRO_027.webp
        ./images/DR_INTRO_028.webp
        ./images/DR_INTRO_029.webp
        ./images/DR_INTRO_030.webp
        ./images/DR_INTRO_031.webp
        ./images/DR_INTRO_032.webp
        ./images/DR_INTRO_033.webp
        ./images/DR_INTRO_034.webp
        ./images/DR_INTRO_035.webp
        ./images/DR_INTRO_036.webp
        ./images/DR_INTRO_037.webp
        ./images/DR_INTRO_038.webp
        ./images/DR_INTRO_039.webp
        ./images/DR_INTRO_040.webp
        ./images/DR_INTRO_041.webp
        ./images/DR_INTRO_042.webp
        ./images/DR_INTRO_043.webp
        ./images/DR_INTRO_044.webp
        ./images/DR_INTRO_045.webp
        ./images/DR_INTRO_046.webp
        ./images/DR_INTRO_047.webp
        ./images/DR_INTRO_048.webp
        ./images/DR_INTRO_049.webp
        ./images/DR_INTRO_050.webp
        ./images/DR_INTRO_051.webp
        ./images/DR_INTRO_052.webp
        ./images/DR_INTRO_053.webp
        ./images/DR_INTRO_054.webp
        ./images/DR_INTRO_055.webp
        ./images/DR_INTRO_056.webp
        ./images/DR_INTRO_057.webp
        ./images/DR_INTRO_058.webp
        ./images/DR_INTRO_059.webp
        ./images/DR_INTRO_060.webp
        ./images/DR_INTRO_061.webp
        ./images/DR_INTRO_062.webp
        ./images/DR_INTRO_063.webp
        ./images/DR_INTRO_064.webp
        ./images/DR_INTRO_065.webp
        ./images/DR_INTRO_066.webp
        ./images/DR_INTRO_067.webp
        ./images/DR_INTRO_068.webp
        ./images/DR_INTRO_069.webp
        ./images/DR_INTRO_070.webp
        ./images/DR_INTRO_071.webp
        ./images/DR_INTRO_072.webp
        ./images/DR_INTRO_073.webp
        ./images/DR_INTRO_074.webp
        ./images/DR_INTRO_075.webp
        ./images/DR_INTRO_076.webp
        ./images/DR_INTRO_077.webp
        ./images/DR_INTRO_078.webp
        ./images/DR_INTRO_079.webp
        ./images/DR_INTRO_080.webp
        ./images/DR_INTRO_081.webp
        ./images/DR_INTRO_082.webp
        ./images/DR_INTRO_083.webp
        ./images/DR_INTRO_084.webp
        ./images/DR_INTRO_085.webp
        ./images/DR_INTRO_086.webp
        ./images/DR_INTRO_087.webp
        ./images/DR_INTRO_088.webp
        ./images/DR_INTRO_089.webp
        ./images/DR_INTRO_090.webp
        ./images/DR_INTRO_091.webp
        ./images/DR_INTRO_092.webp
        ./images/DR_INTRO_093.webp
        ./images/DR_INTRO_094.webp
        ./images/DR_INTRO_095.webp
        ./images/DR_INTRO_096.webp
        ./images/DR_INTRO_097.webp
        ./images/DR_INTRO_098.webp
        ./images/DR_INTRO_099.webp
        ./images/DR_INTRO_100.webp
        ./images/DR_INTRO_101.webp
        ./images/DR_INTRO_102.webp
        ./images/DR_INTRO_103.webp
        ./images/DR_INTRO_104.webp
        ./images/DR_INTRO_105.webp
        ./images/DR_INTRO_106.webp
        ./images/DR_INTRO_107.webp
        ./images/DR_INTRO_108.webp
        ./images/DR_INTRO_109.webp
        ./images/DR_INTRO_110.webp
        ./images/DR_INTRO_111.webp
        ./images/DR_INTRO_112.webp
        ./images/DR_INTRO_113.webp
        ./images/DR_INTRO_114.webp
        ./images/DR_INTRO_115.webp
        ./images/DR_INTRO_116.webp
        ./images/DR_INTRO_117.webp
        ./images/DR_INTRO_118.webp
        ./images/DR_INTRO_119.webp
        ./images/DR_INTRO_120.webp
        ./images/DR_INTRO_121.webp
        ./images/DR_INTRO_122.webp
        ./images/DR_INTRO_123.webp
        ./images/DR_INTRO_124.webp
        ./images/DR_INTRO_125.webp
        ./images/DR_INTRO_126.webp
        ./images/DR_INTRO_127.webp
        ./images/DR_INTRO_128.webp
        ./images/DR_INTRO_129.webp
        ./images/DR_INTRO_130.webp
        ./images/DR_INTRO_131.webp
        ./images/DR_INTRO_132.webp
        ./images/DR_INTRO_133.webp
        ./images/DR_INTRO_134.webp
        ./images/DR_INTRO_135.webp
        ./images/DR_INTRO_136.webp
        ./images/DR_INTRO_137.webp
        ./images/DR_INTRO_138.webp
        ./images/DR_INTRO_139.webp
        ./images/DR_INTRO_140.webp
        ./images/DR_INTRO_141.webp
        ./images/DR_INTRO_142.webp
        ./images/DR_INTRO_143.webp
        ./images/DR_INTRO_144.webp
        ./images/DR_INTRO_145.webp
        ./images/DR_INTRO_146.webp
        ./images/DR_INTRO_147.webp
        ./images/DR_INTRO_148.webp
        ./images/DR_INTRO_149.webp
        ./images/DR_INTRO_150.webp
        ./images/DR_INTRO_151.webp
        ./images/DR_INTRO_152.webp
        ./images/DR_INTRO_153.webp
        ./images/DR_INTRO_154.webp
        ./images/DR_INTRO_155.webp
        ./images/DR_INTRO_156.webp
        ./images/DR_INTRO_157.webp
        ./images/DR_INTRO_158.webp
        ./images/DR_INTRO_159.webp
        ./images/DR_INTRO_160.webp
        ./images/DR_INTRO_161.webp
        ./images/DR_INTRO_162.webp
        ./images/DR_INTRO_163.webp
        ./images/DR_INTRO_164.webp
        ./images/DR_INTRO_165.webp
        ./images/DR_INTRO_166.webp
        ./images/DR_INTRO_167.webp
        ./images/DR_INTRO_168.webp
        ./images/DR_INTRO_169.webp
        ./images/DR_INTRO_170.webp
        ./images/DR_INTRO_171.webp
        ./images/DR_INTRO_172.webp
        ./images/DR_INTRO_173.webp
        ./images/DR_INTRO_174.webp
        ./images/DR_INTRO_175.webp
        ./images/DR_INTRO_176.webp
        ./images/DR_INTRO_177.webp
        ./images/DR_INTRO_178.webp
        ./images/DR_INTRO_179.webp
   `;
  return data.split("\n")[index];
}

const frameCount1 = 179;

const images1 = [];
const imageSeq1 = {
  frame: 1,
};

for (let i = 0; i < frameCount1; i++) {
  const img = new Image();
  img.src = files1(i);
  images1.push(img);
}

gsap.to(imageSeq1, {
  frame: frameCount1 - 1,
  snap: "frame",
  ease: `none`,
  scale: 0.5,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    pin:true,
    // scroller: `#main`,
  },
  onUpdate: render,
});

images1[1].onload = render;

function render() {
  scaleImage(images1[imageSeq1.frame], context1);
}

function scaleImage(img, ctx) {
  var canvas1 = ctx.canvas1;
  var hRatio = canvas1.width / img.width;
  var vRatio = canvas1.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas1.width - img.width * ratio) / 2;
  var centerShift_y = (canvas1.height - img.height * ratio) / 2 + 220;
  ctx.clearRect(0, 0, canvas1.width, canvas1.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
// ScrollTrigger.create({
//   trigger: "#page>canvas",
//   pin: true,
//   markers:true,
//   scrub: true,
// //   scroller: `#main`,
//   start: `top top`,
//   end: `600% top`,
// });

//   gsap.to("#page1",{
//     // scale: 0.5,
//     scrollTrigger:{
//       trigger:`#page1`,
//       start:`top top`,
//       end:`bottom top`,
//       pin:true,
//       scroller:`#main`,
//     //   markers:true,
//     }
//   })
//   gsap.to("#page2",{
//     // scale: 0.5,
//     scrollTrigger:{
//       trigger:`#page2`,
//       start:`top top`,
//       end:`bottom top`,
//       pin:true,
//       scroller:`#main`,
//     //   markers:true,
//     }
//   })
//   gsap.to("#page3",{
//     // scale: 0.5,
//     scrollTrigger:{
//       trigger:`#page3`,
//       start:`top top`,
//       end:`bottom top`,
//       pin:true,
//       scroller:`#main`,
//     //   markers:true,
//     }
//   })

// gsap.to("#header-title1", {
//     x: "200px", // Move to the right
//     // opacity: 0, // Fade out
//     // ease: "out",
//     duration: 3, // Animation duration (in seconds)
//     delay: 0.5,
//     scrollTrigger: {
//         scrub: 0.15,
//         trigger: "#page",
//         start: "20% bottom", // Change the start position to trigger the animation at the center
//         end: "bottom bottom",
//         markers: true, // Add markers to visualize the trigger positions (for debugging)
//     },
// });

gsap.to("#header-title1", {
  x: "200px", // Move to the right
  // opacity: 0, // Fade out
  // ease: "out",
  duration: 3, // Animation duration (in seconds)
  delay: 0.5,
  scrollTrigger: {
    scrub: 0.15,
    trigger: "#page",
    start: "60% 30%", // Change the start position to trigger the animation at the center
    end: "40% 30%",
    markers: true, // Add markers to visualize the trigger positions (for debugging)
  },
});

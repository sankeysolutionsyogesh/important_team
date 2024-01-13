// function locomotive() {
    gsap.registerPlugin(ScrollTrigger);

    //   const locoScroll = new LocomotiveScroll({
    //     el: document.querySelector("#last_watch_main"),
    //     smooth: true,
    //   });
    //   locoScroll.on("scroll", ScrollTrigger.update);
    
    //   ScrollTrigger.scrollerProxy("#last_watch_main", {
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
    
    //     pinType: document.querySelector("#last_watch_main").style.transform
    //       ? "transform"
    //       : "fixed",
    //   });
    //   ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    //   ScrollTrigger.refresh();
    // }
    // locomotive();
    
    
    const canvas = document.querySelector("canvas");
    const context = canvas.getContext("2d");
    console.log("canvas = ", context)
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const frameCount = 240;
    
    const images = [];
    const imageSeq = {
      frame: 1,
    };
    
    window.addEventListener("resize", function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    });
    
    function files(index) {
      var data = `
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_001.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_002.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_003.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_004.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_005.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_006.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_007.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_008.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_009.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_010.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_011.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_012.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_013.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_014.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_015.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_016.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_017.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_018.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_019.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_020.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_021.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_022.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_023.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_024.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_025.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_026.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_027.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_028.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_029.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_030.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_031.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_032.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_033.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_034.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_035.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_036.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_037.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_038.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_039.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_040.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_041.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_042.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_043.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_044.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_045.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_046.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_047.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_048.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_049.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_050.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_051.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_052.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_053.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_054.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_055.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_056.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_057.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_058.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_059.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_060.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_061.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_062.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_063.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_064.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_065.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_066.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_067.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_068.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_069.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_070.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_071.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_072.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_073.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_074.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_075.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_076.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_077.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_078.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_079.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_080.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_081.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_082.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_083.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_084.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_085.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_086.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_087.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_088.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_089.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_090.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_091.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_092.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_093.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_094.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_095.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_096.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_097.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_098.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_099.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_100.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_101.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_102.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_103.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_104.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_105.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_106.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_107.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_108.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_109.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_110.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_111.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_112.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_113.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_114.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_115.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_116.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_117.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_118.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_119.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_120.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_121.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_122.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_123.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_124.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_125.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_126.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_127.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_128.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_129.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_130.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_131.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_132.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_133.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_134.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_135.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_136.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_137.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_138.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_139.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_140.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_141.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_142.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_143.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_144.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_145.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_146.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_147.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_148.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_149.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_150.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_151.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_152.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_153.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_154.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_155.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_156.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_157.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_158.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_159.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_160.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_161.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_162.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_163.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_164.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_165.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_166.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_167.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_168.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_169.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_170.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_171.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_172.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_173.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_174.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_175.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_176.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_177.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_178.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_179.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_180.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_181.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_182.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_183.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_184.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_185.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_186.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_187.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_188.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_189.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_190.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_191.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_192.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_193.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_194.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_195.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_196.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_197.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_198.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_199.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_200.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_201.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_202.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_203.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_204.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_205.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_206.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_207.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_208.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_209.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_210.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_211.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_212.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_213.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_214.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_215.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_216.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_217.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_218.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_219.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_220.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_221.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_222.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_223.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_224.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_225.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_226.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_227.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_228.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_229.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_230.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_231.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_232.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_233.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_234.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_235.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_236.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_237.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_238.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_239.webp
      ./Design_Assets/assets/home/DR_TECHNICAL_VIEW_TRANSPARENCY/output/md_1-0-0/DR_TECHNICAL_VIEW_TRANSPARENCY_240.webp
     `;
      return data.split("\n")[index];
    }
    
    const timeline = gsap.timeline();
    
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = files(i);
      images.push(img);
    }
    
    gsap.to(imageSeq, {
      frame: frameCount - 1,
      snap: "frame",
      ease: `none`,
      scrollTrigger: {
        scrub: 0.15,
        trigger: `#page>canvas`,
        start: `top top`,
        end: `100% top`,
        pin:true
        // markers: true,
        // scroller: `#last_watch_main`,
      },
      onUpdate: render,
    });
    
    images[1].onload = render;
    
    function render() {
      scaleImage(images[imageSeq.frame], context);
    }
    
    function scaleImage(img, ctx) {
      var canvas = ctx.canvas;
      var hRatio = canvas.width / img.width;
      var vRatio = canvas.height / img.height;
      var ratio = Math.max(hRatio, vRatio) * 0.7;
      var centerShift_x = (canvas.width - img.width * ratio) / 2 - 0;
      var centerShift_y = (canvas.height - img.height * ratio) / 2 + 0;
      console.log("centerShift_x, centerShift_y", centerShift_x, centerShift_y, img.width * ratio)
      ctx.clearRect(0, 0, canvas.width, canvas.height);
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
    //   // markers: true,
    //   scroller: `#last_watch_main`,
    //   start: `top top`,
    //   end: `600% top`,
    // });
    
    
    // gsap.to('.footer-watch-container', {
    //   x: -15,
    //   y: -15,
    //   duration: 3,
    //   scrollTrigger: {
    //     scroller: "#last_watch_main", // Set the scroller to your container
    //     trigger: ".footer-watch-container",
    //     start: "top top",
    //     markers: true,
    //     scrub: true, // Enable scrubbing for a smoother animation
    //     // toggleActions: "restart none none none", // Restart animation when leaving the trigger
    //     toggleClass: 'translateX'
    //   },
    // });
    
    
    gsap.to('.footer-watch', {
      x: 10,
      y: 10,
      opacity: 1,
      duration: 3,
      scrollTrigger: {
        trigger: ".footer-watch",
        start: "top top",
        end: `100% top`,
        markers: true,
        pin:true,
        scrub: 1.15, // Enable scrubbing for a smoother animation
        toggleActions: "restart none none none", // Restart animation when leaving the trigger
        toggleClass: 'translateX'
      },
    });
    
    // let animation = gsap.timeline()
    // function init() {
    //   gsap.set(".demo", { autoAlpha: 0, y: 10 });
    
    //   ScrollTrigger.create({
    //     trigger: ".footer-watch-container",
    //     start: "top 80%",
    //     onEnter: () => {
    //       animation
    //         .to(".demo", { autoAlpha: 1, y: 0, stagger: 0.1, duration: 1 })
    //         .to(".demo p", { x: 20, opacity: 1, stagger: 0.1, duration: 1 }, 0);
    //     },
    //     // onEnterBack: () => {
    //     //   animation.reverse();
    //     // },
    //     // onLeave: () => {
    //     //   animation.reverse();
    //     // },
    //   });
    // }
    
    // init()
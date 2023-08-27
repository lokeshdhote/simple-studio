function loco(){
    gsap.registerPlugin(ScrollTrigger);
  
  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
  
  }
  loco()
  gsap.from("#maintext #one , #line ,#two ,#three",{
    y:150,
    delay:0.5,
    stagger:0.5,
  })
  var tl1 = gsap.timeline({
    scrollTrigger:{
      trigger:"#page3",
      scroller:"#main",
      // markers:true,
      scrub:1,
      start:"top 80%",
      end:"top 60%",
    }
  })
  tl1
  .from("#maintext2, #four,#five",{
    y:120,
    delay:0.6,
    stagger:1,

  })
  var tl4 = gsap.timeline({
     scrollTrigger:{
      trigger:"#frames",
      scroller:"#main",
      // markers:true,
      scrub:2,
      start:"top 15%",
      end:"top -400%",
   pin:true,
   }
  })
tl4
.from("#image2",{
  y:"100%",
 
})
.from("#image3",{
  y:"100%",
})
.from("#image4",{
  y:"100%",
})

.from("#image5",{
  y:"100%",
})

gsap.to("#frames",{
  scale:0.7,
  overflow:" hidden",
  duration:2,
scrollTrigger:{
    trigger:"#page5",
    scroller:"#main",
    // markers:true,
    scrub:1,
    start:"top 110%",
    end:"top 0%",
  }
})
var tl5 =gsap.timeline({
 scrollTrigger:{
  trigger:"#page5",
  scroller:"#main",
  // markers:true,
  start:"top 60%",
  end:"top 30%",
  scrub:2,
 }
})
tl5
.from("#boxpart1 #six,#seven",{
  y:200,
  delay:0.5,
  stagger:0.5,
})
.from("#page5part ,#head1,#head2,#head3",{
  y:100,
  delay:0.8,
  stagger:0.5,
})
gsap.from("#image6",{
   rotate:"360 Deg",
  scrollTrigger:{
    trigger:"#image6",
    scroller:"#main",

    scrub:5,
  }
})
gsap.from("#pic",{
  rotate:"360 Deg",
  scrollTrigger:{
    trigger:"#pic",
    scroller:"#main",
    scrub:5,
  }
})
gsap.from("#page7part1 ,#head4,#head5",{
  y:100,
  delay:0.8,
  stagger:0.5,
  scrollTrigger:{
    trigger:"#page7",
    scroller:"#main",
    // markers:true,
    start:"top 50%",
    end:"top 30%",
    scrub:1,

  }
})





   
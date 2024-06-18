function init(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },

  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});



ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

init()

var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
var main = document.querySelector(".main");
var video = document.querySelector(".page1 video");

// Update cursor position
document.addEventListener("mousemove", function(event) {
    cursor.style.left = event.clientX + 20 + "px";
    cursor.style.top = event.clientY + 20 + "px";
    if (cursor2.style.display === "block") {
        cursor2.style.left = event.clientX + 20 + "px";
        cursor2.style.top = event.clientY + 20 + "px";
    }
});

// Show cursor2 when entering the video area
video.addEventListener("mouseenter", function() {
    cursor.style.display = "none";
    cursor2.style.display = "block";
});

// Revert to cursor when leaving the video area
video.addEventListener("mouseleave", function() {
    cursor.style.display = "block";
    cursor2.style.display = "none";
});



var tl = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller: ".main",
        start: "top 27%",
        end:"top 0",
        scrub:3
    }
})
tl.to(".page1 h1",{
    x:-100,
},"anim")
tl.to(".page1 h2",{
    x:100
},"anim")
tl.to(".page1 video",{
    width:"90%"
},"anim")



var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller: ".main",
        start: "top -115%",
        end:"top -120",
        scrub:3
    }
})
tl2.to(".main",{
    backgroundColor:"#fff"
})

var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller: ".main",
        start: "top -360%",
        end:"top -480",
        scrub:3
    }
})
tl3.to(".main",{
    backgroundColor:"#0F0D0D"
})


var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        var att = elem.getAttribute("data-image")
        cursor.style.width = "350px"
        cursor.style.height = "200px"
        cursor.style.borderRadius = "0"
        cursor.style.backgroundImage = `url(${att})`
    })
    elem.addEventListener("mouseleave",function(){
        elem.style.backgroundColor = "transparent"
        cursor.style.width = "20px"
        cursor.style.height = "20px"
        cursor.style.borderRadius = "50%"
        cursor.style.backgroundImage = `none`
    })
})


var h4 = document.querySelectorAll("#nav h4")
var purple = document.querySelector("#purple")
h4.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        purple.style.display = "block"
        purple.style.opacity = "1"
    })
    elem.addEventListener("mouseleave",function(){
        purple.style.display = "none"
        purple.style.opacity = "0"
    })
})


// Marquee hover effect
var marquee = document.querySelector("#marquee");

document.querySelectorAll("#nav-part2 h4").forEach(item => {
    item.addEventListener("mouseenter", function() {
        let text = this.getAttribute("data-marquee");
        marquee.innerHTML = `<span>${text}</span>`;
        marquee.style.display = "block";
    });

    item.addEventListener("mouseleave", function() {
        marquee.style.display = "none";
    });
});
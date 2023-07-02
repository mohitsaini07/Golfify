
//Cursor style
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", function (dets) {
    cursor.style.left = dets.x - 150 + "px";
    cursor.style.top = dets.y - 150 + "px";
})

gsap.to(".nav", {
    backgroundColor: "#000",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.4)",
    height: "80px",
    duration: 0.5,
    scrollTrigger: {
        trigger: ".nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -10%",
        scrub: true
    }
})

gsap.to(".main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: ".main",
        scroller: "body",
        // markers: true,
        start: "top -40%",
        end: "top -60%",
        scrub: 2
    }
})

gsap.from(".about img, .about_content", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".about",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 60%",
        scrub: 1
    }
})

gsap.from(".card", {
    scale: 0.5,
    opacity: 0,
    duration: 1,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 65%",
        scrub: 1
    }
})

gsap.from(".quote_1", {
    y: -50,
    x: -50,
    scrollTrigger: {
        trigger: ".quote_1",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 65%",
        scrub: 4
    }
})

gsap.from(".page5 .bg_text", {
    y: 50,
    scrollTrigger:
    {
        trigger: ".page5 .bg_text",
        scroller: "body",
        start: "top 75%",
        end: "top 70%",
        scrub: 4
    }
})


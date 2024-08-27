// Smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
    
import confetti from "https://cdn.skypack.dev/canvas-confetti";
const doItNow =(evt,hard) => {
    const direction = Math.sign(lastX -evt.clientX);
    lastX = evt.clientX;
    const particleCount = hard ? r(122,245): r(2,15);
    confetti({
        particleCount,
        angle: r(90,90 + direction * 30),
        spread: r(45,80),
        origin: {
            x: evt.clientX / window.innerWidth,
            y: evt.clientY / window.innerHeight
        }
    }); 
};

const doItHard =(evt) => {
    doItNow (evt,true);
};

let lastX =0;
const butt =
document.querySelector("button");
butt.addEventListener("mousemove", doIt);
butt.addEventListener("click",doItHard);

function r(mi, ma){
    return parseInt(Math.random() *(ma - mi) + mi);
}

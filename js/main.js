// Typing Effect
const roles = ["AI Engineer", "Product Builder", "Flutter Developer", "Blockchain Enthusiast"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000;
const typingTextSpan = document.querySelector(".typing-text");

function type() {
    if (isDeleting) {
        typingTextSpan.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, erasingDelay);
        }
    } else {
        typingTextSpan.textContent = roles[roleIndex].substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === roles[roleIndex].length) {
            isDeleting = true;
            setTimeout(type, newTextDelay);
        } else {
            setTimeout(type, typingDelay);
        }
    }
}

document.addEventListener("DOMContentLoaded", function () { // On DOM Load initiate the effect
    if (typingTextSpan) setTimeout(type, newTextDelay + 250);
});

// Cursor Glow Effect
const cursorGlow = document.getElementById('cursor-glow');
document.addEventListener('mousemove', (e) => {
    if (cursorGlow) {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
    }
});

// DARK MODE TOGGLE
const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  toggleBtn.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// TYPING ANIMATION
const typingText = document.getElementById("typing-text");
const texts = ["Web Developer", "DSA Enthusiast", "Fast Learner"];
let index = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentText = texts[index];
  if (isDeleting) {
    typingText.textContent = currentText.substring(0, charIndex--);
  } else {
    typingText.textContent = currentText.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % texts.length;
    setTimeout(typeEffect, 500);
  } else {
    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);

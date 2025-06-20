document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks! Your message has been received.");
});

document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

const animatedEls = document.querySelectorAll(".animate");

window.addEventListener("scroll", () => {
  animatedEls.forEach((el) => {
    const position = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      el.classList.add("visible");
    }
  });
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_zjkgn7c", "template_86zon6k", this).then(
    function () {
      alert("Message sent successfully! ✅");
      document.getElementById("contactForm").reset();
    },
    function (error) {
      alert("Failed to send message 😥. Try again.");
      console.log("FAILED...", error);
    }
  );
});

const elements = document.querySelectorAll(".animate-on-scroll");

const revealOnScroll = () => {
  elements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll); // In case some are in view on load

const sentences = [
  "Hi, I'm Sahil Patil 👋",
  "I'm a Front-End Web Developer 💻",
  "I love building interactive websites 🚀",
  "Available for freelance work on Fiverr 🎯",
];

let part = 0;
let index = 0;
let isDeleting = false;

function type() {
  let currentText = sentences[part];
  let displayText = isDeleting
    ? currentText.substring(0, index--)
    : currentText.substring(0, index++);

  document.getElementById("typingText").textContent = displayText;

  if (!isDeleting && index === currentText.length) {
    setTimeout(() => (isDeleting = true), 1000); // Pause before deleting
  } else if (isDeleting && index === 0) {
    isDeleting = false;
    part = (part + 1) % sentences.length; // Next sentence
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type(); // Start typing

const toggleSwitch = document.getElementById("themeToggle");
const toggleIcon = document.querySelector(".toggle-icon");

// Initialize theme based on saved preference or default to light
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  const isDark = savedTheme === "dark";
  document.body.classList.toggle("dark", isDark);
  toggleSwitch.checked = isDark;
  toggleIcon.textContent = isDark ? "🌙" : "🌞";
});

// Toggle theme & icon on change, save preference
toggleSwitch.addEventListener("change", () => {
  const isDark = toggleSwitch.checked;
  document.body.classList.toggle("dark", isDark);
  toggleIcon.textContent = isDark ? "🌙" : "🌞";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

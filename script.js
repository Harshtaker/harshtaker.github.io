AOS.init({
  duration: 700,
  once: true,
  easing: "ease-out-quart"
});

const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav-links");
if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
}

const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;
const THEME_KEY = "harsh-portfolio-theme";

function setTheme(theme) {
  if (theme === "light") root.setAttribute("data-theme", "light");
  else root.removeAttribute("data-theme");
  localStorage.setItem(THEME_KEY, theme);
}

(function () {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === "light" || saved === "dark") setTheme(saved);
  else setTheme("dark");
})();

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") === "light" ? "light" : "dark";
    setTheme(current === "light" ? "dark" : "light");
    const icon = themeToggle.querySelector("i");
    if (icon) {
      if (current === "light") {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
      } else {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
      }
    }
  });
}

const typedEl = document.getElementById("typedText");
if (typedEl) {
  const words = [
    "B.Tech IT Student",
    "Aspiring AI Engineer",
    "Web Developer in Progress"
  ];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
      charIndex++;
      if (charIndex === currentWord.length + 1) {
        setTimeout(() => (isDeleting = true), 600);
      }
    } else {
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
    }

    typedEl.textContent = currentWord.slice(0, charIndex);
    const speed = isDeleting ? 70 : 120;
    setTimeout(type, speed);
  }

  type();
}

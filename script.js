// Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Header Scroll Effect
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  header.classList.toggle("scrolled", window.scrollY > 80);
});

// Floating Elements Animation
const floatElements = document.querySelectorAll(".float-element");
window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;
  floatElements.forEach((el) => {
    const speed = el.dataset.speed;
    const direction = el.dataset.direction;
    let transformX = 0;
    let transformY = 0;

    if (scrollPos < 600) {
      switch (direction) {
        case "x":
          transformX = scrollPos * speed * 2;
          break;
        case "y":
          transformY = scrollPos * speed * 2;
          break;
        case "xy":
          transformX = scrollPos * speed * 1.5;
          transformY = scrollPos * speed * 1.5;
          break;
        case "-x":
          transformX = -scrollPos * speed * 2;
          break;
      }
      el.style.transform = `translate(${transformX}px, ${transformY}px) scale(${
        1 - scrollPos / 1200
      })`;
      el.style.opacity = 1 - scrollPos / 600;
    }
  });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    navLinks.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

// Intersection Observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".section-container").forEach((section) => {
  section.classList.add("animate-section");
  observer.observe(section);
});

// Dynamic Styles
const style = document.createElement("style");
style.textContent = `
    .header.scrolled {
        background: rgba(58, 46, 46, 1);
        box-shadow: 0 5px 15px rgba(0,0,0,0.15);
        padding: 0.8rem 2rem;
    }
    .contact-form.submitted input,
    .contact-form.submitted textarea,
    .contact-form.submitted .submit-btn {
        transform: scale(0.98);
        opacity: 0.7;
        transition: all 0.5s ease;
    }
`;
document.head.appendChild(style);

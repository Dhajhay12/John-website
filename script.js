/* =====================================================
   GLOBAL UTILITIES
===================================================== */

// Set current year in footer
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

/* =====================================================
   DARK MODE TOGGLE (WITH LOCAL STORAGE)
===================================================== */

const darkToggle = document.getElementById("darkToggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  if (darkToggle) darkToggle.textContent = "☀️";
}

// Toggle theme
if (darkToggle) {
  darkToggle.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
      darkToggle.textContent = "☀️";
    } else {
      localStorage.setItem("theme", "light");
      darkToggle.textContent = "🌙";
    }
  });
}

/* =====================================================
   SCROLL REVEAL ANIMATIONS
===================================================== */

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const triggerPoint = window.innerHeight - 100;

  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < triggerPoint) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* =====================================================
   CONTACT FORM → WHATSAPP AUTO MESSAGE
===================================================== */

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name")?.value || "";
    const email = document.getElementById("email")?.value || "";
    const message = document.getElementById("message")?.value || "";

    const phoneNumber = "2348030495098"; // 🔴 Replace with your WhatsApp number

    const whatsappMessage =
      `Hello John Website Enterprise 👋\n\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n\n` +
      `Message:\n${message}`;

    const whatsappURL =
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank");
  });
}

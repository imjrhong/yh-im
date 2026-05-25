const slides = Array.from(document.querySelectorAll(".hero-image"));
const dots = Array.from(document.querySelectorAll(".dot"));
let activeSlide = 0;
let slideTimer;

function showSlide(index) {
  activeSlide = index;
  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("is-active", slideIndex === index);
  });
  dots.forEach((dot, dotIndex) => {
    dot.classList.toggle("is-active", dotIndex === index);
  });
}

function startSlider() {
  window.clearInterval(slideTimer);
  slideTimer = window.setInterval(() => {
    showSlide((activeSlide + 1) % slides.length);
  }, 5200);
}

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    showSlide(Number(dot.dataset.slide));
    startSlider();
  });
});

startSlider();

const checkupModal = document.querySelector(".checkup-modal");
const checkupPanel = document.querySelector(".checkup-modal-panel");
const openCheckupButtons = Array.from(document.querySelectorAll("[data-checkup-open]"));
const closeCheckupButtons = Array.from(document.querySelectorAll("[data-checkup-close]"));
const checkupLinks = Array.from(document.querySelectorAll(".checkup-jump a"));
const endoscopyModal = document.querySelector(".endoscopy-modal");
const endoscopyPanel = document.querySelector(".endoscopy-modal .checkup-modal-panel");
const openEndoscopyButtons = Array.from(document.querySelectorAll("[data-endoscopy-open]"));
const closeEndoscopyButtons = Array.from(document.querySelectorAll("[data-endoscopy-close]"));
const endoscopyLinks = Array.from(document.querySelectorAll(".endoscopy-jump a"));
const bowelModal = document.querySelector(".bowel-modal");
const bowelPanel = document.querySelector(".bowel-modal .checkup-modal-panel");
const openBowelButtons = Array.from(document.querySelectorAll("[data-bowel-open]"));
const closeBowelButtons = Array.from(document.querySelectorAll("[data-bowel-close]"));
const bowelLinks = Array.from(document.querySelectorAll(".bowel-jump a"));
const carotidModal = document.querySelector(".carotid-modal");
const carotidPanel = document.querySelector(".carotid-modal .checkup-modal-panel");
const openCarotidButtons = Array.from(document.querySelectorAll("[data-carotid-open]"));
const closeCarotidButtons = Array.from(document.querySelectorAll("[data-carotid-close]"));
const thyroidModal = document.querySelector(".thyroid-modal");
const thyroidPanel = document.querySelector(".thyroid-modal .checkup-modal-panel");
const openThyroidButtons = Array.from(document.querySelectorAll("[data-thyroid-open]"));
const closeThyroidButtons = Array.from(document.querySelectorAll("[data-thyroid-close]"));

function openCheckupModal() {
  if (!checkupModal) return;
  checkupModal.hidden = false;
  document.body.classList.add("modal-open");
  checkupPanel?.focus();
}

function closeCheckupModal() {
  if (!checkupModal) return;
  checkupModal.hidden = true;
  document.body.classList.remove("modal-open");
}

function openEndoscopyModal() {
  if (!endoscopyModal) return;
  endoscopyModal.hidden = false;
  document.body.classList.add("modal-open");
  endoscopyPanel?.focus();
}

function closeEndoscopyModal() {
  if (!endoscopyModal) return;
  endoscopyModal.hidden = true;
  document.body.classList.remove("modal-open");
}

function openBowelModal() {
  if (!bowelModal) return;
  bowelModal.hidden = false;
  document.body.classList.add("modal-open");
  bowelPanel?.focus();
}

function closeBowelModal() {
  if (!bowelModal) return;
  bowelModal.hidden = true;
  document.body.classList.remove("modal-open");
}

function openCarotidModal() {
  if (!carotidModal) return;
  carotidModal.hidden = false;
  document.body.classList.add("modal-open");
  carotidPanel?.focus();
}

function closeCarotidModal() {
  if (!carotidModal) return;
  carotidModal.hidden = true;
  document.body.classList.remove("modal-open");
}

function openThyroidModal() {
  if (!thyroidModal) return;
  thyroidModal.hidden = false;
  document.body.classList.add("modal-open");
  thyroidPanel?.focus();
}

function closeThyroidModal() {
  if (!thyroidModal) return;
  thyroidModal.hidden = true;
  document.body.classList.remove("modal-open");
}

openCheckupButtons.forEach((button) => {
  button.addEventListener("click", openCheckupModal);
});

closeCheckupButtons.forEach((button) => {
  button.addEventListener("click", closeCheckupModal);
});

openEndoscopyButtons.forEach((button) => {
  button.addEventListener("click", openEndoscopyModal);
});

closeEndoscopyButtons.forEach((button) => {
  button.addEventListener("click", closeEndoscopyModal);
});

openBowelButtons.forEach((button) => {
  button.addEventListener("click", openBowelModal);
});

closeBowelButtons.forEach((button) => {
  button.addEventListener("click", closeBowelModal);
});

openCarotidButtons.forEach((button) => {
  button.addEventListener("click", openCarotidModal);
});

closeCarotidButtons.forEach((button) => {
  button.addEventListener("click", closeCarotidModal);
});

openThyroidButtons.forEach((button) => {
  button.addEventListener("click", openThyroidModal);
});

closeThyroidButtons.forEach((button) => {
  button.addEventListener("click", closeThyroidModal);
});

checkupLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

endoscopyLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

bowelLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && checkupModal && !checkupModal.hidden) {
    closeCheckupModal();
  }
  if (event.key === "Escape" && endoscopyModal && !endoscopyModal.hidden) {
    closeEndoscopyModal();
  }
  if (event.key === "Escape" && bowelModal && !bowelModal.hidden) {
    closeBowelModal();
  }
  if (event.key === "Escape" && carotidModal && !carotidModal.hidden) {
    closeCarotidModal();
  }
  if (event.key === "Escape" && thyroidModal && !thyroidModal.hidden) {
    closeThyroidModal();
  }
});

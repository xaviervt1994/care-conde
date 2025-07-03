// Hamburger toggle
document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("navLinks").classList.toggle("active");
});

// Highlight current nav link
const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach((link) => {
  if (link.href === window.location.href) {
    link.classList.add("active-link");
  }
});

// Basic form validation feedback
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thanks for your message! We’ll be in touch soon.");
    this.reset();
  });
}

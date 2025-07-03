// js/script.js

document.addEventListener("DOMContentLoaded", () => {
  // --- 1. MOBILE NAVIGATION (HAMBURGER MENU) ---
  const hamburger = document.getElementById("hamburger");
  const navLinksContainer = document.getElementById("navLinks");

  if (hamburger && navLinksContainer) {
    hamburger.addEventListener("click", () => {
      navLinksContainer.classList.toggle("active");
      const isExpanded = navLinksContainer.classList.contains("active");
      hamburger.setAttribute("aria-expanded", isExpanded);
    });
  }

  // --- 2. HIGHLIGHT ACTIVE NAVIGATION LINK ---
  const allNavLinks = document.querySelectorAll(".nav-links a");
  const currentPagePath = window.location.pathname;

  allNavLinks.forEach((link) => {
    const linkPath = new URL(link.href).pathname;
    if (
      linkPath === currentPagePath ||
      (currentPagePath === "/" && linkPath === "/index.html")
    ) {
      link.classList.add("active-link");
    }
  });

  // --- 3. ADVANCED CONTACT FORM HANDLING (AJAX) ---
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      // Prevent the default browser page reload
      e.preventDefault();

      // Get the form data
      const formData = new FormData(contactForm);

      // Use the 'fetch' API to send the data to Netlify
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      })
        .then(() => {
          // If the submission is successful, replace the form with a thank you message.
          contactForm.innerHTML = `<div class="form-success"><h2>Thank you!</h2><p>Your message has been sent. We'll be in touch soon.</p></div>`;
        })
        .catch((error) => {
          // If there's an error, show an alert.
          alert(
            "Sorry, there was an error sending your message. Please try again."
          );
          console.error(error);
        });
    });
  }
});

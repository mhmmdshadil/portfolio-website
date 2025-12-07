// Simple interactions: nav active state, mobile menu, copy email, footer year.
(function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const mobileLinks = document.querySelectorAll(".sheet-link");
  const menuBtn = document.getElementById("menuBtn");
  const closeMenu = document.getElementById("closeMenu");
  const mobileMenu = document.getElementById("mobileMenu");
  const copyEmail = document.getElementById("copyEmail");

  // Year in footer
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  function setActive(hash) {
    navLinks.forEach((l) =>
      l.classList.toggle("active", l.getAttribute("href") === hash)
    );
  }

  // On load (if linking directly)
  setActive(window.location.hash || "#home");

  // Smooth active state on click
  navLinks.forEach((l) =>
    l.addEventListener("click", () => setActive(l.getAttribute("href")))
  );

  // Mobile menu open/close
  function openMenu() {
    mobileMenu.setAttribute("aria-hidden", "false");
    menuBtn.setAttribute("aria-expanded", "true");
  }
  function closeMenuFn() {
    mobileMenu.setAttribute("aria-hidden", "true");
    menuBtn.setAttribute("aria-expanded", "false");
  }

  if (menuBtn) menuBtn.addEventListener("click", openMenu);
  if (closeMenu) closeMenu.addEventListener("click", closeMenuFn);

  // Close on link tap (mobile)
  mobileLinks.forEach((l) =>
    l.addEventListener("click", () => {
      closeMenuFn();
      setActive(l.getAttribute("href"));
    })
  );

  // Copy email
  if (copyEmail) {
    copyEmail.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText("muhammedshadilmp7@gmail.com");
        copyEmail.classList.add("copied");
        copyEmail.querySelector(".link-desc").textContent = "Email copied ✓";
        setTimeout(() => {
          copyEmail.classList.remove("copied");
          copyEmail.querySelector(".link-desc").textContent =
            "muhammedshadilmp7@gmail.com · tap to copy";
        }, 1400);
      } catch (e) {
        // Silent fallback
      }
    });
  }
})();

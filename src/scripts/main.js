document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.querySelector(".mobile-menu-btn");
  const closeBtn = document.querySelector(".mobile-menu-close");
  const overlay = document.querySelector(".mobile-menu-overlay");

  //guard clause
  if (!openBtn || !closeBtn || !overlay) return;

  // Open menu
  openBtn.addEventListener("click", () => {
    overlay.classList.toggle("active");
  });

  // Close menu
  closeBtn.addEventListener("click", () => {
    overlay.classList.toggle("active");
  });

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) overlay.classList.remove("active");
  });
});

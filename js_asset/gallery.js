/* js/gallery.js – lightbox gallery */
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".gallery-item");
  if (!items.length) return;

  let lightbox = document.getElementById("lightbox");
  if (!lightbox) {
    lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    lightbox.className = "lightbox";
    lightbox.innerHTML = `
      <button class="lightbox-close" aria-label="Close image">&times;</button>
      <img src="" alt="">
      <p class="lightbox-caption"></p>`;
    document.body.appendChild(lightbox);

    const close = () => lightbox.classList.remove("open");
    lightbox.querySelector(".lightbox-close").addEventListener("click", close);
    lightbox.addEventListener("click", (e) => { if (e.target === lightbox) close(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
  }

  const img = lightbox.querySelector("img");
  const caption = lightbox.querySelector(".lightbox-caption");

  items.forEach((item) => {
    item.addEventListener("click", () => {
      const full = item.dataset.full;
      const thumb = item.querySelector("img");
      img.src = full;
      img.alt = thumb.alt;
      caption.textContent = thumb.alt;
      lightbox.classList.add("open");
    });
  });
});
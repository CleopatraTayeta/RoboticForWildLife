/**
 * RoboWild – Part 3 JavaScript
 * Interactive elements, dynamic content, search, lightbox, accordion, tabs
 */

// ---------- 1. Modal (dialog) for project/team details ----------
function openModal(title, bodyHTML) {
  let modal = document.getElementById("siteModal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "siteModal";
    modal.className = "modal-overlay";
    modal.innerHTML = `
      <div class="modal-box" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
        <button class="modal-close" aria-label="Close dialog">&times;</button>
        <h2 id="modalTitle"></h2>
        <div class="modal-body"></div>
      </div>`;
    document.body.appendChild(modal);
    modal.querySelector(".modal-close").addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });
  }
  modal.querySelector("#modalTitle").textContent = title;
  modal.querySelector(".modal-body").innerHTML = bodyHTML;
  modal.classList.add("open");
}

function closeModal() {
  const modal = document.getElementById("siteModal");
  if (modal) modal.classList.remove("open");
}

// Attach to any element with data-modal-title
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-modal-title]").forEach((btn) => {
    btn.addEventListener("click", () => {
      openModal(btn.dataset.modalTitle, btn.dataset.modalBody || "");
    });
  });

  // ---------- 2. Scroll reveal animation ----------
  const revealItems = document.querySelectorAll(".card, .team-card, .project-detail, .stat");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealItems.forEach((el) => observer.observe(el));
});

// ---------- 3. Tabs ----------
document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".tab-btn");
  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const group = btn.closest(".tabs");
      group.querySelectorAll(".tab-btn").forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      group.querySelectorAll(".tab-panel").forEach((p) => p.classList.remove("active"));
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      group.querySelector(`#tab-${btn.dataset.tab}`).classList.add("active");
    });
  });
});
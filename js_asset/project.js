console.log("Projects script loaded successfully!");

const projects = [
  {
    id: 1,
    title: "Wildlife Monitoring",
    category: "monitoring",
    image: "IMAGES/Conservation-Drones-Monitoring-Wildlife-from-Above-780x446.webp",
    alt: "Drone flying over a wildlife reserve for monitoring",
    description: "Drone and camera-trap networks track herd movements and detect distressed animals earlier than traditional patrols.",
    details: "<ul><li>Deployed across 6 partner reserves</li><li>Real-time alerts sent to ranger devices</li><li>Low-cost, solar-powered hardware</li></ul>"
  },
  {
    id: 2,
    title: "Anti-Poaching Technology",
    category: "anti-poaching",
    image: "IMAGES/Anti-Poaching Tech.avif",
    alt: "Ranger holding a handheld anti-poaching tracking device",
    description: "Affordable tracking and perimeter-alert systems developed with ranger teams.",
    details: "<ul><li>GPS-linked alert systems for high-risk zones</li><li>Custom-built for low connectivity areas</li><li>Maintained by volunteers</li></ul>"
  },
  {
    id: 3,
    title: "Training Workshops",
    category: "training",
    image: "IMAGES/volunteeres.webp",
    alt: "Volunteers training conservation staff on new equipment",
    description: "Hands-on workshops teaching rangers and animal-care staff to use and maintain deployed technology.",
    details: "<ul><li>Quarterly at each partner site</li><li>Covers equipment use, basic repairs and data reading</li><li>Delivered by volunteer specialists</li></ul>"
  }
];

const container = document.getElementById("projectContainer");
const searchInput = document.getElementById("projectSearch");
const filterBtns = document.querySelectorAll(".filter-btn");
let activeFilter = "all";

function renderProjects() {
  // If the container isn't on the page, stop the script to prevent errors
  if (!container) return; 

  const query = (searchInput?.value || "").trim().toLowerCase();

  const filtered = projects.filter((p) => {
    const matchesFilter = activeFilter === "all" || p.category === activeFilter;
    const matchesSearch =
      p.title.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query);
    return matchesFilter && matchesSearch;
  });

  if (!filtered.length) {
    container.innerHTML = `<p class="no-results">No projects match your search.</p>`;
    return;
  }

  container.innerHTML = filtered
    .map(
      (p) => `
      <article class="card project-card">
        <img src="${p.image}" alt="${p.alt}" loading="lazy">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <button class="btn btn-primary btn-sm"
          data-modal-title="${p.title}"
          data-modal-body="${p.details.replace(/"/g, "&quot;")}">
          Learn More
        </button>
      </article>`
    )
    .join("");

  // Re-bind modal buttons (requires main.js to be loaded)
  container.querySelectorAll("[data-modal-title]").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (typeof openModal === "function") {
        openModal(btn.dataset.modalTitle, btn.dataset.modalBody);
      } else {
        console.error("openModal function not found. Is main.js loaded?");
      }
    });
  });
}

// Run the function when the page loads
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();

  if (searchInput) {
    searchInput.addEventListener("input", renderProjects);
  }

  filterBtns.forEach((btn) =>
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = btn.dataset.filter;
      renderProjects();
    })
  );
});
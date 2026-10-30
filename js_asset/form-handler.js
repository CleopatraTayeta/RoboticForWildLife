/* js/form-handler.js – AJAX submission + response */

const CONTACT_ENDPOINT = "https://formspree.io/f/YOUR_CONTACT_ID";
const ENQUIRY_ENDPOINT = "https://formspree.io/f/YOUR_ENQUIRY_ID";

async function submitFormAjax(form, endpoint, responseEl) {
  const data = new FormData(form);
  responseEl.className = "form-response";
  responseEl.textContent = "Sending…";
  responseEl.style.display = "block";

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" }
    });

    if (res.ok) {
      responseEl.className = "form-response success";
      responseEl.textContent =
        "Thank you! Your message has been sent. We will respond within 2 business days.";
      form.reset();
      form.querySelectorAll(".success-input").forEach((el) => el.classList.remove("success-input"));
    } else {
      throw new Error("Submission failed");
    }
  } catch (err) {
    responseEl.className = "form-response error";
   responseEl.textContent = "Sorry, something went wrong. Please email us directly at ST10533635@RCCONNECT.EDU.ZA.";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form");
  const contactResponse = document.getElementById("contact-response");
  if (contactForm && contactResponse) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      submitFormAjax(contactForm, CONTACT_ENDPOINT, contactResponse);
    });
  }

  document.querySelectorAll(".enquiry-form").forEach((form) => {
    const responseEl = form.querySelector(".form-response");
    if (!responseEl) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      submitFormAjax(form, ENQUIRY_ENDPOINT, responseEl);
      if (form.dataset.valid !== "true") return;
    });
  });
});
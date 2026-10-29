/* js/validation.js – client-side validation for contact & enquiry forms */

function showError(input, errorEl, message) {
  input.classList.add("error-input");
  input.classList.remove("success-input");
  errorEl.textContent = message;
}

function clearError(input, errorEl) {
  input.classList.remove("error-input");
  input.classList.add("success-input");
  errorEl.textContent = "";
}

function validateEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validatePhone(value) {
  return /^[0-9+\s]{7,15}$/.test(value);
}

// Generic validator: returns true if all fields valid
function validateField(input, rules) {
  const value = input.value.trim();
  const errorEl = document.getElementById(input.id + "-error");
  if (!errorEl) return true;

  for (const rule of rules) {
    if (!rule.test(value)) {
      showError(input, errorEl, rule.message);
      return false;
    }
  }
  clearError(input, errorEl);
  return true;
}

document.addEventListener("DOMContentLoaded", () => {
  // ---------- Contact form ----------
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      const name = document.getElementById("c-name");
      const email = document.getElementById("c-email");
      const subject = document.getElementById("c-subject");
      const message = document.getElementById("c-message");

      let valid = true;
      valid &= validateField(name, [
        { test: (v) => v.length >= 2, message: "Please enter your full name (min 2 characters)." }
      ]);
      valid &= validateField(email, [
        { test: (v) => v.length > 0, message: "Email is required." },
        { test: validateEmail, message: "Enter a valid email address." }
      ]);
      valid &= validateField(subject, [
        { test: (v) => v !== "", message: "Please select a subject." }
      ]);
      valid &= validateField(message, [
        { test: (v) => v.length >= 10, message: "Message must be at least 10 characters." }
      ]);

      if (!valid) {
        e.preventDefault();
        return;
      }
      // Allow form-handler.js to do AJAX submission
    });
  }

  // ---------- Enquiry forms (volunteer + sponsor) ----------
  document.querySelectorAll(".enquiry-form").forEach((form) => {
    form.addEventListener("submit", (e) => {
      let valid = true;
      form.querySelectorAll("input[required], select[required], textarea[required]").forEach((input) => {
        const value = input.value.trim();
        const errorEl = document.getElementById(input.id + "-error");

        if (!errorEl) return;

        if (!value) {
          showError(input, errorEl, "This field is required.");
          valid = false;
        } else if (input.type === "email" && !validateEmail(value)) {
          showError(input, errorEl, "Enter a valid email address.");
          valid = false;
        } else if (input.type === "tel" && !validatePhone(value)) {
          showError(input, errorEl, "Enter a valid phone number (7–15 digits).");
          valid = false;
        } else if (input.tagName === "TEXTAREA" && value.length < 10) {
          showError(input, errorEl, "Please provide at least 10 characters.");
          valid = false;
        } else if (input.tagName === "SELECT" && !value) {
          showError(input, errorEl, "Please make a selection.");
          valid = false;
        } else {
          clearError(input, errorEl);
        }
      });

      if (!valid) {
        e.preventDefault();
form.dataset.valid = valid ? "true" : "false";
      }
      
const radioGroup = form.querySelector('input[name="contact-method"]:checked');
const radioError = form.querySelector('#contact-method-error') ||
                   document.getElementById('contact-method-error');
if (!radioGroup && radioError) {
  radioError.textContent = "Please choose a contact method.";
  valid = false;
}

const terms = form.querySelector('#v-terms');
const termsError = form.querySelector('#v-terms-error');
if (terms && !terms.checked && termsError) {
  termsError.textContent = "You must accept the code of conduct.";
  valid = false;
}
    });
  });
});
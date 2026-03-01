const container = document.querySelector(".container");
const containerImg = document.querySelector(".container__img");
const containerTxt = document.querySelector(".container__text");

const containerThanks = document.getElementById("container__success");
const emailForm = document.getElementById("container__email");
const valid = document.getElementById("valid-error-text");
const emailInput = document.getElementById("email-field");
const submit = document.getElementById("subscribe-btn");

const spanFeedback = document.getElementById("span-feedback");
const dismiss = document.getElementById("dismiss-btn");

emailInput.addEventListener("input", (event) => {
  if (emailInput.validity.valid) {
    valid.textContent = "";
    emailInput.className = "valid-email";
  } else {
    showError();
  }
});

emailForm.addEventListener("submit", (event) => {
  if (!emailInput.validity.valid) {
    showError();
    event.preventDefault();
  } else {
    container.style.maxWidth = "504px";
    containerImg.className = "hidden";
    containerTxt.className = "hidden";
    containerThanks.className = "container__success";
    spanFeedback.textContent = emailInput.value;
    emailForm.reset();
    emailInput.className = "valid-email";
  }
});

dismiss.addEventListener("click", (event) => {
  container.style.maxWidth = "928px";
  containerImg.className = "container__img";
  containerTxt.className = "container__text";
  containerThanks.className = "hidden";
});

function showError() {
  if (emailInput.validity.valueMissing) {
    emailInput.className = "invalid-email";
    valid.textContent = "Valid Email Required";
  } else if (emailInput.validity.typeMismatch) {
    emailInput.className = "invalid-email";
    valid.textContent = "Valid Email Required";
  }
}

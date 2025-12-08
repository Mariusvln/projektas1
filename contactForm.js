"use strict";

const form = document.querySelector("#contactForm");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const messageError = document.querySelector("#message-error");

[nameInput, emailInput, messageInput].forEach((input) => {
  input.addEventListener("input", () => {
    input.classList.remove("error");
    const errorE1 = document.querySelector(`#${input.id}-error`);
    if (errorE1) errorE1.textContent = "";
  });
});

function validateEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let isValid = true;

  //NAME VALIDATION
  if (nameInput.value.trim() === "") {
    nameError.textContent = "This field can't be empty";
    nameInput.classList.add("error");
    isValid = false;
  } else {
    nameError.textContent = "";
    nameInput.classList.remove("error");
  }

  //EMAIL VALIDATION
  if (emailInput.value.trim() === "") {
    emailError.textContent = "This field can't be empty";
    emailInput.classList.add("error");
    isValid = false;
  } else if (!validateEmail(emailInput.value)) {
    emailError.textContent = "Email is not valid";
    emailInput.classList.add("error");
    isValid = false;
  } else {
    emailError.textContent = "";
    emailInput.classList.remove("error");
  }

  // MESSAGE VALIDATION
  if (messageInput.value.trim() === "") {
    messageError.textContent = "Message cannot be empty";
    messageInput.classList.add("error");
    isValid = false;
  } else {
    messageError.textContent = "";
    messageInput.classList.remove("error");
  }
  if (isValid) {
    console.log("Form submitted");
    form.reset();
  }
});

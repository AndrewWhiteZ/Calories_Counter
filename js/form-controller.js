'use strict';

import { calculateCalories } from "./calories-counter.js";
import { validateFormFields } from "./validation.js";

const formNode = document.querySelector(".counter__form");

const ageInputNode = document.querySelector("#age");
const heightInputNode = document.querySelector("#height");
const weightInputNode = document.querySelector("#weight");

const caloriesNormNode = document.querySelector("#calories-norm");
const caloriesMinimalNode = document.querySelector("#calories-minimal");
const caloriesMaximalNode = document.querySelector("#calories-maximal");

const inputNodes = document.querySelectorAll(".form__parameters input");
const submitButtonNode = document.querySelector(".form__submit-button");
const resetButtonNode = document.querySelector(".form__reset-button");
const counterResultNode = document.querySelector(".counter__result");

const checkFormFullfilled = () => {
  submitButtonNode.disabled = Array.from(inputNodes).some(node => node.value === "");
}

const checkFormEmpty = () => {
  resetButtonNode.disabled = Array.from(inputNodes).every(node => node.value === "");
}

const inputNodeHandler = () => {
  checkFormFullfilled();
  checkFormEmpty();
}

inputNodes.forEach(node => {
  node.addEventListener("change", inputNodeHandler);
});

submitButtonNode.addEventListener("click", (evt) => {
  evt.preventDefault();

  if (validateFormFields(ageInputNode, heightInputNode, weightInputNode)) {
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const activityLevel = document.querySelector('input[name="activity"]:checked').value;
  
    const caloriesValues = calculateCalories(gender, ageInputNode.value, heightInputNode.value, weightInputNode.value, activityLevel); 
    caloriesNormNode.textContent = caloriesValues.norm;
    caloriesMinimalNode.textContent = caloriesValues.minimal;
    caloriesMaximalNode.textContent = caloriesValues.maximal;
  
    counterResultNode.classList.remove("counter__result--hidden");
  }
});

formNode.addEventListener("reset", () => {
  counterResultNode.classList.add("counter__result--hidden");
  submitButtonNode.disabled = true;
  resetButtonNode.disabled = true;
});

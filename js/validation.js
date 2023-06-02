const validateFormFields = (...fields) => {
  return Array.from(fields).every(validateField);
}

const validateField = (field) => {
  if (field.checkValidity()) {
    return true; 
  } else {
    field.reportValidity();
    return false;
  }
}

export { validateFormFields };

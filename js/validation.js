export default class Validation {
  constructor(input) {
    this.input = document.querySelector(input);
  }

  validateEmail() {
    const regexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regexp.test(this.input.value);
  }

  validateName() {
    const regexp = /^[a-zA-ZÀ-ÿ'\- ]+$/;
    return regexp.test(this.input.value);
  }

  validateNumber() {
    // Expressão regular para validação de número de casa
    const regexp = /^[0-9]+[a-zA-Z]?(?:-[0-9a-zA-Z]+)?$/;
    return regexp.test(this.input.value);
  }
}

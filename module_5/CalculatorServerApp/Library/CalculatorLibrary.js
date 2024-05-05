class Calculator {
  constructor() {
    this.id = date.now()
  }
  #log = () => {  // private method
    console.log("test");
  };

  add(num1, num2) {
    this.#log(); // public method calling private method
    const value = num1 + num2;
    return value;
  }
}
module.exports = calculatorLibrary
//değişkenleri tanımla

let hesapla = true;
let result;

function calculate() {
  while (hesapla) {
    let firstNumber = prompt(`İlk sayınızı giriniz:`);
    if (firstNumber === null) {
      alert(`Calculator is off.`);
      hesapla = false;
      break;
    }
    firstNumber = Number(firstNumber);
    if (firstNumber < 0 || isNaN(firstNumber)) {
      alert(`Geçerli bir sayı giriniz.`);
      continue;
    }
    let secondNumber = prompt(`İkinci sayıyı giriniz:`);
    secondNumber = Number(secondNumber);
    if (secondNumber < 0 || isNaN(secondNumber)) {
      alert(`Geçerli bir sayı giriniz.`);
      continue;
    }

    let calculationMark = prompt(`Yapmak istediğiniz işlemi giriniz:`);
    if (
      calculationMark != "+" &&
      calculationMark != "-" &&
      calculationMark != "*" &&
      calculationMark != "/"
    ) {
      alert(`geçerli bir işlem giriniz.`);
      continue;
    }

    if (calculationMark === "+") {
      result = firstNumber + secondNumber;
    }
    if (calculationMark === "-") {
      result = firstNumber - secondNumber;
    }
    if (calculationMark === "*") {
      result = firstNumber * secondNumber;
    }
    if (calculationMark === "/") {
      result = firstNumber / secondNumber;
    }
    alert(`Sonuç: ${result}`);
    hesapla = false;
  }
}

alert(`Hesaplamak istediğiniz sayıları giriniz.`);
calculate();

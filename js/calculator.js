// //değişkenleri tanımla

// let hesapla = true;
// let result;

// function calculate() {
//   while (hesapla) {
//     let firstNumber = prompt(`İlk sayınızı giriniz:`);
//     if (firstNumber === null) {
//       alert(`Calculator is off.`);
//       hesapla = false;
//       break;
//     }
//     firstNumber = Number(firstNumber);
//     if (firstNumber < 0 || isNaN(firstNumber)) {
//       alert(`Geçerli bir sayı giriniz.`);
//       continue;
//     }
//     let secondNumber = prompt(`İkinci sayıyı giriniz:`);
//     secondNumber = Number(secondNumber);
//     if (secondNumber < 0 || isNaN(secondNumber)) {
//       alert(`Geçerli bir sayı giriniz.`);
//       continue;
//     }

//     let calculationMark = prompt(`Yapmak istediğiniz işlemi giriniz:`);
//     if (
//       calculationMark != "+" &&
//       calculationMark != "-" &&
//       calculationMark != "*" &&
//       calculationMark != "/"
//     ) {
//       alert(`geçerli bir işlem giriniz.`);
//       continue;
//     }

//     if (calculationMark === "+") {
//       result = firstNumber + secondNumber;
//     }
//     if (calculationMark === "-") {
//       result = firstNumber - secondNumber;
//     }
//     if (calculationMark === "*") {
//       result = firstNumber * secondNumber;
//     }
//     if (calculationMark === "/") {
//       result = firstNumber / secondNumber;
//     }
//     alert(`Sonuç: ${result}`);
//     hesapla = false;
//   }
// }

// alert(`Hesaplamak istediğiniz sayıları giriniz.`);
// calculate();

//SWİTCH METODU İLE YAZMA
let hesapla = true;
function calculate(calculation) {
  while (hesapla) {
    let calculation = prompt(`Hangi işlemi yapmak istiyorsunuz?`);
    if (calculation === null) {
      alert(`calculator is switching off`);
      hesapla = false;
      break;
    }
    if (
      calculation != "+" &&
      calculation != "-" &&
      calculation != "*" &&
      calculation != "/"
    ) {
      alert(`Lütfen geçerli bir işlem giriniz!`);
    }

    let firstNumber = prompt(`ilk sayınızı giriniz: `);
    firstNumber = Number(firstNumber);

    if (firstNumber < 0 || isNaN(firstNumber)) {
      alert(`Lütfen geçerli bir sayı giriniz!`);
      continue;
    }
    let secondNumber = prompt(`İkinci sayınızı giriniz: `);
    secondNumber = Number(secondNumber);
    if (secondNumber < 0 || isNaN(secondNumber)) {
      alert(`Lütfen geçerli bir sayı giriniz!`);
      continue;
    }
    let result;
    switch (calculation) {
      case "+":
        result = firstNumber + secondNumber;
        break;
      case "-":
        result = firstNumber - secondNumber;
        break;
      case "*":
        result = firstNumber * secondNumber;
        break;
      case "/":
        result = firstNumber / secondNumber;
        break;
      default:
        return `Lütfen geçerli bir işlem giriniz`;
    }

    alert(`Sonuç: ${result}`);
    let yeniOyun=confirm(`Yeni hesaplama ister misiniz?`);
    if(!yeniOyun){
      alert(`Calculator is switching off.`);
      hesapla=false;
    }

   
  }
}

alert(`welcome to calculator`);
calculate();

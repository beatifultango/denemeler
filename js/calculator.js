//değişkenleri tanımla

let result;
let hesapla=true;

function calculate() {
  while (hesapla){
    let firstNumber= prompt(`İlk sayınızı giriniz:`);
    if (firstNumber===null){
        alert(`Calculator is off.`);
        hesapla=false;
        break;
    }
    if(firstNumber<0 || typeof firstNumber!="number"){
        alert(`Geçerli bir sayı giriniz.`);
        continue

    }

    if(firstNumber,secondNumber){
        if(firstNumber+ "+"+secondNumber){
            result.push(firstNumber+secondNumber);
            break
            
        }else if(firstNumber+ "-"+secondNumber){
            result.push(firstNumber-secondNumber);
            break
            
        }else if(firstNumber+ "*"+secondNumber){
            result.push(firstNumber*secondNumber);
            break
            
        }else if(firstNumber+ "/"+secondNumber){
            result.push(firstNumber/secondNumber);
            break
            
        }else{
            return `geçerli bir sayı giriniz.`;
            
        }

    }

    
    
  }
  return result;
}

alert(`Hesaplamak istediğiniz sayıları giriniz.`)
calculate();

// //karesini alan fonksiyon

// function karesiniAl(a){
//     let b= a*a;
//     return b
// }
// console.log(karesiniAl(4));

// //tek mi çift mi?

// function tekMi(a){
//     if(a%2===0){
//         return console.log(`${a} sayısı çifttir.`);
//     }
//     else{
//         return console.log(`${a} sayısı tektir.`);
//     }
// }

// tekMi(109292);

//kelimenin uzunluğu

// function kelimeUzunluğu(kelime) {
//   if (typeof kelime === "string") {
//     return kelime.length;
//   } else {
//     return `Lütfen bir kelime giriniz.`;
//   }
// }

// console.log(kelimeUzunluğu("merve"));

//toplam sayıyı bulan foksiyon

// function toplamıBul(arr){
//     let total=0;
//     for(let i=0; i<arr.length; i++){
//         total+=arr[i]
//     }
//     return total;
// }

// console.log(toplamıBul([1,4,5,3,6]));

//dizideki en büyük sayıyı bulan fonksiyon

// function büyüğüBul(arr){
//     let big=0;
//     for (let i=0; i<arr.length; i++){
//         if (arr[i]>big){
//             big=arr[i]

//         }

//     }
//     return big;
// }

// console.log(büyüğüBul([4094,244,2,2235,563,321]));

//bir dizide belirli bir sayının kaç kez geçtiğini bul

// function kacKez(arr, a) {
//   let tane = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === a) {
//       tane++
//     }
//   }
//   return tane;
// }
// console.log(kacKez([1,23,23,1,23,1,78,54,23],1));

// Bir stringin palindrom olup olmadığını kontrol et

// function palindromMu(metin){
//     metin=metin.toString();
//     if (metin===metin.split("").reverse().join("")){
//         return `${metin} bir palindromdur.`
//     } else{
//         return `${metin} bir palindrom değildir.`
//     }
// }

// console.log(palindromMu("kazaklı"));

//Bir alışveriş sepetindeki ürünlerin toplam fiyatını hesaplayan fonksiyon

// function toplamFiyat(arr){
//     let toplam=0;
//     for(let i=0; i<arr.length;i++ ){
//         toplam+=arr[i]
//     }
//     return toplam
// }
// const sepet= [79.90,23.30,21.00,25.90]
// console.log(toplamFiyat(sepet));


//taş kağıt makas oyunu

// function tasKagitMakas(oyuncu1,oyuncu2){ 
//     if(oyuncu1===oyuncu2){
//         return `Berabere!`
//     }
//     if(
//         (oyuncu1==="taş"&&oyuncu2==="makas")||
//         (oyuncu1==="kağıt"&&oyuncu2==="taş")||
//         (oyuncu1==="makas"&&oyuncu2==="kağıt")
        
//     ){
//         return `Oyuncu1 kazandı!`
//     }
//         return `Oyuncu2 kazandı!` 
    
    
// }

// console.log(tasKagitMakas("kağıt","makas"));

//


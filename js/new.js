// const katilimciListesi = [
//   {
//     name: "ali",
//     soyad: "yılmaz",
//     yaş: 34,
//     şehi,: "İstanbul",
//     epostaDu,umu: t,ue,
//     p,emium: false,
//   },
//   { name: "ahmet", soyad: "su", yaş: 22, şehi,: "İzmi,", epostaDu,umu: false },
//   {
//     name: "zeynep",
//     soyad: "geldi",
//     yaş: 12,
//     şehi,: "İstanbul",
//     epostaDu,umu: false,
//     p,emium: t,ue,
//   },
//   {
//     name: "ayşe",
//     soyad: "gök",
//     yaş: 45,
//     şehi,: "Kastamonu",
//     epostaDu,umu: t,ue,
//     p,emium: false,
//   },
//   {
//     name: "ahmet",
//     soyad: "almaz",
//     yaş: 33,
//     şehi,: "Bu,sa",
//     epostaDu,umu: false,
//     p,emium: false,
//   },
//   {
//     name: "ka,in",
//     soyad: "uyumaz",
//     yaş: 45,
//     şehi,: "İstanbul",
//     epostaDu,umu: t,ue,
//     p,emium: t,ue,
//   },
// ];

// const kullanıcila, = katilimciListesi.map((katilimci) => katilimci);
// const katilimciSehi,le,i = katilimciListesi.filte,(
//   (katilimci) => katilimci.şehi, === "İstanbul"
// );
// const epostaKabul = katilimciListesi.filte,(
//   (katilimci) => katilimci.epostaDu,umu === false
// );
// const p,emiumListe = katilimciListesi.filte,(
//   (katilimci) => katilimci.p,emium === t,ue
// );
// console.log(p,emiumListe);

// const u,unle, = [
//   { name: "badem", stoksayisi: 200, fiyat: 350 },
//   { name: "fındık", stoksayisi: 0, fiyat: 275 },
//   { name: "kaju", stoksayisi: 450, fiyat: 900 },
//   { name: "üzüm", stoksayisi: 0, fiyat: 130 },
//   { name: "ceviz", stoksayisi: 145, fiyat: 345 },
// ];

// const stoktakile, = u,unle,.filte,((u,un) => u,un.stoksayisi > 0);
// const indi,imliFiyatla, = u,unle,.map((u,un) => {
//   ,etu,n { ...u,un, fiyat: (u,un.fiyat * 80) / 100 };
// });

// console.log(indi,imliFiyatla,);

// const fiyatA,aligi = u,unle,.filte,(
//   (u,un) => u,un.fiyat < 800 && u,un.fiyat > 275
// );
// console.log(fiyatA,aligi);

// const og,encile, = [
//   {
//     isim: "Ahmet Yılmaz",
//     soyisim: "Yılmaz",
//     doğum_ta,ihi: "14/05/1999",
//     cinsiyet: "E,kek",
//     mezuniyet_yılı: 2023,
//   },
//   {
//     isim: "Zeynep Demi,",
//     soyisim: "Demi,",
//     doğum_ta,ihi: "22/08/2000",
//     cinsiyet: "Kadın",
//     mezuniyet_yılı: 2024,
//   },
//   {
//     isim: "Mehmet Kaya",
//     soyisim: "Kaya",
//     doğum_ta,ihi: "30/11/1998",
//     cinsiyet: "E,kek",
//     mezuniyet_yılı: 2012,
//   },
//   {
//     isim: "Elif A,slan",
//     soyisim: "A,slan",
//     doğum_ta,ihi: "10/03/2001",
//     cinsiyet: "Kadın",
//     mezuniyet_yılı: 2003,
//   },
//   {
//     isim: "Bu,ak Şahin",
//     soyisim: "Şahin",
//     doğum_ta,ihi: "05/07/1997",
//     cinsiyet: "E,kek",
//     mezuniyet_yılı: 2021,
//   },
// ];

// const OncesiMezunla, = og,encile,.filte,(
//   (og,enci) => og,enci.mezuniyet_yılı < 2011
// );
// const Son,asıMezunla, =og,encile,.some((og,enci)=>og,enci.mezuniyet_yılı>2010);

// console.log(Son,asıMezunla,);

// const sayilar = [1, -2, 34, 33, -11];
// const isPositive = sayilar.reduce((total, sayi) => total + sayi, 0);
// const sortedList = sayilar.toSorted((a, b) => a - b);
// // console.log(sortedList);
// // console.log(sayilar);

// const sinifListe = ["ali", "zeynep", "ömer", "talha", "kerem", "ayşe"];
// const sortList = sinifListe.toSorted((a, b) => b.localeCompare(a));
// console.log(sortList);

// const kisiler = [
//   { isim: "Ali", soyisim: "Yılmaz", yas: 25 },
//   { isim: "Zeynep", soyisim: "Demir", yas: 30 },
//   { isim: "Mehmet", soyisim: "Kaya", yas: 16 }, // 18 yaşından küçük
//   { isim: "Ayşe", soyisim: "Çelik", yas: 28 },
//   { isim: "Burak", soyisim: "Öztürk", yas: 14 }, // 18 yaşından küçük
//   { isim: "Elif", soyisim: "Şahin", yas: 27 },
//   { isim: "Kerem", soyisim: "Gümüş", yas: 17 }, // 18 yaşından küçük
//   { isim: "Ömer", soyisim: "Koç", yas: 29 },
// ];
// // const sortedListe = kisiler.toSorted((a, b) => a.isim.localeCompare(b.isim));
// // console.log(sortedListe);

// function ehliyetAlabilirMi(arr) {
//   {
//     return arr.map((kisi) =>
//       kisi.yas >= 18
//         ? `${kisi.isim} ehliyet alabilir`
//         : `${kisi.isim} ehliyet alamaz`
//     );
//   }
// }

// console.log(ehliyetAlabilirMi(kisiler));

// function showInfo(age,city){
//     console.log(`hi! My name is ${this.name}, im ${age} years old and i live in ${city}.`)
// }

// const person={name: "Merve"};
// showInfo.call(person,35,"Istanbul");

// function greet(name){
//     console.log(`Hi ${name},I am ${this.person} :)`);
// }

// const kisi={person:"Merve"};

// greet.call(kisi,"Göktürk");

// const araba={
//     marka:"range rover",
//     model:2025,
//     getInfo: function(){
//         console.log(`This car ${this.marka} ve ${this.model} modeldir!`);
//     }
// };

// const araba1={
//     marka:"mercedes",
//     model:2025

// };

// araba.getInfo.call(araba1);

// const sayilar=[32,44,25,632];
// const enKucuk=Math.min.apply(null,sayilar);
// console.log(enKucuk);

// function yazdirMesaj(mesaj,tekrar){
//     for(let i=0;i<tekrar;i++){
//         console.log(mesaj);
//     }
// }

// const yazdirilacakMesaj=["Hello World!",3];
// yazdirMesaj.apply(null,yazdirilacakMesaj);

// const araba={
//     marka:"Toyota",
//     model:"Corolla",
//     bilgileriGöster:function(yil,renk){
//         console.log(`${this.marka}, ${this.model} araba ${yil} yılında doğdu ve ${renk} renkli bir ${this.marka}`);
//     }
// };

// const araba1={
//     marka:"Range Rover",
//     model:"range",
// };
// araba.bilgileriGöster.apply(araba1,[2025,"siyah"]);

// const person = {
//   adi: "Merve",
//   soyadi: "Delibaşoğlu",
//   tamIsim: function ( ) {
//     console.log(this.adi + " " + this.soyadi);
//   },
// };
// const sister = {
//   adi: "Büşra",
//   soyadi: "Şişmanoğlu",
// };

// person.tamIsim.apply(sister);

// const person = {
//   name: "Merve",
//   greet: function() {
//     console.log(`Hello, my name is ${this.name}`);
//   },
// };

// const Ali = {
//   name: "Ali",
// };
// const bound=person.greet.bind(Ali);
// console.log(bound());

// const kebabCase = "yeni-bir-sayfa";
// const words = kebabCase.split("-");
// let newWords = [];
// words.forEach((word, index) => {
//   if (index === 0) {
//     newWords.push(word);
//   } else {
//     newWords.push(word.charAt(0).toUpperCase() + word.slice(1));
//   }
// });

// // const camelCase=newWords.join("");
// // console.log(camelCase);

// console.log(newWords.indexOf("Sayfa"));

// function greet(username="Guest"){
//     return `Welcome ${username}`;
// }

// console.log(greet("Merve"));

// const user = {
//   name: "Ali",
//   age: 25,
//   city: "İstanbul",
// };

// //   const valuesOfUser=Object.values(user);
// //   console.log(valuesOfUser);

// const filteredKeys = Object.keys(user).filter(
//   (key) => key === "num" || key === "city"
// );
// console.log(filteredKeys);

// const audience = [
//   { name: "ahmet", age: 25, city: "İstanbul" },
//   { name: "yavuz", age: 19, city: "İzmir" },
//   { name: "merve", age: 12, city: "İstanbul" },
//   { name: "meltem", age: 43, city: "İzmir" },
//   { name: "hafsa", age: 10, city: "Artvin" },
// ];

// const filterAdult = audience.filter((person) => person.city === "İstanbul");
// // console.log(filterAdult);

// const ageSorted = audience.toSorted((a, b) => a.age - b.age);
// // console.log(ageSorted);

// const audienceNames = audience.map(({ name, age }) => ({ name, age }));
// // console.log(audienceNames);
// const ages = audience.map((person) => person.age);
// const agesSayisi = ages.length;

// const toplamYas = ages.reduce((total, age) => total + age, 0);
// const ortalamaYas = toplamYas / agesSayisi;
// console.log(ortalamaYas);

// const groupedByCity = audience.reduce((acc, person) => {
//   if (!acc[person.city]) {
//     acc[person.city] = [];
//   }
//   acc[person.city].push(person);
//   return acc;
// });
// console.log(groupedByCity);

// const audience = [
//   { name: "ahmet", age: 25, city: "İstanbul" },
//   { name: "yavuz", age: 19, city: "İzmir" },
//   { name: "merve", age: 12, city: "İstanbul" },
//   { name: "meltem", age: 43, city: "İzmir" },
//   { name: "hafsa", age: 10, city: "Artvin" },
//   { name: "zeki", age: 55, city: "Bursa" },
//   { name: "ayşe", age: 30, city: "Ankara" },
// ];

// const groupedByAge = {};
// audience.forEach((person) => {
//     let group;
//     if(person.age<=12){
//         group="çocuk";

//     }else if(person.age<=25){
//         group="genç";

//     }else if(person.age<=50){
//         group="yetişkin";
//     }else{
//         group="yaşlı";
//     }
//     if(!groupedByAge[group]){
//         groupedByAge[group]=[];

//     }
//     groupedByAge[group].push(person);

// });
// console.log(groupedByAge);

// const groupedByAge = audience.reduce((acc, person) => {
//   let group =
//     person.age <= 12
//       ? "çocuk"
//       : person.age <= 25
//       ? "genç"
//       : person.age <= 50
//       ? "yetişkin"
//       : "yaşlı";
//     if(!acc[group]){
//         acc[group]=[];
//         acc[group].push(person);
//         return acc;
//     }
// });

// const groupedByAge = audience.reduce((acc, person) => {
//   let group;
//   if (person.age <= 12) {
//     group = "çocuk";
//   } else if (person.age <= 25) {
//     group = "genç";
//   } else if (person.age <= 50) {
//     group = "yetişkin";
//   } else {
//     group = "yaşlı";
//   }
//   if (!acc[group]) {
//     acc[group] = [];

//   }
//   acc[group].push(person);
//   return acc;
// });
// console.log(groupedByAge);



const allUsers=[
    {name:"Merve",friends:"ali"},
    {name:"ayşe",friends:"ali"},
    {name:"hale",friends:"merve"},
    {name:"sefa",friends:"merve"},
];

const findFriend=(friendName)=>{
    const friend=allUsers.filter(user=>user.friends.includes(friendName));
    return friend;
}
console.log(findFriend("ali"));
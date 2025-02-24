//PİZZA ORDER

// function OrderPizza(pizzaName){
//     console.log (`We are making your ${pizzaName} pizza. Hold on!`),
// }

// function deliveringPizza(pizzaName){
//     console.log (`Your pizza is ready! we are delivering you ${pizzaName} pizza :)`),
// }
// function makeMessage(pizzaName,callback){
//     console.log (`Hello, thanks for your order!`),
//     callback(pizzaName),
// }
// // makeMessage("mediterranean",OrderPizza),
// makeMessage("extra Mushroom",deliveringPizza),

//GİVE RESULT

// function addition(...args) {
//   let total = 0,
//   for (arg of args) {
//     total += arg,
//     console.log(total),
//   }
// }

// function minus(...args) {
//   total = 0,
//   for (arg of args) {
//     total -= arg,
//     console.log(total),
//   }
// }

// function multiplication(...args) {
//   total = 1,

//   for (arg of args) {
//     total *= arg,
//     console.log(total),

//   }

// }

// function calculation(numbers, callback) {
//   callback(...numbers),
// }

// calculation([1, 2, 3, 4, 5], multiplication),

// const bookShelf = {
//   books: ["the Last", "marvel", "pozitif psikoloji"],
//   getBook() {
//     console.log(this),
//   },
// },

// bookShelf.getBook(),

// const TheOldTod={
//   positions:["speed","invisiblity","stone skin"],
//   getPositions(value){
//     return this.positions[value],
//   },
//   addPotion(...args){
//     return this.positions.push(...args),

//   },

// }

// TheOldTod.addPotion("fly","see","swim")
// console.log(TheOldTod.getPositions(3)),

// function filteredArray(numbers, value) {
//   filteredNumbs = [],
//   numbers.forEach(function (number) {
//     if (number < value) {
//       filteredNumbs.push(number),
//     }
//   }),
//   return filteredNumbs,
// }

// console.log(filteredArray([1, 2, 7, 4, 2], 5)),

const books = [
  { title: "the Last", author: "Bernard" },
  { title: "Call", author: "Robert" },
  { title: "Musk", author: "Lena" },
],
// function lookingFor(array1) {
//   const wantedAuthor = "Robert",
//   array1.forEach(function (item) {
//     if (item.author === wantedAuthor) {
//       return item.title,
//     }
//     return null,
//   }),
// }

// console.log(lookingFor(books)),

// console.log(Object.values(books)),

// console.log(books.map(item=>item)),

// const getBookName = (books) => {
//   return books.map((book) => book.title),
// },
// console.log(getBookName(books)),

// const numbs=[1,2,3,4],
// const squered=numbs.map((num)=>num**3),
// const filterEvens=numbs.filter((num)=>num%2===0),
// const reducesNumbs=numbs.reduce((total,num)=>total+num,0),
// console.log(reducesNumbs),

// const oyVer=age=>age>=18?"Evet oy kullanabilirsin":"Hayır oy kullanamazsın",
// console.log(oyVer(20)),
// console.log(oyVer(12)),

// const numbers=[2,33,43,12,65],
// numbers.forEach((number,index)=>{
//   console.log(`${index}. ${number}`)}),

// const numbers =[5,23,45,34],
// const logMessage=(number,index)=>{
//   console.log(`İndex ${index} value ${number}`)
// },
// numbers.forEach(logMessage),

// const filterArray=(numbers,value)=>{
//   filteredNumbs=[],
//   numbers.forEach(number => {
//     if(number>value){
//       filteredNumbs.push(number)
//     }

//   }),
//   return filteredNumbs,
// }

// const newNumbs=[1,53,12,33,53,21,45,2]

// console.log(filterArray(newNumbs,32)),

// const mappedBooks=books.map(book=>book),
// console.log(mappedBooks),
// console.log(books)

// const sepettekiUrunler=[
//   {name:"tisort", fiyat:150},
//   {name:"şort", fiyat:190},
//   {name:"etek", fiyat:350},
//   {name:"çorap", fiyat:55},
//   {name:"gömlek", fiyat:370},
// ],

// const fiyatGüncelle=sepettekiUrunler.map(urun=>(urun.fiyat*90)/100),

// // console.log(sepettekiUrunler.map(urun=>urun.fiyat).reduce((total,fiyat)=>total+fiyat,0)),

// const fiyatlar=sepettekiUrunler.map(urun=>urun.fiyat),

// const güncelListe=fiyatlar.map(fiyat=>(fiyat*90)/100).reduce((total,urun)=>total+urun,0),
// console.log(güncelListe),

// const kullanicilar=[
//   {name:"Ali", surname:"Yılmaz"},
//   {name:"Merve", surname:"Delibaşoğlu"},
//   {name:"şeyma", surname:"Şenel"},
//   {name:"Kerem", surname:"Yılmaz"},
// ],

// const fullNames=kullanicilar.map(person=>person.name+" "+person.surname),
// console.log(fullNames),

// const cümle=["Merhaba dünya", "JavaScript harika"],
// const kelimeler=cümle.flat(kelime=>kelime.split(" ")),
// console.log(kelimeler),

// const Array1=[ [1, 2], [3, 4], [5, 6] ],
// const flattenedArray=Array1.flatMap(arr=>arr[0]),
// console.log(flattenedArray),

// const kullanicilarınListesi=[
//   {name:"Ali", listesi:["yumurta","elma","deterjan"]},
//   {name:"Ali", listesi:["kalem","silgi","defter"]},
//   {name:"Ali", listesi:["yüzük","bilezik","küpe"]},
//   {name:"Ali", listesi:["sucuk","pastırma","salam"]},
// ],

// const urunlerListesi=kullanicilarınListesi.flatMap(kisi=>kisi.listesi),
// console.log(urunlerListesi),

// const kullaniciListesi = ["Ali Yılmaz", "Aydın Durmaz", "kerem Gümüş"],

// kullaniciListesi.forEach(kullanici=>{
//   console.log(kullanici),
// }),

// const renkler=["kırmızı","mavi","yeşil"],
// renkler.forEach(renk=>{
//   console.log(renk),
// }),

// const arr=[2,3,4,5,6,7],
// arr.forEach((index,sayi)=>{
//   console.log(index*sayi),

// }),

// const sayilar = [20, 21, 34, 56, 23, 12],
// sayilar.forEach((sayi) => {
//   if (sayi > 20) {
//     console.log(`${sayi} 20'den büyük!`),
//   } else if (sayi === 20) {
//     console.log(`${sayi} 20'ye eşit!`),
//   } else {
//     console.log(`${sayi} 20'den küçük!`),
//   }
// }),

// const kullanicilar = [
//   { name: "Ahmet", surname: "Yılmaz" },
//   { name: "yavuz", surname: "kerem" },
//   { name: "ali", surname: "su" },
//   { name: "talha", surname: "top" },
//   { name: "ali", surname: "Yılmaz" },
// ],

// const aranan = kullanicilar.filter((kullanici) => kullanici.name === "ali"),
// const isimler = aranan.forEach((isim) => {
//   console.log(isim),
// }),







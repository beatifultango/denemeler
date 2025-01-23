const kelimeler = ["bilgisayar", "kelime", "aydınlık", "yüzük"];
let bilsiyarinSectigiKelime = "";
let kalanHak = 10;
let tahminEdilenler = [];
let kullanilanlar = [];
let oyunaDevam = true;

function kelimeTahminOyunu() {
  kalanHak = 10;
  tahminEdilenler = [];
  kullanilanlar = [];

  if (
    !confirm(`Kelime tahmin oyununa hoş geldiniz. Kalan hakkınız:${kalanHak}`)
  ) {
    alert(`Oyun sonlandırılıyor...`);
    return;
  }

  const randomIndex = Math.floor(Math.random() * kelimeler.length);
  bilsiyarinSectigiKelime = kelimeler[randomIndex];

  tahminEdilenler = [];

  for (let i = 0; i < bilsiyarinSectigiKelime.length; i++) {
    tahminEdilenler[i] = "*";
  }

  while (oyunaDevam && kalanHak > 0) {
    const oyun = `
      kelime=${tahminEdilenler.join("  ")}
      kalan hak:${kalanHak}
      kullanılan harfler:${kullanilanlar}
      `;
    const tahmin = prompt(
      `${oyun}\n hadi kelimeyi tahmin etmek için bir harf girin: `
    );

    

    if (tahmin === null) {
      alert(`Oyundan çıkılıyor`);
      return;
    }
    if (parseInt(tahmin) || tahmin.length !== 1) {
      alert(`Bir harf girmelisiniz.`);
      continue;
    }
    const harf = tahmin.toLowerCase();
    if (kullanilanlar.includes(harf)) {
      alert(`Bu harf daha önce kullanıldı.`);
      continue;
    }
    kullanilanlar.push(harf);

    let harfBulundu = false;
    for (let i = 0; i < bilsiyarinSectigiKelime.length; i++) {
      if (bilsiyarinSectigiKelime[i] === harf) {
        tahminEdilenler[i] = harf;
        harfBulundu = true;
      }
    }
    if (harfBulundu) {
      alert(`${oyun}\nTebrikler "${harf}" kelimede var. `);
    } else {
      kalanHak--;
      alert(`${oyun}\nMaalesef "${harf}" kelimede yok. `);
      
    }
    let kelimeBulundu = true;
    for (let i = 0; i < bilsiyarinSectigiKelime.length; i++) {
      if (tahminEdilenler.includes("*")) {
        continue;
      }
      if (kelimeBulundu) {
        confirm(`Tebrikler kelimeyi bildiniz.Yeni oyun oynamak ister misiniz?`);
        kelimeTahminOyunu();
      } else {
        alert(`Oyundan çıkılıyor.`);
        break;
      }
    }
  }
  alert(`Oyundan çıkıldı`);
  return;
}

alert(`KELİME TAHMİN OYUNU`);
kelimeTahminOyunu();

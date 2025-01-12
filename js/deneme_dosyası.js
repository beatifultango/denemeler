let hedefSayi = Math.floor(Math.random() * 100) + 1;
let tahminSayisi = 0;
let maxTahmin = 10;
oyunaDevam = true;

function sayiTahminOyunu() {
  while (oyunaDevam) {
    let kalanTahmin = maxTahmin - tahminSayisi;

    let tahmin = prompt(
      `Tuttuğum sayıyı tahmin edebilir misin?\nKalan tahmin: ${kalanTahmin}`
    );
    if (tahmin === null) {
      alert(`Oyundan çıkılıyor. Tuttuğum sayı: ${hedefSayi} idi`);
      oyunaDevam=false;
      break;
    }
    tahmin = Number(tahmin);
    if (isNaN(tahmin) || tahmin < 1 || tahmin > 100) {
      alert("1 ile 100 arasında bir sayı girmelisiniz!");
      continue;
    }
    tahminSayisi++;
    if (tahmin === hedefSayi) {
      let yeniOyun=confirm(`Bravo ${tahminSayisi} kerede bildiniz!`);
      
      if (yeniOyun) {
       
        hedefSayi = Math.floor(Math.random() * 100) + 1;
        tahminSayisi = 0;
      } else {
        alert("Oyundan çıkılıyor...");
        oyunaDevam=false;
        break;
      }
    } else if (tahmin < hedefSayi) {
      alert(`Daha büyük bir sayı girmelisin!\nKalan hakkınız: ${kalanTahmin-1}`);
    } else if (tahminSayisi >= maxTahmin) {
      alert("Tahmin hakkınız bitmiştir. Yeni oyun oynamak ister misiniz?");
      if (yeniOyun) {
        hedefSayi = Math.floor(Math.random() * 100) + 1;
        tahminSayisi = 0;
      } else {
        alert("Oyundan çıkılıyor...");
        oyunaDevam=false;
        break;
      }
    } else {
      alert(
        `Daha küçük bir sayı girmelisiniz.\nKalan hakkınız:${kalanTahmin-1}`
      );
    }
  }
}
alert("Sayı tahmin oyununa hoş geldiniz.");
sayiTahminOyunu();

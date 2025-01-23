//TAŞ KAĞIT MAKAS OYUNU

const oyun = {
  secenekler: ["taş", "kağıt", "makas"],
  bilgisayarSecim: function () {
    const rastgele = Math.floor(Math.random() * 3);
    return this.secenekler[rastgele];
  },

  kazananiBul: function (oyuncuSecimi, bilgisayarSecimi) {
    if (oyuncuSecimi === bilgisayarSecimi) {
      return `Berabere`;
    }
    if (
      (oyuncuSecimi === "kağıt" && bilgisayarSecimi === "taş") ||
      (oyuncuSecimi === "makas" && bilgisayarSecimi === "kağıt") ||
      (oyuncuSecimi === "taş" && bilgisayarSecimi === "makas")
    ) {
      return `Siz kazandınız. Tebrikler `;
    }
    return `Kaybettiniz, bilgisayar kazandı.`;
  },
};

function oyna() {
  let bilgisayarSecimi = oyun.bilgisayarSecim();
  let oyuncuSecimi = prompt("Taş mı kağıt mı makas mı?");

  if (oyuncuSecimi === null) {
    alert(`Game is turning off.`);
    return;
  }
  oyuncuSecimi = oyuncuSecimi.toLowerCase();
  if (!oyun.secenekler.includes(oyuncuSecimi)) {
    alert("Geçersiz seçim!");
    return;
  }

  alert(
    `Sizin seçiminiz: ${oyuncuSecimi}\n` +
      `bilgisayarın seçimi: ${bilgisayarSecimi} \n` +
      oyun.kazananiBul(oyuncuSecimi, bilgisayarSecimi)
  );
  if (confirm("Tekrar oynamak ister misiniz?")) {
    oyna();
  } else {
    alert(`Oyunu sonlandırdınız. Hoşça kalın.`);
  }
}

alert("Taş kağıt makas oyununa hoş geldiniz.");
oyna();



//SWİTCH PERATORÜ İLE


const oyun = {
  secenekler: ["taş", "kağıt", "makas"],
  bilgisayarınSecimi: function () {
    let rasgele = Math.floor(Math.random() * 3);
    return this.secenekler[rasgele];
  },
  kazananiBul: function (oyuncuSecimi, bilgisayarSecimi) {
    

    if (oyuncuSecimi === bilgisayarSecimi) {
      return `Berabere`;
    }
    if (
      (oyuncuSecimi === "taş" && bilgisayarSecimi === "makas") ||
      (oyuncuSecimi === "kağıt" && bilgisayarSecimi === "taş") ||
      (oyuncuSecimi === "makas" && bilgisayarSecimi === "kağıt")
    ) {
      return `Tebrikler, kazandınız.`;
    } else {
      return `Kaybettiniz.`;
    }
  },
};

function oyna() {
  let bilgisayarSecimi = oyun.bilgisayarınSecimi();
  let oyuncuSecimi = prompt(`Taş Kağıt Makas`);

  if (!oyuncuSecimi) {
    alert(`Game is turning off.`);
    return;
  }
  if (
    !oyun.secenekler.includes(oyuncuSecimi.toLowerCase())
  ) {
    alert(`Geçerli bir değer giriniz.`);
    oyna();
    
  }
  oyuncuSecimi = oyuncuSecimi.toLowerCase();
  switch (oyuncuSecimi) {
    case "taş":
    case "kağıt":
    case "makas":
      alert(
        `Sizin seçiminiz ${oyuncuSecimi}\n` +
          `Bilgisayarın seçimi: ${bilgisayarSecimi}\n` +
          oyun.kazananiBul(oyuncuSecimi,bilgisayarSecimi)
      );
      break;
    default:
      console.log(`Geçerli bir seçim yapınız.`);
      break;
  }
  if (confirm(`Yeniden oynamak ister misiniz?`)) {
    oyna();
  } else {
    alert(`Oyundan çıktınız. Hoşça kalın.`);
    
    
  }
 
}

alert(`Taş Kağıt Makas oyununa hoşgeldiniz.\nİyi olan kazansın :)`);
oyna();

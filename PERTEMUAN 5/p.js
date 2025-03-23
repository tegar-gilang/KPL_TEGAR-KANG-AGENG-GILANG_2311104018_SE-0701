class Penjumlahan {
    JumlahTigaAngka(a, b, c) {
      let total = 0;
      total = a + b + c;
      return total;
    }
  }
  const nim = "2311104017";
  const lastDigit = parseInt(nim[nim.length - 1]);
  let angka1, angka2, angka3;
  
  if (lastDigit === 1 || lastDigit === 2) {
    angka1 = parseFloat("12.34");
    angka2 = parseFloat("56.78");
    angka3 = parseFloat("90.12");
  } else if (lastDigit === 3 || lastDigit === 4 || lastDigit === 5) {
    angka1 = Number("12.34");
    angka2 = Number("56.78");
    angka3 = Number("90.12");
  } else if (lastDigit === 6 || lastDigit === 7 || lastDigit === 8) {
    angka1 = parseInt("12");
    angka2 = parseInt("34");
    angka3 = parseInt("56");
  } else if (lastDigit === 9 || lastDigit === 0) {
    angka1 = BigInt(12);
    angka2 = BigInt(34);
    angka3 = BigInt(56);
  }
  const penjumlahan = new Penjumlahan();
  const hasil = penjumlahan.JumlahTigaAngka(angka1, angka2, angka3);
  console.log(`Hasil penjumlahan: ${hasil}`);
  
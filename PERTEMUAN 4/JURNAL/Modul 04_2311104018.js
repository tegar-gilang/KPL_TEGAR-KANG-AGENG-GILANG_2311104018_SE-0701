// Kelas KodeBuah menggunakan teknik Table-Driven
class KodeBuah {
    constructor() {
        this.kodeBuah = {
            "Apel": "A00", "Aprikot": "B00", "Alpukat": "C00", "Pisang": "D00",
            "Paprika": "E00", "Blackberry": "F00", "Ceri": "H00", "Kelapa": "I00", "Jagung": "J00",
            "Kurma": "K00", "Durian": "L00", "Anggur": "M00", "Melon": "N00", "Semangka": "O00"
        };
    }

    getKodeBuah(namaBuah) {
        return this.kodeBuah[namaBuah] || "Kode tidak ditemukan";
    }
}

// Kelas PosisiKarakterGame menggunakan teknik State-Based Construction
class PosisiKarakterGame {
    constructor(NIM) {
        this.state = "Berdiri";
        this.NIM = NIM;
        console.log(`State awal: ${this.state}`);
    }

    tombolS() {
        console.log("Tombol 'S' ditekan.");
        if (this.state === "Berdiri") {
            this.state = "Jongkok";
        } else if (this.state === "Jongkok") {
            this.state = "Tengkurap";
        }
        console.log(`State sekarang: ${this.state}`);
    }

    tombolW() {
        console.log("Tombol 'W' ditekan.");
        if (this.state === "Tengkurap") {
            this.state = "Jongkok";
        } else if (this.state === "Jongkok") {
            this.state = "Berdiri";
        } else if (this.state === "Berdiri") {
            this.state = "Terbang";
        }
        console.log(`State sekarang: ${this.state}`);
    }

    tombolX() {
        console.log("Tombol 'X' ditekan.");
        if (this.state === "Terbang") {
            this.state = "Jongkok";
            console.log("Karakter mendarat.");
        }
        console.log(`State sekarang: ${this.state}`);
    }
}

// Contoh penggunaan
console.log("\n🔹 KODE BUAH");
const kodeBuah = new KodeBuah();
console.log("Apel:", kodeBuah.getKodeBuah("Apel"));
console.log("Melon:", kodeBuah.getKodeBuah("Melon"));
console.log("Durian:", kodeBuah.getKodeBuah("Durian"));
console.log("Nangka:", kodeBuah.getKodeBuah("Nangka")); // Tidak ada di daftar

console.log("\n🔹 SIMULASI PERUBAHAN STATE KARAKTER");
const karakter = new PosisiKarakterGame(2311104018);
karakter.tombolS(); // Jongkok
karakter.tombolW(); // Berdiri
karakter.tombolW(); // Terbang
karakter.tombolX(); // Jongkok

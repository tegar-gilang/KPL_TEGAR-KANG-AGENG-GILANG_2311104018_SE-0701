const kodePosMap = {
    "Batununggal": "40266",
    "Kujangsari": "40287",
    "Mengger": "40267",
    "Wates": "40256",
    "Cijaura": "40287",
    "Jatisari": "40286",
    "Margasari": "40286",
    "Sekejati": "40286",
    "Kebonwaru": "40272",
    "Maleer": "40274",
    "Samoja": "40273"
};

function getKodePos(kelurahan) {
    return kodePosMap[kelurahan] || "Kode pos tidak ditemukan";
}

// Contoh penggunaan
console.log("Kode pos Batununggal:", getKodePos("Batununggal"));
console.log("Kode pos Kujangsari:", getKodePos("Kujangsari"));
console.log("Kode pos tidak terdaftar:", getKodePos("Kelurahan Tidak Ada"));

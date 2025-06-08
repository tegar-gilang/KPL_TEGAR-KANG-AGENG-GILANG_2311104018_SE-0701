const fs = require('fs');

class DataMahasiswa2311104018 {
static ReadJSON() {

    const jsonData = fs.readFileSync('./jurnal7_1_2311104018.json', 'utf-8');
    const data = JSON.parse(jsonData);

    console.log("Data Mahasiswa:");
    console.log(`Nama       : ${data.firstName} ${data.lastName}`);
    console.log(`Gender     : ${data.gender}`);
    console.log(`Umur       : ${data.age} tahun`);
    console.log("Alamat     :");
    console.log(`  Jalan    : ${data.address.streetAddress}`);
    console.log(`  Kota     : ${data.address.city}`);
    console.log(`  Provinsi : ${data.address.state}`);
    console.log("Mata Kuliah:");
    data.courses.forEach((course, index) => {
    console.log(`  ${index + 1}. ${course.code} - ${course.name}`);
    });
}
}

DataMahasiswa2311104018.ReadJSON();
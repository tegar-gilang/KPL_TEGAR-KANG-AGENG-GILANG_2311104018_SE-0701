const fs = require('fs');

class DataMahasiswa2311104018 {
  static ReadJSON() {

    const data = fs.readFileSync('./tp7_1_2311104018.json', 'utf-8');
    
    const obj = JSON.parse(data);

    const namaLengkap = `${obj.nama.depan} ${obj.nama.belakang}`;
    const nim = obj.nim;
    const fakultas = obj.fakultas;

 
    console.log(`Nama ${namaLengkap} dengan nim ${nim} dari fakultas ${fakultas}`);
  }
}
DataMahasiswa2311104018.ReadJSON();
class PusatDataSingleton {
    constructor() {
      this.DataTersimpan = [];
    }
  
    static getDataSingleton() {
      if (!PusatDataSingleton._instance) {
        PusatDataSingleton._instance = new PusatDataSingleton();
      }
      return PusatDataSingleton._instance;
    }
  
    getSemuaData() {
      return this.DataTersimpan;
    }
  
    printSemuaData() {
      this.DataTersimpan.forEach((data) => console.log(data));
    }
  
    addSebuahData(input) {
      this.DataTersimpan.push(input);
    }
  
    hapusSebuahData(index) {
      if (index >= 0 && index < this.DataTersimpan.length) {
        this.DataTersimpan.splice(index, 1);
      }
    }
  }
  
  const data1 = PusatDataSingleton.getDataSingleton();
  const data2 = PusatDataSingleton.getDataSingleton();
  
  data1.addSebuahData("Anggota Kelompok 1");
  data1.addSebuahData("Anggota Kelompok 2");
  data1.addSebuahData("Asisten Praktikum");
  
  data2.printSemuaData();
  
  data2.hapusSebuahData(2);
  
  data1.printSemuaData();
  
  console.log("Jumlah data pada data1:", data1.getSemuaData().length);
  console.log("Jumlah data pada data2:", data2.getSemuaData().length);
const fs = require('fs');

class KuliahMahasiswa2311104018 {
  static ReadJSON() {
    
    const data = fs.readFileSync('./tp7_2_2311104018.json', 'utf-8');
    
    const obj = JSON.parse(data);
    const courses = obj.courses;


    console.log("Daftar mata kuliah yang diambil:");
    courses.forEach((course, index) => {
      console.log(`MK ${index + 1} ${course.code} - ${course.name}`);
    });
  }
}


KuliahMahasiswa2311104018.ReadJSON();
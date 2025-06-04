const aljabar = require('../src/aljabarLibrary');

const inputKuadrat = [1, -3, -10];
const akar = aljabar.akarPersamaanKuadrat(inputKuadrat);
console.log(`Akar dari persamaan x^2 - 3x - 10 adalah:`, akar);


const inputLinear = [2, -3];
const kuadrat = aljabar.hasilKuadrat(inputLinear);
console.log(`Hasil kuadrat dari (2x - 3)^2 adalah:`, kuadrat);
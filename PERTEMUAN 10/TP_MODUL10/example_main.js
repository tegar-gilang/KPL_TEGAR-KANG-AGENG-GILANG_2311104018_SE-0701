import { FPB, KPK, Turunan, Integral } from '../src/matematika.js';

console.log("FPB dari 60 dan 45:", FPB(60, 45)); 
console.log("KPK dari 12 dan 8:", KPK(12, 8));   

const inputTurunan = [1, 4, -12, 9];
console.log("Turunan dari x^3 + 4x^2 - 12x + 9:", Turunan(inputTurunan));

const inputIntegral = [4, 6, -12, 9];
console.log("Integral dari 4x^3 + 6x^2 - 12x + 9:", Integral(inputIntegral));
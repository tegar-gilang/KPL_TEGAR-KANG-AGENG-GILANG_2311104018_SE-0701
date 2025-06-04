/**
 * Menghitung akar-akar dari persamaan kuadrat ax^2 + bx + c = 0
 * @param {number[]} persamaan - Array berisi [a, b, c]
 * @returns {number[] | string[]} - Akar-akar persamaan atau pesan error
 */
function akarPersamaanKuadrat(persamaan) {
    const [a, b, c] = persamaan;
    const diskriminan = b * b - 4 * a * c;
  
    if (a === 0) {
      return ["Bukan persamaan kuadrat"];
    }
  
    if (diskriminan < 0) {
      return ["Tidak memiliki akar real"];
    }
  
    const akar1 = (-b + Math.sqrt(diskriminan)) / (2 * a);
    const akar2 = (-b - Math.sqrt(diskriminan)) / (2 * a);
  
    return [akar1, akar2];
  }
  /**
   * Mengembalikan hasil kuadrat dari persamaan linier ax + b
   * @param {number[]} persamaan - Array berisi [a, b]
   * @returns {number[]} - Koefisien dari kuadrat (a^2, 2ab, b^2)
   */
  function hasilKuadrat(persamaan) {
    const [a, b] = persamaan;
    const a2 = a * a;
    const ab2 = 2 * a * b;
    const b2 = b * b;
    return [a2, ab2, b2];
  }
  
  
  module.exports = {
    akarPersamaanKuadrat,
    hasilKuadrat
  };
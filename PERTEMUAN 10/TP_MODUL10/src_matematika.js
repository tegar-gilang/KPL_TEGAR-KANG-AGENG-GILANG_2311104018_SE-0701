// FPB
export function FPB(a, b) {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return Math.abs(a);
  }
  
  // KPK
  export function KPK(a, b) {
    return Math.abs((a * b) / FPB(a, b));
  }
  
  
  export function Turunan(coeffs) {
    const terms = [];
    const degree = coeffs.length - 1;
  
    for (let i = 0; i < coeffs.length - 1; i++) {
      const pangkat = degree - i;
      const nilai = coeffs[i] * pangkat;
      const nextPangkat = pangkat - 1;
  
      if (nilai === 0) continue;
      const xTerm = nextPangkat === 0 ? "" : nextPangkat === 1 ? "x" : `x${nextPangkat}`;
      terms.push(`${nilai >= 0 && terms.length ? "+ " : ""}${nilai}${xTerm}`);
    }
  
    return terms.join(" ");
  }
  
  
  export function Integral(coeffs) {
    const terms = [];
    const degree = coeffs.length - 1;
  
    for (let i = 0; i < coeffs.length; i++) {
      const pangkatBaru = degree - i + 1;
      const koefBaru = coeffs[i] / pangkatBaru;
      if (koefBaru === 0) continue;
  
      const isInt = Number.isInteger(koefBaru);
      const koefStr = isInt ? koefBaru : koefBaru.toFixed(2);
      const xTerm = pangkatBaru === 1 ? "x" : `x${pangkatBaru}`;
  
    terms.push(`${koefBaru > 0 && terms.length ? "+ " : ""}${koefStr}${xTerm}`);
    }

    terms.push("+ C");
    return terms.join(" ");
}
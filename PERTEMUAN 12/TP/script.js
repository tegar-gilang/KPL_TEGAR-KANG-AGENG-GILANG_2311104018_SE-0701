
function CariTandaBilangan(a) {
    if (a < 0) return "Negatif";
    if (a > 0) return "Positif";
    return "Nol";
}


function checkSign() {
    const inputNumber = document.getElementById("inputNumber").value;
    const output = document.getElementById("output");

    const result = CariTandaBilangan(parseInt(inputNumber));
    output.textContent = `Hasil: ${result}`;
}
function CariNilaiPangkat(a, b) {
    if (b === 0) return 1;
    if (b < 0) return -1;
    if (b > 10 || a > 100) return -2;

    let result = 1;
    try {
        for (let i = 0; i < b; i++) {
            result = result * a;
            if (result > Number.MAX_SAFE_INTEGER) return -3;
        }
    } catch (error) {
        return -3;
    }
    return result;
}

function calculatePower() {
    const inputA = parseInt(document.getElementById("inputA").value);
    const inputB = parseInt(document.getElementById("inputB").value);
    const output = document.getElementById("output");

    const result = CariNilaiPangkat(inputA, inputB);
    output.textContent = `Hasil: ${result}`;
}
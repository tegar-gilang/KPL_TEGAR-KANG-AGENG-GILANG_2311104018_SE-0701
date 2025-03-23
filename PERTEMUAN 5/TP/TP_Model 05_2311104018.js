class HaloGeneric {
    sapaUser(input) {
        console.log(`Halo ${input}`);
    }
}
const halo = new HaloGeneric();
halo.sapaUser("TEGAR KANG AGENG GILANG"); 


class DataGeneric {
    constructor(data) {
        this.data = data;
    }

    printData() {
        console.log(`Data yang tersimpan adalah: ${this.data}`);
    }
}

const nim = new DataGeneric("2311104018");
nim.printData();

console.log()
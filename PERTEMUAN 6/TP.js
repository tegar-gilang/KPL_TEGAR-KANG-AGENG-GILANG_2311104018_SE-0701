class SayaTubeVideo {
    constructor(title) {
        if (title === null || title.length > 100) {
            throw new Error('Judul harus kurang dari 100 karakter dan tidak boleh null');
        }
        
        this.id = Math.floor(10000 + Math.random() * 90000);
        this.title = title;
        this.playCount = 0;
    }

    increasePlayCount(count) {
        if (count < 0 || count > 10000000) {
            throw new Error('Penambahan play count maksimal 9.999.999');
        }

        let newPlayCount = this.playCount + count;
    
        if (newPlayCount > Number.MAX_SAFE_INTEGER) {
            throw new Error('Overflow: play count melebihi batas maksimum integer');
        }
        
        this.playCount = newPlayCount;
    }

    printVideoDetails() {
        console.log(`ID: ${this.id}`);
        console.log(`Title: ${this.title}`);
        console.log(`Play Count: ${this.playCount}`);
    }
}

try {
    let video = new SayaTubeVideo("Tutorial Design By Gilang");
    video.increasePlayCount(9000);
    video.printVideoDetails();
} catch (error) {
    console.error(error.message);
}


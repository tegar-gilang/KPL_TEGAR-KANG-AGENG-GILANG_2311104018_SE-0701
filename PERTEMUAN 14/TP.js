// Class Video merepresentasikan video dengan properti id, judul, dan jumlah tayangan
class Video {
    // Konstruktor untuk inisialisasi objek Video dengan judul yang valid
    constructor(videoTitle) {
        if (!videoTitle || videoTitle.length > 100) {
            throw new Error('Video title must be less than 100 characters and not null.');
        }

        // Membuat ID video unik secara acak
        this.videoId = Math.floor(10000 + Math.random() * 90000);
        // Menyimpan judul video
        this.videoTitle = videoTitle;
        // Menginisialisasi jumlah tayangan dengan 0
        this.playCount = 0;
    }

    /**
     * Menambah jumlah tayangan video sesuai input.
     * Validasi input agar tidak negatif dan tidak melebihi batas maksimum 10 juta.
     * Cek overflow agar tidak melewati batas integer aman.
     * @param {number} playCountIncrement - nilai penambahan jumlah tayangan
     */
    increasePlayCount(playCountIncrement) {
        if (playCountIncrement < 0 || playCountIncrement > 10000000) {
            throw new Error('Play count increment must be between 0 and 10,000,000.');
        }

        const updatedPlayCount = this.playCount + playCountIncrement;

        if (updatedPlayCount > Number.MAX_SAFE_INTEGER) {
            throw new Error('Overflow: Play count exceeds maximum safe integer limit.');
        }

        this.playCount = updatedPlayCount;
    }

    // Menampilkan detail video ke konsol: ID, judul, dan jumlah tayangan
    printVideoDetails() {
        console.log(`ID: ${this.videoId}`);
        console.log(`Title: ${this.videoTitle}`);
        console.log(`Play Count: ${this.playCount}`);
    }
}

// Contoh penggunaan class Video dengan penanganan error
try {
    const video = new Video("Tutorial Design By Contract - M. Faris");
    video.increasePlayCount(5000);
    video.printVideoDetails();
} catch (error) {
    console.error(error.message);
}
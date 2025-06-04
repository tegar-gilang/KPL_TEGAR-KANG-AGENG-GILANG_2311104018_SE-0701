// Class yang merepresentasikan sebuah video dengan properti dan metode terkait
class SayaTubeVideo {
    /**
     * Konstruktor untuk membuat objek video baru
     * @param {string} title - Judul video, tidak boleh null dan maksimal 200 karakter
     */
    constructor(title) {
        if (!title || title.length > 200) {
            throw new Error("Judul video tidak boleh null dan maksimal 200 karakter.");
        }

        this.id = Math.floor(10000 + Math.random() * 90000); // ID unik video
        this.title = title; // Judul video
        this.playCount = 0; // Jumlah tayangan video, diinisialisasi 0
    }

    /**
     * Menambah jumlah tayangan video dengan validasi batas
     * @param {number} count - Jumlah penambahan play count
     */
    increasePlayCount(count) {
        if (count < 0 || count > 25000000) {
            throw new Error("Play count harus antara 0 dan 25 juta.");
        }

        if (this.playCount + count > Number.MAX_SAFE_INTEGER) {
            console.warn("Play count akan melebihi batas maksimum integer JavaScript.");
            return;
        }

        this.playCount += count;
    }

    /**
     * Menampilkan detail video ke konsol
     */
    printVideoDetails() {
        console.log(`Video ID     : ${this.id}`);
        console.log(`Judul Video  : ${this.title}`);
        console.log(`Play Count   : ${this.playCount}`);
    }

    /**
     * Mengembalikan nilai play count
     * @returns {number}
     */
    getPlayCount() {
        return this.playCount;
    }

    /**
     * Mengembalikan judul video
     * @returns {string}
     */
    getTitle() {
        return this.title;
    }
}

// Class yang merepresentasikan pengguna dengan daftar video yang diupload
class SayaTubeUser {
    /**
     * Konstruktor membuat objek pengguna baru
     * @param {string} username - Nama pengguna, tidak boleh null dan maksimal 100 karakter
     */
    constructor(username) {
        if (!username || username.length > 100) {
            throw new Error("Username tidak boleh null dan maksimal 100 karakter.");
        }

        this.id = Math.floor(10000 + Math.random() * 90000); // ID unik pengguna
        this.username = username; // Nama pengguna
        this.uploadedVideos = []; // Daftar video yang diupload oleh pengguna
    }

    /**
     * Menambahkan video ke daftar uploadedVideos
     * @param {SayaTubeVideo} video - Objek video yang akan ditambahkan
     */
    addVideo(video) {
        if (!video || video.getPlayCount() > Number.MAX_SAFE_INTEGER) {
            throw new Error("Video tidak boleh null dan playCount terlalu besar.");
        }

        this.uploadedVideos.push(video);
    }

    /**
     * Menghitung total play count dari semua video yang diupload
     * @returns {number}
     */
    getTotalVideoPlayCount() {
        return this.uploadedVideos.reduce((total, video) => total + video.getPlayCount(), 0);
    }

    /**
     * Menampilkan judul maksimal 8 video yang diupload pengguna ke konsol
     */
    printAllVideoPlaycount() {
        console.log(`\nUser: ${this.username}`);
        const limit = Math.min(this.uploadedVideos.length, 8);

        for (let i = 0; i < limit; i++) {
            console.log(`Video ${i + 1} judul: ${this.uploadedVideos[i].getTitle()}`);
        }
    }
}

// Contoh penggunaan kelas dengan error handling
try {
    const user = new SayaTubeUser("Gilang");

    const titles = [
        "Review Film Interstellar oleh Gilang",
        "Review Film Inception oleh Gilang",
        "Review Film Tenet oleh Gilang",
        "Review Film The Dark Knight oleh Gilang",
        "Review Film Oppenheimer oleh Gilang",
        "Review Film Dunkirk oleh Gilang",
        "Review Film Prestige oleh Gilang",
        "Review Film Memento oleh Gilang",
        "Review Film Parasite oleh Gilang",
        "Review Film The Matrix oleh Gilang"
    ];

    titles.forEach(title => {
        const video = new SayaTubeVideo(title);
        video.increasePlayCount(10);
        user.addVideo(video);
    });

    user.printAllVideoPlaycount();
    console.log("\nTotal Play Count:", user.getTotalVideoPlayCount());

    // Contoh video dengan play count besar untuk uji overflow
    const overflowVideo = new SayaTubeVideo("Video Uji Overflow");
    overflowVideo.increasePlayCount(Number.MAX_SAFE_INTEGER);

} catch (error) {
    console.error("Error:", error.message);
}
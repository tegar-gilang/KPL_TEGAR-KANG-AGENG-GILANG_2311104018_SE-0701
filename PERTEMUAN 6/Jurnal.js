    class SayaTubeVideo {
        constructor(title) {
        if (!title || title.length > 200) {
            throw new Error("Judul video tidak boleh null dan maksimal 200 karakter.");
        }
    
        this.id = Math.floor(10000 + Math.random() * 90000);
        this.title = title;
        this.playCount = 0;
        }
    
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
    
        printVideoDetails() {
        console.log(`Video ID     : ${this.id}`);
        console.log(`Judul Video  : ${this.title}`);
        console.log(`Play Count   : ${this.playCount}`);
        }
    
        getPlayCount() {
        return this.playCount;
        }
    
        getTitle() {
        return this.title;
        }
    }
    class SayaTubeUser {
        constructor(username) {
        if (!username || username.length > 100) {
            throw new Error("Username tidak boleh null dan maksimal 100 karakter.");
        }
    
        this.id = Math.floor(10000 + Math.random() * 90000);
        this.username = username;
        this.uploadedVideos = [];
        }
    
        addVideo(video) {
        if (!video || video.getPlayCount() > Number.MAX_SAFE_INTEGER) {
            throw new Error("Video tidak boleh null dan playCount terlalu besar.");
        }
    
        this.uploadedVideos.push(video);
        }
    
        getTotalVideoPlayCount() {
        return this.uploadedVideos.reduce((sum, v) => sum + v.getPlayCount(), 0);
        }
    
        printAllVideoPlaycount() {
        console.log(`\nUser: ${this.username}`);
        const limit = Math.min(this.uploadedVideos.length, 8); 
        for (let i = 0; i < limit; i++) {
            console.log(`Video ${i + 1} judul: ${this.uploadedVideos[i].getTitle()}`);
        }
        }
    }
    try {
        const user = new SayaTubeUser("Tegar Kang Ageng Gilang");
    
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
        const overflowVideo = new SayaTubeVideo("Video Uji Overflow");
        overflowVideo.increasePlayCount(Number.MAX_SAFE_INTEGER); 
    
    } catch (error) {
        console.error("Error:", error.message);
    }
console.log()
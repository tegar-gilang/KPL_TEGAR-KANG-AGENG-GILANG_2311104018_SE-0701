const fs = require('fs');
const crypto = require('crypto');
const readline = require('readline');
const path = require('path');

const userFile = path.join(__dirname, 'users.json');

function hashPassword(password) {
    return crypto.createHash('sha256').update(password).digest('hex');
}

// Validasi username
function isValidUsername(username) {
    const regex = /^[A-Za-z]{4,20}$/;
    return regex.test(username);
}

// Validasi password
function isValidPassword(password, username) {
    const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,20}$/;
    return regex.test(password) && !password.includes(username);
}

// Registrasi
function register(username, password) {
    if (!isValidUsername(username)) {
        console.log("Username tidak valid. Hanya huruf (A-Z), panjang 4-20 karakter.");
        return;
    }

    if (!isValidPassword(password, username)) {
        console.log("Password harus 8-20 karakter, mengandung angka & simbol (!@#$%^&*), dan tidak mengandung username.");
        return;
    }

    let users = {};
    if (fs.existsSync(userFile)) {
        users = JSON.parse(fs.readFileSync(userFile));
    }

    if (users[username]) {
        console.log("⚠️ Username sudah terdaftar.");
        return;
    }

    users[username] = hashPassword(password);
    fs.writeFileSync(userFile, JSON.stringify(users, null, 2));
    console.log("✅ Registrasi berhasil!");
}

// Login
function login(username, password) {
    if (!fs.existsSync(userFile)) {
        console.log("⚠️ Belum ada user terdaftar.");
        return;
    }

    const users = JSON.parse(fs.readFileSync(userFile));
    const hashed = hashPassword(password);

    if (users[username] && users[username] === hashed) {
        console.log("✅ Login berhasil!");
    } else {
        console.log("Username atau password salah.");
    }
}

// Interface CLI
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("=== Aplikasi Login Console ===");
console.log("1. Registrasi");
console.log("2. Login");
rl.question("Pilih opsi (1/2): ", (option) => {
    rl.question("Masukkan username: ", (username) => {
        rl.question("Masukkan password: ", (password) => {
            if (option === '1') {
                register(username, password);
            } else if (option === '2') {
                login(username, password);
            } else {
                console.log("Pilihan tidak valid.");
            }
            rl.close();
        });
    });
});
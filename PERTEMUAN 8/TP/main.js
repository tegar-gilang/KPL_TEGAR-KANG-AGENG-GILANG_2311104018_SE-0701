const readline = require('readline');
const BankTransferConfig = require('./bank_transfer');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const configLoader = new BankTransferConfig();
const config = configLoader.getConfig();

const lang = config.lang;
const threshold = config.transfer.threshold;
const lowFee = config.transfer.low_fee;
const highFee = config.transfer.high_fee;
const methods = config.methods;
const confirmation = config.confirmation;

const askAmount = lang === "en"
  ? "Please insert the amount of money to transfer: "
  : "Masukkan jumlah uang yang akan di-transfer: ";

rl.question(askAmount, (amountInput) => {
  const amount = parseInt(amountInput);
  const fee = amount <= threshold ? lowFee : highFee;
  const total = amount + fee;

  if (lang === "en") {
    console.log(`Transfer fee = ${fee}`);
    console.log(`Total amount = ${total}`);
    console.log(`\nSelect transfer method:`);
  } else {
    console.log(`Biaya transfer = ${fee}`);
    console.log(`Total biaya = ${total}`);
    console.log(`\nPilih metode transfer:`);
  }

  methods.forEach((method, i) => {
    console.log(`${i + 1}. ${method}`);
  });

  rl.question('\n> ', () => {
    const confirmPrompt = lang === "en"
      ? `Please type "${confirmation.en}" to confirm the transaction: `
      : `Ketik "${confirmation.id}" untuk mengkonfirmasi transaksi: `;

    rl.question(confirmPrompt, (confirmInput) => {
      const validConfirm = lang === "en" ? confirmation.en : confirmation.id;
      if (confirmInput.trim().toLowerCase() === validConfirm.toLowerCase()) {
        console.log(lang === "en" ? "The transfer is completed" : "Proses transfer berhasil");
      } else {
        console.log(lang === "en" ? "Transfer is cancelled" : "Transfer dibatalkan");
      }
      rl.close();
    });
  });
});
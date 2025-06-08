const fs = require('fs');

class BankTransferConfig {
  constructor() {
    const defaultConfig = {
      lang: "en",
      transfer: {
        threshold: 25000000,
        low_fee: 6500,
        high_fee: 15000
      },
      methods: ["RTO (real-time)", "SKN", "RTGS", "BI FAST"],
      confirmation: {
        en: "yes",
        id: "ya"
      }
    };

    try {
      const data = fs.readFileSync('./bank_transfer_config.json', 'utf-8');
      this.config = JSON.parse(data);
    } catch (error) {
      this.config = defaultConfig;
    }
  }

  getConfig() {
    return this.config;
  }
}

module.exports = BankTransferConfig;
const fs = require('fs');

class CovidConfig {
  constructor(filePath = 'covid_config.json') {
    this.filePath = filePath;
    this.defaultConfig = {
      satuan_suhu: 'celcius',
      batas_hari_deman: 14,
      pesan_ditolak: 'Anda tidak diperbolehkan masuk ',
      pesan_diterima: 'Anda dipersilahkan untuk masuk '
    };

    this.config = this.loadConfig();
  }

  loadConfig() {
    if (!fs.existsSync(this.filePath)) {
      this.saveConfig(this.defaultConfig);
      return this.defaultConfig;
    }

    const data = fs.readFileSync(this.filePath, 'utf-8');
    return JSON.parse(data);
  }

  saveConfig(config) {
    fs.writeFileSync(this.filePath, JSON.stringify(config, null, 2));
  }

  getConfig() {
    return this.config;
  }

  ubahSatuan() {
    this.config.satuan_suhu = this.config.satuan_suhu === 'celcius' ? 'fahrenheit' : 'celcius';
    this.saveConfig(this.config);
    console.log(`Satuan suhu telah diubah menjadi ${this.config.satuan_suhu}`);
  }
}

module.exports = CovidConfig;
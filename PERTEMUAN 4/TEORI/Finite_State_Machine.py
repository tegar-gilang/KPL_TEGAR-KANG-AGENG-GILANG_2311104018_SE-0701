class VendingMachineFSM:
    def __init__(self):
        self.state = "Idle"
        self.transitions = {
            "Idle": {
                "Masukkan Uang": "MenungguProduk"
            },
            "MenungguProduk": {
                "Pilih Produk": "MengeluarkanProduk",
                "Reset": "Idle"
            },
            "MengeluarkanProduk": {
                "Keluarkan Produk": "Selesai"
            },
            "Selesai": {}
        }

    def trigger(self, action):
        if action in self.transitions[self.state]:
            self.state = self.transitions[self.state][action]
            print(f"State sekarang: {self.state}")
        else:
            print(f"Tidak bisa melakukan aksi '{action}' dari state '{self.state}'")

# Contoh penggunaan
fsm = VendingMachineFSM()
fsm.trigger("Masukkan Uang")
fsm.trigger("Pilih Produk")
fsm.trigger("Keluarkan Produk")

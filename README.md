# Tes Frontend Talenavi - Fullstack 

Proyek ini merupakan hasil *slicing* desain halaman Login dari Figma menjadi halaman website yang sepenuhnya responsif menggunakan HTML, CSS, dan Vanilla JavaScript.

**Author:** Ignasius Dhimas Panji Utomo  
**Live Demo:** [https://ignasiusdhimas.github.io/Talenavi-IgnasiusDhimasPanjiUtomo-FrontEnd/](https://ignasiusdhimas.github.io/Talenavi-IgnasiusDhimasPanjiUtomo-FrontEnd/)
## Tech Stack

- **HTML5** — Struktur halaman
- **CSS3** — Flexbox layouting & Responsive Media Queries
- **JavaScript (Vanilla)** — Validasi form & integrasi `localStorage`
- **Google Fonts** — *Poppins*

---

## Fitur & Ketentuan yang Dipenuhi

1. **Responsiveness**
   - **Desktop (`≥ 1024px`)**: Menggunakan tata letak horizontal kiri–kanan di dalam *card* utama dengan poster banner di sisi kiri dan formulir login di sisi kanan.
   - **Mobile (`≤ 768px`)**: Menggunakan tata letak satu kolom di mana poster banner berubah menjadi *background* layar penuh dengan lapisan *overlay* gelap, dan formulir login diposisikan di tengah layar.

2. **Validasi Form**
   - Memastikan format **Email** valid menggunakan *Regular Expression (Regex)*.
   - Memastikan **Password** memiliki panjang minimal **6 karakter**.
   - Menampilkan pesan *error* secara langsung di bawah kolom input jika validasi gagal tanpa menggeser tata letak elemen lain.

3. **Penyimpanan Data & Notifikasi**
   - Jika seluruh input valid saat tombol **Sign In** ditekan, data login disimpan ke dalam **`localStorage`** browser.
   - Menampilkan notifikasi `alert("Login berhasil!")` serta mencetak detail informasi ke `console.log`.

---

## Struktur Proyek

```text
Talenavi-IgnasiusDhimasPanjiUtomo-FrontEnd/
├── foto/
│   ├── banner.png         # Aset poster utama
│   └── logotalenavi.png   # Aset logo perusahaan
├── index.html             # Struktur semantik halaman login
├── style.css              # Styling presisi & media queries responsif
├── script.js              # Logika validasi form & penyimpanan localStorage
└── README.md              # Dokumentasi proyek
```

---

## Cara Menjalankan di Lokal

1. *Clone* repository ini:
   ```bash
   git clone https://github.com
   ```
2. Buka folder proyek dan jalankan file **`index.html`** langsung di browser (atau gunakan ekstensi **Live Server** di VS Code).

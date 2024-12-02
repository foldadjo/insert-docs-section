
# Insert Doc Section

## Overview

**Insert Doc Section** adalah extension Visual Studio Code yang mempermudah pengembang Angular dalam menambahkan komentar dokumentasi ke dalam file TypeScript. Dengan mengetik `//@`, extension ini akan memberikan pilihan seperti `Properties`, `Lifecycle Hooks`, `Method`, atau `Input`. Setelah memilih salah satu, akan secara otomatis menghasilkan format komentar yang sesuai.

---

## Features

- **Autocomplete untuk Dokumentasi**:
  
  Ketik `//` untuk memunculkan pilihan dokumentasi.

- **Pilihan Dokumentasi**:
  
  - Properties
  - Lifecycle Hooks
  - Method
  - Input
  - Accessor
  - Output
  - Public Methods
  - Private Methods

- **Format Otomatis**:

  Contoh hasil:
  
  ```typescript
  // -----------------------------------------------------------------------------------------------------
  // @ Method
  // -----------------------------------------------------------------------------------------------------
  ```

---

## Installation

### Prasyarat

Pastikan Anda sudah menginstal **Visual Studio Code** di komputer Anda.

### Langkah-langkah Instalasi

1. Buka **Visual Studio Code**.
2. Buka panel **Extensions** (dengan menekan `Ctrl+Shift+X`).
3. Cari **Insert Doc Section** di kolom pencarian ekstensi.
4. Klik **Install** untuk menginstal extension.

---

## Usage

1. Buka file TypeScript di VS Code.
2. Ketik `//@` pada lokasi tempat Anda ingin menambahkan komentar dokumentasi.
3. Pilih tipe dokumentasi yang diinginkan dari dropdown yang muncul.
4. Dokumentasi akan secara otomatis ditambahkan dengan format yang sesuai.

Contoh penggunaan:

```typescript
//Method

```

Hasil otomatis:

```typescript
// -----------------------------------------------------------------------------------------------------
// @ Method
// -----------------------------------------------------------------------------------------------------
```

---

## Development

### Konfigurasi

- **Entry Point Extension**: `src/extension.ts`

### Struktur Folder

``` insert-doc-section/
├── src/
│   ├── extension.ts        # Logika utama extension
│   └── snippets.json       # Konfigurasi snippets
├── language-configuration.json # Konfigurasi komentar dan pasangan karakter
├── package.json            # Metadata extension
├── tsconfig.json           # Konfigurasi TypeScript
└── README.md               # Dokumentasi proyek
```

### Menjalankan Extension dalam Mode Debugging

1. Jalankan perintah berikut untuk memulai mode debug di VS Code:
   - Tekan `F5` untuk menjalankan extension dalam mode pengembangan.

2. Setelah extension berjalan, Anda dapat mengetik `//` pada file TypeScript dan mencoba fitur autocomplete.

### Menambahkan Fitur Baru

1. Fork repository ini.
2. Buat branch baru:

   ```bash
   git checkout -b feature/nama-fitur-anda
   ```

3. Commit perubahan Anda:

   ```bash
   git commit -m "Menambahkan fitur baru"
   ```

4. Push perubahan ke branch Anda:

   ```bash
   git push origin feature/nama-fitur-anda
   ```

5. Kirim **Pull Request** untuk review.

---

## License

[MIT License](LICENSE)

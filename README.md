Interview Test DMS FE: Next.js + AMP

Teknologi yang Digunakan
Next.js 15 (App Router)

TypeScript

AMP (Accelerated Mobile Pages)

Tailwind CSS untuk styling

Atomic Design sebagai metodologi arsitektur komponen

Panduan Menjalankan Proyek
Berikut adalah langkah-langkah untuk menjalankan aplikasi ini secara lokal.

1. Kloning Repository
Pertama, kloning repository ini ke mesin lokal Anda.

git clone
cd [nama-folder-proyek]

1. Instalasi Dependensi
Instal semua dependensi yang dibutuhkan menggunakan npm.

npm install

3. Mode Development
Jalankan server development untuk memulai aplikasi.

npm run dev

Aplikasi akan tersedia di <http://localhost:3000>.

4. Mode Produksi (Untuk Pengujian)
Untuk melakukan pengujian performa yang akurat dengan Lighthouse, jalankan aplikasi dalam mode produksi.

npm run build
npm start

Aplikasi akan berjalan di <http://localhost:3000>.

Validasi dan Pengujian
Uji Lighthouse
Untuk memvalidasi skor, jalankan audit Lighthouse menggunakan Google Chrome.

Buka browser dalam mode Incognito.

Buka Developer Tools (F12) dan pilih tab Lighthouse.

Atur Device ke Mobile.

Jalankan audit untuk rute / dan /amp.

Validasi AMP
Untuk memastikan halaman AMP valid:

Buka halaman <http://localhost:3000/amp#development=1>.

Buka Developer Tools dan periksa Console. Seharusnya akan muncul pesan AMP validation successful.

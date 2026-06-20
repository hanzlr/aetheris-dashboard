# 📋 Changelog

Semua perubahan penting pada project UMB Esport Dashboard akan didokumentasikan di sini.

---

## [v1.2.0] - 2026

### 🎨 UI/UX Refresh
- Tema warna baru: purple, blue, dan gold, konsisten dengan mascot Aetheris
- Banner mascot custom di halaman login (hero image)
- Icon mascot bulat di navbar dan favicon browser
- Ilustrasi mascot untuk empty state (saat tidak ada event aktif)
- Footer baru di halaman dashboard (brand + link GitHub)

### ✨ Fitur Baru
- 📊 Stats ringkasan di atas Member Leaderboard: total member, status event aktif, jumlah premium key terpakai
- ↕️ Sorting tabel member — klik header Level/XP/Koin/Total Pesan untuk sort ascending/descending
- 🔔 Notifikasi toast menggantikan `alert()` browser bawaan untuk semua aksi (tambah/kurangi XP & koin, hapus key)
- ⚠️ Modal konfirmasi custom menggantikan `window.confirm()` untuk aksi destruktif (reset member, hapus premium key, stop event)
- ⌨️ Login bisa langsung pakai tombol Enter di field email/password
- 🧑 Avatar inisial di kolom Username pada tabel member
- 🏷️ Badge level dengan style pill bergradasi
- ⏳ Loading state dengan spinner, menggantikan teks "Loading..." polos
- 🖱️ Custom scrollbar yang menyesuaikan tema gelap

---

## [v1.1.0] - 2026

### ✨ Fitur Baru

##### ⭐ Premium Keys
- Generate premium key dengan pilihan durasi (1 Bulan / 3 Bulan / Permanent)
- Lihat daftar semua key beserta status penggunaan
- Hapus key yang sudah tidak diperlukan

##### 👥 Member Leaderboard
- 🔍 Search/filter member berdasarkan username

---

## [v1.0.0] - 2026

### 🎉 Initial Release

#### ✨ Fitur Baru

##### 👥 Member Leaderboard
- Lihat ranking semua member berdasarkan XP
- Tambah/kurangi XP per member
- Tambah/kurangi koin per member

##### ⚙️ Admin Tools
- 📢 Kirim announcement ke channel Discord manapun
- 🎁 Give loot box (Common/Rare/Legendary) ke member tertentu
- 🔄 Reset semua data member

##### 🎉 Event System
- Lihat status event yang sedang berjalan
- Start event baru (Double XP, Double Coins, Fishing Frenzy, Loot Rain)
- Stop event kapanpun
- Pilih channel untuk announcement event
- Pilih multiplier event (2x, 3x, 5x)
- Atur durasi event (jam)

#### 🔐 Authentication
- Login via Supabase Auth
- Auto redirect ke dashboard setelah login
- Logout button

---

## [Upcoming]

### ⏳ Fitur Yang Direncanakan
- 📊 Filter leaderboard by level/koin/pesan
- 📈 Grafik statistik server
- 🔢 Pagination untuk leaderboard member
- 📋 Copy-to-clipboard untuk premium key yang baru dibuat
- 🟢 Indikator status koneksi API bot di navbar

---

*Dibuat oleh **Hanz** dari **NEXALAB***
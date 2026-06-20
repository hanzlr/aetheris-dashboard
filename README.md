<p align="center">
     <img src="./assets/aetheris-banner.png" alt="Aetheris Dashboard Banner" width="100%">
</p>

# 🎮 Aetheris Bot Dashboard

![HTML](https://img.shields.io/badge/HTML-5-orange)
![CSS](https://img.shields.io/badge/CSS-3-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-yellow)
![Supabase](https://img.shields.io/badge/Database-Supabase-3ECF8E)
![Vercel](https://img.shields.io/badge/Hosted-Vercel-black)
![License](https://img.shields.io/badge/License-MIT-yellow)

Web dashboard admin untuk bot Discord Aetheris. Dibangun dengan HTML, CSS, dan JavaScript vanilla.

## ✨ Fitur

- 👥 **Member Leaderboard** — Lihat ranking member berdasarkan XP, dengan search/filter dan sorting kolom
- ✏️ **Edit Member** — Tambah/kurangi XP dan koin member
- 📢 **Announcement** — Kirim pengumuman ke channel Discord via bot
- 🎁 **Give Loot Box** — Kasih loot box ke member tertentu
- 🔄 **Reset Member** — Reset semua data member
- 🎉 **Event System** — Start/stop event (Double XP, Double Coins, dll)
- ⭐ **Premium Keys** — Generate dan hapus premium redeem key
- 📊 **Stats Overview** — Ringkasan total member, status event, dan jumlah premium key terpakai

## 🎨 UI/UX

- Tema warna purple/blue/gold yang konsisten dengan mascot Aetheris
- Mascot & banner custom di halaman login, navbar, dan empty state
- Notifikasi toast (menggantikan alert browser bawaan)
- Modal konfirmasi custom untuk aksi destruktif (reset member, hapus key, stop event)
- Sorting tabel member (klik header Level/XP/Koin/Total Pesan)
- Loading state dengan spinner
- Login bisa langsung pakai tombol **Enter**

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript (Vanilla)
- **Auth**: Supabase Auth
- **Database**: Supabase (PostgreSQL)
- **Hosting**: Vercel
- **Bot API**: Express.js (Railway)

## 📁 Struktur Folder

```
aetheris-dashboard/
├── index.html          # Halaman login
├── dashboard.html      # Halaman dashboard utama
├── css/
│   └── style.css       # Styling
├── js/
│   ├── supabase.js     # Supabase client
│   ├── auth.js         # Autentikasi
│   └── dashboard.js    # Logic dashboard
└── assets/
    ├── aetheris-banner.png   # Banner login & README
    ├── round-mascot.png      # Icon navbar & favicon
    └── aetheris-mascot.png   # Ilustrasi empty state
```

## ⚙️ Environment Variables

Dashboard menggunakan Supabase anon key yang di-hardcode di `js/supabase.js`:

```javascript
const SUPABASE_URL = 'your_supabase_url'
const SUPABASE_KEY = 'your_supabase_anon_key'
```

Dan API bot di `js/dashboard.js`:

```javascript
const API_URL = 'https://aetheris-bot-production.up.railway.app'
const API_KEY = 'your_api_secret_key'
```

> ⚠️ **Catatan keamanan**: kedua key di atas berjalan di sisi client (browser), jadi tetap bisa dilihat siapa pun lewat DevTools meskipun halaman login di-protect. Jangan pakai key dengan privilese tinggi di sini, dan pertimbangkan proxy/backend untuk produksi jangka panjang.

## 🚀 Cara Setup

1. Clone repository
```bash
git clone https://github.com/hanzlr/aetheris-dashboard.git
cd aetheris-dashboard
```
2. Isi Supabase credentials di `js/supabase.js`
3. Isi API URL dan key di `js/dashboard.js`
4. Pastikan folder `assets/` berisi `aetheris-banner.png`, `round-mascot.png`, dan `aetheris-mascot.png`
5. Deploy ke Vercel atau buka `index.html` di browser

## 📋 Fitur Dashboard

### 👥 Member Leaderboard
- Lihat semua member berdasarkan ranking XP
- 🔍 Search/filter member berdasarkan username
- ↕️ Sort tabel berdasarkan Level, XP, Koin, atau Total Pesan
- Tambah/kurangi XP per member
- Tambah/kurangi koin per member
- Stats ringkasan: total member, status event aktif, jumlah premium key terpakai

### ⚙️ Admin Tools
- 📢 Kirim announcement ke channel Discord manapun
- 🎁 Give loot box (Common/Rare/Legendary) ke member
- 🔄 Reset semua data member (dengan modal konfirmasi)

### 🎉 Event System
- Lihat status event yang sedang berjalan
- Start event baru dengan pilihan:
  - 🎉 Double XP
  - 💰 Double Coins
  - 🎣 Fishing Frenzy
  - 🎁 Loot Rain
- Stop event kapanpun (dengan modal konfirmasi)
- Pilih channel untuk announcement event

### ⭐ Premium Keys
- Generate premium key dengan pilihan durasi (1 Bulan / 3 Bulan / Permanent)
- Lihat daftar semua key beserta status (Used/Unused) dan siapa yang memakai
- Hapus key yang sudah tidak diperlukan (dengan modal konfirmasi)

## 🔗 Links

- **Dashboard**: https://dashboardbot-nine.vercel.app
- **Bot Repository**: https://github.com/hanzlr/aetheris-bot
- **Bot API**: https://aetheris-bot-production.up.railway.app
- **Landing Page**: https://aetheris.nexalab.my.id

## 📋 Changelog

Lihat semua perubahan di [CHANGELOG.md](CHANGELOG.md)

## 👤 Developer

Dibuat oleh **hanzlr** dari **NEXALAB**
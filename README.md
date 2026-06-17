# 🎮 UMB Esport Dashboard

![HTML](https://img.shields.io/badge/HTML-5-orange)
![CSS](https://img.shields.io/badge/CSS-3-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-yellow)
![Supabase](https://img.shields.io/badge/Database-Supabase-3ECF8E)
![Vercel](https://img.shields.io/badge/Hosted-Vercel-black)
![License](https://img.shields.io/badge/License-MIT-yellow)

Web dashboard admin untuk bot Discord UMB Esport. Dibangun dengan HTML, CSS, dan JavaScript vanilla.

## ✨ Fitur

- 👥 **Member Leaderboard** — Lihat ranking member berdasarkan XP
- ✏️ **Edit Member** — Tambah/kurangi XP dan koin member
- 📢 **Announcement** — Kirim pengumuman ke channel Discord via bot
- 🎁 **Give Loot Box** — Kasih loot box ke member tertentu
- 🔄 **Reset Member** — Reset semua data member
- 🎉 **Event System** — Start/stop event (Double XP, Double Coins, dll)

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript (Vanilla)
- **Auth**: Supabase Auth
- **Database**: Supabase (PostgreSQL)
- **Hosting**: Vercel
- **Bot API**: Express.js (Railway)

## 📁 Struktur Folder
```
umb-esport-dashboard/
├── index.html          # Halaman login
├── dashboard.html      # Halaman dashboard utama
├── css/
│   └── style.css       # Styling
└── js/
    ├── supabase.js     # Supabase client
    ├── auth.js         # Autentikasi
    └── dashboard.js    # Logic dashboard
```

## ⚙️ Environment Variables

Dashboard menggunakan Supabase anon key yang di-hardcode di `js/supabase.js`:

```javascript
const SUPABASE_URL = 'your_supabase_url'
const SUPABASE_KEY = 'your_supabase_anon_key'
```

Dan API bot di `js/dashboard.js`:

```javascript
const API_URL = 'https://umb-esport-bot-production-abed.up.railway.app'
const API_KEY = 'your_api_secret_key'
```

## 🚀 Cara Setup

1. Clone repository
```bash
git clone https://github.com/hanzlr/umb-esport-dashboard.git
cd umb-esport-dashboard
```

2. Isi Supabase credentials di `js/supabase.js`

3. Isi API URL dan key di `js/dashboard.js`

4. Deploy ke Vercel atau buka `index.html` di browser

## 📋 Fitur Dashboard

### 👥 Member Leaderboard
- Lihat semua member berdasarkan ranking XP
- Tambah/kurangi XP per member
- Tambah/kurangi koin per member

### ⚙️ Admin Tools
- 📢 Kirim announcement ke channel Discord manapun
- 🎁 Give loot box (Common/Rare/Legendary) ke member
- 🔄 Reset semua data member

### 🎉 Event System
- Lihat status event yang sedang berjalan
- Start event baru dengan pilihan:
  - 🎉 Double XP
  - 💰 Double Coins
  - 🎣 Fishing Frenzy
  - 🎁 Loot Rain
- Stop event kapanpun
- Pilih channel untuk announcement event

## 🔗 Links

- **Dashboard**: https://dashboardbot-nine.vercel.app
- **Bot Repository**: https://github.com/hanzlr/umb-esport-bot
- **Bot API**: https://umb-esport-bot-production-abed.up.railway.app

## 👤 Developer

Dibuat oleh **hanzlr** dari **NEXALAB** untuk UMB Esport

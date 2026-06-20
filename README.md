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

Admin web dashboard for the Aetheris Discord bot. Built with HTML, CSS, and vanilla JavaScript.

## ✨ Features

- 👥 **Member Leaderboard** — View member rankings based on XP, with search/filter and column sorting
- ✏️ **Edit Member** — Add/remove XP and coins for any member
- 📢 **Announcement** — Send announcements to a Discord channel via the bot
- 🎁 **Give Loot Box** — Grant a loot box to a specific member
- 🔄 **Reset Member** — Reset all data for a member
- 🎉 **Event System** — Start/stop server events (Double XP, Double Coins, etc.)
- ⭐ **Premium Keys** — Generate and delete premium redeem keys
- 📊 **Stats Overview** — Summary of total members, active event status, and number of premium keys used

## 🎨 UI/UX

- Purple/blue/gold color theme consistent with the Aetheris mascot
- Custom mascot & banner on the login page, navbar, and empty states
- Toast notifications (replacing the browser's default alert)
- Custom confirmation modals for destructive actions (reset member, delete key, stop event)
- Sortable member table (click the Level/XP/Coins/Total Messages header)
- Loading state with spinner
- Login can be submitted directly with the **Enter** key

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript (Vanilla)
- **Auth**: Supabase Auth
- **Database**: Supabase (PostgreSQL)
- **Hosting**: Vercel
- **Bot API**: Express.js (Railway)

## 📁 Folder Structure

```
aetheris-dashboard/
├── index.html          # Login page
├── dashboard.html      # Main dashboard page
├── css/
│   └── style.css       # Styling
├── js/
│   ├── supabase.js     # Supabase client
│   ├── auth.js         # Authentication
│   └── dashboard.js    # Dashboard logic
└── assets/
├── aetheris-banner.png   # Login & README banner
├── round-mascot.png      # Navbar & favicon icon
└── aetheris-mascot.png   # Empty state illustration
```

## ⚙️ Environment Variables

The dashboard uses a Supabase anon key hardcoded in `js/supabase.js`:

```javascript
const SUPABASE_URL = 'your_supabase_url'
const SUPABASE_KEY = 'your_supabase_anon_key'
```

And the bot API in `js/dashboard.js`:

```javascript
const API_URL = 'https://aetheris-bot-production.up.railway.app'
const API_KEY = 'your_api_secret_key'
```

> ⚠️ **Security note**: both keys above run on the client side (browser), so they can still be viewed by anyone via DevTools even if the login page is protected. Don't use high-privilege keys here, and consider a proxy/backend for long-term production use.

## 🚀 Setup

1. Clone the repository
```bash
git clone https://github.com/hanzlr/aetheris-dashboard.git
cd aetheris-dashboard
```
2. Fill in your Supabase credentials in `js/supabase.js`
3. Fill in the API URL and key in `js/dashboard.js`
4. Make sure the `assets/` folder contains `aetheris-banner.png`, `round-mascot.png`, and `aetheris-mascot.png`
5. Deploy to Vercel or open `index.html` in your browser

## 📋 Dashboard Features

### 👥 Member Leaderboard
- View all members ranked by XP
- 🔍 Search/filter members by username
- ↕️ Sort the table by Level, XP, Coins, or Total Messages
- Add/remove XP per member
- Add/remove coins per member
- Summary stats: total members, active event status, number of premium keys used

### ⚙️ Admin Tools
- 📢 Send announcements to any Discord channel
- 🎁 Give a loot box (Common/Rare/Legendary) to a member
- 🔄 Reset all data for a member (with confirmation modal)

### 🎉 Event System
- View the currently active event
- Start a new event with options:
  - 🎉 Double XP
  - 💰 Double Coins
  - 🎣 Fishing Frenzy
  - 🎁 Loot Rain
- Stop an event at any time (with confirmation modal)
- Choose a channel for the event announcement

### ⭐ Premium Keys
- Generate a premium key with a chosen duration (1 Month / 3 Months / Permanent)
- View a list of all keys with their status (Used/Unused) and who redeemed them
- Delete keys that are no longer needed (with confirmation modal)

## 🔗 Links

- **Dashboard**: https://dashboardbot-nine.vercel.app
- **Bot Repository**: https://github.com/hanzlr/aetheris-bot
- **Bot API**: https://aetheris-bot-production.up.railway.app
- **Landing Page**: https://aetheris.nexalab.my.id

## 📋 Changelog

See all changes in [CHANGELOG.md](CHANGELOG.md)

## 👤 Developer

Built by **hanzlr** from **NEXALAB**
# 📋 Changelog

All notable changes to the Aetheris Dashboard project will be documented here.

---

## [v1.2.0] - 2026

### 🎨 UI/UX Refresh
- New color theme: purple, blue, and gold, consistent with the Aetheris mascot
- Custom mascot banner on the login page (hero image)
- Round mascot icon in the navbar and browser favicon
- Mascot illustration for empty states (when no event is active)
- New footer on the dashboard page (brand + GitHub link)

### ✨ New Features
- 📊 Summary stats above the Member Leaderboard: total members, active event status, number of premium keys used
- ↕️ Sortable member table — click the Level/XP/Coins/Total Messages header to sort ascending/descending
- 🔔 Toast notifications replacing the browser's default `alert()` for all actions (add/remove XP & coins, delete key)
- ⚠️ Custom confirmation modals replacing `window.confirm()` for destructive actions (reset member, delete premium key, stop event)
- ⌨️ Login can be submitted directly with the Enter key in the email/password fields
- 🧑 Initial avatar in the Username column of the member table
- 🏷️ Level badge with gradient pill style
- ⏳ Loading state with spinner, replacing the plain "Loading..." text
- 🖱️ Custom scrollbar matching the dark theme

---

## [v1.1.0] - 2026

### ✨ New Features

##### ⭐ Premium Keys
- Generate a premium key with a chosen duration (1 Month / 3 Months / Permanent)
- View a list of all keys along with their usage status
- Delete keys that are no longer needed

##### 👥 Member Leaderboard
- 🔍 Search/filter members by username

---

## [v1.0.0] - 2026

### 🎉 Initial Release

#### ✨ New Features

##### 👥 Member Leaderboard
- View all members ranked by XP
- Add/remove XP per member
- Add/remove coins per member

##### ⚙️ Admin Tools
- 📢 Send announcements to any Discord channel
- 🎁 Give a loot box (Common/Rare/Legendary) to a specific member
- 🔄 Reset all data for a member

##### 🎉 Event System
- View the currently active event
- Start a new event (Double XP, Double Coins, Fishing Frenzy, Loot Rain)
- Stop an event at any time
- Choose a channel for the event announcement
- Choose an event multiplier (2x, 3x, 5x)
- Set the event duration (in hours)

#### 🔐 Authentication
- Login via Supabase Auth
- Auto redirect to the dashboard after login
- Logout button

---

## [Upcoming]

### ⏳ Planned Features
- 📊 Filter leaderboard by level/coins/messages
- 📈 Server statistics chart
- 🔢 Pagination for the member leaderboard
- 📋 Copy-to-clipboard for newly generated premium keys
- 🟢 Bot API connection status indicator in the navbar

---

*Built by **Hanz** from **NEXALAB***
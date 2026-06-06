import { supabase } from './supabase.js'
import { checkAuth, logout } from './auth.js'

// Cek auth dulu
await checkAuth()

// Logout button
document.getElementById('logout-btn').addEventListener('click', logout)

// Ambil semua member dari Supabase
async function loadMembers() {
  const { data, error } = await supabase
    .from('levels')
    .select('*')
    .order('xp', { ascending: false })

  if (error) {
    console.error(error)
    return
  }

  renderTable(data)
}

// Render tabel member
function renderTable(members) {
  const tbody = document.getElementById('members-table')
  tbody.innerHTML = ''

  members.forEach((member, index) => {
    const row = document.createElement('tr')
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${member.username}</td>
      <td>${member.level}</td>
      <td>${member.xp}</td>
      <td>${member.total_messages}</td>
      <td>
        <button onclick="addXP('${member.user_id}', '${member.username}', ${member.xp})">➕ XP</button>
        <button onclick="removeXP('${member.user_id}', '${member.username}', ${member.xp})">➖ XP</button>
      </td>
    `
    tbody.appendChild(row)
  })
}

// Tambah XP
window.addXP = async function(userId, username, currentXP) {
  const amount = prompt(`Tambah berapa XP untuk ${username}?`)
  if (!amount || isNaN(amount)) return

  const newXP = currentXP + parseInt(amount)
  const newLevel = calculateLevel(newXP)

  await supabase
    .from('levels')
    .update({ xp: newXP, level: newLevel })
    .eq('user_id', userId)

  alert(`✅ XP ${username} berhasil ditambah!`)
  loadMembers()
}

// Kurangi XP
window.removeXP = async function(userId, username, currentXP) {
  const amount = prompt(`Kurangi berapa XP untuk ${username}?`)
  if (!amount || isNaN(amount)) return

  const newXP = Math.max(0, currentXP - parseInt(amount))
  const newLevel = calculateLevel(newXP)

  await supabase
    .from('levels')
    .update({ xp: newXP, level: newLevel })
    .eq('user_id', userId)

  alert(`✅ XP ${username} berhasil dikurangi!`)
  loadMembers()
}

// Hitung level dari XP
function calculateLevel(xp) {
  let level = 0
  while (xp >= (5 * ((level + 1) ** 2) + 50 * (level + 1) + 100)) {
    level++
  }
  return level
}

// Load data saat halaman dibuka
loadMembers()
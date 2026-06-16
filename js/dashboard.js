import { supabase } from './supabase.js'
import { checkAuth, logout } from './auth.js'

await checkAuth()

const API_URL = 'https://umb-esport-bot-production.up.railway.app'
const API_KEY = 'umb-esport-2024-secret-key'

document.getElementById('logout-btn').addEventListener('click', logout)

// ============================================================
// TAB NAVIGATION
// ============================================================
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'))
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'))
    btn.classList.add('active')
    document.getElementById(`tab-${btn.dataset.tab}`).classList.add('active')
  })
})

// ============================================================
// LOAD MEMBERS
// ============================================================
async function loadMembers() {
  const { data, error } = await supabase
    .from('levels')
    .select('*')
    .order('xp', { ascending: false })

  if (error) { console.error(error); return }

  renderTable(data)
  populateMemberDropdowns(data)
}

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
      <td>${member.coins || 0}</td>
      <td>${member.total_messages}</td>
      <td>
        <button onclick="addXP('${member.user_id}', '${member.username}', ${member.xp})">➕ XP</button>
        <button onclick="removeXP('${member.user_id}', '${member.username}', ${member.xp})">➖ XP</button>
        <button onclick="addCoins('${member.user_id}', '${member.username}', ${member.coins || 0})">➕ Koin</button>
        <button onclick="removeCoins('${member.user_id}', '${member.username}', ${member.coins || 0})">➖ Koin</button>
      </td>
    `
    tbody.appendChild(row)
  })
}

function populateMemberDropdowns(members) {
  const giveboxSelect = document.getElementById('givebox-member')
  const resetSelect = document.getElementById('reset-member')

  const options = members.map(m => `<option value="${m.user_id}">${m.username}</option>`).join('')
  giveboxSelect.innerHTML = '<option value="">Pilih member...</option>' + options
  resetSelect.innerHTML = '<option value="">Pilih member...</option>' + options
}

// ============================================================
// LOAD CHANNELS
// ============================================================
async function loadChannels() {
  try {
    const res = await fetch(`${API_URL}/channels`, {
      headers: { 'x-api-key': API_KEY }
    })
    const channels = await res.json()
    const select = document.getElementById('announce-channel')
    select.innerHTML = '<option value="">Pilih channel...</option>' +
      channels.map(c => `<option value="${c.id}">#${c.name}</option>`).join('')
  } catch (error) {
    console.error('Error loading channels:', error)
  }
}

// ============================================================
// ANNOUNCEMENT
// ============================================================
document.getElementById('announce-btn').addEventListener('click', async () => {
  const channelId = document.getElementById('announce-channel').value
  const message = document.getElementById('announce-message').value
  const mention = document.getElementById('announce-mention').value
  const status = document.getElementById('announce-status')

  if (!channelId) return status.textContent = '❌ Pilih channel dulu!'
  if (!message) return status.textContent = '❌ Tulis pesan dulu!'

  status.textContent = '⏳ Mengirim...'

  try {
    const res = await fetch(`${API_URL}/announce`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': API_KEY },
      body: JSON.stringify({ channelId, message, mention })
    })
    const data = await res.json()
    if (data.success) {
      status.textContent = '✅ Announcement berhasil dikirim!'
      document.getElementById('announce-message').value = ''
    } else {
      status.textContent = `❌ ${data.error}`
    }
  } catch (error) {
    status.textContent = '❌ Gagal mengirim announcement!'
  }
})

// ============================================================
// GIVE LOOT BOX
// ============================================================
document.getElementById('givebox-btn').addEventListener('click', async () => {
  const userId = document.getElementById('givebox-member').value
  const boxType = document.getElementById('givebox-type').value
  const status = document.getElementById('givebox-status')

  if (!userId) return status.textContent = '❌ Pilih member dulu!'

  status.textContent = '⏳ Mengirim...'

  try {
    const res = await fetch(`${API_URL}/givebox`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': API_KEY },
      body: JSON.stringify({ userId, boxType })
    })
    const data = await res.json()
    if (data.success) {
      status.textContent = `✅ ${data.message}`
    } else {
      status.textContent = `❌ ${data.error}`
    }
  } catch (error) {
    status.textContent = '❌ Gagal give loot box!'
  }
})

// ============================================================
// RESET MEMBER
// ============================================================
document.getElementById('reset-btn').addEventListener('click', async () => {
  const userId = document.getElementById('reset-member').value
  const status = document.getElementById('reset-status')
  const memberName = document.getElementById('reset-member').selectedOptions[0]?.text

  if (!userId) return status.textContent = '❌ Pilih member dulu!'

  const confirm = window.confirm(`⚠️ Reset semua data ${memberName}? Tindakan ini tidak bisa dibatalkan!`)
  if (!confirm) return

  status.textContent = '⏳ Mereset...'

  try {
    const res = await fetch(`${API_URL}/resetuser`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': API_KEY },
      body: JSON.stringify({ userId })
    })
    const data = await res.json()
    if (data.success) {
      status.textContent = `✅ ${data.message}`
      loadMembers()
    } else {
      status.textContent = `❌ ${data.error}`
    }
  } catch (error) {
    status.textContent = '❌ Gagal reset member!'
  }
})

// ============================================================
// XP & COINS (existing functions)
// ============================================================
window.addXP = async function(userId, username, currentXP) {
  const amount = prompt(`Tambah berapa XP untuk ${username}?`)
  if (!amount || isNaN(amount)) return
  const newXP = currentXP + parseInt(amount)
  const newLevel = calculateLevel(newXP)
  await supabase.from('levels').update({ xp: newXP, level: newLevel }).eq('user_id', userId)
  alert(`✅ XP ${username} berhasil ditambah!`)
  loadMembers()
}

window.removeXP = async function(userId, username, currentXP) {
  const amount = prompt(`Kurangi berapa XP untuk ${username}?`)
  if (!amount || isNaN(amount)) return
  const newXP = Math.max(0, currentXP - parseInt(amount))
  const newLevel = calculateLevel(newXP)
  await supabase.from('levels').update({ xp: newXP, level: newLevel }).eq('user_id', userId)
  alert(`✅ XP ${username} berhasil dikurangi!`)
  loadMembers()
}

window.addCoins = async function(userId, username, currentCoins) {
  const amount = prompt(`Tambah berapa koin untuk ${username}?`)
  if (!amount || isNaN(amount)) return
  const newCoins = currentCoins + parseInt(amount)
  await supabase.from('levels').update({ coins: newCoins }).eq('user_id', userId)
  alert(`✅ Koin ${username} berhasil ditambah!`)
  loadMembers()
}

window.removeCoins = async function(userId, username, currentCoins) {
  const amount = prompt(`Kurangi berapa koin untuk ${username}?`)
  if (!amount || isNaN(amount)) return
  const newCoins = Math.max(0, currentCoins - parseInt(amount))
  await supabase.from('levels').update({ coins: newCoins }).eq('user_id', userId)
  alert(`✅ Koin ${username} berhasil dikurangi!`)
  loadMembers()
}

function calculateLevel(xp) {
  let level = 0
  while (xp >= (5 * ((level + 1) ** 2) + 50 * (level + 1) + 100)) { level++ }
  return level
}

// ============================================================
// INIT
// ============================================================
loadMembers()
loadChannels()
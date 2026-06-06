import { supabase } from './supabase.js'

// Login
export async function login(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  if (error) {
    alert('❌ Login gagal: ' + error.message)
    return
  }

  window.location.href = 'dashboard.html'
}

// Logout
export async function logout() {
  await supabase.auth.signOut()
  window.location.href = 'index.html'
}

// Cek apakah sudah login
export async function checkAuth() {
  const { data: { session } } = await supabase.auth.getSession()
  if (!session) {
    window.location.href = 'index.html'
  }
}
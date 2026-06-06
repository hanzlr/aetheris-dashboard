import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL = 'https://rywsowbpjnbthigfwdav.supabase.co'
const SUPABASE_KEY = 'sb_publishable_24JRMC6afz4_n1DQn9xngg_hsjHlyx5'

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
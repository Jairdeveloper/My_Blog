import { supabase } from './supabaseClient'

export async function fetchPosts() {
  const { data, error } = await supabase.from('posts').select('*').order('created_at', { ascending: false })
  if (error) throw error
  return data
}

export async function fetchPost(id) {
  const { data, error } = await supabase.from('posts').select('*').eq('id', id).single()
  if (error) throw error
  return data
}

export async function createOrUpdatePost(post) {
  const { data, error } = await supabase.from('posts').upsert(post).select().single()
  if (error) throw error
  return data
}

export async function deletePost(id) {
  const { error } = await supabase.from('posts').delete().eq('id', id)
  if (error) throw error
}

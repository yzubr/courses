import supabase from '@/modules/supabase'

export default function generateImageUrl(path: string) {
  const { data: { publicUrl } } = supabase.storage
    .from('images')
    .getPublicUrl(path)

  return publicUrl
}

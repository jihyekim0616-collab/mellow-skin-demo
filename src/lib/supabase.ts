import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabasePublishableKey) {
  console.error(
    'Supabase 환경변수가 설정되지 않았습니다. .env 설정(VITE_SUPABASE_URL, VITE_SUPABASE_PUBLISHABLE_KEY)을 확인하세요.'
  );
}

export const supabase = createClient(supabaseUrl || '', supabasePublishableKey || '');

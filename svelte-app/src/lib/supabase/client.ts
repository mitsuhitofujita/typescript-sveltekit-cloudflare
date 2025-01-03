import { createClient } from '@supabase/supabase-js';
import type { Database } from '../../supabase';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    throw new Error('Supabase environment variables are not set');
}

// 型定義を利用してクライアントを生成
export const supabase = createClient<Database>(supabaseUrl, supabaseKey);

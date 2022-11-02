import { createClient } from '@supabase/auth-helpers-sveltekit';

const supabaseUrl = 'https://fklvfqyrcegoiidormwa.supabase.co';
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZrbHZmcXlyY2Vnb2lpZG9ybXdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjcyMzM4MDUsImV4cCI6MTk4MjgwOTgwNX0.zG-1Fp6kxwrFjS_7hwKtYPDiMLjsThGkwJq0z0IZfVs';

export const supabase = createClient(supabaseUrl, supabaseKey);

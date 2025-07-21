import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://oocntlaqefigntbbkyjr.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9vY250bGFxZWZpZ250YmJreWpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY2MTgyODcsImV4cCI6MjA2MjE5NDI4N30.tAcr8jijf1PHlKnV2QOerxejOSC3V4u07LDJC1Dh57M"

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

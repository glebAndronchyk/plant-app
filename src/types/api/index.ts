import {PostgrestSingleResponse} from '@supabase/supabase-js';
import {Database, Tables} from '@app_types/generated/api.ts';

export type APIResponse<
  T extends keyof Database['public']['Tables'],
  A extends 'array' | 'non-array' = 'non-array',
> = PostgrestSingleResponse<A extends 'array' ? Tables<T>[] : Tables<T>>;

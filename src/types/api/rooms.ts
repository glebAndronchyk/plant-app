import {Database} from '@app_types/generated/api.ts';

export type RoomRow = Database['public']['Tables']['plant_rooms']['Row'];
export type RoomData = Omit<
  RoomRow,
  'created_at' | 'plants_amount' | 'id' | 'user_id'
>;

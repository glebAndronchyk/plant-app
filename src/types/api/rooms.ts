import {Tables} from '@app_types/generated/api.ts';

export type RoomRow = Tables<'plant_rooms'>;
export type RoomData = Omit<RoomRow, 'created_at' | 'user_id' | 'id'>;

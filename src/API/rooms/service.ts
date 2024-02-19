import {supabase} from '../index.ts';
import {RoomData} from '@app_types/api/rooms.ts';
import {APIResponse} from '@app_types/api';

export class RoomsService {
  private tableName = 'plant_rooms' as const;

  create = async (data: RoomData) =>
    await supabase.from(this.tableName).insert(data);

  remove = async (id: string) =>
    await supabase.from(this.tableName).delete().eq('id', id);

  update = async (id: string, data: RoomData) =>
    await supabase.from(this.tableName).update(data).eq('id', id);

  getSingle = async (id: string) =>
    (await supabase.from(this.tableName).select().eq('id', id)) as APIResponse<
      typeof this.tableName
    >;

  getAll = async () =>
    (await supabase.from(this.tableName).select()) as APIResponse<
      typeof this.tableName,
      'array'
    >;
}

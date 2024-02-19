import {supabase} from '../index.ts';
import {RoomData} from '@app_types/api/rooms.ts';

export class RoomsService {
  private tableName = 'plant_rooms';

  create = async (data: RoomData) =>
    await supabase.from(this.tableName).insert(data);

  remove = async (id: string) =>
    await supabase.from(this.tableName).delete().eq('id', id);

  update = async (id: string, data: RoomData) =>
    await supabase.from(this.tableName).update(data).eq('id', id);
}

import {RoomsService} from './service.ts';
import {RoomData} from '@app_types/api/rooms.ts';

export class RoomsController {
  constructor(private service: RoomsService) {}

  create = async (roomData: RoomData) => await this.service.create(roomData);
  update = async (id: string, roomData: RoomData) =>
    await this.service.update(id, roomData);
  remove = async (id: string) => await this.service.remove(id);
  getSingle = async (id: string) => await this.service.getSingle(id);
  getAll = async () => await this.service.getAll();
}

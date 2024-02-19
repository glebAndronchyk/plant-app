import {RoomsService} from './service.ts';
import {RoomData} from '@app_types/api/rooms.ts';

export class RoomsController {
  constructor(private service: RoomsService) {}

  create = async (roomData: RoomData) => {
    const {error, data} = await this.service.create(roomData);

    if (error) {
      throw new Error(`Error creating room: ${error.message}`);
    }

    return data;
  };

  update = async (id: string, roomData: RoomData) => {
    const {error, data} = await this.service.update(id, roomData);

    if (error) {
      throw new Error(`Error updating room: ${error.message}`);
    }

    return data;
  };
  remove = async (id: string) => {
    const {error, data} = await this.service.remove(id);

    if (error) {
      throw new Error(`Error removing room: ${error.message}`);
    }

    return data;
  };
}

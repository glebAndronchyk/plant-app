import {OSMService} from './service.ts';
import {OSMReverseSignature} from '@app_types/api/types.ts';

export class OSMController {
  constructor(private service: OSMService) {}
  getByLocation = async (data: OSMReverseSignature) =>
    await this.service.getByLocation(data);
}

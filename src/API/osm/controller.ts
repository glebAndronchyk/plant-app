import {OSMService} from './service.ts';
import {OSMLocationResponse, OSMReverseSignature} from '@app_types/api/osm.ts';

export class OSMController {
  constructor(private service: OSMService) {}
  getByLocation = async (data: OSMReverseSignature) => {
    const response = await this.service.getByLocation(data);

    return (await response.json()) as OSMLocationResponse;
  };
}

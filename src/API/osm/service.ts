import {getOsmReverseLink} from '@utils/osm.ts';
import {OSMReverseSignature} from '@app_types/api/osm.ts';

export class OSMService {
  getByLocation = async (data: OSMReverseSignature) =>
    await fetch(getOsmReverseLink(data), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept-Language': 'en-US, uk-UA;q=0.9',
      },
    });
}

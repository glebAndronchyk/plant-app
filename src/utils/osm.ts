import {LAT_KW, LON_KW, OSM_REVERSE} from '@constants/osm.ts';
import {OSMReverseSignature} from '@app_types/api/osm.ts';

export const getOsmReverseLink = ({lat, lon}: OSMReverseSignature) =>
  `${OSM_REVERSE}?${LAT_KW}=${lat}&${LON_KW}=${lon}&format=json`;

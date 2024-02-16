export interface OSMReverseSignature {
  lat: number;
  lon: number;
}

export interface OSMLocationResponse {
  address: {
    city: string;
    country: string;
  };

  // This interface can be extended accordingly to https://nominatim.org/release-docs/latest/api/Reverse/
}

export interface AppState {
  isAuthorized: boolean | null;
  globalAnimation: {
    name: string | null;
    keys: number[];
    status: string | null;
  };
}

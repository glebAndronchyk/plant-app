export type VoidFn = () => void;
export type ServiceFn = (...args: unknown[]) => Promise<unknown>;
export type OneOf<T, U = {[K in keyof T]: Pick<T, K>}> = U[keyof U];

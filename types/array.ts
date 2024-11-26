export type ArrayFirst<T extends unknown[]> = T extends [infer First, ...unknown[]]? First : never;

export type ArrayLast<T extends unknown[]> = T extends [...unknown[], infer Last]? Last : never;

export type PopArray<T extends unknown[]> = T extends [...infer Rest, unknown]? Rest : never;

export type ShiftArray<T extends unknown[]> = T extends [unknown, ...infer Rest]? Rest : never;
export type ArrayFirst<T extends unknown[]> = T extends [infer First, ...unknown[]]? First : never;

export type ArrayLast<T extends unknown[]> = T extends [...unknown[], infer Last]? Last : never;

export type PopArray<T extends unknown[]> = T extends [...infer Rest, unknown]? Rest : never;

export type ShiftArray<T extends unknown[]> = T extends [unknown, ...infer Rest]? Rest : never;

export type Push<T extends unknown[], P extends unknown> = P extends unknown[] ? [...T, ...P] : [...T, P]

export type UnShift<T extends unknown[], P extends unknown> = P extends unknown[] ? [...P, ...T] : [P, ...T];

export type ReverseArr<T extends unknown[]> = T extends [infer First, ...infer Rest] ? [...ReverseArr<Rest>, First] : T;

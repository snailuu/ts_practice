type GetParameters<T extends Function> = T extends (...args: infer P) => any ? P : never;

type GetReturnType<T extends Function> = T extends (...args: any[]) => infer R ? R : never;

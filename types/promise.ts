type DeepPromiseValueType<T> =
    T extends Promise<infer U> ? DeepPromiseValueType<U> : T;
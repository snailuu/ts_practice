import { WhiteSpace } from './constants';

export type StartWith<T extends string, Prex extends string> = T extends `${Prex}${string}` ? true : false;

export type ReplaceStr<
    Str extends string,
    From extends string,
    To extends string
> = Str extends `${infer Prefix}${From}${infer Suffix}`
    ? `${Prefix}${To}${Suffix}` : Str;

export type ReplaceAll<
    Str extends string,
    From extends string,
    To extends string
> = Str extends `${infer Prefix}${From}${infer Suffix}`
    ? ReplaceAll<`${Prefix}${To}${Suffix}`, From, To> : Str;


export type TrimStrRight<Str extends string> =
    Str extends `${infer Rest}${WhiteSpace}`
    ? TrimStrRight<Rest> : Str;

export type TrimStrLeft<Str extends string> =
    Str extends `${WhiteSpace}${infer Rest}`
    ? TrimStrLeft<Rest> : Str;

export type TrimStr<Str extends string> = TrimStrRight<TrimStrLeft<Str>>;

export type CapitalizeStr<Str extends string> = Str extends `${infer First}${string}` ? `${Uppercase<First>}${Str}` : Str;

export type CamelCase<Str extends string> = 
    Str extends `${infer Left}_${infer Right}${infer Rest}`
        ? `${Left}${Uppercase<Right>}${CamelCase<Rest>}`
        : Str;

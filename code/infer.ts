/**
 * infer 充当数组里的占位符
 */
type TYPE<T> = T extends Array<infer U> ? U : T

type a = TYPE<number[]>

type Arr = ['1', '2', '3']
type First<T extends any[]> = T extends [infer first, ...any[]] ? first : never 
type pop<T extends any[]> = T extends [...infer rest , unknown] ? rest : never

type ReverArr<T extends any[]> = T extends [infer first, ...infer reset] ?  [ ...ReverArr<reset>, first] : T
type test = ReverArr<Arr>
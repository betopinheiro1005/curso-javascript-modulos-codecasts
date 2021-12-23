import { default as arrays, Xpto } from "./helpers/arrays";

let x = new Xpto()
x.nome = "Vinicius";
x.email = "vinicius@gmail.com"

console.log(x)
console.log(x.email)

const a = arrays.map([1, 3, 5, 9, 11, 13], x => x * x)
const b = arrays.filter([1, 2, 3, 4, 5], x => x > 3)

console.log({ a, b });
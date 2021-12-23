import arrays from "./helpers/arrays";

const a = arrays.map([1, 2, 3, 4], x => x * x)
const b = arrays.filter([1, 2, 3, 4], x => x > 3)

console.log({ a, b });
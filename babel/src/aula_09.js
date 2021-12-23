import { filter, map } from "./helpers/arrays";

const a = map([1, 2, 3, 4, 5], x => x * x)
const b = filter([1, 2, 3, 4, 5, 6], x => x > 3)

console.log({ a, b });
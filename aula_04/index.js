/* Módulos são postos em cache após a primeira vez que forem carregados.
O módulo será executado apenas uma vez */

const xxx = require('./helpers/map.js')
const map = require('./helpers/map.js')

const nums = map([1, 2, 3], x => x * x)

console.log({ nums })
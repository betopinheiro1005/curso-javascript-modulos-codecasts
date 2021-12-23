/* (function (exports, require, module, __filename, __dirname) {
  // Module code actually lives in here
});
 */

console.log({ __dirname });

const map = (arr, fn) => arr.map(fn);
module.exports = map;
  // console.log({ __filename, __dirname });  /* O Node trabalha com caminhos absolutos */
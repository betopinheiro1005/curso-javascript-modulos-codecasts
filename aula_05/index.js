const http = require('http')  /* módulo nativo */
const map = require('map')

/*
./  ...  pasta atual para frente
../ ...  pasta atual para trás
/   ...  caminho absoluto (rzis do sistema de arquivos do SO onde o script está sendo executado)

Quando ele não recebe nenhuma das 3 combinações acima, ele vai optar por três coisas:
- primeiro ele vai procurar módulos nativos e depois por módulos de terceiros

*/

const nums = map([1, 2, 3], x => x * x)

console.log({ nums })

/* Existem 3 tipos de módulos:
* Locais
* Nativos (vem direto na distribuição do Node)
* De terceiros (ficam dentro de uma pasta chamada node_modules)
*/

console.log(arguments);


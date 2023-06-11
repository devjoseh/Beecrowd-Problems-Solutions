var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var idade = parseInt(lines.shift())

var anos = Math.floor(idade / 365)

var idade = idade - anos * 365
var meses = Math.floor(idade / 30)

var idade = idade - meses * 30
var dias = idade

console.log(`${anos} ano(s)`)
console.log(`${meses} mes(es)`)
console.log(`${dias} dia(s)`)
/* Snack 2

A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.

Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’] */


const nomi = ["LorenZo", "MAttia", "Giuseppe", "fabrIZio",  "ROBERTO", "francSco"];

const listaNomi = nomi.map(nome => nome[0].toUpperCase() + nome.slice(1).toLowerCase());
console.log(listaNomi);


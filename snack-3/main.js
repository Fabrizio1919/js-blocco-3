/* snack 3
Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe. */


const animali=[
    {
        nome: 'leone',
        famiglia: 'felidi',
        classe: 'mammiferi'
    },

    {
        nome: 'cane',
        famiglia: 'canidi',
        classe: 'mammiferi'
    },
    {
        nome: 'gallina',
        famiglia: 'fasianidi',
        classe: 'uccelli'
    },
];


animali.forEach(animale => {
    console.log(animale.nome);
    console.log(animale.famiglia);
    console.log(animale.classe);
    
});
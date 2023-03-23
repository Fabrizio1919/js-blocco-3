/* Snack 1
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
 
Infine stampa separatamente i 3 array. */


const auto = [
    {
        marca: 'Ford',
        modello:'Spider',
        alimentazione:'Disel'
    },
    {
        marca: 'Ferrari',
        modello:'Spider',
        alimentazione:'Benzina'
    },
    {
        marca: 'Bmw',
        modello:'Suv',
        alimentazione:'Gpl'
    },
    {
        marca: 'Nissan',
        modello:'Suv',
        alimentazione:'Benzina'
    },
    {
        marca: 'Fiat',
        modello:'Spider',
        alimentazione:'Disel'
    },
    {
        marca: 'Mini',
        modello:'Base',
        alimentazione:'Gpl'
    },
    {
        marca: 'Mercedes',
        modello:'Spider',
        alimentazione:'Benzina'
    },
    {
        marca: 'Land Rover',
        modello:'Suv',
        alimentazione:'Disel'
    },
    {
        marca: 'Suzuki',
        modello:'Base',
        alimentazione:'Disel'
    },
    {
        marca: 'Lamborghini',
        modello:'Spider',
        alimentazione:'Benzina'
    },

];


const benzina = auto.filter()


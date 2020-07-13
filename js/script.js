/*
Chiedere all’utente il cognome
inserirlo in un array con altri cognomi: 'Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'
stampa la lista ordinata alfabeticamente
scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova
*/

//inizializzo l'array
var listaCognomi=['Bianchi','Rossi','Duzioni','Balsano','Verdi'];

//inserimento da parte dell'utente
var nuovoCognome=prompt('inserisci il tuo cognome');

//normalizzo dato inserito
var nuovoCognome= nuovoCognome.slice(0,1).toUpperCase()+nuovoCognome.slice(1).toLowerCase();

//aggiungo il dato inserito all'array
listaCognomi.push(nuovoCognome);

//metto in ordine alfabetico l'array
listaCognomi.sort();

//stampo la lista
var posizione;
for (var i=0;i<listaCognomi.length;i++) {
    document.getElementById('lista').innerHTML+='<li>'+listaCognomi[i]+'</li>';
    if (nuovoCognome== listaCognomi[i]) {
        posizione=++i;
    }
}

//indico la posizione in cui si trova il nome inserito
document.getElementById('posizione').innerHTML='Ciao '+nuovoCognome+'.<br> Il tuo cognome è il '+posizione+'° nella lista in ordine alfabetico';


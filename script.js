/* 
 Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km) 
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va stampato in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 
Questo richiederà un minimo di ricerca.

Prima di scrivere il codice impostate il ragionamento nei commenti!

Bonus:
Applicare de controlli sull'input dell'utente
 
 */

/**
 * DATI
 * richiedere età
 * richiedere kilometraggio
 * avviare la variabile messaggio prezzo finale
 * (bonus: controllare input numerici con isNaN)
 *
 * LOGICA
 * calcolare in base ai km il prezzo base
 * poi, se l'età è over 65 allora prezzo -40%
 * se minore di 18, prezzo -20%
 * diversamente, prezzo pieno
 *
 * STAMPA
 * stampa del prezzo finale tramite messaggio in console
 */

const ageStr = prompt("Inserisci la tua età, con valore numerico");
const kmStr = prompt(
  "Inserisci i chilometri che vuoi percorrere, con un valore numerico"
);

if (isNaN(ageStr) || isNaN(kmStr)) {
  console.log("Inserisci solo numeri!");
} else {
  const age = parseInt(ageStr);
  const km = parseFloat(kmStr);

  let message = "";
  let finalPrice = 0;
  let basicPrice = km * 0.21;

  if (age > 65) {
    finalPrice = basicPrice - basicPrice * 0.4;
  } else if (age < 18) {
    finalPrice = basicPrice - basicPrice * 0.2;
  } else {
    finalPrice = basicPrice;
  }

  const finalPriceFormatted = finalPrice.toFixed(2);

  message = `Il prezzo del biglietto è di € ${finalPriceFormatted}`;

  console.log(message);
}

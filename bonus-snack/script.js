// 1️⃣ Chiedi due numeri all’utente e poi chiedi se vuole "somma" o "differenza".
// Stampa il risultato corrispondente.

function operationNumber() {
  // Chiedo i due numeri e l'operazione da svolgere
  const numb1 = prompt("Scrivi un primo numero da 1 a 99");
  const numb2 = prompt("Scrivi un secondo numero da 1 a 99");
  const operazione = prompt(
    "Vuoi sommare o sottrarre questi numeri? Scrivi esattamente 'somma' o 'differenza'"
  );

  // inizializzo la variabile risultato
  let risultato = 0;

  // gestione dei casi di Non numeri o valori nulli
  if (
    isNaN(numb1) ||
    isNaN(numb2) ||
    numb1 == null ||
    numb2 == null ||
    operazione == null
  ) {
    console.log(
      "Qualcosa è andato storto.. segui i passaggi indicati! Ricarica la pagina e riprova!"
    );

    // parse delle stringhe in numeri
  } else {
    const numb1Parsed = parseInt(numb1);
    const numb2Parsed = parseInt(numb2);

    // operazioni per somma e differenza
    if (operazione == "somma") {
      risultato = numb1Parsed + numb2Parsed;
    } else if (operazione == "differenza") {
      risultato = numb1Parsed - numb2Parsed;
    } else {
      // se non esce fuori nulla è perché il nome dell'operazione era sbagliato
      risultato =
        "Operazione non valida! Scrivi esattamente 'somma' o differenza'. Ricarica la pagina e riprova.";
    }

    // qui stampo il risultato
    console.log(risultato);
  }
}

// 2️⃣ Chiedi all'utente la sua età e comunichiamo l'anno di nascita.

function getAge() {
  // Richiedere l'età
  const ageString = prompt("Qual'è la tua età? Scrivila in numeri.");

  if (isNaN(ageString) || ageString == null) {
    console.log("Inserisci un numero valido. Ricarica la pagina e riprova.");
  } else {
    const age = parseInt(ageString);

    // Calcolare la data di oggi
    const today = new Date();

    // Ricavare l'anno odierno
    const year = today.getFullYear();

    // Sottrarre l'anno odierno all'età del cliente
    const birthY = year - age;

    // Stampare il risultato
    console.log(`Sei nato nell'anno ${birthY}`);
  }
}

// 3️⃣ Chiedi all'utente il suo nome e stampa in console la stringa "ciao <nome_utente>".

function printName() {
  // Richiedo il nome
  const nome_utente = prompt("Scrivi il tuo nome");

  // Stampo il nome
  console.log(`Ciao ${nome_utente}`);
}

// 4️⃣ Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito23

function printFullNameColor() {
  // chiedo nome, cognome e colore preferito
  const firstName = prompt("Scrivi il tuo nome");
  const lastName = prompt("Scrivi il tuo cognome");
  const favColor = prompt("Scrivi il tuo colore preferito");

  // Stampo la combinazione gestendo il case sensitive
  console.log(
    firstName.toLowerCase() +
      lastName.toLowerCase() +
      favColor.toLowerCase() +
      23
  );
}

/**
 * 5️⃣ 
Scrivi un programma che simula l’acquisto al minimarket.

Chiedi all’utente quale prodotto vuole acquistare:
"pane" → €1.50
"latte" → €1.20
"uova" → €2.60

Chiedi quante unità vuole acquistare.

Chiedi se possiede la tessera fedeltà ("si" o "no"). Se sì calcola lo sconto in base a queste regole:
Totale < 20€ → sconto 5%
Totale ≥ 20€ → sconto 10%

Stampa in console uno scontrino

 */



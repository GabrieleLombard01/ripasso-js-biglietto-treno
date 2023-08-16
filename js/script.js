/*
- Raccolgo tutti i riferimenti al DOM (sezione form, sezione biglietto, tutti gli input e tutte le "caselle" da riempire nel biglietto)
- Aggancio un event listener al button di conferma
  **QUANDO** L'utente clicca sul buttton
  - Recupero i valori dal form
  - Effettuo la validazione:
    **SE** manca il nome
    **OPPURE** l'età non è numerabile o minore di 0
    **OPPURE** i km non sono numerabili o minori di zero
    - Inserisco un alert.
      **FINE**
      **ALTRIMENTI**
    - Calcolo il prezzo base (km \* prezzo base)
    - Verifico se l'utente ha diritto a sconto
      **SE** è minorenne
      - Calcolo il nuovo prezzo con lo sconto del 20%
        **SE INVECE** è over 65
      - Calcolo il nuovo prezzo con lo sconto del 40%
    - (BONUS) Randomizzo il numero di carrozza
    - (BONUS) Randomizzo il numero di biglietto
    - Inserisco i dati (compreso il prezzo finale) nei punti HTML appropriati del biglietto
    - Faccio comparire il biglietto (tramite classe che rimuove il display: none)
      **FINE**
*/

// 1. Raccolgo tutti gli elementi dal DOM

// FORM elements
const nameField = document.getElementById('UserName');
const kmsField = document.getElementById('UserKm');
const ageField = document.getElementById('UserAge');
const generateButton = document.getElementById('confirm-button');
const resetButton = document.getElementById('reset-button');

// TICKET elements
const ticketSection = document.getElementById('ticket-section');
const ticketName = document.getElementById('ticket-name');
const ticketCp = document.getElementById('ticket-cp');
const ticketOffer = document.getElementById('ticket-offer');
const ticketCar = document.getElementById('ticket-car');
const finalPrice = document.getElementById('final-price');

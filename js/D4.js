/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
function area(l1, l2) {
  const area = l1 * l2;
  return area;
}
const l1 = 3;
const l2 = 4;
const areaRettangolo = area(l1, l2);
console.log("L'area del rettangolo è: " + areaRettangolo);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(num1, num2) {
  if (num1 + num2 === 19) {
    return (num1 + num2) * 3;
  } else {
    return num1 + num2;
  }
}
console.log(crazySum(54, 2));
console.log(crazySum(12, 5));
console.log(crazySum(9, 3));
console.log(crazySum(22, 2));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(valoreR) {
  if (valoreR > 19) {
    return Math.abs(valoreR - 19) * 3;
  } else {
    return Math.abs(valoreR - 19);
  }
}
console.log(crazyDiff(23));
console.log(crazyDiff(12));
console.log(crazyDiff(9));
console.log(crazyDiff(2));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
  if (20 <= n && n <= 100) {
    return "true";
  } else if (n === 400) {
    return "true";
  } else {
    return "nesssuna di questi due casi";
  }
}
console.log(boundary(84));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(string) {
  if (string.startsWith("EPICODE")) {
    return string;
  } else {
    return "EPICODE" + " " + string;
  }
}
console.log(epify("EPICODE EPI, SIETE VOI"));
console.log(epify("sei la migliore"));
console.log(epify("CIAO A TUTTI"));
console.log(epify("EPICODE"));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(NumS) {
  return NumS % 3 === 0 || NumS % 7 === 0;
}

console.log(check3and7(3));
console.log(check3and7(35));
console.log(check3and7(21));
console.log(check3and7(8));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

// questo è un modo (più esaustivo - step by step)

/*  const reverseString = function (word) {
const letters = word.split("");
  console.log(letters);
  const reversed = letters.reverse("");
  console.log(reversed);
  const joined = reversed.join("");
  console.log(joined);
  return joined;
};*/

// questo è un modo più rapido ma devi ricordarti i passaggi sequenziali
function reverseString(word) {
  return word.splice("").reverse("").join("");
}

console.log(reverseString("EPICODE"));
console.log(reverseString("notorietà"));
console.log(reverseString("heila"));
console.log(reverseString("fabolous"));
console.log(reverseString("costante"));
console.log(reverseString("determinazione"));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

const upperFirst = function (s1) {
  const stringWords = s1.split(" ");
  console.log(stringWords);
  const newSentence = [];
  for (i = 0; i < stringWords.length; i++) {
    const singleWord = stringWords[i];
    const firstChar = singleWord.charAt(0);
    const remainChar = singleWord.slice(1);
    const fullWord = firstChar.concat(remainChar);
    console.log(fullWord);
    newSentence.push(fullWord);
  }
  return newSentence.join(" ");
};
console.log(upperFirst());

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(string) {
  return string.slice(1, -1);
}
console.log(cutString("chiamami"));
console.log(cutString("heila belli miei"));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

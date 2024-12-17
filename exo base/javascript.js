let prenoms = "John";

let nom = "Doe"

const nomComplet = prenoms.concat(' ',nom);
console.log(nomComplet)

let sujet = "Le chat";
let verbe = "mange";
let object ="la souris "

console.log(sujet.concat(' ',verbe,' ',object));

// const numbers = [1, 2, 3, 4, 5];

// const displayNumbers = (arr, index = 0) => {
//     if (index < arr.length) {
//         console.log(arr[index]);
//         setTimeout(() => displayNumbers(arr, index + 1 ), 1000);
//     }
// }
// displayNumbers(numbers);

let nombres = [];

nombres.push("10","20","30");

console.log(nombres)

let premiernombre = nombres.shift();

console.log(nombres);
console.log(premiernombre);

function saluer(prenom){
        return("Bonjour" + ' ' + prenom );
}

console.log(saluer("Alice"));

function multiplication(multi){
    var z = 7;
    var p= 8;
    multi = z*p;
    return(multi);

}

console.log(multiplication("multi"));



function majorite(age) {
    if(age < 18 ) {
        console.log("La personne est mineur");
    }
    else {
        console.log("la personne est majeur");
    } 
}

majorite(12);

for (let i = 1; i <= 20; i++ ) {
    if ( i % 2 === 0){
        console.log(i);  
    }

}

//  function devinerlechiffre() {
//      let nomb = Math.floor(Math.random() * 100 + 1);
//      let guess;

// do {
//          guess = prompt('Essayer de deviner le nombre entre 1 et 100');
//          console.log(nomb, guess);
//          if ( nomb > guess ) {
//              alert('trop petit');
//          } else if (guess > nomb) {
//              alert('trop grand');
//         }
//     }while (nomb != guess);
//     {
//         alert('bravo');
//     }
//  }
//  devinerlechiffre();


function jourdanslemois() {
   const mois = prompt('entrer le mois');
   const annee = prompt("donne moi l'annee");

    switch (mois)  {
        case '1' :
            alert("Il y a 31 jours au mois de janvier");
            break;
        case '2' :
            if ( annee % 4 === 0 ){
                alert("Pour le mois de février, celui-ci compte 29 jours.");
                break;
            } else {
                alert("Pour le mois de février, celui-ci compte 28 jours.");
                break;
            }
        case '3':
            alert("Il y a 31 jours au mois de mars");
            break;
        case '4' :
            alert("Il y a 30 jours au mois de d'avril");
            break;
        case '5' :
            alert("Il y a 31 jours au mois de mai");
            break;
        case '6' :
            alert("Il y a 30 jours au mois de juin");
            break;
        case '7' :
            alert("Il y a 31 jours au mois de juillet");
            break;
        case '8' :
            alert("Il y a 31 jours au mois d'aout");
            break;
        case '9' :
            alert("Il y a 30 jours au mois de septembre");
            break;
        case '10' :
            alert("Il y a 31 jours au mois de octobre");
            break;
        case '11' : 
            alert("Il y a 30 jours au mois de novembre");
            break;
        case '12' : 
            alert("Il y a 31 jours au mois de décembre");
            break;
        default : 
            alert('Desole, votre réponse ne correspond pas à un mois');
            break;
    }
}
jourdanslemois();




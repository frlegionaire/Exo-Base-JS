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
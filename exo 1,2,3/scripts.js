
const body = document.querySelector('body');
const p = document.createElement('p');
const btn = document.createElement('button');

body.appendChild(btn);
body.appendChild(p);

btn.textContent = "Appuyer ici";

btn.addEventListener ('click', () =>{
    p.textContent = "Hello, world!"
})


const p1 = document.createElement('p');
const btn1 = document.createElement('button');

body.appendChild(btn1);
body.appendChild(p1);

btn1.textContent = "Appuyer ici pour changer la couleur du texte";
p1.textContent = "Hello, world!";

btn1.addEventListener ('click', () =>{
    p1.style.color = "red";
})

const listeu = document.createElement('ul');
const ajout = document.createElement('button')

body.appendChild(ajout);
body.appendChild(listeu);
ajout.textContent = "Pour ajouter une ligne"

ajout.addEventListener ('click', () => {
    const baliseli = document.createElement('li');
    listeu.appendChild(baliseli);
    baliseli.textContent = "Nouvel Element";
})
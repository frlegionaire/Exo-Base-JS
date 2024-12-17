const listeu = document.querySelector('ul');
const supp = document.createElement('button');
const body = document.querySelector('.liste');
const demon = document.querySelector('.demo');

body.appendChild(supp);
supp.textContent = "Pour supprimer une ligne"

supp.addEventListener ('click', () => {
        listeu.removeChild(listeu.firstElementChild);
})

function consol(bouton) {
    alert(bouton);
}
for (i = 1; i <= 3; i++){
    const button = document.createElement("button")
    button.textContent = "bouton " + i;
    button.id = "Mon bouton" + " " + i;
    button.addEventListener("click", () => consol(button.id))
    demon.appendChild(button) 
}
function lancer() {
    let nomb = Math.floor(Math.random() * 6 + 1);
    const diceImage = document.getElementById('dice');
    diceImage.src = `des/dieWhite${nomb}.png`;
}

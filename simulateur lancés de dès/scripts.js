const button = document.querySelector('button');
const animation = document.querySelector('animation');
button.addEventListener("click", () => {
    setTimeout(() => {
        dice.classList.add("animation");
      }, 10);
      dice.classList.remove("animation");

    let nomb = Math.floor(Math.random() * 6 + 1);
    const diceImage = document.getElementById('dice');
    diceImage.src = `des/dieWhite${nomb}.png`;
});


const images = [
  "leo.png", "leo.png", "coutin.png", "coutin.png",
    "pirata.png", "pirata.png", "piton.png", "piton.png",
    "payet.png", "payet.png", "puma.png", "puma.png",
    "pele.png", "pele.png", "cocao.png", "cocao.png",
];
let openCards = [];

let shuffleImages = images.sort(() => Math.random() - 0.5);

for (let i = 0; i < images.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    let img = document.createElement("img");
    img.src = shuffleImages[i];
    box.appendChild(img);
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

function handleClick() {
    if (openCards.length < 2) {
        this.classList.add("boxOpen");
        openCards.push(this);
    }
    if (openCards.length == 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    if (openCards[0].querySelector("img").src === openCards[1].querySelector("img").src) {
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    } else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }

    openCards = [];
    if (document.querySelectorAll(".boxMatch").length === images.length) {
        alert("Você venceu, parabéns!");
    }
}

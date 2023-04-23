const cardArray = [
  {
    name: "fries",
    img: "assets/fries.png",
  },
  {
    name: "cheeseburger",
    img: "assets/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "assets/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "assets/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "assets/milkshake.png",
  },
  {
    name: "pizza",
    img: "assets/pizza.png",
  },
  {
    name: "fries",
    img: "assets/fries.png",
  },
  {
    name: "cheeseburger",
    img: "assets/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "assets/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "assets/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "assets/milkshake.png",
  },
  {
    name: "pizza",
    img: "assets/pizza.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());
const result = document.getElementById("result");

const gridDisplay = document.getElementById("grid");
let cardChoosen = [];
let cardChoosenIDs = [];
const cardWon = [];

function displayGrid() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "assets/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.append(card);
  }
}
displayGrid();

function checkMatch() {
  const cards = document.querySelectorAll("img");
  console.log("Check for Match");
  if (cardChoosenIDs[0] == cardChoosenIDs[1]) {
    cards[cardChoosenIDs[0]].setAttribute("src", "assets/blank.png");
    cards[cardChoosenIDs[1]].setAttribute("src", "assets/blank.png");
    alert("You have already clicked");
  }
  if (cardChoosen[0] == cardChoosen[1]) {
    alert("Match found");
    cards[cardChoosenIDs[0]].setAttribute("src", "assets/white.png");
    cards[cardChoosenIDs[1]].setAttribute("src", "assets/white.png");
    cards[cardChoosenIDs[0]].removeEventListener("click", flipCard);
    cards[cardChoosenIDs[1]].removeEventListener("click", flipCard);
    cardWon.push(cardChoosen);
  } else {
    cards[cardChoosenIDs[0]].setAttribute("src", "assets/blank.png");
    cards[cardChoosenIDs[1]].setAttribute("src", "assets/blank.png");
    alert("Try again");
  }
  result.textContent = cardWon.length;

  cardChoosen = [];
  cardChoosenIDs = [];

  if (cardWon.length == cardArray.length / 2) {
    result.textContent = "Congratulations";
  }
}

function flipCard() {
  let cardID = this.getAttribute("data-id");

  cardChoosen.push(cardArray[cardID].name);
  cardChoosenIDs.push(cardID);
  this.setAttribute("src", cardArray[cardID].img);
  if (cardChoosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}

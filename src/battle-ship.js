class Battleship {
  #shipPositions;
  #guessedLocation;
  constructor(width) {
    this.width = width;
    this.#shipPositions = new Set();
    this.#guessedLocation = new Set();
  }
}

class BattleshipGame {
  #player1;
  #player2;
  #player1Board;
  #player2Board;
  constructor(width) {
    this.#player1 = new Battleship(width);
    this.#player2 = new Battleship(width);
    this.#player1Board = BattleshipGame.createField(this.#player1);
    this.#player2Board = BattleshipGame.createField(this.#player2);
  }

  static #toggleEvent(event) {
    const target = event.target;
    target.classList.toggle("ship");
  }

  static createField(playerBoard) {
    const container = document.createElement("section");

    for (let i = 0; i < playerBoard.width ** 2; i++) {
      const box = document.createElement("div");
      box.classList.add("box");

      container.appendChild(box);
    }

    return container;
  }

  createField1(container) {
    container.innerHtml = "";
    this.#player1Board.addEventListener("click", BattleshipGame.#toggleEvent);
    this.#player2Board.removeEventListener(
      "click",
      BattleshipGame.#toggleEvent
    );
    container.appendChild(this.#player1Board);
    container.appendChild(this.#player2Board);
  }

  createField2(container) {
    container.innerHtml = "";
    this.#player2Board.addEventListener("click", BattleshipGame.#toggleEvent);
    this.#player1Board.removeEventListener(
      "click",
      BattleshipGame.#toggleEvent
    );
    container.appendChild(this.#player1Board);
    container.appendChild(this.#player2Board);
  }
}

const container = document.querySelector("main");
const bs = new BattleshipGame(10);
bs.createField1(container);
bs.createField2(container);

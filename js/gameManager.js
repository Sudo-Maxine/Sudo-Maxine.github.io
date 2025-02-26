import {miniGame1} from "./miniGame1.js"

export class GameManager {
    constructor() {
      this.currentGameIndex = 0;
      this.score = 0;
      this.miniGames = [miniGame1]; // Array of mini-game modules
    }
  
    startGame() {
      this.currentGameIndex = 0;
      this.score = 0;
      this.loadMiniGame(this.miniGames[this.currentGameIndex]);
    }
  
    loadMiniGame(miniGame) {
      miniGame.init();
    }
  
    nextMiniGame() {
      this.currentGameIndex++;
      if (this.currentGameIndex < this.miniGames.length) {
        this.loadMiniGame(this.miniGames[this.currentGameIndex]);
      } else {
        this.endGame();
      }
    }
  
    endGame() {
      alert(`Game Over! Your final score is ${this.score}`);
    }
  }
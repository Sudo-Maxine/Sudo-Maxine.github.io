import { GameManager } from './gameManager.js';

const gameManager = new GameManager();
document.getElementById('start-button').addEventListener('click', () => {
  gameManager.startGame();
});

console.log("eoooo")
document.getElementById('next-button').addEventListener('click', () => {
  gameManager.nextMiniGame();
});

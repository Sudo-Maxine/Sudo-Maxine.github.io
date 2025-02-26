// import { GameManager } from './gameManager.js';
import { DataManager } from "./dataManager.js"

DataManager.loadData().then(() => {
  maindo();
});

async function maindo() {
  await DataManager.loadData();
  const questions = DataManager.getQuestion("wordClassification");
  console.log(questions);
}
// const gameManager = new GameManager();
// document.getElementById('start-button').addEventListener('click', () => {
//   gameManager.startGame();
// });

// console.log("eoooo")
// document.getElementById('next-button').addEventListener('click', () => {
//   gameManager.nextMiniGame();
// });

import { FeedbackSystem } from "./feedbackSystem.js"
import { DataManager } from "./dataManager.js"
// object
//  wordClassification
//    Instruction
//    Content
//      Word[]
//      Text[]
//      Answer[] 

export const miniGame1 = {
  init() {
    DataManager.shuffel();
    this.question = DataManager.getMinigameContent('wordClassification', 0);
    this.questionIndex = 0;
    this.answer = "answer";
    this.score = 0;

    const miniGameScreen = document.getElementById('mini-game-screen');
    miniGameScreen.innerHTML = `
        <p id="instruction">${DataManager.getMiniGameInstruction('wordClassification')}</p>
        <p id="word">${this.question.Word}</p>
        <p id="text">${this.question.Text}</p>
        <button id="Answer1" onclick="miniGame1.SaveAnswer('Noun')">Noun</button>
        <button id="Answer2" onclick="miniGame1.SaveAnswer('Verb')">Verb</button>
        <button id="Answer3" onclick="miniGame1.SaveAnswer('Adjective')">Adjective</button>
        <button id="Answer4" onclick="miniGame1.SaveAnswer('Adverbs')">adverb</button>
        <p></p>
        <button id="checkAnswer" onclick="miniGame1.checkAnswer()">Check</button>
        <button id="nextQuestion" onclick="miniGame1.nextQuestion()" style="display: none;">next</button>
        `;
  },

  SaveAnswer(_answer) {
    console.log(_answer);
    this.answer = _answer;
    let AnswerButton = null;
    document.getElementById('Answer1').style.color = "black";
    document.getElementById('Answer2').style.color = "black";
    document.getElementById('Answer3').style.color = "black";
    document.getElementById('Answer4').style.color = "black";

    switch (this.answer) {
      case "Noun":
        AnswerButton = document.getElementById('Answer1');
        AnswerButton.style.color = "green";
        break;
      case "Verb":
        AnswerButton = document.getElementById('Answer2');
        AnswerButton.style.color = "green";
        break;
      case "Adjective":
        AnswerButton = document.getElementById('Answer3');
        AnswerButton.style.color = "green";
        break;
      case "Adverbs":
        AnswerButton = document.getElementById('Answer4');
        AnswerButton.style.color = "green";
        break;
      default:
      // code block
    }
    console.log("answer saved " + this.answer)
  },

  checkAnswer() {
    console.log("Check check check");
    let isCorrect = this.answer == this.question.Answer;
    if(isCorrect)this.score++;
    FeedbackSystem.displayFeedback(isCorrect);
    document.getElementById('checkAnswer').style.display = "none";
    document.getElementById('nextQuestion').style.display = "inline";
  },

  nextQuestion(){
    this.questionIndex++;
    this.question = DataManager.getMinigameContent('wordClassification', this.questionIndex);
    document.getElementById('checkAnswer').style.display = "inline";
    document.getElementById('nextQuestion').style.display = "none";
    document.getElementById('word').innerHTML = this.question.Word;
    document.getElementById('text').innerHTML = this.question.Text;
  }

};

window.miniGame1 = miniGame1;
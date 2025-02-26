import {DataManager} from "./dataManager.js"
import {UIManager} from "./uiManager.js"
// object
//  wordClassification
//    Instruction
//    Content
//      Word[]
//      Text[]
//      Answer[] 

export const miniGame1 = {
    init() {

      // // Load questions and display them
      const questions = DataManager.getQuestionsInformation('wordClassification');
      // console.log("eoooo")
      // UIManager.displayQuestion(question);
    },
  
    checkAnswer(answer) {
      // const isCorrect = DataManager.validateAnswer('wordClassification', answer);
      // feedbackSystem.displayFeedback(isCorrect);
      // if (isCorrect) gameManager.updateScore(10); // Award points
    },

  };
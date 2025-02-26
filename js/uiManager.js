export class UIManager {
    static displayQuestion(question) {
      const miniGameScreen = document.getElementById('mini-game-screen');
      miniGameScreen.innerHTML = `
        <p>${question.text}</p>
        <button onclick="miniGame1.checkAnswer('noun')">Noun</button>
        <button onclick="miniGame1.checkAnswer('verb')">Verb</button>
        <!-- Add more options -->
      `;
    }
  
    static displayFeedback(isCorrect) {
      const feedbackSection = document.getElementById('feedback-section');
      feedbackSection.innerHTML = isCorrect ? 'Correct!' : 'Incorrect!';
    }
  
    static updateScore(score) {
      const scoreDisplay = document.getElementById('score-display');
      scoreDisplay.textContent = `Score: ${score}`;
    }
  }
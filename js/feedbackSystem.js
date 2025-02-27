export class FeedbackSystem {
    static displayFeedback(isCorrect) {
      const feedbackSection = document.getElementById('feedback-section');
      feedbackSection.textContent = isCorrect ? 'Correct!' : 'Incorrect!';
      feedbackSection.style.color = isCorrect ? 'green' : 'red';
    }
  }

window.FeedbackSystem = FeedbackSystem;
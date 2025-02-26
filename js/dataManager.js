export class DataManager {
  static async loadData() {
    try {
      const response = await fetch('../assets/data.json'); // Path to your JSON file
      if (!response.ok) {
        throw new Error('Failed to load data');
      }
      this.data = await response.json(); // Store the loaded data
    } catch (error) {
      console.error('Error loading data:', error);
    }
  }

  static getQuestion(type) {
    if (!this.data) {
      throw new Error('Data not loaded. Call loadData() first.');
    }
    const questions = this.data[type];
    if (!questions || questions.length === 0) {
      throw new Error(`No questions found for type: ${type}`);
    }
    return questions[0]; // Example: Return the first question
  }

  static validateAnswer(type, answer) {
    if (!this.data) {
      throw new Error('Data not loaded. Call loadData() first.');
    }
    const questions = this.data[type];
    if (!questions || questions.length === 0) {
      throw new Error(`No questions found for type: ${type}`);
    }
    const correctAnswer = questions[0].correctAnswer;
    return answer === correctAnswer;
  }
}
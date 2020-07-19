export interface Question {
  _id: string;
  quizId: string;
  question: string;
  answers: Array<Answer>;
  shouldShuffle: boolean;
}

export interface Answer {
  answer: string;
  isCorrect: boolean;
}

export interface SolvedQuestion {
  _id: string;
  quizId: string;
  question: string;
  answers: Array<Answer>;
  shouldShuffle: boolean;
  isWrong: boolean | null;
}

export interface Answer {
  answer: string;
  isCorrect: boolean;
  isSelected: boolean | null;
}

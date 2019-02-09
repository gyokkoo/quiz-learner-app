export interface IQuestion {
    quizId: string;
    question: string;
    answers: Array<IAnswer>;
    shouldShuffle: boolean;
}

export interface IAnswer {
    answer: string;
    isCorrect: boolean;
}

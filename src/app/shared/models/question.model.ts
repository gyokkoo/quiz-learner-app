export interface IQuestion {
    _id: string;
    quizId: string;
    question: string;
    answers: Array<IAnswer>;
    shouldShuffle: boolean;
}

export interface IAnswer {
    answer: string;
    isCorrect: boolean;
}

export interface ISolvedQuestion {
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

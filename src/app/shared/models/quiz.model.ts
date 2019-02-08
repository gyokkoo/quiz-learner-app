/* Defines the quiz entity */
export interface IQuiz {
    id: string;
    name: string | null;
    description: string | null;
    creator: string | null;
    dateCreated: Date | null;
    rating: number | 0;
    questionsCount: number | 0;
}

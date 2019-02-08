/* Defines the quiz entity */
export interface IQuiz {
    id: number;
    name: string;
    description: string | null;
    creator: string;
    date: Date | null;
    rating: number | null;
}

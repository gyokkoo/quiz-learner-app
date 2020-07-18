/* Defines the quiz entity */
export interface QuizModel {
  _id: string;
  name: string;
  description: string;
  creatorId: string;
  dateCreated: Date;
  averageScore: number;
  creatorUsername?: string;
}

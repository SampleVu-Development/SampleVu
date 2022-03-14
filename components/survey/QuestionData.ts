/**
   questionType stays as string to maintain flexibility, and
   pulls from following options:
   - MultipleChoice
   - ShortAnswer

   We also have two additional types that will be excluded from here:
   - OverallRating
   - Comment

   Note that OverallRating and Comment are unique cases:
   they do not need a questionOrder (always first), and come together
   in the same card component. They also cannot be edited or
   rearranged. Thus, because they are fixed, they will not be
   included within the questions table (thus the survey data).
 */
export type QuestionData = {
  questionId: number // uuid of question
  questionOrder: number // order of question
  question: string // actual question string
  questionType: string // see below
  answerChoices?: string[] // only if questionType==MultipleChoice
  required: boolean
}

import React, { useState } from 'react'
import { Card, Input } from 'antd'
const { TextArea } = Input

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

export type QuestionProps = {
  questionId: number // uuid of question
  questionOrder: number // order of question
  question: string // actual question string
  questionType: string // see below
  answerChoices?: string[] // only if questionType==MultipleChoice
  required: boolean
}

// passed through EditSurvey or TasterSurvey by mapping array of question objects obtained from data
// pass in QuestionData via object spread props={...question}
const QuestionCard: React.FC<QuestionProps> = ({
  question: text,
  questionId: id,
  questionOrder: order,
  questionType: type,
  answerChoices: choices,
  required: isRequired,
}) => {
  // Maybe use useRef hook instead for form building, since we only need to "save" state on submit
  const [question, setQuestion] = useState(text)
  const [questionType, setQuestionType] = useState(type)
  const [answerChoices, setAnswerChoices] = useState(choices)
  const [required, setRequired] = useState(isRequired)
  // have a (global?) state for user session & edit permission

  // temp callback function
  const tempCallback = ({ question, id, type, event }) => {
    console.log('callback')
  }

  // Also can pass Draggable here
  return (
    <div className="flex justify-center p-2.5">
      <Card className="w-5/6 max-w-xl rounded-xl border-gray-300">
        {/* If editable, Reorder buttons (editable && ...)*/}

        {/* If editable, Select Question Type Dropdown like Google Forms (onChange => setQuestionType) */}

        {/* If editable, Question Input, else, Question */}

        {/* If MultipleChoice, map answerChoices, else, set InputBox */}
        {questionType === 'MultipleChoice' ? (
          answerChoices.map((choice, i) => (
            <div key={i}>choice</div>
            //   radio -- see MultipleQuestion
            // if editable, should also have delete button for each option
          ))
        ) : (
          // TextArea Input for ShortAnswer
          <Card bordered={false}>
            <TextArea
              rows={1}
              className="rounded-xl border-gray-300"
              placeholder="Write a comment..."
              onChange={e => tempCallback({ question, id, type: 'input', event: e.target.value })}
            />
          </Card>
        )}

        {/* If editable && MultipleChoice, "add option" button */}

        {/* Required checkbox, onChange => setState(!required) */}
      </Card>
    </div>
  )
}

export default QuestionCard

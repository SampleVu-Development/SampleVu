import { Card } from 'antd'
import RequiredQuestion from './questions/RequiredQuestion'
import MultipleQuestion from './questions/MultipleQuestion'
import CreateQuestion from './CreateQuestion'

export default function SurveyCard({ question, questionID, type, callback, data }) {
  // data is for multiple choice questions, an array, which stores all the options for multiple choice

  return (
    <div className="flex justify-center p-2.5">
      <Card className="w-5/6 max-w-xl rounded-xl border-gray-300">
        {type === 'required' ? (
          <RequiredQuestion questionID={questionID} question={question} callback={callback} />
        ) : type === 'multiple' ? (
          <MultipleQuestion
            questionID={questionID}
            question={question}
            data={data}
            callback={callback}
          />
        ) : type === 'create' ? (
          <CreateQuestion callback={callback} />
        ) : (
          <p>default</p>
        )}
      </Card>
    </div>
  )
}

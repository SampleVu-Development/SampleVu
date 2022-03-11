import { Card } from 'antd'
import RequiredQuestion from './questions/RequiredQuestion'
import MultipleQuestion from './questions/MultipleQuestion'
import CreateQuestion from './CreateQuestion'

export default function SurveyCard({ title, questionID, type, callback, data }) {
  // data is for multiple choice questions, an array, which stores all the options for multiple choice

  return (
    <div className="flex justify-center p-2.5 text-center">
      <Card className="w-5/6 max-w-xl rounded-xl border-gray-300">
        {type == 'required' ? (
          <RequiredQuestion questionID={questionID} title={title} callback={callback} />
        ) : type == 'multiple' ? (
          <MultipleQuestion questionID={questionID} title={title} data={data} callback={callback} />
        ) : type == 'create' ? (
          <CreateQuestion callback={callback} />
        ) : (
          <p>default</p>
        )}
      </Card>
    </div>
  )
}

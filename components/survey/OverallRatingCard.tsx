import { Card } from 'antd'
import StarRating from './questions/StarRating'
import InputBox from './questions/InputBox'

// OverallRatingCard -- to be on every survey
// Cannot be moved or reordered
const OverallRatingCard = ({ question, questionID, callback }) => {
  return (
    <div className="flex justify-center p-2.5 pt-10">
      <Card className="w-5/6 max-w-xl rounded-xl border-gray-300 text-lg">
        <h1 className="py-5 text-center font-bold">How would you rate this sample overall?</h1>
        <StarRating callback={e => callback({ question, questionID, type: 'slider', event: e })} />
        <InputBox question={question} questionID={questionID} callback={callback} />
      </Card>
    </div>
  )
}

export default OverallRatingCard

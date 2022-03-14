import { Card, Input } from 'antd'
import ReOrderBlock from './ReOrderBlock'
import StarRating from './StarRating'
import InputBox from './InputBox'
const { TextArea } = Input

export default function RequiredQuestion({ question, questionID, callback }) {
  return (
    <>
      <ReOrderBlock />
      <h1 className="font-bold">{question}</h1>
      <StarRating callback={e => callback({ question, questionID, type: 'slider', event: e })} />
      <InputBox question={question} questionID={questionID} callback={callback} />
    </>
  )
}

import { Card, Input } from 'antd'
import ReOrderBlock from './ReOrderBlock'
import SurveyTitle from '../SurveyTitle'
import StarRating from './StarRating'
import InputBox from './InputBox'
const { TextArea } = Input

export default function RequiredQuestion({ title, questionID, callback }) {
  return (
    <>
        <ReOrderBlock />
        <SurveyTitle text={title} />
        <StarRating callback={e => callback({ title, questionID, type: 'slider', event: e })} />
        <InputBox title={title} questionID={questionID} callback={callback} />
    </>
  )
}

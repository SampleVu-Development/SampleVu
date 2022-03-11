import { Card, Radio, Button, Input } from 'antd'
import ReOrderBlock from './ReOrderBlock'
import SurveyTitle from '../SurveyTitle'
import InputBox from './InputBox'
import { DeleteOutlined, PlusCircleOutlined } from '@ant-design/icons'
import { useState } from 'react'

// PropTypes or TypeScript to strongly type props

export default function MultipleQuestion({ title, questionID, callback, data }) {
  const [value, setValue] = useState(0)
  function manageQuestions(e) {
    setValue(e.target.value)
    callback()
  }

  let choices = []
  data.forEach((x, i) =>
    choices.push(
      <div className="padding-2.5 text-left">
        <Radio
          onChange={e => callback({ title, questionID, type: 'radio', event: e.target.value })}
          value={i}
        >
          {x}
        </Radio>
      </div>
    )
  )

  return (
    <>
      <ReOrderBlock />
      <SurveyTitle text={title} />
      <Card bordered={false}>
        <Radio.Group onChange={manageQuestions} value={value}>
          {choices}
        </Radio.Group>
      </Card>
      <InputBox title={title} questionID={questionID} callback={callback} />
      <div className="flex justify-between">
        <Button
          className="border-none"
          bordered={false}
          onChange={() => callback({ title, questionID, type: 'delete' })}
        >
          <DeleteOutlined />
          Delete
        </Button>
      </div>
    </>
  )
}

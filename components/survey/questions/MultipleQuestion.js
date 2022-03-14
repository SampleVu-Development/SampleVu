import { Card, Radio, Button, Input } from 'antd'
import ReOrderBlock from './ReOrderBlock'
import InputBox from './InputBox'
import { DeleteOutlined, PlusCircleOutlined } from '@ant-design/icons'
import { useState } from 'react'

// PropTypes or TypeScript to strongly type props

export default function MultipleQuestion({ question, questionID, callback, data }) {
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
          onChange={e => callback({ question, questionID, type: 'radio', event: e.target.value })}
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
      <h1 className="font-bold">{question}</h1>
      <Card className="pl-5 text-left" bordered={false}>
        <Radio.Group onChange={manageQuestions} value={value}>
          {choices}
        </Radio.Group>
      </Card>
      {/*<InputBox question={question} questionID={questionID} callback={callback} />*/}
      <div className="flex justify-between pt-3">
        <Button
          className="border-none"
          bordered={false}
          onChange={() => callback({ question, questionID, type: 'delete' })}
        >
          <DeleteOutlined />
          Delete
        </Button>
      </div>
    </>
  )
}

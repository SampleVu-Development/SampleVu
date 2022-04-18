import { Card, Button, Modal, Input, Radio } from 'antd'
import { PlusCircleOutlined, DeleteOutlined } from '@ant-design/icons'
import { useState } from 'react'
const { TextArea } = Input

export default function CreateQuestion({ callback }) {
  const createQuestion = () => {
    console.log(
      'append a question card to the bottom, then put the "createQuestion Button under neath that'
    )
  }

  return (
    <>
      <div className="flex justify-center p-2.5 text-center">
        <Button className="border-gray-300 rounded-xl" bordered={false} onClick={createQuestion}>
          <PlusCircleOutlined />
          Add Question
        </Button>
      </div>
    </>
  )
}

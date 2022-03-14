import { Input, Card } from 'antd'
const { TextArea } = Input

export default function InputBox({ questionID, question, callback }) {
  return (
    <Card bordered={false}>
      <TextArea
        rows={1}
        className="rounded-xl border-gray-300"
        placeholder="Write a comment..."
        onChange={e => callback({ question, questionID, type: 'input', event: e.target.value })}
      />
    </Card>
  )
}

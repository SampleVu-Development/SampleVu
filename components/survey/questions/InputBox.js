import { Input, Card } from 'antd';
const { TextArea } = Input;

export default function InputBox ({questionID, title, callback}) {
  return (
    <Card bordered={false}>
      <TextArea rows={1} className="curvedBorder" placeholder="Write a comment..." onChange={(e) => callback({title, questionID, type: "input", event: e.target.value})}/>
    </Card>
  )
}
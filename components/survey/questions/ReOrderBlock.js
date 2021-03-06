import { UpOutlined, DownOutlined } from '@ant-design/icons'
import { Button } from 'antd'

function moveUp() {
  // update state here
  console.log('move up')
}

function moveDown() {
  // update state here
  console.log('move down')
}

export default function ReOrderBlock() {
  return (
    <div className="flex">
      <div className="ml-auto p-2.5">
        <Button type="text">
          <UpOutlined onClick={moveUp} />
        </Button>
        <Button type="text">
          <DownOutlined onClick={moveDown} />
        </Button>
      </div>
    </div>
  )
}

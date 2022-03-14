import { Rate, Card } from 'antd'
import { FrownOutlined, SmileOutlined } from '@ant-design/icons'

export default function StarRating({ callback }) {
  return (
    <div className="flex" bordered={false}>
      <div className="flex flex-1 p-1">
        <FrownOutlined />
      </div>
      <div className="w-3/4">
        <Rate onChange={callback} />
      </div>
      <div className="flex flex-1 p-1">
        <SmileOutlined />
      </div>
    </div>
  )
}

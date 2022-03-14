import { Rate, Card } from 'antd'

export default function StarRating({ callback }) {
  return (
    <div className="flex" bordered={false}>
      <div className="flex flex-1 p-1"></div>
      <div className="w-3/4">
        <Rate onChange={callback} />
      </div>
      <div className="flex flex-1 p-1"></div>
    </div>
  )
}

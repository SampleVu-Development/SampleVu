import { Table, Rate } from 'antd'

export default function ProjectDashboardSamplesTable({ data }) {
  const columns = [
    {
      title: 'Sample #',
      dataIndex: 'sampleID',
      key: 'sampleID',
      render: text => <a href={`view-sample?sample=${text}`}>{text}</a>,
      sorter: (a, b) => a.responses - b.responses,
    },
    {
      title: 'Vendor',
      dataIndex: 'vendor',
      key: 'vendor',
      sorter: (a, b) => (a.vendor < b.vendor ? -1 : 1),
    },
    {
      title: 'Submission Date',
      dataIndex: 'date',
      key: 'date',
      sorter: (a, b) => Date.parse(a.date) - Date.parse(b.date),
    },

    {
      title: 'Rating',
      dataIndex: 'rating',
      key: 'rating',
      render: rating => <Rate disabled defaultValue={rating} />,
      sorter: (a, b) => a.rating - b.rating,
    },
    {
      title: 'Responses',
      dataIndex: 'responses',
      key: 'responses',
      sorter: (a, b) => a.responses - b.responses,
    },
  ]
  return <Table scroll={{ x: true }} dataSource={data} columns={columns} />
}

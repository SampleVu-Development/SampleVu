import Head from 'next/head'
import {
  Card,
  Button,
  PageHeader,
  Input,
  Descriptions,
  Space,
  Table,
  Rate,
  Switch,
  Checkbox,
} from 'antd'
import {
  PlusOutlined,
  ColumnHeightOutlined,
  ReloadOutlined,
  ExpandOutlined,
  SettingOutlined,
  CheckSquareOutlined,
} from '@ant-design/icons'
import PageLayout from '../components/PageLayout'
import { useState } from 'react'

const { Search } = Input

export default function ManageSamples() {
  const sampleName: String = 'Winter Frost'
  const onSearch = text => {
    setDisplayData(
      dataSource.filter(
        entry =>
          entry.sampleID.includes(text) || entry.vendor.includes(text) || entry.date.includes(text)
      )
    )
  }

  const [selectionType, setSelectionType] = useState('checkbox')

  const dataSource = [
    {
      key: '1',
      sampleID: '59468-622',
      vendor: 'acataaa',
      date: '05/19/20',
      rating: 3,
      responses: 4,
      enabled: true,
      share: 'www.awesome.com',
    },
    {
      key: '2',
      sampleID: '14882-622',
      vendor: 'ccccataa',
      date: '03/09/22',
      rating: 4,
      responses: 1,
      enabled: false,
      share: 'www.cool.com',
    },
    {
      key: '3',
      sampleID: '33333-111',
      vendor: 'ddddd',
      date: '04/01/21',
      rating: 5,
      responses: 3,
      enabled: false,
      share: 'www.great.com',
    },
    {
      key: '4',
      sampleID: '22222-111',
      vendor: 'bbbb',
      date: '12/30/08',
      rating: 5,
      responses: 2,
      enabled: true,
      share: 'www.great.com',
    },
  ]

  const [displayData, setDisplayData] = useState([...dataSource])

  const columns = [
    {
      title: 'Sample #',
      dataIndex: 'sampleID',
      key: 'sampleID',
      render: text => <a href={text}>{text}</a>,
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
    {
      title: 'Enable Tasting',
      dataIndex: 'enabled',
      key: 'enabled',
      render: enabled => {
        function onChange(checked) {
          console.log(`switch to ${checked}`)
        }
        return (
          <div>
            <Switch defaultChecked={enabled} onChange={onChange} />
          </div>
        )
      },
      sorter: (a, b) => {
        if (a.enabled && !b.enabled) return -1
        if (!a.enabled && b.enabled) return 1
        return 0
      },
    },
    {
      title: 'Share Tasting',
      dataIndex: 'share',
      key: 'share',
      render: link => <a href={link}>Link/QR Code</a>,
    },
  ]

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
    },
    getCheckboxProps: (record: DataType) => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  }

  return (
    <>
      <Head>
        <title>SampleVu</title>
        <meta name="SampleVu helps companies organize and supply" content="SampleVu" />
      </Head>
      <PageLayout pageName="">
        <main className="p-2.5 text-center">
          <Card>
            <PageHeader
              className="p-0"
              title={`Samples - ${sampleName}`}
              extra={[
                <Search
                  placeholder="input search text"
                  onSearch={onSearch}
                  style={{ width: 200 }}
                />,

                <Button className="border-transparent" icon={<ReloadOutlined />}></Button>,
                <Button className="border-transparent" icon={<ColumnHeightOutlined />}></Button>,
                <Button className="border-transparent" icon={<SettingOutlined />}></Button>,
                <Button className="border-transparent" icon={<ExpandOutlined />}></Button>,
              ]}
            >
              <Descriptions size="small" column={3}>
                <Descriptions.Item>
                  <Space className="p-20">
                    <Button type="primary" icon={<CheckSquareOutlined />}>
                      Compare Selected Results
                    </Button>
                    <Button icon={<PlusOutlined />}>
                      {' '}
                      <a href="add-samples">Add Sample</a>
                    </Button>
                  </Space>
                </Descriptions.Item>
              </Descriptions>
            </PageHeader>
            <Table
              dataSource={displayData}
              columns={columns}
              rowSelection={{
                type: selectionType,
                ...rowSelection,
              }}
            />
            ;
          </Card>
        </main>
      </PageLayout>
    </>
  )
}

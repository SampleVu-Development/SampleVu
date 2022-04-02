import Head from 'next/head'
import { Card, Button, PageHeader, Input, Descriptions, Space, Table } from 'antd'
import {
  PlusOutlined,
  ColumnHeightOutlined,
  ReloadOutlined,
  ExpandOutlined,
  SettingOutlined,
  CheckSquareOutlined,
} from '@ant-design/icons'
import PageLayout from '../components/PageLayout'
const { Search } = Input

export default function ManageSamples() {
  const sampleName: String = 'Winter Frost'
  const onSearch = text => {
    console.log(text)
  }

  const dataSource = [
    {
      key: '1',
      sampleID: '59468-622',
      vendor: 'ADM',
      date: '04/18/22',
      rating: 'poop',
      responses: '0',
      enabled: 'true',
      share: 'www.poop.com',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ]

  const columns = [
    {
      title: 'Sample #',
      dataIndex: 'sampleID',
      key: 'sampleID',
      render: text => (
        <div className="text-sky-400">
          <a>{text}</a>
        </div>
      ),
    },
    {
      title: 'Vendor',
      dataIndex: 'vendor',
      key: 'vendor',
    },
    {
      title: 'Submission Date',
      dataIndex: 'date',
      key: 'date',
    },

    {
      title: 'Rating',
      dataIndex: 'rating',
      key: 'rating',
    },
    {
      title: 'Responses',
      dataIndex: 'responses',
      key: 'responses',
    },
    {
      title: 'Enable Tasting',
      dataIndex: 'enabled',
      key: 'enabled',
    },
    {
      title: 'Share Tasting',
      dataIndex: 'share',
      key: 'share',
    },
  ]

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
                  <Space>
                    <Button type="primary" icon={<CheckSquareOutlined />}>
                      Compare Selected Results
                    </Button>
                    <Button icon={<PlusOutlined />}>Add Sample</Button>
                  </Space>
                </Descriptions.Item>
              </Descriptions>
            </PageHeader>
            <Table dataSource={dataSource} columns={columns} />;
          </Card>
        </main>
      </PageLayout>
    </>
  )
}

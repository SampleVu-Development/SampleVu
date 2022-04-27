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
  Modal,
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
  const projectName: String = 'Winter Frost'
  const projectID: String = 'ProjectWinterFrostID'

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [modalContent, setModalContent] = useState(null)
  const showModal = index => {
    setModalContent(displayData[index])
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const onSearch = text => {
    setDisplayData(
      dataSource.filter(
        entry =>
          entry.sampleID.includes(text) || entry.vendor.includes(text) || entry.date.includes(text)
      )
    )
  }

  const [selectionType, setSelectionType] = useState('checkbox')

  const loadedData = [
    {
      key: '1',
      sampleID: '59468-622',
      vendor: 'acataaa',
      date: '05/19/20',
      rating: 3,
      responses: 4,
      enabled: true,
      share: 'https://url-1.com',
    },
    {
      key: '2',
      sampleID: '14882-622',
      vendor: 'ccccataa',
      date: '03/09/22',
      rating: 4,
      responses: 1,
      enabled: false,
      share: 'https://url-2.com',
    },
    {
      key: '3',
      sampleID: '33333-111',
      vendor: 'dddddgang',
      date: '04/01/21',
      rating: 5,
      responses: 3,
      enabled: false,
      share: 'https://url-3.com',
    },
    {
      key: '4',
      sampleID: '22222-111',
      vendor: 'bbbb',
      date: '12/30/08',
      rating: 5,
      responses: 2,
      enabled: true,
      share: 'https://url-4.com',
    },
    {
      key: '5',
      sampleID: '33333-111',
      vendor: 'ddddd',
      date: '04/01/21',
      rating: 5,
      responses: 3,
      enabled: false,
      share: 'https://url-5.com',
    },
    {
      key: '6',
      sampleID: '22222-111',
      vendor: 'bbbb',
      date: '12/30/08',
      rating: 5,
      responses: 2,
      enabled: true,
      share: 'https://url-6.com',
    },
  ]

  const [dataSource, setDataSource] = useState([...loadedData])

  const [displayData, setDisplayData] = useState([...dataSource])

  function onChange(key, e, i) {
    for (let i = 0; i < dataSource.length; i++) {
      if (dataSource[i].key == key) {
        dataSource[i]['enabled'] = e
        break
      }
    }
    for (let i = 0; i < displayData.length; i++) {
      if (displayData[i].key == key) {
        displayData[i]['enabled'] = e
        break
      }
    }

    setDataSource([...dataSource])
    setDisplayData([...displayData])
  }

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
    {
      title: 'Enable Tasting',
      dataIndex: 'enabled',
      key: 'enabled',
      render: (enabled, entryInfo, i) => {
        return (
          <div>
            <Switch defaultChecked={enabled} onChange={e => onChange(entryInfo.key, e, i)} />
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
      render: (link, entryInfo, i) => {
        if (entryInfo.enabled) return <a onClick={() => showModal(i)}>Link/QR Code</a>
        else return <p className="text-gray-400">Link/QR Code</p>
      },
    },
    {
      title: 'edit',
      dataIndex: 'edit',
      key: 'edit',
      render: (link, entryInfo, i) => {
        return <a href={`create-sample?sample=${entryInfo.sampleID}`}>Edit</a>
      },
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
      <PageLayout pageName="Manage Samples">
        <main className="p-2.5 text-center">
          <PageHeader
            className="sticky w-full bg-white sm:top-0 md:top-20  md:z-30"
            title={`Manage Samples - ${projectName}`}
            extra={[
              <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />,
              <Button className="border-transparent" icon={<ReloadOutlined />}></Button>,
              <Button className="border-transparent" icon={<ColumnHeightOutlined />}></Button>,
              <Button className="border-transparent" icon={<SettingOutlined />}></Button>,
              <Button className="border-transparent" icon={<ExpandOutlined />}></Button>,
            ]}
          >
            <Descriptions size="small" column={3}>
              <Descriptions.Item>
                <Space className="p-2">
                  <a href="results">
                    <Button
                      type="primary"
                      icon={<CheckSquareOutlined className="relative bottom-0.5 p-1" />}
                    >
                      View Results
                    </Button>
                  </a>
                  <a href="create-sample">
                    <Button icon={<PlusOutlined className="relative bottom-0.5 p-1" />}>
                      Add Sample
                    </Button>
                  </a>
                </Space>
              </Descriptions.Item>
            </Descriptions>
          </PageHeader>
          <Card>
            <Table
              scroll={{ x: true }}
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

        <Modal title="Basic Modal" visible={isModalVisible} footer={null} onCancel={handleCancel}>
          {modalContent !== null && <a href={modalContent.share}>{modalContent.share}</a>}
        </Modal>
      </PageLayout>
    </>
  )
}

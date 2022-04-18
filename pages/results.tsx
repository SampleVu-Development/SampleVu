import Head from 'next/head'
import { useState } from 'react'
import { Card, PageHeader, Table, Row, Col, Divider, Select, Rate } from 'antd'
import PageLayout from '../components/PageLayout'

const { Option } = Select

const columns = [
  {
    title: 'Sample',
    dataIndex: 'sample',
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: 'Rating',
    dataIndex: 'rating',
    render: (rating: number) => <Rate disabled allowHalf value={rating} />,
  },
  {
    title: 'Responses',
    dataIndex: 'responses',
  },
]

interface DataType {
  key: React.Key
  sample: string
  rating: number
  responses: number
}

const data: DataType[] = [
  {
    key: '1',
    sample: '59468-622',
    rating: 2.5,
    responses: 32,
  },
  {
    key: '2',
    sample: '23155-438',
    rating: 1,
    responses: 32,
  },
  {
    key: '3',
    sample: '145652-435',
    rating: 5,
    responses: 32,
  },
  {
    key: '4',
    sample: '866392-926',
    rating: 4,
    responses: 32,
  },
]

const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
  },
  getCheckboxProps: (record: DataType) => ({
    disabled: record.sample === 'Disabled Sample', // Column configuration not to be checked
    name: record.sample,
  }),
}

const Demo = () => {
  const [selectionType, setSelectionType] = useState<'checkbox'>('checkbox')

  return (
    <div>
      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  )
}

function onChange(value) {
  console.log(`selected ${value}`)
}

function onSearch(val) {
  console.log('search:', val)
}

export default function Results() {
  return (
    <>
      <Head>
        <title>SampleVu</title>
        <meta name="SampleVu helps companies organize and supply" content="SampleVu" />
      </Head>
      <PageLayout pageName=" Results">
        <main className="p-2.5 text-center">
          <Row gutter={[16, 0]}>
            <Col span={8}>
              <Card>
                <PageHeader className="p-0" title="Overall Ranking"></PageHeader>
                <Divider />
                <Demo />
              </Card>
            </Col>
            <Col span={16}>
              <Card>
                <PageHeader className="p-0" title="Results by Question"></PageHeader>
                <Divider />
                <Select
                  showSearch
                  style={{ width: '100%' }}
                  placeholder="Select a question"
                  optionFilterProp="children"
                  onChange={onChange}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    option.children.toString().toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="q1">Question 1: Rate the SWEETNESS of this sample</Option>
                  <Option value="q2">Question 2: Rate the ACIDITY of this sample</Option>
                  <Option value="q3">Question 3: Rate the COLOR of this sample</Option>
                  <Option value="q4">Question 4: Rate the AROMA of this sample</Option>
                  <Option value="q5">Question 5: How would you rate this sample OVERALL?</Option>
                </Select>
              </Card>
            </Col>
          </Row>
        </main>
      </PageLayout>
    </>
  )
}

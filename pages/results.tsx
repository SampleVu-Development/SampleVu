import Head from 'next/head'
import { useState, useEffect } from 'react'
import * as ReactDOM from 'react-dom'
import { Card, PageHeader, Table, Row, Col, Divider, Select, Rate, Space } from 'antd'
import { Column } from '@ant-design/plots'
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
    dataIndex: 'numberOfResponses',
  },
]

interface DataType {
  key: React.Key
  sample: string
  rating: number
  numberOfResponses: number
}

const sampleInfo: DataType[] = [
  {
    key: '0',
    sample: '59468-622',
    rating: 2.5,
    numberOfResponses: 32,
  },
  {
    key: '1',
    sample: '23155-438',
    rating: 1,
    numberOfResponses: 32,
  },
  {
    key: '2',
    sample: '145652-435',
    rating: 5,
    numberOfResponses: 32,
  },
  {
    key: '3',
    sample: '866392-926',
    rating: 4,
    numberOfResponses: 32,
  },
]

const results = [
  {
    key: 0,
    sample: '59468-622',
    question: 'q1',
    numberOfResponses: [
      { sample: '59468-622', type: '1', responses: 2 },
      { sample: '59468-622', type: '2', responses: 3 },
      { sample: '59468-622', type: '3', responses: 7 },
      { sample: '59468-622', type: '4', responses: 10 },
      { sample: '59468-622', type: '5', responses: 10 },
    ],
  },

  {
    key: 1,
    sample: '23155-438',
    question: 'q1',
    numberOfResponses: [
      { sample: '23155-438', type: '1', responses: 10 },
      { sample: '23155-438', type: '2', responses: 5 },
      { sample: '23155-438', type: '3', responses: 12 },
      { sample: '23155-438', type: '4', responses: 5 },
      { sample: '23155-438', type: '5', responses: 0 },
    ],
  },
  {
    key: 2,
    sample: '145652-435',
    question: 'q1',
    numberOfResponses: [
      { sample: '145652-435', type: '1', responses: 2 },
      { sample: '145652-435', type: '2', responses: 6 },
      { sample: '145652-435', type: '3', responses: 20 },
      { sample: '145652-435', type: '4', responses: 14 },
      { sample: '145652-435', type: '5', responses: 30 },
    ],
  },
  {
    key: 3,
    sample: '866392-926',
    question: 'q1',
    numberOfResponses: [
      { sample: '866392-926', type: '1', responses: 2 },
      { sample: '866392-926', type: '2', responses: 10 },
      { sample: '866392-926', type: '3', responses: 5 },
      { sample: '866392-926', type: '4', responses: 10 },
      { sample: '866392-926', type: '5', responses: 15 },
    ],
  },
  {
    key: 5,
    sample: '59468-622',
    question: 'q2',
    numberOfResponses: [
      { sample: '59468-622', type: '1', responses: 2 },
      { sample: '59468-622', type: '2', responses: 30 },
      { sample: '59468-622', type: '3', responses: 7 },
      { sample: '59468-622', type: '4', responses: 10 },
      { sample: '59468-622', type: '5', responses: 10 },
    ],
  },
  {
    key: 6,
    sample: '59468-622',
    question: 'q3',
    numberOfResponses: [
      { sample: '59468-622', type: '1', responses: 20 },
      { sample: '59468-622', type: '2', responses: 3 },
      { sample: '59468-622', type: '3', responses: 7 },
      { sample: '59468-622', type: '4', responses: 10 },
      { sample: '59468-622', type: '5', responses: 10 },
    ],
  },
  {
    key: 7,
    sample: '59468-622',
    question: 'q4',
    numberOfResponses: [
      { sample: '59468-622', type: '1', responses: 2 },
      { sample: '59468-622', type: '2', responses: 3 },
      { sample: '59468-622', type: '3', responses: 7 },
      { sample: '59468-622', type: '4', responses: 10 },
      { sample: '59468-622', type: '5', responses: 1 },
    ],
  },
  {
    key: 8,
    sample: '59468-622',
    question: 'q5',
    numberOfResponses: [
      { sample: '59468-622', type: '1', responses: 2 },
      { sample: '59468-622', type: '2', responses: 3 },
      { sample: '59468-622', type: '3', responses: 7 },
      { sample: '59468-622', type: '4', responses: 1 },
      { sample: '59468-622', type: '5', responses: 10 },
    ],
  },
]

let filteredResults

let data

let samples = []

const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    samples = []
    selectedRows.forEach(function (row) {
      samples.push(row.sample)
    })
    console.log(`samples: ${samples}`, 'selectedRows: ', selectedRows)
    renderChart()
  },
  getCheckboxProps: (record: DataType) => ({
    disabled: record.sample === 'Disabled Sample', // Column configuration not to be checked
    name: record.sample,
  }),
}

function renderChart() {
  data = []
  let app = document.getElementById('Charts')
  ReactDOM.unmountComponentAtNode(app)
  if (filteredResults != null) {
    filteredResults.forEach(function (response) {
      if (samples.includes(response['sample'])) {
        response['numberOfResponses'].forEach(function (input) {
          data.push(input)
        })
      }
    })
    console.log(data)
    ReactDOM.render(<DemoColumn />, app)
  }
}

const SampleTable = () => {
  const [selectionType, setSelectionType] = useState<'checkbox'>('checkbox')

  return (
    <div>
      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={sampleInfo}
      />
    </div>
  )
}

const DemoColumn = () => {
  const config = {
    data,
    isGroup: true,
    xField: 'type',
    yField: 'responses',
    seriesField: 'sample',

    label: {
      position: 'middle',
      layout: [
        {
          type: 'interval-adjust-position',
        },
        {
          type: 'interval-hide-overlap',
        },
        {
          type: 'adjust-color',
        },
      ],
    },
  }
  return <Column {...config} />
}

function onChange(value) {
  console.log(`selected ${value}`)
  filteredResults = []
  results.forEach(function (response) {
    if (response['question'] == value) {
      filteredResults.push(response)
    }
  })
  filteredResults.forEach(function (response) {
    console.log(response)
  })

  if (samples.length > 0) {
    renderChart()
  } else {
    let app = document.getElementById('Charts')
    ReactDOM.unmountComponentAtNode(app)
  }
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
        <main className="p-2.5">
          <Row gutter={[16, 16]} justify="center">
            <Col xs={24} xl={12}>
              <Card title="Overall Ranking" className="h-full">
                <SampleTable />
              </Card>
            </Col>
            <Col xs={24} xl={12}>
              <Card title="Results by Question">
                <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
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
                  <div id="Charts" className=""></div>
                </Space>
              </Card>
            </Col>
          </Row>
        </main>
      </PageLayout>
    </>
  )
}

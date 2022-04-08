import Head from 'next/head'
import {
  Card,
  Button,
  PageHeader,
  Input,
  Descriptions,
  Space,
  Table,
  Row,
  Col,
  Divider,
  Select,
} from 'antd'
import PageLayout from '../components/PageLayout'

const { Option } = Select

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
              </Card>
            </Col>
            <Col span={16}>
              <Card>
                <PageHeader className="p-0" title="Results by Question"></PageHeader>
                <Divider />
                <Select
                  showSearch
                  style={{ width: '95%' }}
                  placeholder="Select a question"
                  optionFilterProp="children"
                  onChange={onChange}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
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

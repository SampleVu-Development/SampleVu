import Head from 'next/head'
import PageLayout from '../components/PageLayout'
import { Row, Col, Card, PageHeader, Divider } from 'antd'

export default function ProjectDashboard() {
  return (
    <>
      <head>
        <title>SampleVu</title>
        <meta name="SampleVu helps companies organize and supply" content="SampleVu" />
      </head>
      <PageLayout pageName="Winter Frost">
        <div className="m-2.5 max-h-full">
          <Row gutter={[16, 0]}>
            <Col flex="auto">
              <Card title="Project Details" className="h-full"></Card>
            </Col>
            <Col flex="auto">
              <Card title="Survey"></Card>
            </Col>
          </Row>
        </div>
      </PageLayout>
    </>
  )
}

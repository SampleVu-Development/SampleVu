import Head from 'next/head'
import { Card, Button, PageHeader, Input, Descriptions, Space, Table, Row, Col } from 'antd'
import PageLayout from '../components/PageLayout'

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
            <Col span={12}>
              <Card>
                <PageHeader className="p-0" title="Overall Ranking"></PageHeader>
              </Card>
            </Col>
            <Col span={12}>
              <Card>
                <PageHeader className="p-0" title="Results by Question"></PageHeader>
              </Card>
            </Col>
          </Row>
        </main>
      </PageLayout>
    </>
  )
}

import Head from 'next/head'
import PageLayout from '../components/PageLayout'
import { Row, Col, Card, Button, Empty, Radio } from 'antd'
import { FormOutlined, UsergroupAddOutlined, FileTextOutlined } from '@ant-design/icons'

export default function ProjectDashboard() {
  return (
    <>
      <head>
        <title>SampleVu</title>
        <meta name="SampleVu helps companies organize and supply" content="SampleVu" />
      </head>

      <PageLayout pageName="Winter Frost">
        <div className="xs:h-screen m-3">
          <Row gutter={[16, 16]}>
            <Col flex="auto">
              <Card
                className="mb-5 xl:h-full"
                title="Project Details"
                extra={
                  <Button type="link" size="large">
                    Edit
                  </Button>
                }
              >
                <div className="flex flex-col items-center p-5">
                  <FormOutlined style={{ fontSize: '170%' }} className="m-2" />
                  <p className="m-3 text-lg text-blue-500">Customize Project Details</p>
                  <Button type="primary" size="large">
                    Create Now
                  </Button>
                </div>
              </Card>
            </Col>
            <Col flex="auto">
              <Row gutter={[16, 16]}>
                <Col flex="auto">
                  <Card
                    className="mb-5"
                    title="Survey"
                    extra={
                      <Button type="link" size="large">
                        Edit
                      </Button>
                    }
                  >
                    <div className="flex flex-col items-center p-5">
                      <FileTextOutlined style={{ fontSize: '170%' }} className="m-2" />
                      <p className="m-3 text-lg text-blue-500">Create New Survey</p>
                      <Button type="primary" size="large">
                        Add Survey
                      </Button>
                    </div>
                  </Card>
                </Col>
                <Col flex="auto">
                  <Card
                    className="mb-5"
                    title="Team Members"
                    extra={
                      <Button type="link" size="large">
                        Edit
                      </Button>
                    }
                  >
                    <div className="flex flex-col items-center p-5">
                      <UsergroupAddOutlined style={{ fontSize: '170%' }} className="m-2" />
                      <p className="m-3 text-lg text-blue-500">Add Internal Collaborators</p>
                      <Button type="primary" size="large">
                        Add Now
                      </Button>
                    </div>
                  </Card>
                </Col>
              </Row>
              <Col flex="auto">
                <Card
                  className="mb-5"
                  title="Samples"
                  extra={
                    <Button type="link" size="large">
                      Edit
                    </Button>
                  }
                >
                  <div className="flex flex-col items-center p-5">
                    <Empty />
                  </div>
                </Card>
              </Col>
            </Col>
          </Row>
        </div>
      </PageLayout>
    </>
  )
}

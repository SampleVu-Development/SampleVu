import Head from 'next/head'
import PageLayout from '../components/PageLayout'
import { Row, Col, Card, Button, Empty, Radio } from 'antd'
import { FormOutlined, UsergroupAddOutlined, FileTextOutlined } from '@ant-design/icons'
import ProjectDashboardSamplesTable from '../components/ProjectDashboardSamplesTable'

export default function ProjectDashboard() {
  const dummySampleData = [
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
      vendor: 'ddddd',
      date: '04/01/21',
      rating: 5,
      responses: 3,
      enabled: false,
      share: 'https://url-3.com',
    },
  ]

  return (
    <>
      <head>
        <title>SampleVu</title>
        <meta name="SampleVu helps companies organize and supply" content="SampleVu" />
      </head>

      <PageLayout pageName="__Passed in project name">
        <div className="xs:h-screen m-3">
          <Row gutter={[16, 16]}>
            <Col flex="auto">
              <Card
                className="mb-5 lg:h-full"
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
                  className="mb-5 w-full"
                  title={<a href="manage-samples">Samples</a>}
                  extra={
                    <Button type="link" size="large">
                      Edit
                    </Button>
                  }
                >
                  {dummySampleData == null && (
                    <div className="flex flex-col items-center p-5">
                      <Empty />
                    </div>
                  )}
                  {dummySampleData != null && (
                    <ProjectDashboardSamplesTable data={dummySampleData} />
                  )}
                </Card>
              </Col>
            </Col>
          </Row>
        </div>
      </PageLayout>
    </>
  )
}

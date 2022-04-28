import Head from 'next/head'
import PageLayout from '../components/PageLayout'
import { Row, Col, Card, Button, Empty, Space } from 'antd'
import {
  FormOutlined,
  UsergroupAddOutlined,
  FileTextOutlined,
  PlusOutlined,
} from '@ant-design/icons'
import { useState } from 'react'
import ProjectDashboardSamplesTable from '../components/ProjectDashboardSamplesTable'
import AddCollaboratorModal from '../components/project/AddCollaboratorModal'
import dummyData from '../dummy-data'
import { useRouter } from 'next/router'

export default function ProjectDashboard() {
  const router = useRouter()
  const { id } = router.query
  const [isModalVisible, setIsModalVisible] = useState(false)
  console.log(dummyData[id])
  const showModal = () => {
    setIsModalVisible(true)
  }

  return (
    <>
      <head>
        <title>SampleVu</title>
        <meta name="SampleVu helps companies organize and supply" content="SampleVu" />
      </head>

      {id != null && (
        <PageLayout pageName="Winter Frost">
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
                    <Button type="primary" size="large" disabled={dummyData[id].length == 0}>
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
                        <Button type="primary" size="large" disabled={dummyData[id].length == 0}>
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
                        <Button
                          type="primary"
                          size="large"
                          disabled={dummyData[id].length == 0}
                          onClick={showModal}
                        >
                          Add Now
                        </Button>
                      </div>
                    </Card>
                  </Col>
                </Row>
                <Col flex="auto">
                  <Card
                    className="mb-5 w-full"
                    title="Samples"
                    extra={
                      <Space className="block md:flex">
                        <a href={`create-sample?id=${id}`}>
                          <Button
                            disabled={dummyData[id].length == 0}
                            type="primary"
                            icon={<PlusOutlined className="relative bottom-0.5 p-1" />}
                          >
                            Add Samples
                          </Button>
                        </a>
                        <a href={`manage-samples?id=${id}`}>
                          {' '}
                          <Button disabled={dummyData[id].length == 0}>Manage Samples</Button>
                        </a>
                        <a href={`results?id=${id}`}>
                          <Button disabled={dummyData[id].length == 0}>View Results</Button>
                        </a>
                      </Space>
                    }
                  >
                    {dummyData[id].length == 0 ? (
                      <div className="flex flex-col items-center p-5">
                        <Empty />
                      </div>
                    ) : (
                      <ProjectDashboardSamplesTable data={dummyData[id].samples} />
                    )}
                  </Card>
                </Col>
              </Col>
            </Row>
          </div>
          <AddCollaboratorModal
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
          />
        </PageLayout>
      )}
    </>
  )
}

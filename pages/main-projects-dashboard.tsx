import Head from 'next/head'
import PageLayout from '../components/PageLayout'
import { Card, Row, Col, Typography, Avatar, Tooltip } from 'antd'
import { UserOutlined } from '@ant-design/icons'

export default function MainProjectsDashboard() {
  return (
    <>
      <head>
        <title>SampleVu</title>
        <meta name="SampleVu helps companies organize and supply" content="SampleVu" />
      </head>
      <PageLayout pageName="Projects">
        <div className="xs:h-screen m-3">
          <Row gutter={[16, 16]}>
            <Col span={8}>
              {/* title = {projectName} */}
              {/* pass it in the porject name when loopong thorugh data later? */}
              <Card title="Sample Project" bordered={false}>
                <div className="pb-9">
                  <Typography.Title level={5} style={{ margin: 0 }}>
                    Description
                  </Typography.Title>
                  idk something im so tired
                </div>
                <div className="flex justify-between">
                  <p>Sample due __</p>
                  <Avatar.Group>
                    <Avatar icon={<UserOutlined />} />
                    <Tooltip title="Ant User" placement="top">
                      <Avatar
                        style={{
                          backgroundColor: '#87d068',
                        }}
                        icon={<UserOutlined />}
                      />
                    </Tooltip>
                  </Avatar.Group>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </PageLayout>
    </>
  )
}

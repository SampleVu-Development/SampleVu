import Head from 'next/head'
import PageLayout from '../components/PageLayout'
import { Card, Row, Col, Typography } from 'antd'
import dummyData from '../dummy-data.js'
const { Text } = Typography

export default function MainProjectsDashboard() {
  return (
    <>
      <head>
        <title>SampleVu</title>
        <meta name="SampleVu helps companies organize and supply" content="SampleVu" />
      </head>
      <PageLayout pageName="Project Dashboard">
        <div className="m-3 h-screen">
          <Row gutter={[16, 16]}>
            <>
              {Object.keys(dummyData).map(d => {
                return (
                  <Col xs={24} sm={12} lg={8}>
                    <a href={`/project-dashboard?id=${d}`}>
                      <Card
                        title={dummyData[d].projectName}
                        bordered={false}
                        className="h-full hover:shadow-lg"
                      >
                        <div className="pb-9">
                          <Typography.Title level={5} style={{ margin: 0 }}>
                            Description
                          </Typography.Title>
                          {dummyData[d].description}
                        </div>
                        {dummyData[d].dueDate.length == 0 ? (
                          <>
                            <Text type="secondary">Currently No Sample Due Date</Text>
                          </>
                        ) : (
                          <div>
                            <Text type="secondary">Sample Due </Text>
                            <br />
                            <Text type="secondary">{dummyData[d].dueDate}</Text>
                          </div>
                        )}
                      </Card>
                    </a>
                  </Col>
                )
              })}
            </>
          </Row>
        </div>
      </PageLayout>
    </>
  )
}

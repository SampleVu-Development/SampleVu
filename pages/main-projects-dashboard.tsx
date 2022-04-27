import Head from 'next/head'
import PageLayout from '../components/PageLayout'
import { Card, Row, Col, Typography } from 'antd'
import { useState } from 'react'
const { Text } = Typography
const data = [
  {
    key: '1',
    projectName: 'Winter Frost',
    description: 'good stuff.... some sort of sport drink i think',
    sampleDue: 'April 30, 2021',
  },
  {
    key: '2',
    projectName: 'Winter Frost 2.0',
    description: 'good stuff.... some sort of sport drink i think',
    sampleDue: 'April 30, 2022',
  },
  {
    key: '3',
    projectName: 'Winter Frost 3.0',
    description: 'good stuff.... some sort of sport drink i think',
    sampleDue: '',
  },
  {
    key: '4',
    projectName: 'Winter Frost 4.0',
    description: 'good stuff.... some sort of sport drink i think',
    sampleDue: 'April 30, 2022',
  },
  {
    key: '5',
    projectName: 'Winter Frost 5.0',
    description: 'good stuff.... some sort of sport drink i think',
    sampleDue: '',
  },
]
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
              {data.map(d => {
                return (
                  <Col xs={24} sm={12} lg={8}>
                    <a href="/project-dashboard">
                      <Card
                        title={d.projectName}
                        bordered={false}
                        className="h-full hover:shadow-lg"
                      >
                        <div className="pb-9">
                          <Typography.Title level={5} style={{ margin: 0 }}>
                            Description
                          </Typography.Title>
                          {d.description}
                        </div>
                        {d.sampleDue.length == 0 ? (
                          <>
                            <Text type="secondary">Currently No Sample Due Date</Text>
                          </>
                        ) : (
                          <div>
                            <Text type="secondary">Sample Due </Text>
                            <br />
                            <Text type="secondary">{d.sampleDue}</Text>
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

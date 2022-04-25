import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import PageLayout from '../../components/PageLayout'
import { Card, PageHeader, List, Button } from 'antd'
import { FileOutlined, DeleteOutlined } from '@ant-design/icons'

export default function ViewSample() {
  const router = useRouter()
  const { sample } = router.query

  // check if this sample even exists or is enabled
  function validateSample() {
    return true
  }
  const sampleExists = validateSample() ? true : false

  const data = [
    { title: 'Vendor Name', description: 'AwesomeCo' },
    { title: 'User Submitted', description: 'AwesomeCoEmployee5' },
    { title: 'Sample Number', description: sample },
    { title: 'Submission Date', description: '04/03/23 5:30PM' },
    { title: 'Responses', description: 10 },
    { title: 'CRM ID', description: '32410ASJI' },
    {
      title: 'Instructions',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lacinia tortor quis turpis pellentesque, eu condimentum ex consectetur. Nunc lacinia et magna quis lacinia. Proin porta consequat est. Cras porttitor neque non magna aliquam, vitae faucibus erat malesuada. Donec et tristique nibh, vel sodales risus. Integer ac tempor velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc dignissim massa nec eros vestibulum, eget lobortis nibh vehicula. Sed magna lacus, pharetra in pretium vitae, mattis in augue. Nunc varius tortor sollicitudin nunc condimentum, non feugiat sapien finibus. Quisque purus mauris, condimentum a tellus in, bibendum commodo leo.',
    },
    {
      title: 'Documentation',
      description: (
        <div className="flex w-full text-center">
          <a href={`view-documentation?sample=${sample}`}>
            <p className="p-0">Open file</p>
            <FileOutlined />
          </a>
        </div>
      ),
    },
  ]

  return (
    <>
      <Head>
        <title>SampleVu</title>
        <meta name="SampleVu helps companies organize and supply" content="SampleVu" />
      </Head>

      <PageLayout pageName={``}>
        <main className="p-2.5 text-center">
          <Card>
            {sampleExists && <PageHeader className="p-0" title={`Sample# ${sample}`} />}
            {!sampleExists && (
              <PageHeader className="p-0" title={`Sample# ${sample} does not exist`} />
            )}

            {sampleExists && (
              <>
                <List
                  className="text-left"
                  dataSource={data}
                  renderItem={item => (
                    <List.Item className="p-1">
                      <List.Item.Meta title={item.title} description={item.description} />
                    </List.Item>
                  )}
                />
              </>
            )}
          </Card>
        </main>
      </PageLayout>
    </>
  )
}

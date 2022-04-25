import React from 'react'
import Head from 'next/head'
import PageLayout from '../components/PageLayout'
import CreateSampleForm from '../components/CreateSampleForm'
import { Button, Space } from 'antd'
import { StopOutlined, DeleteOutlined, CheckOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function CreateSample() {
  const defaultSample = {
    'company-name': '',
    'sample-num': '',
    'crm-id': '',
    instructions: '',
    documents: '',
  }
  const router = useRouter()
  const { sample } = router.query

  const deleteButton = sample == null ? <StopOutlined /> : <DeleteOutlined />
  const titleText = sample == null ? 'Create New Sample' : 'Edit Sample'
  const formText = sample == null ? 'Create New Sample' : `Edit Sample: ${sample}`

  const [sampleDetails, updateSampleDetails] = useState({ ...defaultSample })

  const updateSample = (event: any, id: string) => {
    let newArr = { ...sampleDetails }
    if (id != 'documents') newArr[id] = event.target.value
    else newArr[id] = event
    updateSampleDetails(newArr)
  }

  const finalizeSample = () => {
    console.log('finalize samples')
  }

  const cancelSample = () => {
    console.log('cancel sample creation')
  }

  return (
    <>
      <Head>
        <title>SampleVu</title>
        <meta name="SampleVu helps companies organize and supply" content="SampleVu" />
      </Head>

      <PageLayout pageName={titleText}>
        <main id="sample-main-container" className="p-6 text-center">
          <div id="sample-view">
            <CreateSampleForm title={formText} update={updateSample} data={sampleDetails} />
          </div>
          <Space>
            <a href="manage-samples">
              <Button
                onClick={cancelSample}
                icon={deleteButton}
                className="top-3"
                type="primary"
                danger
              >
                Cancel
              </Button>
            </a>
            <a href="manage-samples">
              <Button
                onClick={finalizeSample}
                icon={<CheckOutlined className="" />}
                className="top-3"
                type="primary"
              >
                Done
              </Button>
            </a>
          </Space>
        </main>
      </PageLayout>
    </>
  )
}

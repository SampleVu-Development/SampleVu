import React from 'react'
import Head from 'next/head'
import PageLayout from '../components/PageLayout'
import CreateSampleForm from '../components/CreateSampleForm'
import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react'

export default function CreateSamples() {
  const defaultSample = {
    'company-name': '',
    'sample-num': '',
    'crm-id': '',
    instructions: '',
    documents: '',
  }

  const inputValues = {
    'company-name': '',
    'sample-num': '',
    'crm-id': '',
    instructions: '',
  }
  const [sampleArr, updateSampleArr] = useState([{ ...defaultSample }])

  const updateSample = (index: number, event: any, id: string) => {
    let newArr = [...sampleArr]
    newArr[index][id] = event.target.value
    updateSampleArr(newArr)
  }
  const removeSample = index => {
    let newArr = [...sampleArr]
    newArr.splice(index, 1)
    updateSampleArr(newArr)
  }

  useEffect(() => {
    sampleArr.map((elt, i) => {
      for (const key in inputValues) {
        let val = document.getElementById(`input-${key}${i}`)
        console.log(val.value)
        document.getElementById(`input-${key}${i}`).value = elt[key]
      }
      console.log(elt)
    })
  })

  const addSample = () => {
    updateSampleArr([...sampleArr, { ...defaultSample }])
  }

  return (
    <>
      <Head>
        <title>SampleVu</title>
        <meta name="SampleVu helps companies organize and supply" content="SampleVu" />
      </Head>

      <PageLayout pageName="Create Sample">
        <main id="sample-main-container" className="p-6 text-center">
          <div id="sample-view">
            {sampleArr.map((el, i) => (
              <>
                <CreateSampleForm
                  update={updateSample}
                  remove={removeSample}
                  sampleIndex={i}
                  data={el}
                  numSamples={sampleArr.length}
                />
              </>
            ))}
          </div>
          <Button
            onClick={addSample}
            icon={<PlusOutlined className="bottom-0.5" />}
            className="top-3"
            type="primary"
          >
            Add Sample
          </Button>
        </main>
      </PageLayout>
    </>
  )
}

import React from 'react'
import { Form, Space, Input, Button, Upload, Row, Card } from 'antd'
import { InboxOutlined, DeleteOutlined } from '@ant-design/icons'
import { useEffect } from 'react'

const { TextArea } = Input

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
}

const normFile = (e: any) => {
  console.log('Upload event:', e)
  if (Array.isArray(e)) {
    return e
  }
  return e && e.fileList
}

export default function CreateSampleForm({ update, remove, sampleIndex, data, numSamples }) {
  return (
    <>
      <br />
      <Card
        id={`sample-form${sampleIndex}`}
        title={`Sample ${sampleIndex + 1}`}
        className="left-1/4  max-w-[50%]"
      >
        <Form
          title={`Sample ${sampleIndex + 1}`}
          name={`Sample ${sampleIndex + 1}`}
          {...formItemLayout}
        >
          <Form.Item label="Company name">
            <Form.Item name="company-name" noStyle>
              <Input
                id={`input-company-name${sampleIndex}`}
                placeholder="type name here..."
                value={data['company-name']}
                onChange={e => update(sampleIndex, e, 'company-name')}
              />
            </Form.Item>
          </Form.Item>

          <Form.Item label="Sample #">
            <Form.Item name="sample-num" noStyle>
              <Input
                id={`input-sample-num${sampleIndex}`}
                placeholder="type name here..."
                value={data['sample-num']}
                onChange={e => update(sampleIndex, e, 'sample-num')}
              />
            </Form.Item>
          </Form.Item>

          <Form.Item label="CRM ID">
            <Form.Item name="crm-id" noStyle>
              <Input
                id={`input-crm-id${sampleIndex}`}
                placeholder="type id here..."
                value={data['crm-id']}
                onChange={e => update(sampleIndex, e, 'crm-id')}
              />
            </Form.Item>
          </Form.Item>

          <Form.Item label="Instructions">
            <Form.Item name="instructions" noStyle>
              <TextArea
                id={`input-instructions${sampleIndex}`}
                placeholder="type instructions here..."
                value={data['instructions']}
                onChange={e => update(sampleIndex, e, 'instructions')}
              />
            </Form.Item>
          </Form.Item>

          <Form.Item label="Upload documents">
            <Form.Item
              name="documents"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              noStyle
            >
              <Upload.Dragger name="files" action="/upload.do">
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">Support for a single or bulk upload.</p>
              </Upload.Dragger>
            </Form.Item>
          </Form.Item>
          <Form.Item className="flex w-full text-center" wrapperCol={{ span: 12, offset: 6 }}>
            <Row className="margin-auto inline-block">
              <Space>
                {numSamples > 1 && (
                  <Button
                    icon={<DeleteOutlined />}
                    type="primary"
                    danger
                    onClick={() => remove(sampleIndex)}
                  >
                    Delete
                  </Button>
                )}
              </Space>
            </Row>
          </Form.Item>
        </Form>
      </Card>
    </>
  )
}

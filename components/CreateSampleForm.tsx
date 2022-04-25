import React from 'react'
import { Form, Space, Input, Button, Upload, Row, Card } from 'antd'
import { InboxOutlined, DeleteOutlined } from '@ant-design/icons'

const { TextArea } = Input

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
}

export default function CreateSampleForm({ update, data }) {
  const normFile = (e: any) => {
    // console.log('Upload event:', e)
    if (Array.isArray(e)) {
      return e
    }
    update(e.fileList, 'documents')
  }
  return (
    <>
      <br />
      <Card title="Create New Sample" className="left-1/4  max-w-[50%]">
        <Form title="Create New Sample" name="sample-form" {...formItemLayout}>
          <Form.Item label="Company name">
            <Form.Item name="company-name" noStyle>
              <Input
                placeholder="type name here..."
                value={data['company-name']}
                onChange={e => update(e, 'company-name')}
              />
            </Form.Item>
          </Form.Item>

          <Form.Item label="Sample #">
            <Form.Item name="sample-num" noStyle>
              <Input
                placeholder="type name here..."
                value={data['sample-num']}
                onChange={e => update(e, 'sample-num')}
              />
            </Form.Item>
          </Form.Item>

          <Form.Item label="CRM ID">
            <Form.Item name="crm-id" noStyle>
              <Input
                placeholder="type id here..."
                value={data['crm-id']}
                onChange={e => update(e, 'crm-id')}
              />
            </Form.Item>
          </Form.Item>

          <Form.Item label="Instructions">
            <Form.Item name="instructions" noStyle>
              <TextArea
                placeholder="type instructions here..."
                value={data['instructions']}
                onChange={e => update(e, 'instructions')}
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
        </Form>
      </Card>
    </>
  )
}

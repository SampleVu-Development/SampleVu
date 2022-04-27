import React from 'react'
import { useState } from 'react'
import { PageHeader, Button, Tabs, Input, Modal, Form, Divider, Space } from 'antd'

const NewProjectModal = ({ isModalVisible, setIsModalVisible }) => {
  const handleCancel = () => {
    setIsModalVisible(false)
  }
  return (
    <Modal
      title="Project detail"
      visible={isModalVisible}
      onCancel={handleCancel}
      width={1000}
      footer={[
        <div className="flex items-baseline justify-end p-3">
          <Space>
            <p>Does everything look Okay? Don't worry you can still edit later</p>
            <Button type="primary">Submit</Button>
          </Space>
        </div>,
      ]}
    >
      <div className="pl-20 pr-20">
        <Form>
          <Divider plain>General Information</Divider>
          <Form.Item
            name="Project Name"
            label="Project Name"
            rules={[
              {
                required: true,
                message: 'Please input project name',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="Samples Due by"
            label="Samples Due by"
            rules={[
              {
                required: true,
                message: 'Please input sample due date',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="Description/Objective"
            label="Description/Objective"
            rules={[
              {
                required: true,
                message: 'Please input description',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="Competitive Products" label="Competitive Products">
            <Input />
          </Form.Item>

          <Divider plain>Technical Requirements</Divider>
          <Form.Item
            name="Project Application"
            label="Project Application"
            rules={[
              {
                required: true,
                message: 'Please input project name',
              },
            ]}
            help="Description of processing conditions, application, end product, etc"
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="Regulatory/Dietary"
            label="Regulatory/Dietary"
            rules={[
              {
                required: true,
                message: 'Please input sample due date',
              },
            ]}
            help="Natural Aritical, Allegren Free, Kosher, Halal, etc"
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="Required Documentation"
            label="Required Documentation"
            rules={[
              {
                required: true,
                message: 'Please input description',
              },
            ]}
            help="Certificate of Analysis Nutrional info, Kosher Certificate, etc"
          >
            <Input />
          </Form.Item>
          <Form.Item name="Minimum Sample Size" label="Minimum Sample Size">
            <Input />
          </Form.Item>

          <Divider plain>Target Selling Price</Divider>
          <Form.Item name="Project Application" label="Project Application" help="$USD / Lb (Kg)">
            <Input />
          </Form.Item>
          <Form.Item name="Cost in Use" label="Cost in Use" help="$USD / Lb (Kg)">
            <Input />
          </Form.Item>
          <Form.Item name="Annual Volumn" label="Annual Volumn" help="$USD / Lb (Kg)">
            <Input />
          </Form.Item>
        </Form>
      </div>
    </Modal>
  )
}

export default NewProjectModal

import React from 'react'
import { useState } from 'react'
import { PageHeader, Button, Tabs, Input, Modal } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

const { Search } = Input

const { TabPane } = Tabs
const ProjectDashboardHeader = ({ pageName }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }
  return (
    <>
      <PageHeader
        title={pageName}
        className="bg-white"
        extra={[
          <Button
            type="primary"
            className="border-transparent"
            icon={<PlusOutlined />}
            onClick={showModal}
          >
            New Project
          </Button>,
        ]}
        footer={
          <div className="flex justify-between">
            <Tabs defaultActiveKey="1">
              <TabPane tab="Ongoing" key="1" />
              <TabPane tab="Completed" key="2" />
            </Tabs>
            <Search placeholder="input search text" style={{ width: 400 }} />
          </div>
        }
      ></PageHeader>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  )
}

export default ProjectDashboardHeader

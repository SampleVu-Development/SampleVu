import React from 'react'

import { Button, Tabs, Input, Modal, Select, Space } from 'antd'
import { TeamOutlined, PlusOutlined, CopyOutlined } from '@ant-design/icons'

const { TabPane } = Tabs
const { Option } = Select
const AddCollaboratorModal = ({ isModalVisible, setIsModalVisible }) => {
  function handleChange(value) {
    console.log(`selected ${value}`)
  }
  const handleCancel = () => {
    setIsModalVisible(false)
  }
  return (
    <Modal
      title={[
        <Tabs defaultActiveKey="1">
          <TabPane
            tab={
              <span>
                <TeamOutlined />
                Team Member
              </span>
            }
            key="1"
          />
        </Tabs>,
      ]}
      visible={isModalVisible}
      onCancel={handleCancel}
      width={1000}
      footer={[
        <a className="flex w-full items-center justify-center">
          <CopyOutlined className="pr-2" />
          Copy Link
          {/* </Space> */}
        </a>,
      ]}
    >
      Add internal team member emails and enable view or edit permissions, then copy and share the
      project link with those users.
      <div className="p-2">
        <Input.Group>
          <Input style={{ width: '50%' }}></Input>
          <Space>
            <Select defaultValue="Can Edit" style={{ width: 120 }} onChange={handleChange}>
              <Option value="Can Edit">Can Edit</Option>
              <Option value="Can View">Can View</Option>
            </Select>
            <Button type="primary" icon={<PlusOutlined />}>
              Add
            </Button>
          </Space>
        </Input.Group>
      </div>
    </Modal>
  )
}

export default AddCollaboratorModal

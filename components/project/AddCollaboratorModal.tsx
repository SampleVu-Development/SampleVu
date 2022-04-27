import React from 'react'

import { Button, Tabs, Input, Modal, Select, Space, Divider, List, Avatar } from 'antd'
import { TeamOutlined, PlusOutlined, CopyOutlined } from '@ant-design/icons'

const { TabPane } = Tabs
const { Option } = Select
const data = [
  {
    title: 'Some person 1',
  },
  {
    title: 'Some person 2',
  },
  {
    title: 'Some Person 3',
  },
  {
    title: 'Some Person 4',
  },
]

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
      width={700}
      footer={[
        <a className="flex w-full items-center justify-center">
          <CopyOutlined className="pr-2" />
          Copy Link
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
      <Divider />
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={<a href="https://ant.design">{item.title}</a>}
            />
            <Select defaultValue="Can Edit" style={{ width: 120 }} onChange={handleChange}>
              <Option value="Can Edit">Can Edit</Option>
              <Option value="Can View">Can View</Option>
            </Select>
          </List.Item>
        )}
      />
    </Modal>
  )
}

export default AddCollaboratorModal

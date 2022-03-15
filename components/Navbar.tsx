import React from 'react'
import { Menu } from 'antd'
import { HomeOutlined, AppstoreOutlined } from '@ant-design/icons'

/*
  TODO: Create Navbar for users with accounts
  Must have SampleVu logo and be responsive
  Refer to antd documentation for specific implementation and styling
 */

const Navbar: React.FC = () => {
  return (
    <Menu mode="inline">
      <Menu.Item key="1" icon={<HomeOutlined />}>
        Home
      </Menu.Item>
      <Menu.Item key="2" icon={<AppstoreOutlined />}>
        Project
      </Menu.Item>
    </Menu>
  )
}

export default Navbar

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
    <Menu data-testid="Navbar" mode="inline" className="sticky top-20 mt-3">
      <Menu.Item
        key="1"
        icon={<HomeOutlined style={{ fontSize: '100%' }} />}
        className=" indent-4 text-[17px] "
      >
        Home
      </Menu.Item>
      <Menu.Item
        key="2"
        icon={<AppstoreOutlined style={{ fontSize: '100%' }} />}
        className="indent-4  text-[17px]"
      >
        Project
      </Menu.Item>
    </Menu>
  )
}

export default Navbar

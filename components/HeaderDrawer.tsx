import React from 'react'

import { Drawer } from 'antd'
import { HomeOutlined, AppstoreOutlined } from '@ant-design/icons'

const HeaderDrawer = ({ visible, setVisible }) => {
  const onClose = () => {
    setVisible(false)
  }
  return (
    <Drawer title="Nagivation" placement="left" width={300} onClose={onClose} visible={visible}>
      <ul>
        <li>
          <a className="flex items-center  align-middle text-[17px]">
            <HomeOutlined style={{ fontSize: '100%' }} className="m-2 p-2" />
            <p>Home</p>
          </a>
        </li>
        <li>
          <a href="/main-projects-dashboard" className="flex items-center align-middle text-[17px]">
            <AppstoreOutlined style={{ fontSize: '100%' }} className="m-2 p-2" />
            Project
          </a>
        </li>
      </ul>
    </Drawer>
  )
}
export default HeaderDrawer

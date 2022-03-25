import React from 'react'
import { Drawer } from 'antd'

const HeaderDrawer = () => {
  return (
    <Drawer title="Basic Drawer" placement="right" onClose={onClose} visible={visible}>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  )
}

export default HeaderDrawer

import React from 'react'
import { Menu } from 'antd'
import { UserOutlined, LogoutOutlined, SettingOutlined } from '@ant-design/icons'
const DropDownMenu = () => {
  return (
    <Menu className="p-5">
      <Menu.Item icon={<UserOutlined className="text-[17px]" />}>
        <a href="/" className="text-[15px] hover:bg-opacity-80">
          Profile
        </a>
      </Menu.Item>
      <Menu.Item icon={<SettingOutlined className="text-[17px] hover:bg-opacity-80" />}>
        <a href="/" className="text-[15px]">
          Settings
        </a>
      </Menu.Item>

      <Menu.Item icon={<LogoutOutlined className="text-[17px] hover:bg-opacity-80" />}>
        <a href="/" className="text-[15px]">
          Log Out
        </a>
      </Menu.Item>
    </Menu>
  )
}
export default DropDownMenu

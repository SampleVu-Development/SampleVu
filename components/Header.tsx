import React from 'react'
import { useState } from 'react'
import { Layout, Avatar, Dropdown, Button } from 'antd'
import { MenuOutlined, DownOutlined } from '@ant-design/icons'
import Image from 'next/image'
import logo from '../public/logo/V_Logo.png'

// attempt to use @svgr/webpack
import Logo from '../public/logo/SampleVu_Logo.svg'
import DropDownMenu from './DropDownMenu'
import HeaderDrawer from './HeaderDrawer'

/*
  TODO: Header
  contains current page name, and user icon
  passes pageName through prop in PageLayout through Page
  Refer to antd documentation
 */

const { Header } = Layout
const TopHeader = ({ pageName }) => {
  const [visible, setVisible] = useState(false)

  const header = (
    <Header data-testid="Header" className="sticky top-0 z-30 w-full px-5">
      <div className="flex items-center justify-between text-slate-700">
        <div className=" flex items-center">
          <span className="md:hidden">
            <Button
              icon={<MenuOutlined className="text-2xl text-white" />}
              className="border-0 hover:bg-slate-800"
              onClick={() => setVisible(true)}
            />
          </span>
          <a href="/" className=" flex p-4">
            <Image
              src={logo}
              alt="logo"
              width={30}
              height={30}
              className="hover:bg-bannerHover outline-hidden"
            />
            <h1 className="pl-1 text-2xl font-bold text-white">SampleVu</h1>
          </a>
        </div>

        {/* this link should take user to user profile but for right now I'll just set it to "/"  */}
        <div className="flex items-center">
          <Dropdown overlay={DropDownMenu} className="mr-10" placement="bottom">
            <div className="flex items-center">
              <Avatar className=" bg-purple float-right" size="large">
                {/* pass in user later  */}
                FL
              </Avatar>
              <DownOutlined className="ml-2 text-2xl font-bold text-white" />
            </div>
          </Dropdown>
        </div>
      </div>
      <HeaderDrawer visible={visible} setVisible={setVisible}></HeaderDrawer>
    </Header>
  )

  return header
}

export default TopHeader

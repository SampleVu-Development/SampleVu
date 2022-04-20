import React from 'react'
import { Layout, Avatar, Dropdown, Menu } from 'antd'
import { MenuOutlined, DownOutlined } from '@ant-design/icons'
import Image from 'next/image'
import logo from '../public/logo/V_Logo.png'

// attempt to use @svgr/webpack
import Logo from '../public/logo/SampleVu_Logo.svg'
import DropDownMenu from './DropDownMenu'

/*
  TODO: Header
  contains current page name, and user icon
  passes pageName through prop in PageLayout through Page
  Refer to antd documentation
 */

const { Header } = Layout
const TopHeader = ({ pageName }) => {
  const header = (
    <Header data-testid="Header" className="px-15 sticky top-0 z-30 w-full">
      <div className="flex items-center justify-between text-slate-700">
        <div className=" flex items-center">
          <span>
            <MenuOutlined className="text-2xl text-white" />
          </span>
          <a href="/" className=" flex p-4">
            <Image src={logo} alt="logo" width={30} height={30} className="hover:bg-bannerHover" />
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
    </Header>
  )

  return header
}

export default TopHeader

import React from 'react'
import { Layout, Avatar } from 'antd'
import Title from 'antd/lib/typography/Title'
import { UserOutlined } from '@ant-design/icons'
import Image from 'next/image'
import logo from '../public/darkBackgroundLogo/SampleVu_Logo.png'

/*
  TODO: Header
  contains current page name, and user icon
  passes pageName through prop in PageLayout through Page
  Refer to antd documentation
 */
const { Header } = Layout
const TopHeader = ({ pageName }) => {
  return (
    <Header className="sticky top-0 z-30 items-center p-3 ">
      <a href="/" className="">
        <Image src={logo} alt="logo" width={145} height={30} className="hover:bg-bannerHover" />
      </a>

      {/* this link should take user to user profile but for right now I'll just set it to "/" */}
      <a href="/">
        <Avatar
          className=" bg-slate-700 float-right hover:bg-bannerHover"
          size="large"
          icon={<UserOutlined />}
        />
      </a>
    </Header>
  )
}

export default TopHeader

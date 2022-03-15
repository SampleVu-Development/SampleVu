import React from 'react'
import { Layout, Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import Image from 'next/image'
import logo from '../public/darkBackgroundLogo/SampleVu_Logo.svg'

/*
  TODO: Header
  contains current page name, and user icon
  passes pageName through prop in PageLayout through Page
  Refer to antd documentation
 */
const { Header } = Layout
const TopHeader = ({ pageName }) => {
  return (
    <Header className="flex justify-between">
      <Image src={logo} alt="logo" width={150} height={100} />
      <Avatar className="mt-4 bg-slate-700" size="large" icon={<UserOutlined />} />
    </Header>
  )
}

export default TopHeader

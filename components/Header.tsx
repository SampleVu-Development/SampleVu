import React from 'react'
import { Layout, Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'

/*
  TODO: Header
  contains current page name, and user icon
  passes pageName through prop in PageLayout through Page
  Refer to antd documentation
 */
const { Header } = Layout
const PageLayout = ({ pageName }) => {
  return (
    <Header className="flex justify-between">
      <img
        className="mt-4"
        src={require('../public/darkBackgroundLogo/SampleVu_Logo.png')}
        alt="logo"
      />
      <Avatar className="mt-4 bg-slate-700" size="large" icon={<UserOutlined />} />
    </Header>
  )
}

export default PageLayout

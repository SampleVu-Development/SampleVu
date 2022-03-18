import React from 'react'
import { Layout, Avatar } from 'antd'
import Title from 'antd/lib/typography/Title'
import { UserOutlined } from '@ant-design/icons'
import Image from 'next/image'
import logo from '../public/logo/SampleVu_Logo.png'

// attempt to use @svgr/webpack
import Logo from '../public/logo/SampleVu_Logo.svg'

/*
  TODO: Header
  contains current page name, and user icon
  passes pageName through prop in PageLayout through Page
  Refer to antd documentation
 */
const { Header } = Layout
const TopHeader = ({ pageName }) => {
  const old = (
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

  // Serena, adjust px in Header to adjust spacing from edge
  // AntHeader has their default paddings, so you need to override them
  const update = (
    <Header className="top-0 z-30 w-full px-8">
      <div className="text-slate-700 relative mx-auto flex items-center justify-between pt-3">
        <a href="/" className="">
          {/*<span className="text-2xl font-extrabold text-white">Logo</span>*/}
          <Image src={logo} alt="logo" width={145} height={30} className="hover:bg-bannerHover" />

          {/*<Logo />*/}
          {/* ^ Testing out @svgr/webpack  */}
        </a>
        {/* this link should take user to user profile but for right now I'll just set it to "/" */}
        <div className="flex items-center pb-5">
          <a href="/">
            <Avatar
              className=" bg-slate-700 float-right hover:bg-bannerHover"
              size="large"
              icon={<UserOutlined />}
            />
          </a>
        </div>
      </div>
    </Header>
  )

  return update
}

export default TopHeader

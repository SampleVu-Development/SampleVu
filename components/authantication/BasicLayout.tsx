import React, { ReactNode } from 'react'
import Image from 'next/image'
import logo from '/public/logo/fullLogo_light.png'

type PageProps = {
  children: ReactNode
}
const BasicLayout: React.FC<PageProps> = ({ children }) => (
  <div className="h-screen bg-slate-100">
    <div className="flex justify-center pt-40">
      <Image
        src={logo}
        alt="logo"
        width={300}
        height={65}
        className="hover:bg-bannerHover outline-hidden"
      />
    </div>
    <div className="flex justify-center pt-10">{children}</div>
  </div>
)

export default BasicLayout

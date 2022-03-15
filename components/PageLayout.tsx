import React, { ReactNode } from 'react'
import Header from './Header'
import { Layout, PageHeader } from 'antd'
import Navbar from './Navbar'

type PageProps = {
  pageName: string
  children: ReactNode
}

/*
  TODO: Layout -- possibly add Layout Component from antd
  Styled wrapper for page to be passed
 */

/**
 * Styled wrapper for pages, includes header/navbar
 * @param children {ReactNode} ReactElements or JSX to be passed and wrapped
 * @param pageName {string} Current page name
 * @constructor
 */
const { Sider } = Layout
const PageLayout: React.FC<PageProps> = ({ pageName, children }) => (
  <Layout>
    <Header pageName={pageName} />
    <Layout>
      <Sider className="bg-white">
        <Navbar />
      </Sider>
      <Layout>
        <PageHeader title={pageName} className="bg-white" />
        <div>{children}</div>
      </Layout>
    </Layout>
  </Layout>
)

export default PageLayout

import React, { ReactNode } from 'react'
import Header from './Header'
import { Layout, Button, PageHeader } from 'antd'
import Navbar from './Navbar'

type PageProps = {
  pageName: string
  children: ReactNode
}

/*
  TODO: Layout -- possibly add Layout Component from antd
  Styled wrapper for page to be passed

  TODO: PageHeader -- onBack, go back
 */

/**
 * Styled wrapper for pages, includes header/navbar
 * @param children {ReactNode} ReactElements or JSX to be passed and wrapped
 * @param pageName {string} Current page name
 * @constructor
 */
const { Sider } = Layout
const PageLayout: React.FC<PageProps> = ({ pageName, children }) => (
  <Layout data-testid="PageLayout">
    <Header pageName={pageName} />

    <Layout>
      <Sider className="hidden bg-white md:block" width={190}>
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

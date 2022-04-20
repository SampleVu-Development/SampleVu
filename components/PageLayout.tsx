import React, { ReactNode } from 'react'
import Header from './Header'
import { Layout, Tabs, PageHeader } from 'antd'
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
const { TabPane } = Tabs
const { Sider } = Layout
const PageLayout: React.FC<PageProps> = ({ pageName, children }) => (
  <Layout data-testid="PageLayout">
    <Header pageName={pageName} />

    <Layout>
      <Sider className="hidden bg-white md:block" width={190}>
        <Navbar />
      </Sider>
      <Layout>
        {pageName === 'Projects' ? (
          <PageHeader
            title={pageName}
            className="bg-white"
            footer={
              <Tabs defaultActiveKey="1">
                <TabPane tab="Ongoing" key="1" />
                <TabPane tab="Completed" key="2" />
              </Tabs>
            }
          ></PageHeader>
        ) : (
          <PageHeader title={pageName} className="bg-white" />
        )}
        <div>{children}</div>
      </Layout>
    </Layout>
  </Layout>
)

export default PageLayout

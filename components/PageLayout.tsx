import React, { ReactNode } from 'react'
import Header from './Header'
import { Layout, Tabs, PageHeader, Input, Button } from 'antd'

import Navbar from './Navbar'
import ProjectDashboardHeader from './MainProjectDashboardHeader'

type PageProps = {
  pageName: string
  children: ReactNode
}

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
        {pageName === 'Projects' ? (
          <ProjectDashboardHeader pageName={pageName} />
        ) : (
          <PageHeader title={pageName} className="bg-white" />
        )}
        <div>{children}</div>
      </Layout>
    </Layout>
  </Layout>
)

export default PageLayout

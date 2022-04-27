import React, { ReactNode } from 'react'
import Header from './Header'
import { Layout, Tabs, PageHeader, Input, Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import Navbar from './Navbar'

const { Search } = Input
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
            extra={[
              <Button type="primary" className="border-transparent" icon={<PlusOutlined />}>
                New Project
              </Button>,
            ]}
            footer={
              <div className="flex justify-between">
                <Tabs defaultActiveKey="1">
                  <TabPane tab="Ongoing" key="1" />
                  <TabPane tab="Completed" key="2" />
                </Tabs>
                <Search placeholder="input search text" style={{ width: 400 }} />
              </div>
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

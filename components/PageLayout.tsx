import React, { ReactNode } from 'react'
import Header from './Header'

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
const PageLayout: React.FC<PageProps> = ({ pageName, children }) => (
  <div>
    {/* Header + Navbar component */}
    <Header pageName={pageName} />
    {/* Elements to be passed from page */}
    <div>{children}</div>
  </div>
)

export default PageLayout

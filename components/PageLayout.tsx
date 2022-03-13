import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

/*
  TODO: Layout -- possibly add Layout Component from antd
  Styled wrapper for page to be passed
 */

/**
 * Styled wrapper for pages, includes header/navbar
 * @param children {ReactNode} ReactElements or JSX to be passed and wrapped
 * @constructor
 */
const PageLayout: React.FC<Props> = ({ children }) => (
  <div>
    {/* Header/Navbar component */}
    {/* Elements to be passed from page */}
    <div>{children}</div>
  </div>
)

export default PageLayout

import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import PageLayout from '../components/PageLayout'

describe('PageLayout', () => {
  let expectedProps

  beforeEach(() => {
    expectedProps = {
      pageName: 'SampleVu Header',
      children: <main></main>,
    }
  })

  // There is an error with the SampleVu icon that prevents PageLayout from rendering
  test('renders pageName', () => {
    render(<PageLayout {...expectedProps} />)
    const element = screen.getByTestId('PageLayout')

    expect(pageName).toBeVisible()
  })
  test('renders pageName', () => {
    const { getByText, getByAltText } = render(<PageLayout {...expectedProps} />)
    const pageName = getByText(expectedProps.pageName)

    expect(pageName).toBeVisible()
  })
})

afterEach(cleanup)

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

    expect(element).toBeVisible()
  })
  test('renders pageName', () => {
    const { getByText } = render(<PageLayout {...expectedProps} />)
    const pageName = getByText(expectedProps.pageName)

    expect(pageName).toBeVisible()
    expect(pageName).toBe('SampleVu Header')
  })
})

afterEach(cleanup)

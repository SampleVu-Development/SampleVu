import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '../components/Header'

describe('Header', () => {
  // There is an error with the SampleVu icon that prevents Header from rendering
  test('renders Header component', () => {
    render(<Header />)
    const element = screen.getByTestId('Header')

    expect(element).toBeInTheDocument()
  })
})

afterEach(cleanup)

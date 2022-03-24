import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import Navbar from '../components/Navbar'

describe('Navbar', () => {
  test('renders Navbar component', () => {
    render(<Navbar />)
    const element = screen.getByTestId('Navbar')

    expect(element).toBeInTheDocument()
  })

  test('renders home and project', () => {
    render(<Navbar />)
    const Home = screen.getByText('Home')
    const Project = screen.getByText('Project')

    expect(Home).toBeVisible()
    expect(Project).toBeVisible()
  })
})

afterEach(cleanup)

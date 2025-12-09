import { render, screen } from '@testing-library/react'
import App from './App'

describe('App component', () => {
  test('renders page title', () => {
    render(<App />)

    // Проверяем заголовок
    expect(screen.getByText(/Работа с API в React/i)).toBeInTheDocument()
  })

  test('button is visible', () => {
    render(<App />)

    // Проверяем кнопку
    expect(screen.getByText(/Показать пользователей/i)).toBeInTheDocument()
  })
})

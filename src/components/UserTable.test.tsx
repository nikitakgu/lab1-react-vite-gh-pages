import { render, screen, fireEvent } from '@testing-library/react'
import UserTable from './UserTable'

test('кнопка отображается, таблицы сначала нет', () => {
  render(<UserTable />)

  // Кнопка есть
  expect(
    screen.getByRole('button', { name: /показать пользователей/i })
  ).toBeInTheDocument()

  // Таблицы быть не должно до клика
  expect(screen.queryByText(/vinokurov@example.com/i)).not.toBeInTheDocument()
})

test('после нажатия кнопки появляется таблица и строка поиска', () => {
  render(<UserTable />)

  const btn = screen.getByRole('button', { name: /показать пользователей/i })
  fireEvent.click(btn)

  // Таблица появилась
  expect(screen.getByText(/vinokurov@example.com/i)).toBeInTheDocument()

  // Поле поиска появилось
  expect(screen.getByPlaceholderText(/поиск по email/i)).toBeInTheDocument()
})

test('фильтрация по email работает (индивидуальный вариант)', () => {
  render(<UserTable />)

  const btn = screen.getByRole('button', { name: /показать пользователей/i })
  fireEvent.click(btn)

  const input = screen.getByPlaceholderText(/поиск по email/i)

  // Вводим "vin"
  fireEvent.change(input, { target: { value: "vin" } })

  // Найден только один email
  expect(screen.getByText(/vinokurov@example.com/i)).toBeInTheDocument()

  // А вот этого быть не должно
  expect(screen.queryByText(/nefedov@example.com/i)).not.toBeInTheDocument()
})

test('если 3+ символов и совпадений нет — показывать "Ничего не найдено"', () => {
  render(<UserTable />)

  const btn = screen.getByRole('button', { name: /показать пользователей/i })
  fireEvent.click(btn)

  const input = screen.getByPlaceholderText(/поиск по email/i)

  // Вводим несуществующий email
  fireEvent.change(input, { target: { value: "xxx" } })

  expect(screen.getByText(/ничего не найдено/i)).toBeInTheDocument()
})

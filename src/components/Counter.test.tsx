import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('counter increments when button is clicked', () => {
  render(<Counter />);

  const button = screen.getByRole('button');

  expect(button).toHaveTextContent('count is 0');

  fireEvent.click(button);

  expect(button).toHaveTextContent('count is 1');
});

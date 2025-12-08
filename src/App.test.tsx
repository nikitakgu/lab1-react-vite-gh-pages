import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Vite and React logos', () => {
  render(<App />);

  const viteLogo = screen.getByAltText('Vite logo');
  const reactLogo = screen.getByAltText('React logo');

  expect(viteLogo).toBeInTheDocument();
  expect(reactLogo).toBeInTheDocument();
});

test('renders "Vite + React" heading', () => {
  render(<App />);

  const headings = screen.getAllByText(/Vite \+ React/i);

  expect(headings.length).toBeGreaterThan(0);
});

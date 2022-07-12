import { render, screen } from '@testing-library/react';
import App from './App';

test('renders LaaS welcome', () => {
  render(<App />);
  const titleElement = screen.getByText(/Llama as a Service \(LaaS\)/i);
  expect(titleElement).toBeInTheDocument();
});

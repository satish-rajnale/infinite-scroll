import React from 'react';
import { getByTestId, render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  const { getAllByTestId, container, getByText } = render(<App />);
  const linkElement = getByTestId(container, 'data-testid');
  expect(linkElement).toBeInTheDocument();
});

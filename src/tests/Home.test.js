import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../views/Home';
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}

  observe() {
    return null;
  }

  disconnect() {
    return null;
  };

  unobserve() {
    return null;
  }
};

test('renders Name', () => {
  render(<Home />);
  expect(screen.getByText(/Kawalpreet Deol/i)).toBeInTheDocument();
});

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../App';

describe('App Integration', () => {
  it('increments the counter when the button is clicked', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /count:/i });
    expect(button).toHaveTextContent('Count: 0');
    fireEvent.click(button);
    expect(button).toHaveTextContent('Count: 1');
    fireEvent.click(button);
    expect(button).toHaveTextContent('Count: 2');
  });
}); 
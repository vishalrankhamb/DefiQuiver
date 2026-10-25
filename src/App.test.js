// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DefiQuiver title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DefiQuiver/i);
    expect(titleElement).toBeInTheDocument();
});

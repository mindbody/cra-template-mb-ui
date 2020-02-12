import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { App } from './App';

describe('Counter app', () => {
    it('should display the starting count', () => {
        const { getByTestId } = render(<App />);
        expect(getByTestId('count').textContent).toBe('0');
    });
    it('should allow user to press the "Add" and update the counter', async () => {
        const { getByTestId, getByText } = render(<App />);
        act(() => {
            fireEvent.click(getByText('Add'));
        });
        expect(getByTestId('count').textContent).toBe('1');
    });
    it('should allow user to press the "subtract" and update the counter', async () => {
        const { getByTestId, getByText } = render(<App />);
        act(() => {
            fireEvent.click(getByText('Subtract'));
        });
        expect(getByTestId('count').textContent).toBe('-1');
    });
});

/* eslint-disable max-len */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RESTman from './RESTman';
import { apiFetch } from '../../services/apiFetch';

jest.mock('../../services/apiFetch');

describe('RESTman container', () => {
  it('uses GET to hit api and display the result', async () => {
    apiFetch.mockResolvedValue({
      'error': false,
      'category': 'Pun',
      'type': 'single',
      'joke': 'Two fish in a tank. One turns to the other and says, "Do you know how to drive this thing?"',
      'flags': {
        'nsfw': false,
        'religious': false,
        'political': false,
        'racist': false,
        'sexist': false
      },
      'id': 187,
      'lang': 'en'
    });

    render(<RESTman />);

    const button = screen.getByTestId('button');
    await fireEvent.click(button);

    const display = await screen.findByTestId('display');

    expect(display).not.toBeEmptyDOMElement();
  });
});

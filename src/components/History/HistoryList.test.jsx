/* eslint-disable max-len */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import HistoryList from './HistoryList';

describe('HistoryList component', () => {
  afterEach(() => cleanup());

  const testArray = [
    { url: 'https://www.thecocktaildb.com/api/json/v1/1/random.php', method: 'GET' },
    { url: 'https://www.thecocktaildb.com/api/json/v1/1/random.php', method: 'POST' },
    { url: 'futuramaapi.herokuapp.com/api/quotes', method: 'GET' }
  ];

  it('render HistoryList component', () => {
    const { asFragment } = render(<HistoryList
      histories={testArray}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});

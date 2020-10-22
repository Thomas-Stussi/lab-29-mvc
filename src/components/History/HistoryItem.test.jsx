import React from 'react';
import { render, cleanup } from '@testing-library/react';
import HistoryItem from './HistoryItem';

describe('HistoryItem component', () => {
  afterEach(() => cleanup());
  it('render HistoryItem component', () => {
    const { asFragment } = render(<HistoryItem
      url="https://www.thecocktaildb.com/api/json/v1/1/random.php"
      method="GET"
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});

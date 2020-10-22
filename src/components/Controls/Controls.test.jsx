/* eslint-disable max-len */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Controls from './Controls';

describe('Controls component', () => {
  afterEach(() => cleanup());
  it('render Controls component', () => {
    const { asFragment } = render(<Controls
      url="https://www.thecocktaildb.com/api/json/v1/1/random.php"
      method="GET"
      onSubmit={() => { }}
      onChange={() => { }}
    />);

    expect(asFragment()).toMatchSnapshot();
  });
});

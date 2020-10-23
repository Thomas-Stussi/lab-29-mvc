import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Display from './Display';

describe('Display component', () => {
  afterEach(() => cleanup());

  const testDisplay = {
    'drinks': [
      {
        'idDrink': '16311',
        'strDrink': 'Applejack',
        'strDrinkAlternate': null,
        'strDrinkES': null,
        'strDrinkDE': null,
        'strDrinkFR': null,
        'strDrinkZH-HANS': null,
        'strDrinkZH-HANT': null,
        'strTags': null,
        'strVideo': null,
        'strCategory': 'Cocktail',
        'strIBA': null,
        'strAlcoholic': 'Alcoholic',
        'strGlass': 'Cocktail glass',
        'strInstructions': 'Add all ingredients into mixing glass, chill and strain into cocktail glass',
        'strInstructionsES': null,
        'strInstructionsDE': 'Alle Zutaten in das Mischglas geben, kühlen und in das Cocktailglas abseihen.',
        'strInstructionsFR': null,
        'strInstructionsZH-HANS': null,
        'strInstructionsZH-HANT': null,
        'strDrinkThumb': 'https://www.thecocktaildb.com/images/media/drink/sutyqp1479209062.jpg',
        'strIngredient1': 'Jack Daniels',
        'strIngredient2': 'Midori melon liqueur',
        'strIngredient3': 'Sour mix',
        'strIngredient4': null,
        'strIngredient5': null,
        'strIngredient6': null,
        'strIngredient7': null,
        'strIngredient8': null,
        'strIngredient9': null,
        'strIngredient10': null,
        'strIngredient11': null,
        'strIngredient12': null,
        'strIngredient13': null,
        'strIngredient14': null,
        'strIngredient15': null,
        'strMeasure1': '1 oz ',
        'strMeasure2': '1/2 oz ',
        'strMeasure3': '2 oz ',
        'strMeasure4': null,
        'strMeasure5': null,
        'strMeasure6': null,
        'strMeasure7': null,
        'strMeasure8': null,
        'strMeasure9': null,
        'strMeasure10': null,
        'strMeasure11': null,
        'strMeasure12': null,
        'strMeasure13': null,
        'strMeasure14': null,
        'strMeasure15': null,
        'strCreativeCommonsConfirmed': 'No',
        'dateModified': '2016-11-15 11:24:22'
      }
    ]
  };

  it('render Display component', () => {
    const { asFragment } = render(<Display
      display={testDisplay}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});

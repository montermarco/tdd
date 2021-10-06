import React from 'react'
import { shallow } from 'enzyme';
import {findByAtrr, checkProps} from '../test/testUtils';
import GuessedWords from './GuessedWords';

const defautlProps = {
  guessedWords: [{guessedWord: 'test', letterMatchCount: 3}],
};

const setup = (props={}) => {
  const setUpProps = {...defautlProps, ...props};
  return shallow(<GuessedWords {...setUpProps}/>)
};

test('Does not throw warning with expected props', () => {
  checkProps(GuessedWords, defautlProps);
});

describe('If there are no words guessed', () => {
  let wrapper;
  beforeEach( () => {
    wrapper = setup({guessedWords: []});
  });
  test('renders without error', () => {
    const component = findByAtrr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });
  test('renders instructions to guess a word', () => {
    const instructions = findByAtrr(wrapper, 'guess-instructions');
    expect(instructions.text().length).not.toBe(0);
  });
});

describe('If there are words guessed', () => {});
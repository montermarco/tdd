import React from 'react'
import { shallow } from 'enzyme';
import {findByAtrr, checkProps} from '../test/testUtils';
import GuessedWords from './GuessedWords';

const defautlProps = {
  guessedWords: [{guessedWord: 'train', letterMatchCount: 3}],
};

const setup = (props={}) => {
  const setUpProps = {...defautlProps, ...props};
  return shallow(<GuessedWords {...setUpProps}/>);
};

test('Does not throw warning with expected props', () => {
  checkProps(GuessedWords, defautlProps);
});

describe('If there are no words guessed', () => {
  let wrapper;
  beforeEach( () => {
    // overweiting default props
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

describe('If there are words guessed', () => {
  let wrapper;
  const guessedWords = [
    {guessedWord: 'train', letterMatchCount: 2},
    {guessedWord: 'ledger', letterMatchCount: 1},
    {guessedWord: 'techno', letterMatchCount: 4}
  ];
  beforeEach( () => {
    wrapper = setup({guessedWords});
  });
  test('renders without error', () => {
    const component = findByAtrr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });
  
  test('renders guessedWords section', () => {
    const guessWordsNode = findByAtrr(wrapper, 'guessed-words');
    expect(guessWordsNode.length).toBe(1);
  });
  
  test('correct number of guessed words', () => {
    const guessedWordsNodes = findByAtrr(wrapper, 'guessed-word');
    expect(guessedWordsNodes.length).toBe(guessedWords.length);
  });
});
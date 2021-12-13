import React from 'react';
import {mount} from 'enzyme';
import App from './App';
import {findByAtrr} from '../test/testUtils';

/**
 * Create a wrapper with specified initial conditions, then submit a guessed word of 'train'
 * @function 
 * @param {Object} state - Inital conditions
 * @returns {Wrapper} - Enzyme wrapper of mounted App component 
 */

const setup = ( state = {} ) => {
  
  // TODO Apply state
  // We trying to exercise the entire app so we use mount instead of shallow
  const wrapper = mount(<App/>);
  
  // add a value to input box
  const input = findByAtrr(wrapper, 'input-box');
  input.simulate('change', {target: { value : 'techno' }});
  
  // simulate a click on submit
  const submitButton = findByAtrr(wrapper, 'submit-button');
  submitButton.simulate('click', { preventDefault() {} });

  return wrapper;
};

describe.skip('No words guessed', () => {
  let wrapper;
  beforeEach( () => {
    wrapper = setup({
      secretWord: 'techno',
      success: false,
      guessedWords: []
    });
  });
  test('creates GuessedWord table with one row', () => {
    const guessedWordRows = findByAtrr(wrapper, 'guessed-word');
    expect(guessedWordRows).toHaveLength(1);
  });
});

describe.skip('Some words guessed', () => {
  let wrapper;
  beforeEach( () => {
    wrapper = setup({
      secretWord: 'techno',
      success: false,
      guessedWords: [{guessedWord: 'house', letterMatchCount: 1}] // initial state
    });
  });
  test('creates GuessedWord table with one row', () => {
    const guessedWordRows = findByAtrr(wrapper, 'guessed-word');
    expect(guessedWordRows).toHaveLength(2);
  });
});

describe.skip('Guess secret word', () => {
  let wrapper;
  beforeEach( () => {
    wrapper = setup({
      secretWord: 'techno',
      success: false,
      guessedWords: [{guessedWord: 'house', letterMatchCount: 1}]
    });
    // add value to input-box
    const inputBox = findByAtrr(wrapper, 'input-box');
    const mockEvent = { target: { value : 'techno' }};
    inputBox.simulate('change', mockEvent);
  
    // simulate click button
    const submitButton = findByAtrr(wrapper, 'submit-button');
    submitButton.simulate('click', { preventDefault() {} });  
  });
  test('add row to guessedWords table', () => {
    const guessedWordsNodes = findByAtrr(wrapper, 'guessed-word');
    expect(guessedWordsNodes).toHaveLength(3);
  });
  test('Should display Congrats component', () => {
    const CongratsComponent = findByAtrr(wrapper, 'component-congrats');
    expect(CongratsComponent.text().length).toBeGreaterThan(0);
  });
  test('Should not display input component contents', () => {
    const inputBox = findByAtrr(wrapper, 'input-box');
    expect(inputBox.exist()).toBe(false);

    const submitButton = findByAtrr(wrapper, 'submit-button');
    expect(submitButton.exist()).toBe(false);
  });  
});

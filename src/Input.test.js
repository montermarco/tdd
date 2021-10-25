import React from 'react'
import { shallow } from 'enzyme';
import {findByAtrr, checkProps} from '../test/testUtils';
import Input from './Input';

const setup = (success=false, secretWord='techno') => {  
  return shallow(<Input success={success} secretWord={secretWord}/>)
};

describe('render', () => {
  describe('success is true', () => {
    let wrapper;
    beforeEach( () => {
      wrapper = setup(true);
    });

    test('render without error', () => {
      const inputComponent = findByAtrr(wrapper, 'component-input');
      expect(inputComponent.length).toBe(1);  
    });
    
    test('input box does not show', () => {
      const inputBox = findByAtrr(wrapper, 'input-box');
      expect(inputBox.exists()).toBe(false);
    });

    test('button does not show', () => {
      const submitButton = findByAtrr(wrapper, 'submit-button');
      expect(submitButton.exists()).toBe(false);
    });
  });
  describe('success is false', () => {
    let wrapper;
    beforeEach( () => {
      wrapper = setup(false);
    });

    test('render without error', () => {
      const inputComponent = findByAtrr(wrapper, 'component-input');
      expect(inputComponent.length).toBe(1);  
    });
    
    test('input box is showm', () => {
      const inputBox = findByAtrr(wrapper, 'input-box');
      expect(inputBox.exists()).toBe(true);
    });

    test('button is shown', () => {
      const submitButton = findByAtrr(wrapper, 'submit-button');
      expect(submitButton.exists()).toBe(true);
    });
  });
});


test('does not throw warning with expected props', () => {
  checkProps(Input, {secretWord: 'techno'});
});

describe('state controlled input field', () => {
  let mockSetCurrentGuess= jest.fn();
  let wrapper;
  let originalUseState;

  beforeEach( () => {
    mockSetCurrentGuess.mockClear();
    originalUseState = React.useState;
    React.useState = jest.fn( () => ['', mockSetCurrentGuess]);
    wrapper = setup();
  });
  
  afterEach(() => {
    React.useState = originalUseState;
  });

  test('state updates with value of input box upon change', () => {
    const inputBox = findByAtrr(wrapper, 'input-box');
    const mockEvent = { target: { value: 'techno' }};
    inputBox.simulate('change', mockEvent);
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('techno');
  });

  test('state clears on submit', () => {
    const inputButton = findByAtrr(wrapper, 'submit-button');
    inputButton.simulate('click', { preventDefault() {} });
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
  });
});

/** Mock entire module for destructuring (put at the top)
    let mockSetCurrentGuess= jest.fn();
    jest.mock( () => ({
      ...jest.requireActual('react'),
      useState: (initialState) => [initialState, mockSetCurrentGuess]
    }))
 */
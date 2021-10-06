import React from 'react'
import { configure ,shallow } from 'enzyme';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import {findByAtrr, checkProps} from '../test/testUtils';
import Congrats from './Congrats';

configure({ adapter: new Adapter() });

// be careful where else this prop is used ...
const defaultProps = {success: false};

/**
 * Factory function to create ShallowWrapper for the GuessWord Component
 * @function setup
 * @param {object} prop - component props specific to this setup
 * @return {ShallowWrapper}
 */
  
const setup = (props={}) => {
  const setUpProps = {...defaultProps, ...props};
  return shallow(<Congrats {...setUpProps}/>)
}

test('renders w/o error', () => {
  const wrapper = setup({ success:false });
  const component = findByAtrr(wrapper, "congrats");
  expect(component.length).toBe(1);
});

test('renders no text when `success` prop is false', () => {
  const wrapper = setup({ success:false });
  const component = findByAtrr(wrapper, "congrats");
  expect(component.text()).toBe('');
});

test('renders no empty congrats message when `success` prop is true', () => {
  const wrapper = setup({ success:true });
  const message = findByAtrr(wrapper, "message");
  expect(message.text().length).not.toBe(0);
});

test('does not throw warning with expected props', () => {
  const expectedProps = {success: false}
  checkProps(Congrats, expectedProps);
});
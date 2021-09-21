import React from 'react'
import { configure ,shallow } from 'enzyme';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Congrats from './Congrats';
import {findByAtrr} from '../test/testUtils';

configure({ adapter: new Adapter() });

/*
  @params
  @
*/
const setup = (props={}) => {
  return shallow(<Congrats {...props}/>)
}

test('renders w/o error', () => {
  const wrapper = setup();
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

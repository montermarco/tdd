import {shallow} from 'enzyme';
import {findByAtrr} from '../test/testUtils';
import App from './App';

/**
 * Setup function for App component
 * @returns {ShallowWrapper}
 */

const setup = () => {
  return shallow(<App/>)
}

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByAtrr(wrapper, 'app-component');
  expect(appComponent).toHaveLength(1);
});
 
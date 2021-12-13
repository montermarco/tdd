import {mount} from 'enzyme';
import {findByAtrr} from '../test/testUtils';
import App from './App';

// Activate global mock to make sure getSecretWord does not make network call
jest.mock('./actions');
// eslint-disable-next-line import/first
import { getSecretWord as mockGetSecretWord } from './actions';

/**
 * Setup function for App component
 * @returns {ShallowWrapper}
 */

const setup = () => {
  return mount(<App/>)
}

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByAtrr(wrapper, 'app-component');
  expect(appComponent).toHaveLength(1);
});
 
describe('get secret word', () => {
  beforeEach(() => {
    mockGetSecretWord.mockClear();
  });
  test('secret word is retrieve on app mount', () => {
    const wrapper = setup();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(1);
  });
  test('secret word is not retrieve on app update', () => {
    const wrapper = setup();
    mockGetSecretWord.mockClear();

    // setProps because wrapper.update() doesn't trigger useEffect
    wrapper.setProps();

    expect(mockGetSecretWord).toHaveBeenCalledTimes(0);
  });
});
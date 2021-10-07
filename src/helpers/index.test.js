import {getLetterMatchCount} from './';

describe('getLetterMatchCount', () => {
  const secretWord = 'techno';
  test('return correct count when are no matching letters', () => {
    const letterMatchCount = getLetterMatchCount('jazz', secretWord);
    expect(letterMatchCount).toBe(0);
  });
  test('return correct count when there are matching letters', () => {
    const letterMatchCount = getLetterMatchCount('gospel', secretWord);
    expect(letterMatchCount).toBe(2);
  });
  test('return correct count when there are duplicate letters in the guess', () => {
    const letterMatchCount = getLetterMatchCount('house', secretWord);
    expect(letterMatchCount).toBe(3);
  });
});

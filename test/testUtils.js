export const findByAtrr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};
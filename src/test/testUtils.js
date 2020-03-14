import checkPropTypes from "check-prop-types";

/**
 * Return node(s) with the given data-test attribute
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param {String} val - Value of data-test attribute for search
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`)
};

/**
 * Checks if there are no prop type errors
 * @param Component - React component which has specified propTypes
 * @param {object} conformingProps - object which resembles expected props
 */
export const checkProps = (Component, conformingProps) => {
  const propError = checkPropTypes(Component.propTypes, conformingProps, 'prop', Component.name);
  expect(propError).toBeUndefined();
};
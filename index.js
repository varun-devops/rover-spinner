/**
 * Creates and returns a spinner element.
 * Note: Make sure to include the spinner.css in your project.
 *
 * @returns {HTMLElement} The spinner element.
 */
function createSpinner() {
  if (typeof document === 'undefined') {
    throw new Error('Document is not available. This function can only run in a browser environment.');
  }
  const spinner = document.createElement('div');
  spinner.className = 'spinner';
  return spinner;
}

export default {
  createSpinner
};

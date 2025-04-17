/**
 * Utility function for logging events
 * @param {string} message - The message to log
 * @param {string} level - The log level ('info', 'warn', 'error')
 * @returns {void}
 */
export const logEvent = (message, level) => {
  // Log the event to console (or send to logging service)
  if (level === 'error') {
    console.error(message);
  } else if (level === 'warn') {
    console.warn(message);
  } else {
    console.log(message);
  }
};
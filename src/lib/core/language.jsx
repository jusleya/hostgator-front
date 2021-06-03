/* eslint-disable */
export const flattenMessages = (nestedMessages, prefix = '') =>
  Object.keys(nestedMessages).reduce((messages, key) => {
    const value = nestedMessages[key];

    const prefixedKey = prefix ? `${prefix}.${key}` : key;

    const flattenMessage =
      typeof value === 'string'
        ? { [prefixedKey]: value }
        : flattenMessages(value, prefixedKey);

    return Object.assign(messages, flattenMessage);
  }, {});

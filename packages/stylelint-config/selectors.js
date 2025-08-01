// Enforces certain selectors to be only in camelCase notation
// These are for id selectors and classname selectors
const ONLY_ALLOW_CAMEL_CASE_SELECTORS = [
  /^(?:[a-z]+(?:[A-Z][a-z]*)*)$/,
  { message: s => `Expected '${s}' to be in camelCase` },
];

module.exports = {
  ONLY_ALLOW_CAMEL_CASE_SELECTORS,
};


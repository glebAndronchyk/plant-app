const OFF = 0;
const WARNING = 1;
const ON = 2;

module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    // REACT RULES
    'react/react-in-jsx-scope': OFF,

    // JS RULES
    'no-console': ON,
  },
};

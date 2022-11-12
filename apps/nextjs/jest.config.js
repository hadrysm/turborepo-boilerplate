module.exports = {
  ...require('jest-config/jest-next'),
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
  },
};

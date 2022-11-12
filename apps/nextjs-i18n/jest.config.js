module.exports = {
  ...require('@had/jest-config/jest-next'),
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
  },
};

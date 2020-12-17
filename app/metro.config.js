const path = require('path');

/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  projectRoot: path.resolve(__dirname, '..', 'shared'),
  resolver: new Proxy({}, {
      get: (target, key) => path.join(process.cwd(), 'node_modules', key),
    },
  ),
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  watchFolders: [path.resolve(__dirname, '..', 'shared')],
};

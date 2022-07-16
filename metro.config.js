/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

// module.exports = {
//   transformer: {
//     getTransformOptions: async () => ({
//       transform: {
//         experimentalImportSupport: false,
//         inlineRequires: true,
//       },
//     }),
//   },
//   resolver: {
//     sourceExts: ['jsx', 'js', 'json', 'ts', 'tsx'],
//   },
// };

const {getDefaultConfig} = require('metro-config');
module.exports = (async () => {
  const {
    resolver: {sourceExts},
  } = await getDefaultConfig();
  return {
    resolver: {sourceExts: [...sourceExts, 'jsx', 'js', 'json', 'ts', 'tsx']},
  };
})();

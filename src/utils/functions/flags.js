const flags = {};
const requireContext = require.context('../../assets/flags', false, /\.png$/);

requireContext.keys().forEach((fileName) => {
  const flagKey = fileName.replace('./', '').replace('.png', '');
  flags[flagKey] = requireContext(fileName);
});

export default flags;
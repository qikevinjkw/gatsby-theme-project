module.exports = ({
  basePath = '/',
  contentPath = 'docs',
  useExternalMDX = false,
}) => {
  return {
    basePath,
    contentPath,
    useExternalMDX,
  };
};

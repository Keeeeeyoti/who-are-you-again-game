const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  
  // Set the public path for GitHub Pages
  config.output.publicPath = '/who-are-you-again-game/';
  
  // Add crypto and stream polyfills for webpack 5
  config.resolve.fallback = {
    ...config.resolve.fallback,
    "crypto": require.resolve("crypto-browserify"),
    "stream": require.resolve("stream-browserify")
  };
  
  return config;
}; 
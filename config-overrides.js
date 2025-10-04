module.exports = function override(config) {
  // Патчим webpack-конфиг, чтобы избежать ошибок с Node.js core modules
  config.resolve.fallback = {
    ...config.resolve.fallback,
    stream: require.resolve('stream-browserify'),
    buffer: require.resolve('buffer'),
  }
  return config
}

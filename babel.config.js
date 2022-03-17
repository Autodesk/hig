module.exports = function (api) {
  api.cache(false);

  return {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react'
    ],
    plugins: [
      '@babel/plugin-transform-react-jsx'
    ]
  }
}

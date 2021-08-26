module.exports = {
  plugins: ['stylelint-order'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-sass-guidelines',
    'stylelint-config-prettier',
  ],
  ignoreFiles: ['build/**/*', 'node_modules/**/*', 'coverage/**/*.css'],
}

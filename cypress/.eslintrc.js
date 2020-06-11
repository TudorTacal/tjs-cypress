module.exports = {
  root: true,
  plugins: ['esling-plugin-cypress'],
  extends: ['ketcdodds', 'kentcdodds/import', 'plugin:cypress/recommended'],
  env: {'cypress/globals': true},
}

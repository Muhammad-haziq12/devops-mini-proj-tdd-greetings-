/* eslint-disable no-undef */
const greet = require('./app')

test('greet returns a greeting for the person', () => {
  expect(greet('Foo')).toBe('Hello, Foo')
})

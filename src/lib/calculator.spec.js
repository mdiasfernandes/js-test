const {sum} = require('./calculator')

it('should sum 2 + 2 = 4', () => {
  expect(sum(5, 5)).toBe(10)
})

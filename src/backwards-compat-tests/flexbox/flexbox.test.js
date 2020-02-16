import flexbox from '../../parsers/flexbox'

test('returns flexbox styles', () => {
  const style = flexbox({
    alignItems: 'center',
    flex: '1 1 auto',
  })
  expect(style).toEqual({
    alignItems: 'center',
    flex: '1 1 auto',
  })
})

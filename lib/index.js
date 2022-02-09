const t = require('tap')
const tar = require('../')
t.match(tar, {
  create: Function,
  c: Function,
  replace: Function,
  r: Function,
  list: Function,
  t: Function,
  update: Function,
  u: Function,
  extract: Function,
  x: Function,
  Pack: Function,
  Unpack: Function,
  Parse: Function,
  ReadEntry: Function,
  WriteEntry: Function,
  Header: Function,
  Pax: Function,
  types: {
    name: new Map([
      ['0', 'File'],
      ['', 'OldFile'],
      ['1', 'Link'],
      ['2', 'SymbolicLink'],
      ['3', 'CharacterDevice'],
      ['4', 'BlockDevice'],
      ['5', 'Directory'],
      ['6', 'FIFO'],
      ['7', 'ContiguousFile'],
      ['g', 'GlobalExtendedHeader'],
      ['x', 'ExtendedHeader'],
      ['A', 'SolarisACL'],
      ['D', 'GNUDumpDir'],
      ['I', 'Inode'],
      ['K', 'NextFileHasLongLinkpath'],
      ['L', 'NextFileHasLongPath'],
      ['M', 'ContinuationFile'],
      ['N', 'OldGnuLongPath'],
      ['S', 'SparseFile'],
      ['V', 'TapeVolumeHeader'],
      ['X', 'OldExtendedHeader']
    ]),
    code: new Map([
      ['File', '0'],
      ['OldFile', ''],
      ['Link', '1'],
      ['SymbolicLink', '2'],
      ['CharacterDevice', '3'],
      ['BlockDevice', '4'],
      ['Directory', '5'],
      ['FIFO', '6'],
      ['ContiguousFile', '7'],
      ['GlobalExtendedHeader', 'g'],
      ['ExtendedHeader', 'x'],
      ['SolarisACL', 'A'],
      ['GNUDumpDir', 'D'],
      ['Inode', 'I'],
      ['NextFileHasLongLinkpath', 'K'],
      ['NextFileHasLongPath', 'L'],
      ['ContinuationFile', 'M'],
      ['OldGnuLongPath', 'N'],
      ['SparseFile', 'S'],
      ['TapeVolumeHeader', 'V'],
      ['OldExtendedHeader', 'X']
    ])
  }
})
t.match(tar.Pack.Sync, Function)
t.match(tar.WriteEntry.Sync, Function)
t.match(tar.WriteEntry.Tar, Function)
t.match(tar.Pax.parse, Function)

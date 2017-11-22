import test from 'ava'
import * as Parser from './parser'


test('parse', t => {
  const body = `
ABC=5
# Comment
DEF=hello
`

  t.deepEqual({
    ABC: '5',
    DEF: 'hello'
  }, Parser.parse(body))
})
export function string(code: string, desc?: string): string {
  const val = process.env[code]

  if (typeof val == 'undefined') {
    fail('Missing required environment variable', code, desc)
    // trick typescript into realizing this can never happen.
    throw new Error('')
  }

  return val
}


export function int(code: string, desc?: string): number {
  const str = string(code, desc)

  const val = parseInt(str)

  if (Number.isNaN(val)) {
    fail(`Expected environment variable to be parseable as an int, but it was "${str}"`, code, desc)
  }

  return val
}


export function float(code: string, desc?: string): number {
  const str = string(code, desc)

  const val = parseFloat(str)

  if (Number.isNaN(val)) {
    fail(`Expected environment variable to be parseable as a float, but it was "${str}"`, code, desc)
  }

  return val
}


function fail(msg: string, code: string, desc?: string): never {
  const field = code + (desc ? ': ' + desc : '')
  const error = `[ENVY] [${field}] ${msg}`
  throw new Error(error)
}
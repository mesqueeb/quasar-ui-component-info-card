import serialize from 'serialize-javascript'
import { isFunction } from 'is-what'

export default function parseCodeForPrint (code) {
  // return early on 0, undefined, null, etc.
  if (!code) return code
  return serialize(code, { space: 2 })
  // const stringifiedFns = []
  // function replacer (key, value) {
  //   if (!isFunction(value)) return value
  //   if (value.prototype.stringifiedFn) {
  //     const fnString = value.prototype.stringifiedFn
  //     stringifiedFns.push(fnString)
  //     return fnString
  //   }
  //   stringifiedFns.push(value.toString())
  //   return value.toString()
  // }
  // const string = JSON.stringify(code, replacer, 2)
  // const cleanedString = string.replace(/'/g, `\\'`).replace(/"/g, `'`)
  // const formatedString = stringifiedFns.reduce((str, fnString) => {
  //   const fnStringRegex = `'${fnString.replace(/'/g, `\\'`).replace(/"/g, `'`)}'`
  //   return str.replace(fnStringRegex, fnString)
  // }, cleanedString)
  // return formatedString
}

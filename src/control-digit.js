export const getControlDigit = (input) => {
  const digits = input.substr(0, 9).split('')

  let factor = 1
  const factoredDigits = digits.map((d) => {
    factor = factor === 1 ? 2 : 1
    return (parseInt(d, 10) * factor + '').split('')
  })

  const flattenedFactoredDigits = [].concat.apply([], factoredDigits)

  const sum = flattenedFactoredDigits.reduce((s, d) => {
    return parseInt(s, 10) + parseInt(d, 10)
  })

  const controlDigit = 10 - sum % 10

  return controlDigit < 10 ? controlDigit : 0
}

export const hasValidControlDigit = (input) => {
  return input.substr(9) === getControlDigit(input) + ''
}

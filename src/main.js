import * as ssn from './ssn.js';
import * as controlDigit from './control-digit'

const defaultOptions = {
  minYears: 0
}

const pattern = /^\d{6}[-|(\s)]{0,1}\d{4}$/

export const hasValidPattern = function(input) {
  return pattern.test(input)
}

export const hasValidControlDigit = controlDigit.hasValidControlDigit

export const isValidSsn = (input, inputOptions) => {
  const options = {
    ...defaultOptions,
    ...inputOptions
  }

  input = input + ''

  const hasPattern = hasValidPattern(input)

  if (!hasPattern) {
    return false
  }

  input = input.replace(/\D/g, '')

  return ssn.isValidSsn(input, options)
}

export const isValidSwedishSsn = isValidSsn

import { hasValidControlDigit } from './control-digit'

function getSsnDate(input) {
  const thisYear = new Date().getFullYear() + ''
  const thisCentury = parseInt(thisYear.substr(0, 2), 10)
  const century = (input.substr(0, 2) >= thisYear.substr(2, 2) ? thisCentury - 1 : thisCentury) + ''
  const dateString = century + input.substr(0, 6)
  return new Date(dateString.substr(0, 4) + '-' + dateString.substr(4, 2) + '-' + dateString.substr(6, 2))
}

function fullYearsFromDate(date) {
  return Math.floor((new Date() - date) / 1000 / 60 / 60 / 24 / 365)
}

function leftPad(number) {
  return (number + '').length === 1 ? '0' + number : '' + number
}

export const isValidSsn = (input, options) => {
  const ssnDate = getSsnDate(input)

  // Check year
  if ((ssnDate.getFullYear() + '').substr(2, 2) !== input.substr(0, 2)) {
    return false
  }

  // Check month
  if (leftPad(ssnDate.getMonth() + 1) !== input.substr(2, 2)) {
    return false
  }

  // Check date
  if (leftPad(ssnDate.getDate()) !== input.substr(4, 2)) {
    return false
  }

  // Check min years
  if (options.minYears !== false && fullYearsFromDate(ssnDate) < options.minYears) {
    return false
  }

  return hasValidControlDigit(input)
}

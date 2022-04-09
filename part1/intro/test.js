function validatePIN (pin) {
  if (pin.match(/\d{6}/) && pin.length === 6 || pin.match(/\d{4}/) && pin.length === 4) {
    return true
  } else {
    return false
  }
}


console.log(validatePIN('123444'))

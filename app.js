function greet (name) {
  if (name === undefined || name === null || name === '') {
    return 'Hello, my friend'
  } else {
    return 'Hello, ' + name
  }
}

module.exports = greet

class Converter {
  convertToCelsius(deg) {
    return (deg - 32) * (5 / 9) 
  }

  convertToFahrenheit(deg) {
    return (deg * (9 / 5)) + 32
  }
}

module.exports = Converter
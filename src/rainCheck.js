function rainCheck(isRaining, windSpeed = 0, temperature = 20) {
  if (isRaining) {
    if (windSpeed > 20) {
      return `Bring a sturdy umbrella, it's windy.`;
    } else if (temperature < 10) {
      return `Bring an umbrella and a warm coat, it's cold.`;
    } else {
      return `Bring an umbrella.`;
    }
  } else {
    if (windSpeed > 30) {
      return `No need for an umbrella, but it's quite windy. Hold onto your hat!`;
    } else if (temperature > 30) {
      return `No umbrella needed, but stay hydrated—it's hot outside!`;
    } else {
      return `No need for an umbrella.`;
    }
  }
}

module.exports = rainCheck;
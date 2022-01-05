function averageCelsius(fahrenheitReadings) {
  const celsiusNumbers = getCelsiusReadings(fahrenheitReadings);
  const celsiusSum = calcCelsiusSum(celsiusNumbers);
  
  return fahrenheightReadings.length === 0 ? 0 : celsiusSum / celsiusNumbers.length;
}

function getCelsiusReadings(fahrenheit)
function averageCelsius(fahrenheitReadings) {
  const celsiusNumbers = getCelsiusReadings(fahrenheitReadings);
  const celsiusSum = calcCelsiusSum(celsiusNumbers);

  return fahrenheitReadings.length === 0 ? 0 : celsiusSum / celsiusNumbers.length;
}

function getCelsiusReadings(fahrenheitReadings) {
  return fahrenheitReadings.map((reading) => {
      return (reading - 32) / 1.8;
    });
}

function calcCelsiusSum(celsiusNumbers) {
  const reducer = (a, b) => a + b;
  
  return celsiusNumbers.reduce(reducer, 0);
}
averageCelsius([1, 2, 3, 4, 5])
averageCelsius([11, 22, 32, 43, 567])
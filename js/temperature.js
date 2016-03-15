
// From Kelvin to Celsius
// KELVINTEMP - 273.15

// From Kelvin to Farenheit
// KELVINTEMP * 9/5 - 459.67


function toCelsius(kelvin) {
    return Math.floor(kelvin - 273.15);
}

function toFarenheit(kelvin) {
    return Math.floor(kelvin * (9/5) - 459.67);
}

exports.toCelsius = toCelsius;
exports.toFarenheit = toFarenheit;

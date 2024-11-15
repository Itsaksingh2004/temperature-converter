document.getElementById('convert-btn').addEventListener('click', function() {
    const tempInput = parseFloat(document.getElementById('temp-input').value);
    const unitFrom = document.getElementById('unit-from').value;
    const unitTo = document.getElementById('unit-to').value;

    let result;

    if (unitFrom === unitTo) {
        result = tempInput; // No conversion needed
    } else if (unitFrom === "Celsius" && unitTo === "Fahrenheit") {
        result = (tempInput * 9 / 5) + 32;
    } else if (unitFrom === "Celsius" && unitTo === "Kelvin") {
        result = tempInput + 273.15;
    } else if (unitFrom === "Fahrenheit" && unitTo === "Celsius") {
        result = (tempInput - 32) * 5 / 9;
    } else if (unitFrom === "Fahrenheit" && unitTo === "Kelvin") {
        result = (tempInput - 32) * 5 / 9 + 273.15;
    } else if (unitFrom === "Kelvin" && unitTo === "Celsius") {
        result = tempInput - 273.15;
    } else if (unitFrom === "Kelvin" && unitTo === "Fahrenheit") {
        result = (tempInput - 273.15) * 9 / 5 + 32;
    } else {
        result = "Invalid Conversion!";
    }

    document.getElementById('result').innerText = `Result: ${result} ${unitTo}`;
});
function calculateAbsorbance() {
    const concentration = parseFloat(document.getElementById('concentration').value);
    if (isNaN(concentration)) {
        document.getElementById('result').innerText = "Please enter a valid number.";
        return;
    }

    // Coefficients for the quadratic equation ax^2 + bx + c = 0
    const a = -1.0787;
    const b = 2.214;
    const c = -concentration;

    // Calculate the discriminant
    const discriminant = Math.pow(b, 2) - 4 * a * c;

    if (discriminant < 0) {
        document.getElementById('result').innerText = "No real solutions.";
        return;
    }

    // Calculate the two possible solutions
    const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    // Display the results
    document.getElementById('result').innerText = `Possible Absorbance Values: x1 = ${x1.toFixed(2)}, x2 = ${x2.toFixed(2)}`;
}
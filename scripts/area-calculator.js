function calculateTriangleArea() {
    const base = getInputValue('triangle-base');
    const height = getInputValue('triangle-height');
    const area = (0.5 * base * height).toFixed(2);
    setElementInnerText('triangle-area-field', area);
}

function calculateRectangleArea() {
    const width = getInputValue('rectangle-width');
    const length = getInputValue('rectangle-length');
    const area = (width * length).toFixed(2);
    setElementInnerText('rectangle-area-field', area);
}
function calculateParallelogramArea() {
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');
    const area = (base * height).toFixed(2);
    setElementInnerText('parallelogram-area-field', area);
}

function calculateRhombusArea() {
    const primaryDiagonal = getInputValue('rhombus-primary-diagonal');
    const secondaryDiagonal = getInputValue('rhombus-secondary-diagonal');
    const area = (0.5 * primaryDiagonal * secondaryDiagonal).toFixed(2);
    setElementInnerText('rhombus-area-field', area);
}

function calculatePentagonArea() {
    const sideLength = getInputValue('pentagon-side-length');
    const area = (0.25 * Math.sqrt(5 * (5 + 2 * Math.sqrt(5))) * Math.pow(sideLength, 2)).toFixed(2);
    setElementInnerText('pentagon-area-field', area);
}

function calculateEllipseArea() {
    const majorRadius = getInputValue('ellipse-major-axis');
    const minorRadius = getInputValue('ellipse-minor-axis');
    const area = (Math.PI * majorRadius * minorRadius).toFixed(2);
    setElementInnerText('ellipse-area-field', area);
}

// Reusable get input value field in number
function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

// Reusable set span, p, div, etc text
function setElementInnerText(elementId, value) {
    document.getElementById(elementId).innerText = value;
}
document.addEventListener('DOMContentLoaded', () => {
    const colorPicker = document.getElementById('colorPicker');
    const redRange = document.getElementById('redRange');
    const greenRange = document.getElementById('greenRange');
    const blueRange = document.getElementById('blueRange');
    const redInput = document.getElementById('redInput');
    const greenInput = document.getElementById('greenInput');
    const blueInput = document.getElementById('blueInput');
    const colorBox = document.getElementById('colorBox');
    const hexValue = document.getElementById('hexValue');

    function updateColor() {
        const r = parseInt(redRange.value);
        const g = parseInt(greenRange.value);
        const b = parseInt(blueRange.value);
        const rgbColor = `rgb(${r}, ${g}, ${b})`;
        const hexColor = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;

        colorBox.style.backgroundColor = rgbColor;
        hexValue.textContent = hexColor;
        redInput.value = r;
        greenInput.value = g;
        blueInput.value = b;
        colorPicker.value = hexColor;
        redRange.style.backgroundColor = `rgba(${redRange.value}, 0, 0, 0.5)`;
        greenRange.style.backgroundColor = `rgba(0, ${greenRange.value}, 0, 0.5)`;
        blueRange.style.backgroundColor = `rgba(0, 0, ${blueRange.value}, 0.5)`;
    }

    function updateRangeFromInput() {
        redRange.value = redInput.value;
        greenRange.value = greenInput.value;
        blueRange.value = blueInput.value;
        updateColor();
    }

    function updateFromColorPicker() {
        const hex = colorPicker.value;
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);

        redRange.value = r;
        greenRange.value = g;
        blueRange.value = b;
        redInput.value = r;
        greenInput.value = g;
        blueInput.value = b;
        updateColor();
    }

    redRange.addEventListener('input', () => {
        updateColor();
        redRange.style.backgroundColor = `rgba(${redRange.value}, 0, 0, 0.5)`;
    });

    greenRange.addEventListener('input', () => {
        updateColor();
        greenRange.style.backgroundColor = `rgba(0, ${greenRange.value}, 0, 0.5)`;
    });

    blueRange.addEventListener('input', () => {
        updateColor();
        blueRange.style.backgroundColor = `rgba(0, 0, ${blueRange.value}, 0.5)`;
    });

    redInput.addEventListener('input', updateRangeFromInput);
    greenInput.addEventListener('input', updateRangeFromInput);
    blueInput.addEventListener('input', updateRangeFromInput);

    colorPicker.addEventListener('input', updateFromColorPicker);
});

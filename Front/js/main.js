let lastResult = null; // Variable para almacenar el último resultado

function appendToDisplay(value) {
    const display = document.getElementById('resultado');
    
    // Evitar múltiples puntos decimales en un mismo número
    if (value === '.' && display.value.includes('.')) {
        return; // No hacer nada si ya hay un punto decimal
    }
    
    display.value += value;
}

function deleteLast() {
    const display = document.getElementById('resultado');
    display.value = display.value.slice(0, -1); // Eliminar el último carácter
}

function clearDisplay() {
    document.getElementById('resultado').value = '';
}

function calculate() {
    const display = document.getElementById('resultado');
    try {
        // Usar eval para calcular la expresión
        lastResult = eval(display.value); // Almacenar el resultado
        display.value = lastResult; // Mostrar el resultado
    } catch (error) {
        display.value = 'Error';
    }
}

function useLastResult() {
    const display = document.getElementById('resultado');
    
    if (lastResult !== null) {
        display.value += lastResult; // Añadir el último resultado al campo de entrada
    }
}
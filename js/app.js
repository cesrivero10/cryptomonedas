const cotizador = new API('778d2d35ff2a70e7a79e74035bc28ff909512cb807d8f7481f96342dc48f9e48');
const ui = new Interfaz();

 


// leer el formulario

const formulario = document.querySelector('#formulario');
// eventlistener
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // leer la moneda seleccionada
    const monedaSelect = document.querySelector('#moneda');
    const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;

    // leer la Criptomoneda seleccionada
    const criptoMonedaSelect = document.querySelector('#criptomoneda');
    const criptoMonedaSeleccionada = criptoMonedaSelect.options[criptoMonedaSelect.selectedIndex].value;

    // Comprobar que ambos campos tengan algo seleccionado
    if(monedaSeleccionada === '' || criptoMonedaSeleccionada === ''){
        // arrojar una alerta de error
        ui.mostrarMensaje('Ambos Campos son Obligatorios', 'alert bg-danger text-center');
    } else {
        // Todo bien consultar api
        cotizador.obtenerValores(monedaSeleccionada, criptoMonedaSeleccionada)
        .then(data => {
            ui.mostrarResultado(data.resultado.RAW, monedaSeleccionada, criptoMonedaSeleccionada);
        })
    }
})
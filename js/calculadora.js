            //obtener todos los botones del HTML

var keys = document.querySelectorAll('#botones button');
var operador = ['+', '-', 'x', '÷'];
var decimal = false;

            //Agregar on click en los botones
for(var i = 0; i < keys.length; i++) {
    keys[i].onclick = function(e) {
                            //Obtener entrada a la pantalla y los valores de los botones
        var input = document.querySelector('.pantalla');
        var inputIgual = input.innerHTML;
        var botonIgual = this.innerHTML;
        if(botonIgual === 'C'){
            input.innerHTML = '';
            decimal = false;
        }
                            //Si el boton igual es presionado que calcule y despliegue el resultado
        else if(botonIgual === '=') {
            var ecuacion = inputIgual;
            var lastChar = ecuacion[ecuacion.length - 1];

                            //reemplaza las instancias X y ÷ por * y / respectivamente
            ecuacion = ecuacion.replace(/x/g, '*').replace(/÷/g, '/');

                            //chequear el ultimo caracter de la ecuacion, si es operacion o decimal, lo quita
            if(operador.indexOf(lastChar) > -1 || lastChar === '.')
                ecuacion = ecuacion.replace(/.$/, '');
            if(ecuacion)
                input.innerHTML = eval(ecuacion);
            decimal = false;
        }
        else if(operador.indexOf(botonIgual) > -1) {
            lastChar = inputIgual[inputIgual.length - 1];
            if(inputIgual !== '' && operador.indexOf(lastChar) === -1)
                input.innerHTML += botonIgual;
            else if(inputIgual === '' && botonIgual === '-')
                input.innerHTML += botonIgual;
            if(operador.indexOf(lastChar) > -1 && inputIgual.length > 1) {
                input.innerHTML = inputIgual.replace(/.$/, botonIgual);
            }
            decimal = false;
        }
        else if(botonIgual === '.') {
            if(!decimal) {
                input.innerHTML += botonIgual;
                decimal = true;
            }
        }
        else {
            input.innerHTML += botonIgual;
        }
        e.preventDefault();
    }
}
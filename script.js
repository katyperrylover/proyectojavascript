// encontre este fragmento de codigo que evita q te pases de 100% o por debajo de -1%
function cambiarValorAlComun(input) {
    const max = parseInt(input.max);
    const min = parseInt(input.min);
    const value = parseInt(input.value);

    if (value > max) {
        input.value = max;
    } else if (value < min) {
        input.value = min;
    }
}

document.getElementsByClassName('typeboxTasa')[0].oninput = function() {
    cambiarValorAlComun(this);
};

document.getElementsByClassName('typeboxFecha')[0].oninput = function() {
    cambiarValorAlComun(this);
};

// aca como q agarre al formulario y me fijo si los datos se enviaron o algo asi
document.getElementById('formulario').onsubmit = function() {
    let resultado_texto = document.getElementById("resultado");
    let resultado, temp;
    // dinero calculado
    let dinero = Number(document.getElementById("dineroPrin").value);

    // tasa calculada
    let tasa = Number(document.getElementById("tasaInt").value);
    tasa = tasa / 100;

    // fecha calculada
    let fecha = Number(document.getElementById("fechaFinal").value);
    
    if (fecha === "" || tasa === "" || dinero === "") {
        resultado_texto.innerText = "Error, alguna casilla esta vacia lpm";
        return false;
    }

    //if (fecha <= 2026) {
    //    resultado_texto.innerText = "Error de fecha";
    //    return false;
    //}
    let contador = 1;

    // este es el bucle bien piola donde calculo el interes por el anio
    while (fecha > 0) {
        resultado = dinero * (1+tasa);
        console.log("año " + contador + ": $" + resultado);
        dinero = resultado;
        contador++;
        fecha--;
    }
    
    resultado_texto.innerText = resultado;
    return true;
    
};
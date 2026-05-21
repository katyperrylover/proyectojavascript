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

// funcion de chabon quisquilloso
function cambiarValorAlComunFecha(input) {
    if (parseInt(input.value) === 1){
        document.getElementById("a").innerHTML = "Año";
        document.getElementById("m").innerHTML = "Mes";
        return;
    }
    document.getElementById("a").innerHTML = "Años";
    document.getElementById("m").innerHTML = "Meses";
}

// esta funcion hace q los numeros tengan un formato con puntitos
function formatoEntendible(x) {
  return x.toLocaleString("es-AR");
}


// aplico la funcion para q no se pase
document.getElementsByClassName('typeboxTasa')[0].oninput = function() {
    cambiarValorAlComun(this);
};

// aplico la funcion de chabon quisquilloso
document.getElementsByClassName('typeboxFecha')[0].oninput = function() {
    cambiarValorAlComunFecha(this);
};


// aca como q agarre al formulario y me fijo si los datos se enviaron o algo asi
document.getElementById('formulario').onsubmit = function() {
    // si se enviaron empieza toda esta funcionn :)
    let resultado_texto = document.getElementById("resultado");
    let resultado, opcionPlazo;

    // dinero calculado
    let dinero = Number(document.getElementById("dineroPrin").value);

    // tasa calculada
    let tasa = Number(document.getElementById("tasaInt").value);
    if (document.getElementById("listaOpciones").value === "m") {
        tasa = (tasa / 100) / 12;
        opcionPlazo = "mes";
    }
    else{
        tasa = tasa / 100;
        opcionPlazo = "año";
    }

    // fecha calculada
    let fecha = Number(document.getElementById("fechaFinal").value);

    // si alguna casilla esta vacia, tira error
    if (!dinero || !tasa || !fecha) {
        resultado_texto.innerText = "Error, alguna casilla esta vacia lpm";
        return false;
    }

    // el contador es importante para q la formula sea correcta
    let contador = 1;

    // si la fecha es uno, se saltea el bucle
    if (fecha === 1) {
        resultado = parseFloat((dinero * (1+tasa)**contador).toFixed(2));
        resultado_texto.innerText = "$ " + formatoEntendible(resultado);
        return true;
    }

    // este es el bucle bien piola donde calculo el interes por el anio
    while (fecha > 1) {
        // tuve un problema con la formula y la solucion era cambiar
        // fecha > 0 por fecha > 1 jajajajs
        resultado = parseFloat((dinero * (1+tasa)**contador).toFixed(2));
        console.log(opcionPlazo + " " + contador + ": $" + resultado);
        contador++;
        fecha--;
    }

    resultado_texto.innerText = "$ " + formatoEntendible(resultado);
    return true;
    
};
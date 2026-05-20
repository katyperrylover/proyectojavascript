let tasa = document.getElementById("tasaInt");
if (tasa.value > 100){
    tasa.innerHTML = 100;
}

document.getElementById('formulario').onsubmit = function() {
    let resultado_texto = document.getElementById("resultado");

    let dinero = Number(document.getElementById("dineroPrin").value);
    // tasa calculada
    let tasa = Number(document.getElementById("tasaInt").value);
    if (tasa > 100){tasa = 100;}
    else if(tasa < 1){tasa = 1;}
    tasa = tasa / 100;
    let fecha = Number(document.getElementById("fechaFinal").value);
    let resultado, temp;

    if (fecha <= 2026) {
        resultado_texto.innerText = "Error de fecha";
        return false;
    }
    
    let anios = fecha - 2026;
    let contador = 1;

    while (anios > 0) {
        resultado = dinero * (1+tasa);
        console.log("año " + contador + ": $" + resultado);
        dinero = resultado;
        contador++;
        anios--;
    }
    
    resultado_texto.innerText = resultado;
    return true;
    
};
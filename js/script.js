function generarTeclado() {
    html = "";
    numero = 0;
    const finTeclado = ["C", 0, "="];
    const propiedades = ["+", "-", "*", "/"];
    const printfun = ["clearInput()", "printNumber(this)", "printOperation()"];
    for (let i = 0; i <= 3; i++) {
        for (let j = 0; j <= 3; j++) {
            if (j < 3 && i < 3) {
                numero++;
                html += `<input class="btn btn-outline-primary p-4 m-2" type="button" onclick="printNumber(this)" value="${numero}">`;
            }else if(j < 3 && i === 3) {
                html += `<input class="btn btn-outline-primary p-4 m-2" type="button" onclick="${printfun[j]}" value="${finTeclado[j]}">`;
            }else if(j === 3) {
                html += `<input class="btn btn-outline-warning p-4 m-2" type="button" onclick="printOperator(this)" value="${propiedades[i]}">`;
            }
        }document.getElementById("dashboard").innerHTML = html;
    }
}

function updateInput(newValue, clear = false) {
    let div = document.getElementById("data");
    div.value = clear ? newValue : `${div.value}${newValue}`;
}

function printNumber(data) {
    updateInput(data.value);
}

function clearInput() {
    updateInput('', true);
}

function printOperator(data) {
    updateInput(` ${data.value} `);
}

function printOperation() {
    let data = document.getElementById("data").value 
    let array = validateOperator(data.split(' '))

    updateInput(array, true)
}

function validateOperator(arrayData) {

    let resultado,numero1,numero2

    numero1 = Number(arrayData[0])
    numero2 = Number(arrayData[2])
    
    switch (arrayData[1]) {
        case '+':
            resultado = numero1 + numero2
            break;
        case '-':
            resultado = numero1 - numero2
            break;
        case '*':
            resultado = numero1 * numero2
            break;
        case '/':
            if (numero2 === 0){
                alert("La división por 0 no esta permitida");
                resultado = numero1;
                break;
            }else {
                resultado = numero1 / numero2
            }
            break;
    }

    return resultado    
}

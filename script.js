
const cpfInput = document.getElementById('cpf');

cpfInput.addEventListener('input', function (e) {
    let value = cpfInput.value.replace(/\D/g, ''); 
    value = value.replace(/^(\d{3})(\d)/, "$1.$2"); 
    value = value.replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3"); 
    value = value.replace(/\.(\d{3})(\d)/, ".$1-$2"); 
    cpfInput.value = value; 
});

function validarCPF(cpf){
    if(cpf == ''){
        return false
    }
    if(cpf.length != 11 ||
        cpf === "00000000000" ||
        cpf === "11111111111" ||
        cpf === "22222222222" ||
        cpf === "33333333333" ||
        cpf === "44444444444" ||
        cpf === "55555555555" ||
        cpf === "66666666666" ||
        cpf === "77777777777" ||
        cpf === "88888888888" ||
        cpf === "99999999999"){
           return false;
    }
    return true;   

}

document.getElementById('validarBtn').addEventListener('click', function() {
    const cpfInput = document.getElementById('cpf');
    const cpf = cpfInput.value.replace(/\D/g, '');
    const resultado = document.getElementById('resultado');
    if (validarCPF(cpf)) {
        resultado.textContent = '';
        cpfInput.style.borderColor = 'initial';
    } else {
        resultado.textContent = 'CPF inválido!';
        resultado.style.color = 'red';
        cpfInput.value = '';
        cpfInput.style.borderColor = 'red';
    }
});
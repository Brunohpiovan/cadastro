
const cpfInput = document.getElementById('cpf');
const emailInput = document.querySelector('input[type="email"]');
const telefoneInput = document.getElementById('telefone');
const passInput = document.getElementById('senha');
const nameInput = document.getElementById('nome');
cpfInput.addEventListener('input', function (e) {
    let value = cpfInput.value.replace(/\D/g, ''); 
    value = value.replace(/^(\d{3})(\d)/, "$1.$2"); 
    value = value.replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3"); 
    value = value.replace(/\.(\d{3})(\d)/, ".$1-$2"); 
    cpfInput.value = value; 
});

telefoneInput.addEventListener('input', function (e) {
    let value = telefoneInput.value.replace(/\D/g, '');
    value = value.replace(/^(\d{2})(\d)/, "($1) $2");
    value = value.replace(/(\d{5})(\d)/, "$1-$2");
    telefoneInput.value = value;
});

function validaNome(nome){
    if(nome=='' || nome.length<5){
        return false;
    }else{
        return true;
    }
}

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
    let add = 0;
    for (let i = 0; i < 9; i++)
        add += parseInt(cpf.charAt(i)) * (10 - i);
    let rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) rev = 0;
    if (rev !== parseInt(cpf.charAt(9))) return false;

    add = 0;
    for (let i = 0; i < 10; i++)
        add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) rev = 0;
    if (rev !== parseInt(cpf.charAt(10))) return false;

    return true;  

}

function validarEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validarTelefone(telefone) {
    const re = /^\(\d{2}\) \d{5}-\d{4}$/;
    return re.test(telefone);
}

function validarSenha(senha){
    if(senha.length<4){
        return false
    }else{
        return true;
    }
}

//valida os campos quando o botao 'cadastrar é apertado'
document.getElementById('validarBtn').addEventListener('click', function() {
    const validateField = (input, validator, errorMessage, resultElement) => {
        if (validator(input.value)) {
            resultElement.textContent = '';
            input.style.borderColor = 'initial';
        } else {
            resultElement.textContent = errorMessage;
            resultElement.style.color = 'red';
            input.value = '';
            input.style.borderColor = 'red';
        }
    };

    // Nome
    const nameInput = document.getElementById('nome');
    const resultadoNome = document.getElementById('resultadonome');
    validateField(nameInput, validaNome, 'Nome Inválido.', resultadoNome);

    // CPF
    const cpfInput = document.getElementById('cpf');
    const cpf = cpfInput.value.replace(/\D/g, '');
    const resultadocpf = document.getElementById('resultadocpf');
    if(validarCPF(cpf)){
        resultadocpf.textContent = '';
        cpfInput.style.borderColor = 'initial';
    } else {
        resultadocpf.textContent = 'CPF inválido';
        resultadocpf.style.color = 'red';
        cpfInput.value = '';
        cpfInput.style.borderColor = 'red';
    }
    

    // Email
    const emailInput = document.querySelector('input[type="email"]');
    const resultadoeemail = document.getElementById('resultadoemail');
    validateField(emailInput, validarEmail, 'Email inválido!', resultadoeemail);

    // Telefone
    const telefoneInput = document.getElementById('telefone');
    const resultadotel = document.getElementById('resultadotel');
    validateField(telefoneInput, validarTelefone, 'Telefone inválido!', resultadotel);

    // Senha
    const passInput = document.getElementById('senha');
    const resultadosen = document.getElementById('resultadosen');
    validateField(passInput, validarSenha, 'Senha inválida!', resultadosen);
});

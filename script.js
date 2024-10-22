
const cpfInput = document.getElementById('cpf');
const emailInput = document.querySelector('input[type="email"]');
const telefoneInput = document.getElementById('telefone');
const passInput = document.getElementById('senha');

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

document.getElementById('validarBtn').addEventListener('click', function() {
    const cpf = cpfInput.value.replace(/\D/g, '');
    const resultadocpf = document.getElementById('resultadocpf');
    const email = emailInput.value;
    const resultadoeemail = document.getElementById('resultadoemail');
    const telefone = telefoneInput.value;
    const resultadotel = document.getElementById('resultadotel');
    const senha = passInput.value;
    const resultadosen = document.getElementById('resultadosen');
    if (validarCPF(cpf)) {
        resultadocpf.textContent = '';
        cpfInput.style.borderColor = 'initial';
    } else {
        resultadocpf.textContent = 'CPF inválido!';
        resultadocpf.style.color = 'red';
        cpfInput.value = '';
        cpfInput.style.borderColor = 'red';
    }

    if (!validarEmail(email)) {
        resultadoeemail.textContent = 'Email inválido!';
        resultadoeemail.style.color = 'red';
        emailInput.value = '';
        emailInput.style.borderColor = 'red';
    } else {
        resultadoeemail.textContent = '';
        emailInput.style.borderColor = 'initial';
    }

    if (!validarTelefone(telefone)) {
        resultadotel.textContent = 'Telefone inválido!';
        resultadotel.style.color = 'red';
        telefoneInput.value = '';
        telefoneInput.style.borderColor = 'red';
    } else {
        telefoneInput.style.borderColor = 'initial';
        resultadotel.textContent = '';
    }

    if(validarSenha(senha)){
        resultadosen.textContent = '';
    }else{
        resultadosen.textContent = 'Senha inválida!';
        resultadosen.style.color = 'red';
        passInput.value = '';
    }
});
const nomeInput = document.querySelector('#nome');
const telefoneInput = document.querySelector('#telefone');
const emailInput = document.querySelector('#email');
const duvidasInput = document.querySelector('#duvidas');
const form = document.querySelector('form');
const errorMessage = document.querySelector('.mensagem');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nomeValue = nomeInput.value.trim();
    const telefoneValue = telefoneInput.value.trim();
    const emailValue = emailInput.value.trim();
    const duvidasValue = duvidasInput.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Limpa mensagens anteriores
    errorMessage.textContent = '';
    errorMessage.classList.remove("error", "success");

    if (nomeValue === '' || telefoneValue === '' || emailValue === '' || duvidasValue === '') {
        errorMessage.textContent = "Todos os campos devem ser preenchidos!";
        errorMessage.classList.add("error");
        
        if (nomeValue === '') nomeInput.focus();
        else if (telefoneValue === '') telefoneInput.focus();
        else if (emailValue === '') emailInput.focus();
        else duvidasInput.focus();
        
    } else if (!emailRegex.test(emailValue)) {
        errorMessage.textContent = "Por favor, insira um e-mail válido!";
        errorMessage.classList.add("error");
        emailInput.focus();
    } else {
        errorMessage.textContent = "Enviado com sucesso!";
        errorMessage.classList.add("success");

        nomeInput.value = '';
        telefoneInput.value = '';
        emailInput.value = '';
        duvidasInput.value = '';

        setTimeout(() => {
            errorMessage.textContent = '';
            errorMessage.classList.remove("success");
        }, 3000);
    }
});
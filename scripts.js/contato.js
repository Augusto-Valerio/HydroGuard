const nomeInput = document.querySelector('#nome');
const telefoneInput = document.querySelector('#telefone');
const emailInput = document.querySelector('#email');
const duvidasInput = document.querySelector('#duvidas');
const enviarButton = document.querySelector('button'); 

const errorMessage = document.querySelector('.mensagem');

enviarButton.addEventListener('click', (e) => {
    e.preventDefault();

    const nomeValue = nomeInput.value.trim();
    const telefoneValue = telefoneInput.value.trim();
    const emailValue = emailInput.value.trim();
    const duvidasValue = duvidasInput.value.trim();

    if (nomeValue === '' || telefoneValue === '' || emailValue === '' || duvidasValue === '') {
        errorMessage.textContent = "Algum campo não foi preenchido!";
        errorMessage.classList = "error";
    } else {
        errorMessage.textContent = "Enviado com sucesso!";
        errorMessage.classList = "success";

        nomeInput.value = '';
        telefoneInput.value = '';
        emailInput.value = '';
        duvidasInput.value = '';

        setTimeout(() => {
            errorMessage.textContent = '';
            errorMessage.classList = '';
        }, 3000);
    }
});

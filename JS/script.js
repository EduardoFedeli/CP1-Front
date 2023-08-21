const usuario = document.querySelector('#usuario');
const senha = document.querySelector('#senha');
const erro = document.querySelector('#erro');

usuario.addEventListener('input',() => {
    if (usuario.value.trim() === '') {
        lblusuario.style.color = 'red'; 
    } else  {
        lblusuario.style.color = 'green';
    }
});

senha.addEventListener('input',() => {
    if (senha.value.trim() === '') {
        lblsenha.style.color = 'red'; 
    } else  {
        lblsenha.style.color = 'green';
    }
});

usuario.addEventListener('blur', () => {
    if(usuario.value.trim() === '') {
        erro.textContent = 'O campo não pode ficar vazio'
    } else {
        erro.textcontent = '';
    }
})

senha.addEventListener('blur', () => {
    if(senha.value.trim() === '') {
        erro.textContent = 'O campo não pode ficar vazio'
    } else {
        erro.textcontent = '';
    }
})
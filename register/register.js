let nome = document.querySelector('#nome');
let labelNome = document.querySelector('#labelNome');
let validNome = true;

let email = document.querySelector('#email');
let labelEmail = document.querySelector('#labelEmail');
let validEmail = true;

let senha = document.querySelector('#password');
let labelSenha = document.querySelector('#labelSenha');
let validSenha = true;

nome.addEventListener('keyup', () => 
{
    if(nome.value.length <= 5)
    {
        labelNome.setAttribute('style', 'color: red');
        validNome = false;
        
    }
    else
    {
        labelNome.setAttribute('style', 'color: green');
        validNome = true;
    }
});


email.addEventListener('keyup', ()=> 
{
    if(email.value.length <= 5){
        labelEmail.setAttribute('style', 'color: red')
        validEmail = false;
    }else{
        labelEmail.setAttribute('style', 'color: green')
        validEmail = true;
    }
});

senha.addEventListener('keyup', () => 
{
    if(senha.value.length <= 5){
        labelSenha.setAttribute('style', 'color: red');
        validSenha = false;
    }
    else
    {
        labelSenha.setAttribute('style', 'color: green');
        validSenha = true;
    }
    
});
function cadastrar(){
    if(validNome && validEmail && validSenha){
         let listaUsuario = JSON.parse(localStorage.getItem('listaUsuario') || '[]');

        for(let i = 0; i < listaUsuario.length; i++)
        {

            if(listaUsuario[i].nomeUser === nome.value || listaUsuario[i].emailUser === email.value) {
                alert('Já existe uma conta com esse e-mail. Por favor verifique');

                return;
            }
            
        }

            listaUsuario.push({
            nomeUser: nome.value,
            emailUser: email.value,
            senhaUser: senha.value
            });

        localStorage.setItem('listaUsuario', JSON.stringify(listaUsuario));
        window.location.href='../login/login.html';

        alert('Conta cadastrada!');

    }else
    {
        alert('Não foi possível cadastrar!')
    }
}
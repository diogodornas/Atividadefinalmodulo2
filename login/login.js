function entrar(){
    let email = document.querySelector('#email');

    let senha = document.querySelector('#password');

    let listaUsuario = [];

    let userValid = { email: '', senha: '' };
    
    listaUsuario = JSON.parse(localStorage.getItem('listaUsuario'));
    
    listaUsuario.forEach((item) => {
        if(email.value === item.emailUser && senha.value === item.senhaUser)
        {
            userValid = 
            {
                nome: item.nomeUser,
                email: item.emailUser,
                senha: item.senhaUser
            };
        }
    });

    if(email.value === userValid.email && senha.value === userValid.senha){
        window.location.href='../home/home.html';

        let validador = Math.random().toString().substring() + Math.random().toString().substring();
        localStorage.setItem('validador', validador);

        localStorage.setItem('userLogado', JSON.stringify(userValid)); 
        
    }else
    {
        alert('Usuário não encontrado');
    }    
}
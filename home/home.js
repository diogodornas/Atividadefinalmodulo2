let btn = document.getElementById('btn-sub');

//Criando um evento de click para salvar o que o usuario escreveu no input, salvando no localStorage e imprimindo na tabela os valores do input
btn.addEventListener('click', () => 
{

    let titulo = document.querySelector('#titulo');
    let descricao = document.querySelector('#descricao');
    
    
    
    let data = JSON.parse(localStorage.getItem('data') || '[]');
    
    data.push({
        id: Date.now(),
        titulo: titulo.value,
        descricao: descricao.value
    })
    
    localStorage.setItem('data', JSON.stringify(data));

    // console.log(data);
    
    let mostrar = document.getElementById('mostrarLinha');
    mostrar.innerHTML = '';
    
    let getData = JSON.parse(localStorage.getItem('data'));
    
    
    
        
        getData.forEach((valor, index, array) => 
            {
               mostrar.innerHTML += `
               <tr>
                   <td data-label="#" id="count">${index + 1}</td>
                   <td data-label="titulo" id="description">${valor.titulo}</td>
                   <td data-label="descricao" id="detalhes" >${valor.descricao}</td>
                   <td data-label="Acao" >
                   <button type="submit" id="btn-apagar" onclick=removeItem(${valor.id})>Apagar</button>
                   <button type="submit" id="btn-edit" onclick=editarItem(${valor.id}) >Editar</button>
                   </td>
               </tr> 
               `
            }); 
           localStorage.setItem('data', JSON.stringify(data));

    
    document.getElementById('titulo').value = "";
    document.getElementById('descricao').value = "";  
    
})


//Função para editar o item na tabela e atualiazr no localStorage o item editado
    function editarItem(id)
    {
    let data = JSON.parse(localStorage.getItem('data'));

    data = data.map(item => {
        if(item.id === id)
        {
            item.titulo = titulo.value;
            item.descrição = descrição.value;
        }
        return item;
    })
    localStorage.setItem('data', JSON.stringify(data));
    titulo.value = '';
    descrição.value = '';
    atualizarTabela();
    mostrarLinha();

    }



//Funçao para remover o item da tabela ao clicar nele
function removeItem(id)
    {
    let data = JSON.parse(localStorage.getItem('data'));
    data = data.filter(item => item.id !== id);
    localStorage.setItem('data', JSON.stringify(data));
    location.reload();
    
    atualizarTabela();
    }


//Funçao para atualizar a tabela depois que um item da tabela tenha sido removido
function atualizarTabela()
    {
    let mostrar = document.getElementById('mostrarLinha');
    mostrar.innerHTML = '';
    
    let getData = JSON.parse(localStorage.getItem('data'));

    getData.forEach((valor, index, array) => {
        mostrar.innerHTML += `
        <tr>
            <td data-label="#" id="count">${index + 1}</td>
            <td data-label="titulo" id="description">${valor.titulo}</td>
            <td data-label="descrição" id="detalhes" >${valor.descrição}</td>
            <td data-label="Acao" >
            <button type="submit" id="btn-apagar" onclick=removeItem(${valor.id})>Apagar</button>
            <button type="submit" id="btn-edit" onclick=editarItem(${valor.id}) >Editar</button>
            </td>
        </tr> 
        `
        
    }); 
    localStorage.setItem('data', JSON.stringify(data));
    }

//Pegando o usuario logado no sistema e imprimindo no cabeçalho o nome que ele cadastrou
let usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

let logado = document.querySelector('#h1');

logado.innerHTML = `Lista de recados: ${usuarioLogado.nome}`;

//Buscando no localstorage o validador do usuario logado
if(localStorage.getItem('validador') === null)
{
    alert('Faça o login');
    window.location.href='../login/login.html';
}
if(usuarioLogado.email == '' || usuarioLogado.senha == '') 
{
    alert("Você precisar estar logado para acessar essa página")
    window.location.href = '../login/login.html';
}

//Função para sair da aplicação e removendo o validador e o usuariologado do localStorage
function sair(){
    localStorage.removeItem('data');
    localStorage.removeItem('validador');
    localStorage.removeItem('usuarioLogado');
    window.location.href='../login/login.html';
}
//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//Criação da lista(vetor) "amigos"
let amigos = []; 

//Função para adicionar o amigo ao clicar no botão "Adicionar"
function adicionarAmigo() { 
    const campo = document.getElementById('amigo'); 
    let nome = campo.value.trim();
    //IF Verifica se o campo está vazio e exibe uma mensagem de erro se tentar adicionar sem digitar nada
    if (nome == '') { 
        alert('Por favor, insira um nome válido');
        return;
    } 
    amigos.push(nome);
    campo.value = '';
    
    console.log(nome);   
    console.log(amigos);
    
    listarAmigos();  //Chama a função que mostra os nomes adicionados na tela 
}

function listarAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // limpa a lista

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');  //Para cada nome é criado um elemento "<li></li> no HTML"
        li.textContent = amigos[i];  
        lista.appendChild(li);
    }
}

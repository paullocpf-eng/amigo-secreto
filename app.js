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

function sortearAmigo() {
    if (amigos.length === 0) {  //Verifica se tem algum nome no vetor "amigos"
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);  //Gera um indice aleatorio até o tamanho máximo do vetor
    let nomeSorteado = amigos[indiceAleatorio];
    const frase = document.getElementById('resultado');
    frase.innerHTML = 'O amigo secreto sorteado é: ' + nomeSorteado;  //Escreve na tela a frase do amigo sorteado
}
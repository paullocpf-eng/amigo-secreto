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
}
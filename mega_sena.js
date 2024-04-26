let numInput = document.querySelector('#numInput');
let userNumbers = document.querySelector('#userNumbers');
let resultado = document.querySelector('#resultado');
let userSelected = [];

function adicionar() {
    let num = Number(numInput.value);

    if (num >= 1 && num <= 60 && !userSelected.includes(num) && userSelected.length < 6) {
        userSelected.push(num); // Adiciona ao array de números do usuário
        let numDisplay = document.createElement('span');
        numDisplay.textContent = num; // Define o texto do número
        numDisplay.className = 'number'; // Define a classe para o estilo
        userNumbers.appendChild(numDisplay); // Adiciona ao container
        
        
    } else if (userSelected.length == 6) {
        window.alert("São apenas 6 números! Click em SORTEAR e Boa-Sorte!");
    } else {
        window.alert("Número inválido ou já adicionado!")
    }

    numInput.value = ''; // Limpa o campo de entrada
    numInput.focus(); // Retorna o foco para o campo de entrada
}

function gerarNumerosSorteados() {
    let sorteados = [];
    while (sorteados.length < 6) {
        let num = Math.floor(Math.random() * 60) + 1;
        if (!sorteados.includes(num)) {
            sorteados.push(num);
        }
    }
    return sorteados;
}
// Função para verificar acertos do usuário
function verificarAcertos(userSelected, sorteados) {
    return userSelected.filter((n) => sorteados.includes(n)); // Retorna os números acertados
}

// Função para sortear números e exibir resultados
function sortear() {
    let sorteados = gerarNumerosSorteados(); // Gera seis números sorteados
    let acertos = verificarAcertos(userSelected, sorteados); // Verifica os acertos do usuário

    
    let resultadoTexto 
    
    //Verificar se o resultado é = 0
    if (acertos.length === 0) {
    resultadoTexto = `Você NÃO acertou nenhum número AZARADO &#x1F921;<br><br>`
    resultadoTexto += `Números sorteados: <b>${sorteados.join(' - ')}</b><br><br>`
    } else {
        resultadoTexto = `Você acertou ${acertos.length} número(s): <b>${acertos.join(' - ')}</b><br><br>`
        resultadoTexto += `Números sorteados: <b>${sorteados.join(' - ')}</b><br><br>`
    }
    resultadoTexto += `Seus números foram: <b>${userSelected.join(' - ')}</b>`

   

    // Verifica se acertou quina ou quadra
    if (acertos.length === 5) {
        resultadoTexto += '<br>Parabéns! Você acertou uma quina!';
    } else if (acertos.length === 4) {
        resultadoTexto += '<br>Parabéns! Você acertou uma quadra!';
    } else if (acertos.length === 6) {
        resultadoTexto += '<br>Incrível! Você acertou a Mega-Sena!';
    }

    resultado.innerHTML = resultadoTexto; // Exibe o resultado

    // Limpa a seleção do usuário para um novo jogo
    userSelected = [];
    userNumbers.innerHTML = ''; // Limpa o select
}

numInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        adicionar(); // Adiciona ao pressionar Enter
    }
});

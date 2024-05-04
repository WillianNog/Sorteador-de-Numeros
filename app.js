function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;

    if (quantidade > ((ate - de)+1)) {
        alert("A quantidade a ser sorteada deve ser menor que a quantidade de opções entre o numero de inicio ate o limite!! Tente Novamente.")
    } else {
        for (let i = 0; i < quantidade; i++) {
            numero = obterNumeroAleatorio(de, ate);
            while (sorteados.includes(numero)) {
                numero = obterNumeroAleatorio(de, ate);
            }
            sorteados.push(numero);
        }
    
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: 
            ${sorteados.length === 0 ? 'nenhum até agora' : sorteados}</label>`;
        alterarStatusBotao();  
    }
    
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    let quantidade = document.getElementById('quantidade');
    let de = document.getElementById('de');
    let ate = document.getElementById('ate');
    let resultado = document.getElementById('resultado');

    quantidade.value = '';
    de.value = '';
    ate.value = '';

    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>`;
    alterarStatusBotao();  
}

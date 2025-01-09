const resultado = document.getElementById('resultado');
const botoes = document.querySelectorAll('button');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const valor = botao.textContent;

        if (valor === 'C') {
            resultado.value = '';
        }
        else if (valor === '=') {
            try {
                resultado.value = eval(resultado.value);
            } catch (e) {
                resultado.value = 'Erro!';
            }
        }
        else {
            resultado.value += valor;
        }
    })
})
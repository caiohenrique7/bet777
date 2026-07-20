const floatAposta = document.querySelector('.floatAposta');
const escolhaFloat = document.querySelector('#escolhasFloat');
const oddFloat = document.querySelector('#oddFloat');

const opcoes = document.querySelectorAll(".opc-aposta");


console.log(opcoes);



opcoes.forEach(opcao => {
    opcao.addEventListener('click', () => {
        let nomeTime = opcao.querySelector('.nomeTime');
        let oddTime = opcao.querySelector('.oddTime');


        floatAposta.style.display = 'flex'
        escolhaFloat.innerHTML = nomeTime.textContent
        oddFloat.innerHTML = oddTime.textContent
        opcao.style.background = '#1E88FF'

    });
});



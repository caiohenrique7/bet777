const floatAposta = document.querySelector('.floatAposta');
const selecoesFloat = document.querySelector('#selecoesFloat')
const escolhaFloat = document.querySelector('#escolhasFloat');
const oddFloat = document.querySelector('#oddFloat');
let apostas = [];
const opcoes = document.querySelectorAll(".opc-aposta");

console.log(opcoes);

opcoes.forEach(opcao => {
    opcao.addEventListener('click', () => {
        let nomesAposta = opcao.querySelector('.nomeTime').textContent;
        let novaOdd = Number(opcao.querySelector('.oddTime').textContent);
        let aposta = 
        {   nome: nomesAposta,
            odd: novaOdd 
        };
        
        apostas.push(aposta);
        
        console.log(apostas);
        
        let oddTotal = 1;
        let nomes = [];

        for(let i = 0; i < apostas.length; i++) {
            oddTotal = oddTotal * apostas[i].odd;
            nomes.push(apostas[i].nome);
        }
        
        let qntdSelecoes = apostas.length;

        if (qntdSelecoes == 1) {
            selecoesFloat.innerHTML = qntdSelecoes + " Seleção"
        } else {
        selecoesFloat.innerHTML = qntdSelecoes + " Seleções"
        }
        
        floatAposta.style.display = 'flex'
        escolhaFloat.innerHTML = nomes
        oddFloat.innerHTML = oddTotal.toFixed(2);
        opcao.style.background = '#1E88FF' 

    });
});

console.log(apostas);

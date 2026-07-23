const floatAposta = document.querySelector('.floatAposta');
const selecoesFloat = document.querySelector('#selecoesFloat')
const escolhaFloat = document.querySelector('#escolhasFloat');
const oddFloat = document.querySelector('#oddFloat');
let apostas = [];
const opcoes = document.querySelectorAll(".opc-aposta");
const verAposta = document.querySelector('#verAposta');
const menuApostas = document.querySelector('.apostass');
const fecharApostas = document.querySelector('.seta-aposta-fechar');
const selecoes = document.querySelector('.selecoes');
const oddCriar = document.querySelector('#oddCriar');
const subirAposta = document.querySelector('.opcoes-apostas');
const time1 = document.querySelector('#time1').textContent;
const time2 = document.querySelector('#time2').textContent;
const jogoCriarAposta = document.querySelector('#jogoCriarAposta');



jogoCriarAposta.innerHTML = `${time1} v ${time2}`


opcoes.forEach(opcao => {
    opcao.addEventListener('click', () => {
        let card = opcao.closest(".resultado-final");
        let nomesAposta = opcao.querySelector('.nomeTime').textContent;
        let novaOdd = Number(opcao.querySelector('.oddTime').textContent);
        let nomeMercado = card.querySelector('.nomeMercado').textContent;

    
        
        let aposta =
        {   
            mercado: nomeMercado,
            nome: nomesAposta,
            odd: novaOdd
        };

        apostas.push(aposta);

        renderizarCupom();

        let oddTotal = 1;
        let nomes = [];

        for (let i = 0; i < apostas.length; i++) {
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
        oddCriar.innerHTML = oddTotal.toFixed(2);
        opcao.style.background = '#1E88FF'
        subirAposta.style.marginBottom = '90px'

    });
});


verAposta.addEventListener('click', () => {
    menuApostas.style.display = 'flex'
    floatAposta.style.display = 'none'

});

fecharApostas.addEventListener('click', () => {
    menuApostas.style.display = 'none'
    floatAposta.style.display = 'flex'
});

function renderizarCupom() {
    let div = document.createElement("div");
    div.classList.add("selecao");
    let titulo = document.createElement("h4");
    let texto = document.createElement("p");

    for (let i = 0; i < apostas.length; i++) {
        titulo.textContent = apostas[i].mercado;
        texto.textContent = apostas[i].nome;
        selecoes.appendChild(div);
        div.appendChild(titulo);
        div.appendChild(texto);
    }
    
};


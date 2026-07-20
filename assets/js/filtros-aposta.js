const filtros = document.querySelectorAll(".filtro-aposta");
const cards = document.querySelectorAll(".resultado-final");
let categoria;
let filtroAposta;

filtros.forEach(filtro => {
    filtro.addEventListener("click", () => {
        filtroAposta = filtro.dataset.filtro; 

        filtros.forEach(item => {
            item.classList.remove("filtroAtivo");     
        });

        filtro.classList.add("filtroAtivo");
        
        if (filtroAposta != "todos") {

        cards.forEach(card => {
            categoria = card.dataset.categoria

            if (categoria === filtroAposta) {
                card.style.display = 'block'
            } else {
                card.style.display = 'none'
            }
        });  
    }
    });
});





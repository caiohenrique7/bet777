const filtros = document.querySelectorAll(".filtro-aposta");

filtros.forEach(filtro => {
    filtro.addEventListener("click", () => {

        filtros.forEach(item => {
            item.classList.remove("filtroAtivo");
        });

        filtro.classList.add("filtroAtivo");
    });
});
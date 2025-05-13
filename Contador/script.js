document.addEventListener('DOMContentLoaded', () => {
    const valorContadorElement = document.getElementById('valor-contador');
    const incrementarBtn = document.getElementById('incrementar-btn');
    const decrementarBtn = document.getElementById('decrementar-btn');
    const resetarBtn = document.getElementById('resetar-btn');
    const erroMensagem = document.getElementById('erro-mensagem');

    let valor;

    function atualizarContador(newValue) {
        valorContadorElement.textContent = newValue     
    }

    incrementarBtn.addEventListener('click', () => {
        valor = valorContadorElement.textContent
        valor ++
        if (valor > 0 ){
            erroMensagem.textContent = ""
        }
        atualizarContador(valor);
    });

    decrementarBtn.addEventListener('click', () => {
        valor = valorContadorElement.textContent
        valor --
        if (valor < 0 ){
            erroMensagem.textContent = "O valor será Negativo, Incremente"
            valor = 0
        }
        atualizarContador(valor);     
    });

    resetarBtn.addEventListener('click', () => {
        atualizarContador(0)      
    });

    // Inicializa o contador na página
    atualizarContador(0);
});
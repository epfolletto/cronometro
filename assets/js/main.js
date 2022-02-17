function relogio() {
    // Recebe a quantidade de segundo atual e adiciona ao 00:00:00 do Unix timestamp
    function criaHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        })
    }

    // Seleciona o parágrafo do relógio e os botões iniciar, pausar e zerar
    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');
    let segundos = 0;
    let timer;

    // A cada 1s chama a função "criaHoraDosSegundos" e plota no parágrafo do relógio
    function iniciaRelogio() {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = criaHoraDosSegundos(segundos);
        }, 1000)
        return segundos
    }

    // Adiciona o evento para "escutar" o clique do botão iniciar
    iniciar.addEventListener('click', function (event) {
        relogio.classList.remove('pausado');
        clearInterval(timer);
        iniciaRelogio();
    });

    // Adiciona o evento para "escutar" o clique do botão pausar
    pausar.addEventListener('click', function (event) {
        clearInterval(timer);
        relogio.classList.add('pausado');
    });

    // Adiciona o evento para "escutar" o clique do botão zerar
    zerar.addEventListener('click', function (event) {
        relogio.classList.remove('pausado');
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
    });
}

relogio(); // Todo código foi colocado em uma função para fugir do escopo global.

/*
A solução acima é válida, porém, caso tivessemos muitos botões, teríamos vários
"addEventListener", uma alternativa a isso seria o código seguinte:
*/

/*
document.addEventListener('click', function(e) {
    const el = e.target;

    if(el.classList.contains('iniciar')){
        relogio.classList.remove('pausado');
        clearInterval(timer);
        iniciaRelogio();
    }

    if(el.classList.contains('pausar')){
        clearInterval(timer);
        relogio.classList.add('pausado');
    }

    if(el.classList.contains('zerar')){
        relogio.classList.remove('pausado');
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
    }
})
*/
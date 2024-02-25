document.addEventListener("DOMContentLoaded", function() {
    const botoesTemporadas = document.querySelectorAll(".botao-temporadas");

    // Adiciona um event listener para cada botão de temporada
    botoesTemporadas.forEach(function(botao) {
        botao.addEventListener("click", function() {
            // Obtém o número da temporada do atributo 'data-temporada' do botão
            const numeroTemporada = botao.getAttribute("data-temporada");

            // Atualiza a imagem grande e o texto da temporada
            document.getElementById("imagem-grande").src = `/src/imagem-grande/${numeroTemporada}.png`;
            document.getElementById("titulo-temporada").textContent = `Temporada ${numeroTemporada}`;

            // Substitua as sinopses conforme necessário
            switch (numeroTemporada) {
                case "1":
                    document.getElementById("sinopse-temporada").textContent = "Friends é uma série de comédia televisiva que se desenrola em torno de um grupo de seis amigos que vivem em Nova York. A primeira temporada estabelece os personagens principais e os relacionamentos entre eles. A temporada começa com Rachel Green, uma jovem que foge de seu casamento e busca abrigo no apartamento de sua amiga de longa data, Monica Geller. Enquanto isso, o grupo inclui Chandler Bing, Joey Tribbiani, Ross Geller (irmão de Monica) e Phoebe Buffay.";
                    break;
                case "2":
                    document.getElementById("sinopse-temporada").textContent = "Na segunda temporada de Friends, acompanhamos as aventuras e desventuras dos seis amigos em Nova York enquanto lidam com os altos e baixos da vida adulta e dos relacionamentos. Rachel continua sua jornada de autoconhecimento após abandonar seu casamento no altar, enfrentando desafios profissionais e amorosos enquanto busca independência.";
                    break;
                case "3":
                        document.getElementById("sinopse-temporada").textContent = "Na terceira temporada de Friends, os laços entre os seis amigos de Nova York se aprofundam, trazendo consigo uma mistura de comédia, romance e desafios pessoais. Rachel continua a encontrar seu caminho após abandonar seu casamento no altar, buscando independência e uma carreira profissional. Sua relação com Ross, irmão de sua amiga Monica, torna-se mais complexa à medida que eles exploram seus sentimentos mútuos.";
                        break;
                // Adicione mais casos conforme necessário para mais temporadas
                default:
                    document.getElementById("sinopse-temporada").textContent = "Sinopse não encontrada.";
            }
        });
    });
});


// Espera até que o conteúdo da página seja carregado
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todas as divs que você deseja animar
    var elementsToAnimate = document.querySelectorAll('.icones, .botoes, .box');

    // Define a opacidade inicial das divs como 0
    elementsToAnimate.forEach(function(element) {
        element.style.opacity = '0';
    });

    // Define um intervalo de tempo (em milissegundos) após o qual a animação será iniciada
    var delay = 2000; // 2000 milissegundos = 2 segundos

    // Define a função para iniciar a animação após o intervalo de tempo especificado
    setTimeout(function() {
        // Gradualmente aumenta a opacidade de cada div ao longo de 1 segundo (1000 milissegundos)
        var fadeEffect = setInterval(function () {
            elementsToAnimate.forEach(function(element) {
                // Verifica se a opacidade é menor que 1
                if (!element.style.opacity) {
                    element.style.opacity = 0;
                }
                // Incrementa a opacidade em 0.01
                element.style.opacity = parseFloat(element.style.opacity) + 0.01;

                // Verifica se a opacidade atingiu 1
                if (element.style.opacity >= 1) {
                    clearInterval(fadeEffect);
                }
            });
        }, 10); // Aumenta a opacidade a cada 10 milissegundos
    }, delay); // Inicia a animação após o intervalo de tempo especificado
});
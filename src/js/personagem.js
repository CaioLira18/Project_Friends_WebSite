document.addEventListener("DOMContentLoaded", function() {
    const botoesPersonagens = document.querySelectorAll(".botao-personagem");

    // Adiciona um event listener para cada botão de personagem
    botoesPersonagens.forEach(function(botao) {
        botao.addEventListener("click", function() {
            // Obtém o número do personagem do atributo 'personagem' do botão
            const personagem = botao.getAttribute("personagem");

            // Atualiza a imagem grande do personagem
            document.getElementById("imagem-personagem").src = `/src/personagens/${personagem}.png`;

            // Substitui o título e a biografia do personagem conforme necessário
            switch (personagem) {
                case "1":
                    document.querySelector(".personagem-title").textContent = "Joey";
                    document.querySelector(".personagem-bio").textContent = "Interpretado por Matt LeBlanc, Joey é um ator aspirante e um mulherengo incorrigível. Ele é muitas vezes retratado como o mais ingênuo do grupo, mas também é extremamente leal aos seus amigos. Sua busca por sucesso na carreira de ator é uma constante ao longo da série.o";
                    break;
                case "2":
                    document.querySelector(".personagem-title").textContent = "Ross";
                    document.querySelector(".personagem-bio").textContent = "Interpretado por David Schwimmer, Ross é um paleontólogo, um tanto quanto nerd e bastante sensível. Ele é conhecido por seus relacionamentos românticos complicados, particularmente com Rachel, sua grande paixão ao longo da série. Ross é o irmão mais velho de Monica e tem uma inclinação para o lado intelectual e acadêmico da vida.";
                    break;
                case "3":
                    document.querySelector(".personagem-title").textContent = "Chandler";
                    document.querySelector(".personagem-bio").textContent = "Interpretado por Matthew Perry, Chandler é conhecido por seu humor sarcástico e seu emprego misterioso no início da série. Ao longo do tempo, ele desenvolve um relacionamento com Monica, e sua jornada inclui superar seus medos de compromisso e se estabelecer em sua vida pessoal e profissional.";
                    break;
                case "4":
                    document.querySelector(".personagem-title").textContent = "Phoebe"
                    "";
                    document.querySelector(".personagem-bio").textContent = "Interpretada por Lisa Kudrow, Phoebe é uma musicista excêntrica com um passado único e muitas vezes misterioso. Ela é conhecida por sua natureza excêntrica e suas crenças espirituais peculiares. Phoebe traz uma perspectiva diferente para o grupo e é uma amiga leal e solidária.";
                    break;
                case "5":
                    document.querySelector(".personagem-title").textContent = "Monica";
                    document.querySelector(".personagem-bio").textContent = "Interpretada por Courteney Cox, Monica é a irmã mais nova de Ross e é conhecida por sua personalidade obsessivamente organizada e competitiva. Ela é uma chef talentosa e tem um lado cômico em sua busca pelo controle e perfeição em sua vida e em seu relacionamento com Chandler.";
                    break;
                case "6":
                    document.querySelector(".personagem-title").textContent = "Rachel";
                    document.querySelector(".personagem-bio").textContent = "Interpretada por Jennifer Aniston, Rachel é uma mulher determinada que começa a série fugindo de seu casamento fracassado. Ela é uma fashionista e, ao longo das temporadas, busca sua independência financeira e emocional. Sua história de amor com Ross é um dos principais fios condutores da série.";
                    break;
                default:
                    // Caso padrão, se não houver correspondência
                    document.querySelector(".personagem-title").textContent = "Personagem Desconhecido";
                    document.querySelector(".personagem-bio").textContent = "Biografia não encontrada.";
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
let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let botoes = document.querySelectorAll("#botoes-container button");
let mensagem = document.querySelector("#mensagem");
let mensagemTexto = document.querySelector("#mensagem p");
let segundoJogador;

//Contador de jogadas
let jogador1 = 0;
let jogador2 = 0;

for(let i = 0; i < boxes.length; i++) {
    
    boxes[i].addEventListener("click", function() {

        let elemento = verificaElemento(jogador1, jogador2);


        //verifica se já tem X ou O
        if(this.childNodes.length == 0) {

            let cloneElemento = elemento.cloneNode(true);

            this.appendChild(cloneElemento);

            //computar jogada
            if(jogador1 == jogador2) {

                jogador1++;

                if(segundoJogador == 'ia-jogador') {

                    //funcao executar a jogada
                    jogadaComputador();
                    jogador2++;
                }
            }

            else {

                jogador2++
            }

            verificaVencedor();

        }
    })
}

// Evento para saber se são 2 jogadores o IA

for(let i = 0; i < botoes.length; i++) {

    botoes[i].addEventListener("click", function() {

        segundoJogador = this.getAttribute("id");

        for(let j = 0; j < botoes.length; j++) { // Esconde os botoes

            botoes[j].style.display = 'none';
        }

        setTimeout(function() {

            let container = document.querySelector("#container");
            container.classList.remove("hide");

        }, 500);
    });
}

// Verifica quem vai jogar
function verificaElemento(jogador1, jogador2) {
    
        if(jogador1 == jogador2) {

            elemento = x;
        }

        else {

            elemento = o;
        }

        return elemento;
}

function verificaVencedor(jogador1, jogador2) {

    let bloco1 = document.getElementById("bloco-1");
    let bloco2 = document.getElementById("bloco-2");
    let bloco3 = document.getElementById("bloco-3");
    let bloco4 = document.getElementById("bloco-4");
    let bloco5 = document.getElementById("bloco-5");
    let bloco6 = document.getElementById("bloco-6");
    let bloco7 = document.getElementById("bloco-7");
    let bloco8 = document.getElementById("bloco-8");
    let bloco9 = document.getElementById("bloco-9");

    // vitória horizontal
    if(bloco1.childNodes.length > 0 && bloco2.childNodes.length > 0 && bloco3.childNodes.length > 0) {

        bloco1Child = bloco1.childNodes[0].className;
        bloco2Child = bloco2.childNodes[0].className;
        bloco3Child = bloco3.childNodes[0].className;

        if(bloco1Child == 'x' && bloco2Child == 'x' && bloco3Child == "x") {
           
            declaraVencedor('x');

        } else if(bloco1Child == 'o' && bloco2Child == 'o' && bloco3Child == "o") {
           
            declaraVencedor('o');

        }

    }

    if(bloco4.childNodes.length > 0 && bloco5.childNodes.length > 0 && bloco6.childNodes.length > 0) {

        bloco4Child = bloco4.childNodes[0].className;
        bloco5Child = bloco5.childNodes[0].className;
        bloco6Child = bloco6.childNodes[0].className;

        if(bloco4Child == 'x' && bloco5Child == 'x' && bloco6Child == "x") {
            
            declaraVencedor('x');

        } else if(bloco4Child == 'o' && bloco5Child == 'o' && bloco6Child == "o") {
            
            declaraVencedor('o');

        }

    }

    if(bloco7.childNodes.length > 0 && bloco8.childNodes.length > 0 && bloco9.childNodes.length > 0) {

        bloco7Child = bloco7.childNodes[0].className;
        bloco8Child = bloco8.childNodes[0].className;
        bloco9Child = bloco9.childNodes[0].className;

        if(bloco7Child == 'x' && bloco8Child == 'x' && bloco9Child == "x") {
            
            declaraVencedor('x');

        } else if(bloco7Child == 'o' && bloco8Child == 'o' && bloco9Child == "o") {
            
            declaraVencedor('o');

        }

    }

    //vitória vertical

    if(bloco1.childNodes.length > 0 && bloco4.childNodes.length > 0 && bloco7.childNodes.length > 0) {

        bloco1Child = bloco1.childNodes[0].className;
        bloco4Child = bloco4.childNodes[0].className;
        bloco7Child = bloco7.childNodes[0].className;

        if(bloco1Child == 'x' && bloco4Child == 'x' && bloco7Child == "x") {
            
            declaraVencedor('x');

        } else if(bloco1Child == 'o' && bloco4Child == 'o' && bloco7Child == "o") {
            
            declaraVencedor('o');

        }

    }

    if(bloco2.childNodes.length > 0 && bloco5.childNodes.length > 0 && bloco8.childNodes.length > 0) {

        bloco2Child = bloco2.childNodes[0].className;
        bloco5Child = bloco5.childNodes[0].className;
        bloco8Child = bloco8.childNodes[0].className;

        if(bloco2Child == 'x' && bloco5Child == 'x' && bloco8Child == "x") {
            
            declaraVencedor('x');
            
        } else if(bloco2Child == 'o' && bloco5Child == 'o' && bloco8Child == "o") {
            
            declaraVencedor('o');

        }

    }

    if(bloco3.childNodes.length > 0 && bloco6.childNodes.length > 0 && bloco9.childNodes.length > 0) {

        bloco3Child = bloco3.childNodes[0].className;
        bloco6Child = bloco6.childNodes[0].className;
        bloco9Child = bloco9.childNodes[0].className;

        if(bloco3Child == 'x' && bloco6Child == 'x' && bloco9Child == "x") {
            
            declaraVencedor('x');

        } else if(bloco3Child == 'o' && bloco6Child == 'o' && bloco9Child == "o") {
            
            declaraVencedor('o');

        }

    }

    //vitória diagonal

    if(bloco1.childNodes.length > 0 && bloco5.childNodes.length > 0 && bloco9.childNodes.length > 0) {

        bloco1Child = bloco1.childNodes[0].className;
        bloco5Child = bloco5.childNodes[0].className;
        bloco9Child = bloco9.childNodes[0].className;

        if(bloco1Child == 'x' && bloco5Child == 'x' && bloco9Child == "x") {
            
            declaraVencedor('x');     

        } else if(bloco1Child == 'o' && bloco5Child == 'o' && bloco9Child == "o") {
            
            declaraVencedor('o');

        }

    }

    if(bloco3.childNodes.length > 0 && bloco5.childNodes.length > 0 && bloco7.childNodes.length > 0) {

        bloco3Child = bloco3.childNodes[0].className;
        bloco5Child = bloco5.childNodes[0].className;
        bloco7Child = bloco7.childNodes[0].className;

        if(bloco3Child == 'x' && bloco5Child == 'x' && bloco7Child == "x") {
            
            declaraVencedor('x');

        } else if(bloco3Child == 'o' && bloco5Child == 'o' && bloco7Child == "o") {
            
            declaraVencedor('o');

        }

    }

    // deu velha

    let cont = 0;

    for(let i = 0; i < boxes.length; i++) {

        if(boxes[i].childNodes[0] != undefined) {

            cont++;
        }
    }

    if(cont == 9) {

        declaraVencedor('deu velha');
    }
}

// limpa o jogo, declara vencedor e atualiza o placar

function declaraVencedor(vencedor) {

    let placarX = document.querySelector("#placar-1");
    let placarY = document.querySelector("#placar-2");
    let msg = '';

    if(vencedor == 'x') {

        placarX.textContent = parseInt(placarX.textContent) + 1;
        msg =  'O jogador 1 venceu!'
    }

    else if(vencedor == 'o') {

        placarY.textContent = parseInt(placarY.textContent) + 1;
        msg = 'O jogador 2 venceu!'
    }

    else {

        msg = 'Deu velha!'
    }

    //Exibe mensagem

    mensagemTexto.innerHTML = msg;
    mensagem.classList.remove("hide");

    //Esconde mensagem

    setTimeout(function() {

        mensagem.classList.add("hide");

    }, 3000); 

    // Zera as jogadas

    jogador1 = 0;
    jogador2 = 0;

    //remove o X e O

    let boxesRemover = document.querySelectorAll(".box div");

    for(let i = 0; i < boxesRemover.length; i++) {

        boxesRemover[i].parentNode.removeChild(boxesRemover[i]);
    }

}

// Executa a lógica da jogada do computador

function jogadaComputador() {

    let cloneO = o.cloneNode(true);
    let cont = 0;
    let preenchidos = 0;

    for(let i = 0; i < boxes.length; i++) {

        let numAleatorio = Math.floor(Math.random() * 5);

        // Só preenche se estiver vázios os filhos
        if(boxes[i].childNodes[0] == undefined) {

            if(numAleatorio <= 1) {

                boxes[i].appendChild(cloneO);
                cont++
                break;
            }
            // Checagem de quantas estão preechidas
        } else {
            preenchidos++;
        }
    }

    if(cont == 0 && preenchidos < 9) {

        jogadaComputador();
    }
}
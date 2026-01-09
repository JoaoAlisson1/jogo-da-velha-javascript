let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let botoes = document.querySelectorAll("#botoes-container buttons");
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
            }

            else {

                jogador2++
            }

        }
    })
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
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

            verificaVencedor();

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
        bloco3Child = bloco2.childNodes[0].className;

        if(bloco1Child == 'x' && bloco2Child == 'x' && bloco3Child == "x") {
            console.log("X venceu!");

        } else if(bloco1Child == 'o' && bloco2Child == 'o' && bloco3Child == "o") {
            console.log("Bola venceu!");

        }

    }

    if(bloco4.childNodes.length > 0 && bloco5.childNodes.length > 0 && bloco6.childNodes.length > 0) {

        bloco4Child = bloco4.childNodes[0].className;
        bloco5Child = bloco5.childNodes[0].className;
        bloco6Child = bloco6.childNodes[0].className;

        if(bloco4Child == 'x' && bloco5Child == 'x' && bloco6Child == "x") {
            console.log("X venceu!");

        } else if(bloco4Child == 'o' && bloco5Child == 'o' && bloco6Child == "o") {
            console.log("Bola venceu!");

        }

    }

    if(bloco7.childNodes.length > 0 && bloco8.childNodes.length > 0 && bloco9.childNodes.length > 0) {

        bloco7Child = bloco7.childNodes[0].className;
        bloco8Child = bloco8.childNodes[0].className;
        bloco9Child = bloco9.childNodes[0].className;

        if(bloco7Child == 'x' && bloco8Child == 'x' && bloco9Child == "x") {
            console.log("X venceu!");

        } else if(bloco7Child == 'o' && bloco8Child == 'o' && bloco9Child == "o") {
            console.log("Bola venceu!");

        }

    }

    //vitória vertical

    if(bloco1.childNodes.length > 0 && bloco4.childNodes.length > 0 && bloco7.childNodes.length > 0) {

        bloco1Child = bloco1.childNodes[0].className;
        bloco4Child = bloco4.childNodes[0].className;
        bloco7Child = bloco7.childNodes[0].className;

        if(bloco1Child == 'x' && bloco4Child == 'x' && bloco7Child == "x") {
            console.log("X venceu!");

        } else if(bloco1Child == 'o' && bloco4Child == 'o' && bloco7Child == "o") {
            console.log("Bola venceu!");

        }

    }

    if(bloco2.childNodes.length > 0 && bloco5.childNodes.length > 0 && bloco8.childNodes.length > 0) {

        bloco2Child = bloco2.childNodes[0].className;
        bloco5Child = bloco5.childNodes[0].className;
        bloco8Child = bloco8.childNodes[0].className;

        if(bloco2Child == 'x' && bloco5Child == 'x' && bloco8Child == "x") {
            console.log("X venceu!");

        } else if(bloco2Child == 'o' && bloco5Child == 'o' && bloco8Child == "o") {
            console.log("Bola venceu!");

        }

    }

    if(bloco3.childNodes.length > 0 && bloco6.childNodes.length > 0 && bloco9.childNodes.length > 0) {

        bloco3Child = bloco3.childNodes[0].className;
        bloco6Child = bloco6.childNodes[0].className;
        bloco9Child = bloco9.childNodes[0].className;

        if(bloco3Child == 'x' && bloco6Child == 'x' && bloco9Child == "x") {
            console.log("X venceu!");

        } else if(bloco3Child == 'o' && bloco6Child == 'o' && bloco9Child == "o") {
            console.log("Bola venceu!");

        }

    }

    //vitória diagonal

    if(bloco1.childNodes.length > 0 && bloco5.childNodes.length > 0 && bloco9.childNodes.length > 0) {

        bloco1Child = bloco1.childNodes[0].className;
        bloco5Child = bloco5.childNodes[0].className;
        bloco9Child = bloco9.childNodes[0].className;

        if(bloco1Child == 'x' && bloco5Child == 'x' && bloco9Child == "x") {
            console.log("X venceu!");

        } else if(bloco1Child == 'o' && bloco5Child == 'o' && bloco9Child == "o") {
            console.log("Bola venceu!");

        }

    }

    if(bloco3.childNodes.length > 0 && bloco5.childNodes.length > 0 && bloco7.childNodes.length > 0) {

        bloco3Child = bloco3.childNodes[0].className;
        bloco5Child = bloco5.childNodes[0].className;
        bloco7Child = bloco7.childNodes[0].className;

        if(bloco3Child == 'x' && bloco5Child == 'x' && bloco7Child == "x") {
            console.log("X venceu!");

        } else if(bloco3Child == 'o' && bloco5Child == 'o' && bloco7Child == "o") {
            console.log("Bola venceu!");

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

        console.log("deu velha!");
    }
}
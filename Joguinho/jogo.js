document.addEventListener("DOMContentLoaded", function(){

    const jogoConteudo = document.getElementById("jogo-conteudo");
    const jogador = document.getElementById("jogador");

    let jogadorX = 0;
    let jogadorY = 320;
    const step = 10;

    function moveJogador(direcao){
        switch(direcao){
            case "ArrowLeft":
                jogadorX -= step;
                break;
            case "ArrowRight":
                jogadorX += step;
                break;
            case "ArrowUp":
                jogadorY -= step;
                break;
            case "ArrowDown":
                jogadorY += step;
                break;
        }

        jogador.style.top = jogadorY + "px";
        jogador.style.left = jogadorX + "px";
    }

    document.addEventListener("keydown", function(event){
        moveJogador(event.key);
    });
});
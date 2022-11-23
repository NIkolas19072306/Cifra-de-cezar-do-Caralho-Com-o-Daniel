var tela = document.querySelector('canvas'); // Váriavel que seleciona a tela.
var pincel = tela.getContext('2d'); // Váriavel usada para pintar na tela.

// Váriavel que define a posição do objeto.
var x = 12.5;
var y = 37.5;

//chave de criptografia inicial:
var chave = 1;

// códigos do teclado
var esquerda = 37
var cima = 38
var direita = 39
var baixo = 40

// Quantidade de pixel que o objeto se movimenta.
var taxa = 25;

// função que cria o objeto.
function desenhaCirculo(x, y, raio) {

    pincel.fillStyle = 'black'
    pincel.beginPath()
    pincel.arc(x, y, raio, 0, 2 * Math.PI)
    pincel.fill()
}

function letra1() {
    pincel.font = '32px serif'
    pincel.fillStyle = "black"
    pincel.fillText("1", 5, 22.5, 15)

}

function letra2() {
    pincel.font = '32px serif'
    pincel.fillStyle = "black"
    pincel.fillText("2", 30, 22.5, 15)

}
function letra3() {
    pincel.font = '32px serif'
    pincel.fillStyle = "black"
    pincel.fillText("3", 55, 22.5, 15)

}
function letra4() {
    pincel.font = '32px serif'
    pincel.fillStyle = "black"
    pincel.fillText("4", 80, 22.5, 15)

}
function letra5() {
    pincel.font = '32px serif'
    pincel.fillStyle = "black"
    pincel.fillText("5", 105, 22.5, 15)

}
function letra6() {
    pincel.font = '32px serif'
    pincel.fillStyle = "black"
    pincel.fillText("6", 130, 22.5, 15)

}
function letra7() {
    pincel.font = '32px serif'
    pincel.fillStyle = "black"
    pincel.fillText("7", 155, 22.5, 15)

}
function letra8() {
    pincel.font = '32px serif'
    pincel.fillStyle = "black"
    pincel.fillText("8", 180, 22.5, 15)

}
function letra9() {
    pincel.font = '32px serif'
    pincel.fillStyle = "black"
    pincel.fillText("9", 205, 22.5, 15)

}
function letra10() {
    pincel.font = '32px serif'
    pincel.fillStyle = "black"
    pincel.fillText("10", 224, 22.5, 25)

}




// função que desenha o grid.
function limpaTela() {
    var descer = 0;
    while (descer <= 50) {
        for (var imp = 0; imp <= 625; imp = imp + 25) {
            pincel.fillStyle = "white"
            pincel.strokeStyle = "black"
            pincel.beginPath()
            pincel.rect(imp, descer, 25, 25)
            pincel.closePath()
            pincel.fill()
            pincel.stroke()
        }
        descer = descer + 25
    }
}

// função para atualizar a tela, desenhando o grid e o objeto.
function atualizaTela() {
    limpaTela();
    letra1()
    letra2()
    letra3()
    letra4()
    letra5()
    letra6()
    letra7()
    letra8()
    letra9()
    letra10()
    desenhaCirculo(x, y, 10)
}

setInterval(atualizaTela, 20); // função para chamar o "atualizaTela" em um intervalo de tempo dado como segundo parâmetro.

// função que determina pra onde o objeto irá se movimentar.
function leDoTeclado(evento) {

    if (evento.keyCode == cima && y - taxa > 50) {
        y = y - taxa;

    } else if (evento.keyCode == baixo && y + taxa < 50) {
        y = y + taxa;

    } else if (evento.keyCode == esquerda && x - taxa > 0) {
        x = x - taxa;

    } else if (evento.keyCode == direita && x + taxa < 650) {
        x = x + taxa;
    }

    chave = (x/25)+0.5;

    
    alert(chave)

}


document.onkeydown = leDoTeclado;






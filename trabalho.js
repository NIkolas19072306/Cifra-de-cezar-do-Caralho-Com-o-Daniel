var tela = document.querySelector('canvas'); // Váriavel que seleciona a tela.
var pincel = tela.getContext('2d'); // Váriavel usada para pintar na tela.
var botao1 = document.querySelector("#botao1")
var botao2 = document.querySelector("#botao2")
var saidah31 = document.querySelector("#h31")
var saidah32 = document.querySelector("#h32")
var texto1 = document.querySelector("#texto1")
var texto2 = document.querySelector("#texto2")

// Váriavel que define a posição do objeto.
var x = 12.5;
var y = 37.5;
var letra
var frasecrip
var frasedescrip

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
    pincel.fillText("10", 225, 22.5, 25)
}
function letra11() {
    pincel.font = '32px serif'
    pincel.fillStyle = "black"
    pincel.fillText("11", 250, 22.5, 25)
}
function letra12() {
    pincel.font = '32px serif'
    pincel.fillStyle = "black"
    pincel.fillText("12", 275, 22.5, 25)
}
function letra13() {
    pincel.font = '32px serif'
    pincel.fillStyle = "black"
    pincel.fillText("13", 300, 22.5, 25)
}
function letra14() {
    pincel.font = '32px serif'
    pincel.fillStyle = "black"
    pincel.fillText("14", 325, 22.5, 25)
}
function letra15() {
    pincel.font = '32px serif'
    pincel.fillStyle = "black"
    pincel.fillText("15", 350, 22.5, 25)
}
function letra16() {
    pincel.font = '32px serif'
    pincel.fillStyle = "black"
    pincel.fillText("16", 375, 22.5, 25)
}
function letra17() {
    pincel.font = '32px serif'
    pincel.fillStyle = "black"
    pincel.fillText("17", 400, 22.5, 25)
}
function letra18() {
    pincel.font = '32px serif'
    pincel.fillStyle = "black"
    pincel.fillText("18", 425, 22.5, 25)
}
function letra19() {
    pincel.font = '32px serif'
    pincel.fillStyle = "black"
    pincel.fillText("19", 450, 22.5, 25)
}
function letra20() {
    pincel.font = '32px serif'
    pincel.fillStyle = "black"
    pincel.fillText("20", 475, 22.5, 25)
}
function letra21() {
    pincel.font = '32px serif'
    pincel.fillStyle = "black"
    pincel.fillText("21", 500, 22.5, 25)
}
function letra22() {
    pincel.font = '32px serif'
    pincel.fillStyle = "black"
    pincel.fillText("22", 525, 22.5, 25)
}
function letra23() {
    pincel.font = '32px serif'
    pincel.fillStyle = "black"
    pincel.fillText("23", 550, 22.5, 25)
}
function letra24() {
    pincel.font = '32px serif'
    pincel.fillStyle = "black"
    pincel.fillText("24", 575, 22.5, 25)
}
function letra25() {
    pincel.font = '32px serif'
    pincel.fillStyle = "black"
    pincel.fillText("25", 600, 22.5, 25)
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
    letra11()
    letra12()
    letra13()
    letra14()
    letra15()
    letra16()
    letra17()
    letra18()
    letra19()
    letra20()
    letra21()
    letra22()
    letra23()
    letra24()
    letra25()
    desenhaCirculo(x, y, 10)

}

// função para chamar o "atualizaTela" em um intervalo de tempo dado como segundo parâmetro.
setInterval(atualizaTela, 20)

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

}



document.onkeydown = leDoTeclado;

botao1.addEventListener("click", (e) => {

    cod = (x/25) + 0.5
chave = cod
    if (chave = 1) {

        frasedescrip = texto1.value
        frasedescrip = frasedescrip.replace("A", "B")
        frasedescrip = frasedescrip.replace("B", "C")
        frasedescrip = frasedescrip.replace("C", "D")
        frasedescrip = frasedescrip.replace("D", "E")
        frasedescrip = frasedescrip.replace("E", "F")
        frasedescrip = frasedescrip.replace("F", "G")
        frasedescrip = frasedescrip.replace("G", "H")
        frasedescrip = frasedescrip.replace("H", "I")
        frasedescrip = frasedescrip.replace("I", "J")
        frasedescrip = frasedescrip.replace("J", "K")
        frasedescrip = frasedescrip.replace("K", "L")
        frasedescrip = frasedescrip.replace("L", "M")
        frasedescrip = frasedescrip.replace("M", "N")
        frasedescrip = frasedescrip.replace("N", "O")
        frasedescrip = frasedescrip.replace("O", "P")
        frasedescrip = frasedescrip.replace("P", "Q")
        frasedescrip = frasedescrip.replace("Q", "R")
        frasedescrip = frasedescrip.replace("R", "S")
        frasedescrip = frasedescrip.replace("S", "T")
        frasedescrip = frasedescrip.replace("T", "U")
        frasedescrip = frasedescrip.replace("U", "V")
        frasedescrip = frasedescrip.replace("V", "W")
        frasedescrip = frasedescrip.replace("W", "X")
        frasedescrip = frasedescrip.replace("X", "Y")
        frasedescrip = frasedescrip.replace("Y", "Z")
        frasedescrip = frasedescrip.replace("Z", "A")
    }
    else if (chave = 2) {

        frasedescrip = texto1.value
        frasedescrip = frasedescrip.replace("A", "C")
        frasedescrip = frasedescrip.replace("B", "D")
        frasedescrip = frasedescrip.replace("C", "E")
        frasedescrip = frasedescrip.replace("D", "F")
        frasedescrip = frasedescrip.replace("E", "G")
        frasedescrip = frasedescrip.replace("F", "H")
        frasedescrip = frasedescrip.replace("G", "I")
        frasedescrip = frasedescrip.replace("H", "J")
        frasedescrip = frasedescrip.replace("I", "K")
        frasedescrip = frasedescrip.replace("J", "L")
        frasedescrip = frasedescrip.replace("K", "M")
        frasedescrip = frasedescrip.replace("L", "N")
        frasedescrip = frasedescrip.replace("M", "O")
        frasedescrip = frasedescrip.replace("N", "P")
        frasedescrip = frasedescrip.replace("O", "Q")
        frasedescrip = frasedescrip.replace("P", "R")
        frasedescrip = frasedescrip.replace("Q", "S")
        frasedescrip = frasedescrip.replace("R", "T")
        frasedescrip = frasedescrip.replace("S", "U")
        frasedescrip = frasedescrip.replace("T", "V")
        frasedescrip = frasedescrip.replace("U", "W")
        frasedescrip = frasedescrip.replace("V", "X")
        frasedescrip = frasedescrip.replace("W", "Y")
        frasedescrip = frasedescrip.replace("X", "Z")
        frasedescrip = frasedescrip.replace("Y", "A")
        frasedescrip = frasedescrip.replace("Z", "B")
    }
    else if (chave = 3) {

        frasedescrip = texto1.value
        frasedescrip = frasedescrip.replace("A", "D")
        frasedescrip = frasedescrip.replace("B", "E")
        frasedescrip = frasedescrip.replace("C", "F")
        frasedescrip = frasedescrip.replace("D", "G")
        frasedescrip = frasedescrip.replace("E", "H")
        frasedescrip = frasedescrip.replace("F", "I")
        frasedescrip = frasedescrip.replace("G", "J")
        frasedescrip = frasedescrip.replace("H", "K")
        frasedescrip = frasedescrip.replace("I", "L")
        frasedescrip = frasedescrip.replace("J", "M")
        frasedescrip = frasedescrip.replace("K", "N")
        frasedescrip = frasedescrip.replace("L", "O")
        frasedescrip = frasedescrip.replace("M", "P")
        frasedescrip = frasedescrip.replace("N", "Q")
        frasedescrip = frasedescrip.replace("O", "R")
        frasedescrip = frasedescrip.replace("P", "S")
        frasedescrip = frasedescrip.replace("Q", "T")
        frasedescrip = frasedescrip.replace("R", "U")
        frasedescrip = frasedescrip.replace("S", "V")
        frasedescrip = frasedescrip.replace("T", "W")
        frasedescrip = frasedescrip.replace("U", "X")
        frasedescrip = frasedescrip.replace("V", "Y")
        frasedescrip = frasedescrip.replace("W", "Z")
        frasedescrip = frasedescrip.replace("X", "A")
        frasedescrip = frasedescrip.replace("Y", "B")
        frasedescrip = frasedescrip.replace("Z", "C")
    }
    else if (chave = 4) {

        frasedescrip = texto1.value
        frasedescrip = frasedescrip.replace("A", "E")
        frasedescrip = frasedescrip.replace("B", "F")
        frasedescrip = frasedescrip.replace("C", "G")
        frasedescrip = frasedescrip.replace("D", "H")
        frasedescrip = frasedescrip.replace("E", "I")
        frasedescrip = frasedescrip.replace("F", "J")
        frasedescrip = frasedescrip.replace("G", "K")
        frasedescrip = frasedescrip.replace("H", "L")
        frasedescrip = frasedescrip.replace("I", "M")
        frasedescrip = frasedescrip.replace("J", "N")
        frasedescrip = frasedescrip.replace("K", "O")
        frasedescrip = frasedescrip.replace("L", "P")
        frasedescrip = frasedescrip.replace("M", "Q")
        frasedescrip = frasedescrip.replace("N", "R")
        frasedescrip = frasedescrip.replace("O", "S")
        frasedescrip = frasedescrip.replace("P", "T")
        frasedescrip = frasedescrip.replace("Q", "U")
        frasedescrip = frasedescrip.replace("R", "V")
        frasedescrip = frasedescrip.replace("S", "W")
        frasedescrip = frasedescrip.replace("T", "X")
        frasedescrip = frasedescrip.replace("U", "Y")
        frasedescrip = frasedescrip.replace("V", "Z")
        frasedescrip = frasedescrip.replace("W", "A")
        frasedescrip = frasedescrip.replace("X", "B")
        frasedescrip = frasedescrip.replace("Y", "C")
        frasedescrip = frasedescrip.replace("Z", "D")
    }
    else if (chave = 5) {

        frasedescrip = texto1.value
        frasedescrip = frasedescrip.replace("A", "F")
        frasedescrip = frasedescrip.replace("B", "G")
        frasedescrip = frasedescrip.replace("C", "H")
        frasedescrip = frasedescrip.replace("D", "I")
        frasedescrip = frasedescrip.replace("E", "J")
        frasedescrip = frasedescrip.replace("F", "K")
        frasedescrip = frasedescrip.replace("G", "L")
        frasedescrip = frasedescrip.replace("H", "M")
        frasedescrip = frasedescrip.replace("I", "N")
        frasedescrip = frasedescrip.replace("J", "O")
        frasedescrip = frasedescrip.replace("K", "P")
        frasedescrip = frasedescrip.replace("L", "Q")
        frasedescrip = frasedescrip.replace("M", "R")
        frasedescrip = frasedescrip.replace("N", "S")
        frasedescrip = frasedescrip.replace("O", "T")
        frasedescrip = frasedescrip.replace("P", "U")
        frasedescrip = frasedescrip.replace("Q", "V")
        frasedescrip = frasedescrip.replace("R", "W")
        frasedescrip = frasedescrip.replace("S", "X")
        frasedescrip = frasedescrip.replace("T", "Y")
        frasedescrip = frasedescrip.replace("U", "Z")
        frasedescrip = frasedescrip.replace("V", "A")
        frasedescrip = frasedescrip.replace("W", "B")
        frasedescrip = frasedescrip.replace("X", "C")
        frasedescrip = frasedescrip.replace("Y", "D")
        frasedescrip = frasedescrip.replace("Z", "E")
    }
    else if (chave = 6) {

        frasedescrip = texto1.value
        frasedescrip = frasedescrip.replace("A", "G")
        frasedescrip = frasedescrip.replace("B", "H")
        frasedescrip = frasedescrip.replace("C", "I")
        frasedescrip = frasedescrip.replace("D", "J")
        frasedescrip = frasedescrip.replace("E", "K")
        frasedescrip = frasedescrip.replace("F", "L")
        frasedescrip = frasedescrip.replace("G", "M")
        frasedescrip = frasedescrip.replace("H", "N")
        frasedescrip = frasedescrip.replace("I", "O")
        frasedescrip = frasedescrip.replace("J", "P")
        frasedescrip = frasedescrip.replace("K", "Q")
        frasedescrip = frasedescrip.replace("L", "R")
        frasedescrip = frasedescrip.replace("M", "S")
        frasedescrip = frasedescrip.replace("N", "T")
        frasedescrip = frasedescrip.replace("O", "U")
        frasedescrip = frasedescrip.replace("P", "V")
        frasedescrip = frasedescrip.replace("Q", "W")
        frasedescrip = frasedescrip.replace("R", "X")
        frasedescrip = frasedescrip.replace("S", "Y")
        frasedescrip = frasedescrip.replace("T", "Z")
        frasedescrip = frasedescrip.replace("U", "A")
        frasedescrip = frasedescrip.replace("V", "B")
        frasedescrip = frasedescrip.replace("W", "C")
        frasedescrip = frasedescrip.replace("X", "D")
        frasedescrip = frasedescrip.replace("Y", "E")
        frasedescrip = frasedescrip.replace("Z", "F")
    }
    else if (chave = 7) {

        frasedescrip = texto1.value
        frasedescrip = frasedescrip.replace("A", "H")
        frasedescrip = frasedescrip.replace("B", "I")
        frasedescrip = frasedescrip.replace("C", "J")
        frasedescrip = frasedescrip.replace("D", "K")
        frasedescrip = frasedescrip.replace("E", "L")
        frasedescrip = frasedescrip.replace("F", "M")
        frasedescrip = frasedescrip.replace("G", "N")
        frasedescrip = frasedescrip.replace("H", "O")
        frasedescrip = frasedescrip.replace("I", "P")
        frasedescrip = frasedescrip.replace("J", "Q")
        frasedescrip = frasedescrip.replace("K", "R")
        frasedescrip = frasedescrip.replace("L", "S")
        frasedescrip = frasedescrip.replace("M", "T")
        frasedescrip = frasedescrip.replace("N", "U")
        frasedescrip = frasedescrip.replace("O", "V")
        frasedescrip = frasedescrip.replace("P", "W")
        frasedescrip = frasedescrip.replace("Q", "X")
        frasedescrip = frasedescrip.replace("R", "Y")
        frasedescrip = frasedescrip.replace("S", "Z")
        frasedescrip = frasedescrip.replace("T", "A")
        frasedescrip = frasedescrip.replace("U", "B")
        frasedescrip = frasedescrip.replace("V", "C")
        frasedescrip = frasedescrip.replace("W", "D")
        frasedescrip = frasedescrip.replace("X", "E")
        frasedescrip = frasedescrip.replace("Y", "F")
        frasedescrip = frasedescrip.replace("Z", "G")
    }
    else if (chave = 8) {

        frasedescrip = texto1.value
        frasedescrip = frasedescrip.replace("A", "I")
        frasedescrip = frasedescrip.replace("B", "J")
        frasedescrip = frasedescrip.replace("C", "K")
        frasedescrip = frasedescrip.replace("D", "L")
        frasedescrip = frasedescrip.replace("E", "M")
        frasedescrip = frasedescrip.replace("F", "N")
        frasedescrip = frasedescrip.replace("G", "O")
        frasedescrip = frasedescrip.replace("H", "P")
        frasedescrip = frasedescrip.replace("I", "Q")
        frasedescrip = frasedescrip.replace("J", "R")
        frasedescrip = frasedescrip.replace("K", "S")
        frasedescrip = frasedescrip.replace("L", "T")
        frasedescrip = frasedescrip.replace("M", "U")
        frasedescrip = frasedescrip.replace("N", "V")
        frasedescrip = frasedescrip.replace("O", "W")
        frasedescrip = frasedescrip.replace("P", "X")
        frasedescrip = frasedescrip.replace("Q", "Y")
        frasedescrip = frasedescrip.replace("R", "Z")
        frasedescrip = frasedescrip.replace("S", "A")
        frasedescrip = frasedescrip.replace("T", "B")
        frasedescrip = frasedescrip.replace("U", "C")
        frasedescrip = frasedescrip.replace("V", "D")
        frasedescrip = frasedescrip.replace("W", "E")
        frasedescrip = frasedescrip.replace("X", "F")
        frasedescrip = frasedescrip.replace("Y", "G")
        frasedescrip = frasedescrip.replace("Z", "H")
    }
    else if (chave = 9) {

        frasedescrip = texto1.value
        frasedescrip = frasedescrip.replace("A", "J")
        frasedescrip = frasedescrip.replace("B", "K")
        frasedescrip = frasedescrip.replace("C", "L")
        frasedescrip = frasedescrip.replace("D", "M")
        frasedescrip = frasedescrip.replace("E", "N")
        frasedescrip = frasedescrip.replace("F", "O")
        frasedescrip = frasedescrip.replace("G", "P")
        frasedescrip = frasedescrip.replace("H", "Q")
        frasedescrip = frasedescrip.replace("I", "R")
        frasedescrip = frasedescrip.replace("J", "S")
        frasedescrip = frasedescrip.replace("K", "T")
        frasedescrip = frasedescrip.replace("L", "U")
        frasedescrip = frasedescrip.replace("M", "V")
        frasedescrip = frasedescrip.replace("N", "W")
        frasedescrip = frasedescrip.replace("O", "X")
        frasedescrip = frasedescrip.replace("P", "Y")
        frasedescrip = frasedescrip.replace("Q", "Z")
        frasedescrip = frasedescrip.replace("R", "A")
        frasedescrip = frasedescrip.replace("S", "B")
        frasedescrip = frasedescrip.replace("T", "C")
        frasedescrip = frasedescrip.replace("U", "D")
        frasedescrip = frasedescrip.replace("V", "E")
        frasedescrip = frasedescrip.replace("W", "F")
        frasedescrip = frasedescrip.replace("X", "G")
        frasedescrip = frasedescrip.replace("Y", "H")
        frasedescrip = frasedescrip.replace("Z", "I")
    }
    else if (chave = 10) {

        frasedescrip = texto1.value
        frasedescrip = frasedescrip.replace("A", "K")
        frasedescrip = frasedescrip.replace("B", "L")
        frasedescrip = frasedescrip.replace("C", "M")
        frasedescrip = frasedescrip.replace("D", "N")
        frasedescrip = frasedescrip.replace("E", "O")
        frasedescrip = frasedescrip.replace("F", "P")
        frasedescrip = frasedescrip.replace("G", "Q")
        frasedescrip = frasedescrip.replace("H", "R")
        frasedescrip = frasedescrip.replace("I", "S")
        frasedescrip = frasedescrip.replace("J", "T")
        frasedescrip = frasedescrip.replace("K", "U")
        frasedescrip = frasedescrip.replace("L", "V")
        frasedescrip = frasedescrip.replace("M", "W")
        frasedescrip = frasedescrip.replace("N", "X")
        frasedescrip = frasedescrip.replace("O", "Y")
        frasedescrip = frasedescrip.replace("P", "Z")
        frasedescrip = frasedescrip.replace("Q", "A")
        frasedescrip = frasedescrip.replace("R", "B")
        frasedescrip = frasedescrip.replace("S", "C")
        frasedescrip = frasedescrip.replace("T", "D")
        frasedescrip = frasedescrip.replace("U", "E")
        frasedescrip = frasedescrip.replace("V", "F")
        frasedescrip = frasedescrip.replace("W", "G")
        frasedescrip = frasedescrip.replace("X", "H")
        frasedescrip = frasedescrip.replace("Y", "I")
        frasedescrip = frasedescrip.replace("Z", "J")
    }
    else if (chave = 11) {

        frasedescrip = texto1.value
        frasedescrip = frasedescrip.replace("A", "L")
        frasedescrip = frasedescrip.replace("B", "M")
        frasedescrip = frasedescrip.replace("C", "N")
        frasedescrip = frasedescrip.replace("D", "O")
        frasedescrip = frasedescrip.replace("E", "P")
        frasedescrip = frasedescrip.replace("F", "Q")
        frasedescrip = frasedescrip.replace("G", "R")
        frasedescrip = frasedescrip.replace("H", "S")
        frasedescrip = frasedescrip.replace("I", "T")
        frasedescrip = frasedescrip.replace("J", "U")
        frasedescrip = frasedescrip.replace("K", "V")
        frasedescrip = frasedescrip.replace("L", "W")
        frasedescrip = frasedescrip.replace("M", "X")
        frasedescrip = frasedescrip.replace("N", "Y")
        frasedescrip = frasedescrip.replace("O", "Z")
        frasedescrip = frasedescrip.replace("P", "A")
        frasedescrip = frasedescrip.replace("Q", "B")
        frasedescrip = frasedescrip.replace("R", "C")
        frasedescrip = frasedescrip.replace("S", "D")
        frasedescrip = frasedescrip.replace("T", "E")
        frasedescrip = frasedescrip.replace("U", "F")
        frasedescrip = frasedescrip.replace("V", "G")
        frasedescrip = frasedescrip.replace("W", "H")
        frasedescrip = frasedescrip.replace("X", "I")
        frasedescrip = frasedescrip.replace("Y", "J")
        frasedescrip = frasedescrip.replace("Z", "K")
    }
    else if (chave = 12) {

        frasedescrip = texto1.value
        frasedescrip = frasedescrip.replace("A", "M")
        frasedescrip = frasedescrip.replace("B", "N")
        frasedescrip = frasedescrip.replace("C", "O")
        frasedescrip = frasedescrip.replace("D", "P")
        frasedescrip = frasedescrip.replace("E", "Q")
        frasedescrip = frasedescrip.replace("F", "R")
        frasedescrip = frasedescrip.replace("G", "S")
        frasedescrip = frasedescrip.replace("H", "T")
        frasedescrip = frasedescrip.replace("I", "U")
        frasedescrip = frasedescrip.replace("J", "V")
        frasedescrip = frasedescrip.replace("K", "W")
        frasedescrip = frasedescrip.replace("L", "X")
        frasedescrip = frasedescrip.replace("M", "Y")
        frasedescrip = frasedescrip.replace("N", "Z")
        frasedescrip = frasedescrip.replace("O", "A")
        frasedescrip = frasedescrip.replace("P", "B")
        frasedescrip = frasedescrip.replace("Q", "C")
        frasedescrip = frasedescrip.replace("R", "D")
        frasedescrip = frasedescrip.replace("S", "E")
        frasedescrip = frasedescrip.replace("T", "F")
        frasedescrip = frasedescrip.replace("U", "G")
        frasedescrip = frasedescrip.replace("V", "H")
        frasedescrip = frasedescrip.replace("W", "I")
        frasedescrip = frasedescrip.replace("X", "J")
        frasedescrip = frasedescrip.replace("Y", "K")
        frasedescrip = frasedescrip.replace("Z", "L")
    }
    else if (chave = 13) {

        frasedescrip = texto1.value
        frasedescrip = frasedescrip.replace("A", "N")
        frasedescrip = frasedescrip.replace("B", "O")
        frasedescrip = frasedescrip.replace("C", "P")
        frasedescrip = frasedescrip.replace("D", "Q")
        frasedescrip = frasedescrip.replace("E", "R")
        frasedescrip = frasedescrip.replace("F", "S")
        frasedescrip = frasedescrip.replace("G", "T")
        frasedescrip = frasedescrip.replace("H", "U")
        frasedescrip = frasedescrip.replace("I", "V")
        frasedescrip = frasedescrip.replace("J", "W")
        frasedescrip = frasedescrip.replace("K", "X")
        frasedescrip = frasedescrip.replace("L", "Y")
        frasedescrip = frasedescrip.replace("M", "Z")
        frasedescrip = frasedescrip.replace("N", "A")
        frasedescrip = frasedescrip.replace("O", "B")
        frasedescrip = frasedescrip.replace("P", "C")
        frasedescrip = frasedescrip.replace("Q", "D")
        frasedescrip = frasedescrip.replace("R", "E")
        frasedescrip = frasedescrip.replace("S", "F")
        frasedescrip = frasedescrip.replace("T", "G")
        frasedescrip = frasedescrip.replace("U", "H")
        frasedescrip = frasedescrip.replace("V", "I")
        frasedescrip = frasedescrip.replace("W", "J")
        frasedescrip = frasedescrip.replace("X", "K")
        frasedescrip = frasedescrip.replace("Y", "L")
        frasedescrip = frasedescrip.replace("Z", "M")
    }
    else if (chave = 14) {

        frasedescrip = texto1.value
        frasedescrip = frasedescrip.replace("A", "O")
        frasedescrip = frasedescrip.replace("B", "P")
        frasedescrip = frasedescrip.replace("C", "Q")
        frasedescrip = frasedescrip.replace("D", "R")
        frasedescrip = frasedescrip.replace("E", "S")
        frasedescrip = frasedescrip.replace("F", "T")
        frasedescrip = frasedescrip.replace("G", "U")
        frasedescrip = frasedescrip.replace("H", "V")
        frasedescrip = frasedescrip.replace("I", "W")
        frasedescrip = frasedescrip.replace("J", "X")
        frasedescrip = frasedescrip.replace("K", "Y")
        frasedescrip = frasedescrip.replace("L", "Z")
        frasedescrip = frasedescrip.replace("M", "A")
        frasedescrip = frasedescrip.replace("N", "B")
        frasedescrip = frasedescrip.replace("O", "C")
        frasedescrip = frasedescrip.replace("P", "D")
        frasedescrip = frasedescrip.replace("Q", "E")
        frasedescrip = frasedescrip.replace("R", "F")
        frasedescrip = frasedescrip.replace("S", "G")
        frasedescrip = frasedescrip.replace("T", "H")
        frasedescrip = frasedescrip.replace("U", "I")
        frasedescrip = frasedescrip.replace("V", "J")
        frasedescrip = frasedescrip.replace("W", "K")
        frasedescrip = frasedescrip.replace("X", "L")
        frasedescrip = frasedescrip.replace("Y", "M")
        frasedescrip = frasedescrip.replace("Z", "N")
    }
    else if (chave = 15) {

        frasedescrip = texto1.value
        frasedescrip = frasedescrip.replace("A", "P")
        frasedescrip = frasedescrip.replace("B", "Q")
        frasedescrip = frasedescrip.replace("C", "R")
        frasedescrip = frasedescrip.replace("D", "S")
        frasedescrip = frasedescrip.replace("E", "T")
        frasedescrip = frasedescrip.replace("F", "U")
        frasedescrip = frasedescrip.replace("G", "V")
        frasedescrip = frasedescrip.replace("H", "W")
        frasedescrip = frasedescrip.replace("I", "X")
        frasedescrip = frasedescrip.replace("J", "Y")
        frasedescrip = frasedescrip.replace("K", "Z")
        frasedescrip = frasedescrip.replace("L", "A")
        frasedescrip = frasedescrip.replace("M", "B")
        frasedescrip = frasedescrip.replace("N", "C")
        frasedescrip = frasedescrip.replace("O", "D")
        frasedescrip = frasedescrip.replace("P", "E")
        frasedescrip = frasedescrip.replace("Q", "F")
        frasedescrip = frasedescrip.replace("R", "G")
        frasedescrip = frasedescrip.replace("S", "H")
        frasedescrip = frasedescrip.replace("T", "I")
        frasedescrip = frasedescrip.replace("U", "J")
        frasedescrip = frasedescrip.replace("V", "K")
        frasedescrip = frasedescrip.replace("W", "L")
        frasedescrip = frasedescrip.replace("X", "M")
        frasedescrip = frasedescrip.replace("Y", "N")
        frasedescrip = frasedescrip.replace("Z", "O")
    }
    else if (chave = 16) {

        frasedescrip = texto1.value
        frasedescrip = frasedescrip.replace("A", "Q")
        frasedescrip = frasedescrip.replace("B", "R")
        frasedescrip = frasedescrip.replace("C", "S")
        frasedescrip = frasedescrip.replace("D", "T")
        frasedescrip = frasedescrip.replace("E", "U")
        frasedescrip = frasedescrip.replace("F", "V")
        frasedescrip = frasedescrip.replace("G", "W")
        frasedescrip = frasedescrip.replace("H", "X")
        frasedescrip = frasedescrip.replace("I", "Y")
        frasedescrip = frasedescrip.replace("J", "Z")
        frasedescrip = frasedescrip.replace("K", "A")
        frasedescrip = frasedescrip.replace("L", "B")
        frasedescrip = frasedescrip.replace("M", "C")
        frasedescrip = frasedescrip.replace("N", "D")
        frasedescrip = frasedescrip.replace("O", "E")
        frasedescrip = frasedescrip.replace("P", "F")
        frasedescrip = frasedescrip.replace("Q", "G")
        frasedescrip = frasedescrip.replace("R", "H")
        frasedescrip = frasedescrip.replace("S", "I")
        frasedescrip = frasedescrip.replace("T", "J")
        frasedescrip = frasedescrip.replace("U", "K")
        frasedescrip = frasedescrip.replace("V", "L")
        frasedescrip = frasedescrip.replace("W", "M")
        frasedescrip = frasedescrip.replace("X", "N")
        frasedescrip = frasedescrip.replace("Y", "O")
        frasedescrip = frasedescrip.replace("Z", "P")
    }
    else if (chave = 17) {

        frasedescrip = texto1.value
        frasedescrip = frasedescrip.replace("A", "R")
        frasedescrip = frasedescrip.replace("B", "S")
        frasedescrip = frasedescrip.replace("C", "T")
        frasedescrip = frasedescrip.replace("D", "U")
        frasedescrip = frasedescrip.replace("E", "V")
        frasedescrip = frasedescrip.replace("F", "W")
        frasedescrip = frasedescrip.replace("G", "X")
        frasedescrip = frasedescrip.replace("H", "Y")
        frasedescrip = frasedescrip.replace("I", "Z")
        frasedescrip = frasedescrip.replace("J", "A")
        frasedescrip = frasedescrip.replace("K", "B")
        frasedescrip = frasedescrip.replace("L", "C")
        frasedescrip = frasedescrip.replace("M", "D")
        frasedescrip = frasedescrip.replace("N", "E")
        frasedescrip = frasedescrip.replace("O", "F")
        frasedescrip = frasedescrip.replace("P", "G")
        frasedescrip = frasedescrip.replace("Q", "H")
        frasedescrip = frasedescrip.replace("R", "I")
        frasedescrip = frasedescrip.replace("S", "J")
        frasedescrip = frasedescrip.replace("T", "K")
        frasedescrip = frasedescrip.replace("U", "L")
        frasedescrip = frasedescrip.replace("V", "M")
        frasedescrip = frasedescrip.replace("W", "N")
        frasedescrip = frasedescrip.replace("X", "O")
        frasedescrip = frasedescrip.replace("Y", "P")
        frasedescrip = frasedescrip.replace("Z", "Q")
    }
    else if (chave = 18) {

        frasedescrip = texto1.value
        frasedescrip = frasedescrip.replace("A", "S")
        frasedescrip = frasedescrip.replace("B", "T")
        frasedescrip = frasedescrip.replace("C", "U")
        frasedescrip = frasedescrip.replace("D", "V")
        frasedescrip = frasedescrip.replace("E", "W")
        frasedescrip = frasedescrip.replace("F", "X")
        frasedescrip = frasedescrip.replace("G", "Y")
        frasedescrip = frasedescrip.replace("H", "Z")
        frasedescrip = frasedescrip.replace("I", "A")
        frasedescrip = frasedescrip.replace("J", "B")
        frasedescrip = frasedescrip.replace("K", "C")
        frasedescrip = frasedescrip.replace("L", "D")
        frasedescrip = frasedescrip.replace("M", "E")
        frasedescrip = frasedescrip.replace("N", "F")
        frasedescrip = frasedescrip.replace("O", "G")
        frasedescrip = frasedescrip.replace("P", "H")
        frasedescrip = frasedescrip.replace("Q", "I")
        frasedescrip = frasedescrip.replace("R", "J")
        frasedescrip = frasedescrip.replace("S", "K")
        frasedescrip = frasedescrip.replace("T", "L")
        frasedescrip = frasedescrip.replace("U", "M")
        frasedescrip = frasedescrip.replace("V", "N")
        frasedescrip = frasedescrip.replace("W", "O")
        frasedescrip = frasedescrip.replace("X", "P")
        frasedescrip = frasedescrip.replace("Y", "Q")
        frasedescrip = frasedescrip.replace("Z", "R")
    }
    else if (chave = 19) {

        frasedescrip = texto1.value
        frasedescrip = frasedescrip.replace("A", "T")
        frasedescrip = frasedescrip.replace("B", "U")
        frasedescrip = frasedescrip.replace("C", "V")
        frasedescrip = frasedescrip.replace("D", "W")
        frasedescrip = frasedescrip.replace("E", "X")
        frasedescrip = frasedescrip.replace("F", "Y")
        frasedescrip = frasedescrip.replace("G", "Z")
        frasedescrip = frasedescrip.replace("H", "A")
        frasedescrip = frasedescrip.replace("I", "B")
        frasedescrip = frasedescrip.replace("J", "C")
        frasedescrip = frasedescrip.replace("K", "D")
        frasedescrip = frasedescrip.replace("L", "E")
        frasedescrip = frasedescrip.replace("M", "F")
        frasedescrip = frasedescrip.replace("N", "G")
        frasedescrip = frasedescrip.replace("O", "H")
        frasedescrip = frasedescrip.replace("P", "I")
        frasedescrip = frasedescrip.replace("Q", "J")
        frasedescrip = frasedescrip.replace("R", "K")
        frasedescrip = frasedescrip.replace("S", "L")
        frasedescrip = frasedescrip.replace("T", "M")
        frasedescrip = frasedescrip.replace("U", "N")
        frasedescrip = frasedescrip.replace("V", "O")
        frasedescrip = frasedescrip.replace("W", "P")
        frasedescrip = frasedescrip.replace("X", "Q")
        frasedescrip = frasedescrip.replace("Y", "R")
        frasedescrip = frasedescrip.replace("Z", "S")
    }
    else if (chave = 20) {

        frasedescrip = texto1.value
        frasedescrip = frasedescrip.replace("A", "U")
        frasedescrip = frasedescrip.replace("B", "V")
        frasedescrip = frasedescrip.replace("C", "W")
        frasedescrip = frasedescrip.replace("D", "X")
        frasedescrip = frasedescrip.replace("E", "Y")
        frasedescrip = frasedescrip.replace("F", "Z")
        frasedescrip = frasedescrip.replace("G", "A")
        frasedescrip = frasedescrip.replace("H", "B")
        frasedescrip = frasedescrip.replace("I", "C")
        frasedescrip = frasedescrip.replace("J", "D")
        frasedescrip = frasedescrip.replace("K", "E")
        frasedescrip = frasedescrip.replace("L", "F")
        frasedescrip = frasedescrip.replace("M", "G")
        frasedescrip = frasedescrip.replace("N", "H")
        frasedescrip = frasedescrip.replace("O", "I")
        frasedescrip = frasedescrip.replace("P", "J")
        frasedescrip = frasedescrip.replace("Q", "K")
        frasedescrip = frasedescrip.replace("R", "L")
        frasedescrip = frasedescrip.replace("S", "M")
        frasedescrip = frasedescrip.replace("T", "N")
        frasedescrip = frasedescrip.replace("U", "O")
        frasedescrip = frasedescrip.replace("V", "P")
        frasedescrip = frasedescrip.replace("W", "Q")
        frasedescrip = frasedescrip.replace("X", "R")
        frasedescrip = frasedescrip.replace("Y", "S")
        frasedescrip = frasedescrip.replace("Z", "T")
    }
    else if (chave = 21) {

        frasedescrip = texto1.value
        frasedescrip = frasedescrip.replace("A", "V")
        frasedescrip = frasedescrip.replace("B", "W")
        frasedescrip = frasedescrip.replace("C", "X")
        frasedescrip = frasedescrip.replace("D", "Y")
        frasedescrip = frasedescrip.replace("E", "Z")
        frasedescrip = frasedescrip.replace("F", "A")
        frasedescrip = frasedescrip.replace("G", "B")
        frasedescrip = frasedescrip.replace("H", "C")
        frasedescrip = frasedescrip.replace("I", "D")
        frasedescrip = frasedescrip.replace("J", "E")
        frasedescrip = frasedescrip.replace("K", "F")
        frasedescrip = frasedescrip.replace("L", "G")
        frasedescrip = frasedescrip.replace("M", "H")
        frasedescrip = frasedescrip.replace("N", "I")
        frasedescrip = frasedescrip.replace("O", "J")
        frasedescrip = frasedescrip.replace("P", "K")
        frasedescrip = frasedescrip.replace("Q", "L")
        frasedescrip = frasedescrip.replace("R", "M")
        frasedescrip = frasedescrip.replace("S", "N")
        frasedescrip = frasedescrip.replace("T", "O")
        frasedescrip = frasedescrip.replace("U", "P")
        frasedescrip = frasedescrip.replace("V", "Q")
        frasedescrip = frasedescrip.replace("W", "R")
        frasedescrip = frasedescrip.replace("X", "S")
        frasedescrip = frasedescrip.replace("Y", "T")
        frasedescrip = frasedescrip.replace("Z", "U")
    }
    else if (chave = 22) {

        frasedescrip = texto1.value
        frasedescrip = frasedescrip.replace("A", "W")
        frasedescrip = frasedescrip.replace("B", "X")
        frasedescrip = frasedescrip.replace("C", "Y")
        frasedescrip = frasedescrip.replace("D", "Z")
        frasedescrip = frasedescrip.replace("E", "A")
        frasedescrip = frasedescrip.replace("F", "B")
        frasedescrip = frasedescrip.replace("G", "C")
        frasedescrip = frasedescrip.replace("H", "D")
        frasedescrip = frasedescrip.replace("I", "E")
        frasedescrip = frasedescrip.replace("J", "F")
        frasedescrip = frasedescrip.replace("K", "G")
        frasedescrip = frasedescrip.replace("L", "H")
        frasedescrip = frasedescrip.replace("M", "I")
        frasedescrip = frasedescrip.replace("N", "J")
        frasedescrip = frasedescrip.replace("O", "K")
        frasedescrip = frasedescrip.replace("P", "L")
        frasedescrip = frasedescrip.replace("Q", "M")
        frasedescrip = frasedescrip.replace("R", "N")
        frasedescrip = frasedescrip.replace("S", "O")
        frasedescrip = frasedescrip.replace("T", "P")
        frasedescrip = frasedescrip.replace("U", "Q")
        frasedescrip = frasedescrip.replace("V", "R")
        frasedescrip = frasedescrip.replace("W", "S")
        frasedescrip = frasedescrip.replace("X", "T")
        frasedescrip = frasedescrip.replace("Y", "U")
        frasedescrip = frasedescrip.replace("Z", "V")
    }
    else if (chave = 23) {

        frasedescrip = texto1.value
        frasedescrip = frasedescrip.replace("A", "X")
        frasedescrip = frasedescrip.replace("B", "Y")
        frasedescrip = frasedescrip.replace("C", "Z")
        frasedescrip = frasedescrip.replace("D", "A")
        frasedescrip = frasedescrip.replace("E", "B")
        frasedescrip = frasedescrip.replace("F", "C")
        frasedescrip = frasedescrip.replace("G", "D")
        frasedescrip = frasedescrip.replace("H", "E")
        frasedescrip = frasedescrip.replace("I", "F")
        frasedescrip = frasedescrip.replace("J", "G")
        frasedescrip = frasedescrip.replace("K", "H")
        frasedescrip = frasedescrip.replace("L", "I")
        frasedescrip = frasedescrip.replace("M", "J")
        frasedescrip = frasedescrip.replace("N", "K")
        frasedescrip = frasedescrip.replace("O", "L")
        frasedescrip = frasedescrip.replace("P", "M")
        frasedescrip = frasedescrip.replace("Q", "N")
        frasedescrip = frasedescrip.replace("R", "O")
        frasedescrip = frasedescrip.replace("S", "P")
        frasedescrip = frasedescrip.replace("T", "Q")
        frasedescrip = frasedescrip.replace("U", "R")
        frasedescrip = frasedescrip.replace("V", "S")
        frasedescrip = frasedescrip.replace("W", "T")
        frasedescrip = frasedescrip.replace("X", "U")
        frasedescrip = frasedescrip.replace("Y", "V")
        frasedescrip = frasedescrip.replace("Z", "W")
    }
    else if (chave = 24) {

        frasedescrip = texto1.value
        frasedescrip = frasedescrip.replace("A", "Y")
        frasedescrip = frasedescrip.replace("B", "Z")
        frasedescrip = frasedescrip.replace("C", "A")
        frasedescrip = frasedescrip.replace("D", "B")
        frasedescrip = frasedescrip.replace("E", "C")
        frasedescrip = frasedescrip.replace("F", "D")
        frasedescrip = frasedescrip.replace("G", "E")
        frasedescrip = frasedescrip.replace("H", "F")
        frasedescrip = frasedescrip.replace("I", "G")
        frasedescrip = frasedescrip.replace("J", "H")
        frasedescrip = frasedescrip.replace("K", "I")
        frasedescrip = frasedescrip.replace("L", "J")
        frasedescrip = frasedescrip.replace("M", "K")
        frasedescrip = frasedescrip.replace("N", "L")
        frasedescrip = frasedescrip.replace("O", "M")
        frasedescrip = frasedescrip.replace("P", "N")
        frasedescrip = frasedescrip.replace("Q", "O")
        frasedescrip = frasedescrip.replace("R", "P")
        frasedescrip = frasedescrip.replace("S", "Q")
        frasedescrip = frasedescrip.replace("T", "R")
        frasedescrip = frasedescrip.replace("U", "S")
        frasedescrip = frasedescrip.replace("V", "T")
        frasedescrip = frasedescrip.replace("W", "U")
        frasedescrip = frasedescrip.replace("X", "V")
        frasedescrip = frasedescrip.replace("Y", "W")
        frasedescrip = frasedescrip.replace("Z", "X")
    }
    else if (chave = 25) {

        frasedescrip = texto1.value
        frasedescrip = frasedescrip.replace("A", "Z")
        frasedescrip = frasedescrip.replace("B", "A")
        frasedescrip = frasedescrip.replace("C", "B")
        frasedescrip = frasedescrip.replace("D", "C")
        frasedescrip = frasedescrip.replace("E", "D")
        frasedescrip = frasedescrip.replace("F", "E")
        frasedescrip = frasedescrip.replace("G", "F")
        frasedescrip = frasedescrip.replace("H", "G")
        frasedescrip = frasedescrip.replace("I", "H")
        frasedescrip = frasedescrip.replace("J", "I")
        frasedescrip = frasedescrip.replace("K", "J")
        frasedescrip = frasedescrip.replace("L", "K")
        frasedescrip = frasedescrip.replace("M", "L")
        frasedescrip = frasedescrip.replace("N", "M")
        frasedescrip = frasedescrip.replace("O", "N")
        frasedescrip = frasedescrip.replace("P", "O")
        frasedescrip = frasedescrip.replace("Q", "P")
        frasedescrip = frasedescrip.replace("R", "Q")
        frasedescrip = frasedescrip.replace("S", "R")
        frasedescrip = frasedescrip.replace("T", "S")
        frasedescrip = frasedescrip.replace("U", "T")
        frasedescrip = frasedescrip.replace("V", "U")
        frasedescrip = frasedescrip.replace("W", "V")
        frasedescrip = frasedescrip.replace("X", "W")
        frasedescrip = frasedescrip.replace("Y", "X")
        frasedescrip = frasedescrip.replace("Z", "Y")
    }
    saidah31.innerText = frasedescrip
    e.preventDefault()
    alert(cod)

})

botao2.addEventListener("click", (e) => {
   
    
    cod = (x/25) + 0.5

    if (chave = 1) {

        frasedescrip = texto1.value
        frasedescrip = frasedescrip.replace("A", "B")
        frasedescrip = frasedescrip.replace("B", "C")
        frasedescrip = frasedescrip.replace("C", "D")
        frasedescrip = frasedescrip.replace("D", "E")
        frasedescrip = frasedescrip.replace("E", "F")
        frasedescrip = frasedescrip.replace("F", "G")
        frasedescrip = frasedescrip.replace("G", "H")
        frasedescrip = frasedescrip.replace("H", "I")
        frasedescrip = frasedescrip.replace("I", "J")
        frasedescrip = frasedescrip.replace("J", "K")
        frasedescrip = frasedescrip.replace("K", "L")
        frasedescrip = frasedescrip.replace("L", "M")
        frasedescrip = frasedescrip.replace("M", "N")
        frasedescrip = frasedescrip.replace("N", "O")
        frasedescrip = frasedescrip.replace("O", "P")
        frasedescrip = frasedescrip.replace("P", "Q")
        frasedescrip = frasedescrip.replace("Q", "R")
        frasedescrip = frasedescrip.replace("R", "S")
        frasedescrip = frasedescrip.replace("S", "T")
        frasedescrip = frasedescrip.replace("T", "U")
        frasedescrip = frasedescrip.replace("U", "V")
        frasedescrip = frasedescrip.replace("V", "W")
        frasedescrip = frasedescrip.replace("W", "X")
        frasedescrip = frasedescrip.replace("X", "Y")
        frasedescrip = frasedescrip.replace("Y", "Z")
        frasedescrip = frasedescrip.replace("Z", "A")
    }
    else if (chave = 2) {

        frasedescrip = texto1.value
        frasedescrip = frasedescrip.replace("A", "C")
        frasedescrip = frasedescrip.replace("B", "D")
        frasedescrip = frasedescrip.replace("C", "E")
        frasedescrip = frasedescrip.replace("D", "F")
        frasedescrip = frasedescrip.replace("E", "G")
        frasedescrip = frasedescrip.replace("F", "H")
        frasedescrip = frasedescrip.replace("G", "I")
        frasedescrip = frasedescrip.replace("H", "J")
        frasedescrip = frasedescrip.replace("I", "K")
        frasedescrip = frasedescrip.replace("J", "L")
        frasedescrip = frasedescrip.replace("K", "M")
        frasedescrip = frasedescrip.replace("L", "N")
        frasedescrip = frasedescrip.replace("M", "O")
        frasedescrip = frasedescrip.replace("N", "P")
        frasedescrip = frasedescrip.replace("O", "Q")
        frasedescrip = frasedescrip.replace("P", "R")
        frasedescrip = frasedescrip.replace("Q", "S")
        frasedescrip = frasedescrip.replace("R", "T")
        frasedescrip = frasedescrip.replace("S", "U")
        frasedescrip = frasedescrip.replace("T", "V")
        frasedescrip = frasedescrip.replace("U", "W")
        frasedescrip = frasedescrip.replace("V", "X")
        frasedescrip = frasedescrip.replace("W", "Y")
        frasedescrip = frasedescrip.replace("X", "Z")
        frasedescrip = frasedescrip.replace("Y", "A")
        frasedescrip = frasedescrip.replace("Z", "B")
    }
    else if (chave = 3) {

        frasedescrip = texto1.value
        frasedescrip = frasedescrip.replace("A", "D")
        frasedescrip = frasedescrip.replace("B", "E")
        frasedescrip = frasedescrip.replace("C", "F")
        frasedescrip = frasedescrip.replace("D", "G")
        frasedescrip = frasedescrip.replace("E", "H")
        frasedescrip = frasedescrip.replace("F", "I")
        frasedescrip = frasedescrip.replace("G", "J")
        frasedescrip = frasedescrip.replace("H", "K")
        frasedescrip = frasedescrip.replace("I", "L")
        frasedescrip = frasedescrip.replace("J", "M")
        frasedescrip = frasedescrip.replace("K", "N")
        frasedescrip = frasedescrip.replace("L", "O")
        frasedescrip = frasedescrip.replace("M", "P")
        frasedescrip = frasedescrip.replace("N", "Q")
        frasedescrip = frasedescrip.replace("O", "R")
        frasedescrip = frasedescrip.replace("P", "S")
        frasedescrip = frasedescrip.replace("Q", "T")
        frasedescrip = frasedescrip.replace("R", "U")
        frasedescrip = frasedescrip.replace("S", "V")
        frasedescrip = frasedescrip.replace("T", "W")
        frasedescrip = frasedescrip.replace("U", "X")
        frasedescrip = frasedescrip.replace("V", "Y")
        frasedescrip = frasedescrip.replace("W", "Z")
        frasedescrip = frasedescrip.replace("X", "A")
        frasedescrip = frasedescrip.replace("Y", "B")
        frasedescrip = frasedescrip.replace("Z", "C")
    }
    else if (chave = 4) {

        frasedescrip = texto1.value
        frasedescrip = frasedescrip.replace("A", "E")
        frasedescrip = frasedescrip.replace("B", "F")
        frasedescrip = frasedescrip.replace("C", "G")
        frasedescrip = frasedescrip.replace("D", "H")
        frasedescrip = frasedescrip.replace("E", "I")
        frasedescrip = frasedescrip.replace("F", "J")
        frasedescrip = frasedescrip.replace("G", "K")
        frasedescrip = frasedescrip.replace("H", "L")
        frasedescrip = frasedescrip.replace("I", "M")
        frasedescrip = frasedescrip.replace("J", "N")
        frasedescrip = frasedescrip.replace("K", "O")
        frasedescrip = frasedescrip.replace("L", "P")
        frasedescrip = frasedescrip.replace("M", "Q")
        frasedescrip = frasedescrip.replace("N", "R")
        frasedescrip = frasedescrip.replace("O", "S")
        frasedescrip = frasedescrip.replace("P", "T")
        frasedescrip = frasedescrip.replace("Q", "U")
        frasedescrip = frasedescrip.replace("R", "V")
        frasedescrip = frasedescrip.replace("S", "W")
        frasedescrip = frasedescrip.replace("T", "X")
        frasedescrip = frasedescrip.replace("U", "Y")
        frasedescrip = frasedescrip.replace("V", "Z")
        frasedescrip = frasedescrip.replace("W", "A")
        frasedescrip = frasedescrip.replace("X", "B")
        frasedescrip = frasedescrip.replace("Y", "C")
        frasedescrip = frasedescrip.replace("Z", "D")
    }
    else if (chave = 5) {

        frasedescrip = texto1.value
        frasedescrip = frasedescrip.replace("A", "F")
        frasedescrip = frasedescrip.replace("B", "G")
        frasedescrip = frasedescrip.replace("C", "H")
        frasedescrip = frasedescrip.replace("D", "I")
        frasedescrip = frasedescrip.replace("E", "J")
        frasedescrip = frasedescrip.replace("F", "K")
        frasedescrip = frasedescrip.replace("G", "L")
        frasedescrip = frasedescrip.replace("H", "M")
        frasedescrip = frasedescrip.replace("I", "N")
        frasedescrip = frasedescrip.replace("J", "O")
        frasedescrip = frasedescrip.replace("K", "P")
        frasedescrip = frasedescrip.replace("L", "Q")
        frasedescrip = frasedescrip.replace("M", "R")
        frasedescrip = frasedescrip.replace("N", "S")
        frasedescrip = frasedescrip.replace("O", "T")
        frasedescrip = frasedescrip.replace("P", "U")
        frasedescrip = frasedescrip.replace("Q", "V")
        frasedescrip = frasedescrip.replace("R", "W")
        frasedescrip = frasedescrip.replace("S", "X")
        frasedescrip = frasedescrip.replace("T", "Y")
        frasedescrip = frasedescrip.replace("U", "Z")
        frasedescrip = frasedescrip.replace("V", "A")
        frasedescrip = frasedescrip.replace("W", "B")
        frasedescrip = frasedescrip.replace("X", "C")
        frasedescrip = frasedescrip.replace("Y", "D")
        frasedescrip = frasedescrip.replace("Z", "E")
    }
    else if (chave = 6) {

        frasedescrip = texto1.value
        frasedescrip = frasedescrip.replace("A", "G")
        frasedescrip = frasedescrip.replace("B", "H")
        frasedescrip = frasedescrip.replace("C", "I")
        frasedescrip = frasedescrip.replace("D", "J")
        frasedescrip = frasedescrip.replace("E", "K")
        frasedescrip = frasedescrip.replace("F", "L")
        frasedescrip = frasedescrip.replace("G", "M")
        frasedescrip = frasedescrip.replace("H", "N")
        frasedescrip = frasedescrip.replace("I", "O")
        frasedescrip = frasedescrip.replace("J", "P")
        frasedescrip = frasedescrip.replace("K", "Q")
        frasedescrip = frasedescrip.replace("L", "R")
        frasedescrip = frasedescrip.replace("M", "S")
        frasedescrip = frasedescrip.replace("N", "T")
        frasedescrip = frasedescrip.replace("O", "U")
        frasedescrip = frasedescrip.replace("P", "V")
        frasedescrip = frasedescrip.replace("Q", "W")
        frasedescrip = frasedescrip.replace("R", "X")
        frasedescrip = frasedescrip.replace("S", "Y")
        frasedescrip = frasedescrip.replace("T", "Z")
        frasedescrip = frasedescrip.replace("U", "A")
        frasedescrip = frasedescrip.replace("V", "B")
        frasedescrip = frasedescrip.replace("W", "C")
        frasedescrip = frasedescrip.replace("X", "D")
        frasedescrip = frasedescrip.replace("Y", "E")
        frasedescrip = frasedescrip.replace("Z", "F")
    }
    else if (chave = 7) {

        frasedescrip = texto1.value
        frasedescrip = frasedescrip.replace("A", "H")
        frasedescrip = frasedescrip.replace("B", "I")
        frasedescrip = frasedescrip.replace("C", "J")
        frasedescrip = frasedescrip.replace("D", "K")
        frasedescrip = frasedescrip.replace("E", "L")
        frasedescrip = frasedescrip.replace("F", "M")
        frasedescrip = frasedescrip.replace("G", "N")
        frasedescrip = frasedescrip.replace("H", "O")
        frasedescrip = frasedescrip.replace("I", "P")
        frasedescrip = frasedescrip.replace("J", "Q")
        frasedescrip = frasedescrip.replace("K", "R")
        frasedescrip = frasedescrip.replace("L", "S")
        frasedescrip = frasedescrip.replace("M", "T")
        frasedescrip = frasedescrip.replace("N", "U")
        frasedescrip = frasedescrip.replace("O", "V")
        frasedescrip = frasedescrip.replace("P", "W")
        frasedescrip = frasedescrip.replace("Q", "X")
        frasedescrip = frasedescrip.replace("R", "Y")
        frasedescrip = frasedescrip.replace("S", "Z")
        frasedescrip = frasedescrip.replace("T", "A")
        frasedescrip = frasedescrip.replace("U", "B")
        frasedescrip = frasedescrip.replace("V", "C")
        frasedescrip = frasedescrip.replace("W", "D")
        frasedescrip = frasedescrip.replace("X", "E")
        frasedescrip = frasedescrip.replace("Y", "F")
        frasedescrip = frasedescrip.replace("Z", "G")
    }
    else if (chave = 8) {

        frasedescrip = texto1.value
        frasedescrip = frasedescrip.replace("A", "I")
        frasedescrip = frasedescrip.replace("B", "J")
        frasedescrip = frasedescrip.replace("C", "K")
        frasedescrip = frasedescrip.replace("D", "L")
        frasedescrip = frasedescrip.replace("E", "M")
        frasedescrip = frasedescrip.replace("F", "N")
        frasedescrip = frasedescrip.replace("G", "O")
        frasedescrip = frasedescrip.replace("H", "P")
        frasedescrip = frasedescrip.replace("I", "Q")
        frasedescrip = frasedescrip.replace("J", "R")
        frasedescrip = frasedescrip.replace("K", "S")
        frasedescrip = frasedescrip.replace("L", "T")
        frasedescrip = frasedescrip.replace("M", "U")
        frasedescrip = frasedescrip.replace("N", "V")
        frasedescrip = frasedescrip.replace("O", "W")
        frasedescrip = frasedescrip.replace("P", "X")
        frasedescrip = frasedescrip.replace("Q", "Y")
        frasedescrip = frasedescrip.replace("R", "Z")
        frasedescrip = frasedescrip.replace("S", "A")
        frasedescrip = frasedescrip.replace("T", "B")
        frasedescrip = frasedescrip.replace("U", "C")
        frasedescrip = frasedescrip.replace("V", "D")
        frasedescrip = frasedescrip.replace("W", "E")
        frasedescrip = frasedescrip.replace("X", "F")
        frasedescrip = frasedescrip.replace("Y", "G")
        frasedescrip = frasedescrip.replace("Z", "H")
    }
    else if (chave = 9) {

        frasedescrip = texto1.value
        frasedescrip = frasedescrip.replace("A", "J")
        frasedescrip = frasedescrip.replace("B", "K")
        frasedescrip = frasedescrip.replace("C", "L")
        frasedescrip = frasedescrip.replace("D", "M")
        frasedescrip = frasedescrip.replace("E", "N")
        frasedescrip = frasedescrip.replace("F", "O")
        frasedescrip = frasedescrip.replace("G", "P")
        frasedescrip = frasedescrip.replace("H", "Q")
        frasedescrip = frasedescrip.replace("I", "R")
        frasedescrip = frasedescrip.replace("J", "S")
        frasedescrip = frasedescrip.replace("K", "T")
        frasedescrip = frasedescrip.replace("L", "U")
        frasedescrip = frasedescrip.replace("M", "V")
        frasedescrip = frasedescrip.replace("N", "W")
        frasedescrip = frasedescrip.replace("O", "X")
        frasedescrip = frasedescrip.replace("P", "Y")
        frasedescrip = frasedescrip.replace("Q", "Z")
        frasedescrip = frasedescrip.replace("R", "A")
        frasedescrip = frasedescrip.replace("S", "B")
        frasedescrip = frasedescrip.replace("T", "C")
        frasedescrip = frasedescrip.replace("U", "D")
        frasedescrip = frasedescrip.replace("V", "E")
        frasedescrip = frasedescrip.replace("W", "F")
        frasedescrip = frasedescrip.replace("X", "G")
        frasedescrip = frasedescrip.replace("Y", "H")
        frasedescrip = frasedescrip.replace("Z", "I")
    }
    else if (chave = 10) {

        frasedescrip = texto1.value
        frasedescrip = frasedescrip.replace("A", "K")
        frasedescrip = frasedescrip.replace("B", "L")
        frasedescrip = frasedescrip.replace("C", "M")
        frasedescrip = frasedescrip.replace("D", "N")
        frasedescrip = frasedescrip.replace("E", "O")
        frasedescrip = frasedescrip.replace("F", "P")
        frasedescrip = frasedescrip.replace("G", "Q")
        frasedescrip = frasedescrip.replace("H", "R")
        frasedescrip = frasedescrip.replace("I", "S")
        frasedescrip = frasedescrip.replace("J", "T")
        frasedescrip = frasedescrip.replace("K", "U")
        frasedescrip = frasedescrip.replace("L", "V")
        frasedescrip = frasedescrip.replace("M", "W")
        frasedescrip = frasedescrip.replace("N", "X")
        frasedescrip = frasedescrip.replace("O", "Y")
        frasedescrip = frasedescrip.replace("P", "Z")
        frasedescrip = frasedescrip.replace("Q", "A")
        frasedescrip = frasedescrip.replace("R", "B")
        frasedescrip = frasedescrip.replace("S", "C")
        frasedescrip = frasedescrip.replace("T", "D")
        frasedescrip = frasedescrip.replace("U", "E")
        frasedescrip = frasedescrip.replace("V", "F")
        frasedescrip = frasedescrip.replace("W", "G")
        frasedescrip = frasedescrip.replace("X", "H")
        frasedescrip = frasedescrip.replace("Y", "I")
        frasedescrip = frasedescrip.replace("Z", "J")
    }
    else if (chave = 11) {

        frasedescrip = texto1.value
        frasedescrip = frasedescrip.replace("A", "L")
        frasedescrip = frasedescrip.replace("B", "M")
        frasedescrip = frasedescrip.replace("C", "N")
        frasedescrip = frasedescrip.replace("D", "O")
        frasedescrip = frasedescrip.replace("E", "P")
        frasedescrip = frasedescrip.replace("F", "Q")
        frasedescrip = frasedescrip.replace("G", "R")
        frasedescrip = frasedescrip.replace("H", "S")
        frasedescrip = frasedescrip.replace("I", "T")
        frasedescrip = frasedescrip.replace("J", "U")
        frasedescrip = frasedescrip.replace("K", "V")
        frasedescrip = frasedescrip.replace("L", "W")
        frasedescrip = frasedescrip.replace("M", "X")
        frasedescrip = frasedescrip.replace("N", "Y")
        frasedescrip = frasedescrip.replace("O", "Z")
        frasedescrip = frasedescrip.replace("P", "A")
        frasedescrip = frasedescrip.replace("Q", "B")
        frasedescrip = frasedescrip.replace("R", "C")
        frasedescrip = frasedescrip.replace("S", "D")
        frasedescrip = frasedescrip.replace("T", "E")
        frasedescrip = frasedescrip.replace("U", "F")
        frasedescrip = frasedescrip.replace("V", "G")
        frasedescrip = frasedescrip.replace("W", "H")
        frasedescrip = frasedescrip.replace("X", "I")
        frasedescrip = frasedescrip.replace("Y", "J")
        frasedescrip = frasedescrip.replace("Z", "K")
    }
    else if (chave = 12) {

        frasedescrip = texto1.value
        frasedescrip = frasedescrip.replace("A", "M")
        frasedescrip = frasedescrip.replace("B", "N")
        frasedescrip = frasedescrip.replace("C", "O")
        frasedescrip = frasedescrip.replace("D", "P")
        frasedescrip = frasedescrip.replace("E", "Q")
        frasedescrip = frasedescrip.replace("F", "R")
        frasedescrip = frasedescrip.replace("G", "S")
        frasedescrip = frasedescrip.replace("H", "T")
        frasedescrip = frasedescrip.replace("I", "U")
        frasedescrip = frasedescrip.replace("J", "V")
        frasedescrip = frasedescrip.replace("K", "W")
        frasedescrip = frasedescrip.replace("L", "X")
        frasedescrip = frasedescrip.replace("M", "Y")
        frasedescrip = frasedescrip.replace("N", "Z")
        frasedescrip = frasedescrip.replace("O", "A")
        frasedescrip = frasedescrip.replace("P", "B")
        frasedescrip = frasedescrip.replace("Q", "C")
        frasedescrip = frasedescrip.replace("R", "D")
        frasedescrip = frasedescrip.replace("S", "E")
        frasedescrip = frasedescrip.replace("T", "F")
        frasedescrip = frasedescrip.replace("U", "G")
        frasedescrip = frasedescrip.replace("V", "H")
        frasedescrip = frasedescrip.replace("W", "I")
        frasedescrip = frasedescrip.replace("X", "J")
        frasedescrip = frasedescrip.replace("Y", "K")
        frasedescrip = frasedescrip.replace("Z", "L")
    }
    else if (chave = 13) {

        frasedescrip = texto1.value
        frasedescrip = frasedescrip.replace("A", "N")
        frasedescrip = frasedescrip.replace("B", "O")
        frasedescrip = frasedescrip.replace("C", "P")
        frasedescrip = frasedescrip.replace("D", "Q")
        frasedescrip = frasedescrip.replace("E", "R")
        frasedescrip = frasedescrip.replace("F", "S")
        frasedescrip = frasedescrip.replace("G", "T")
        frasedescrip = frasedescrip.replace("H", "U")
        frasedescrip = frasedescrip.replace("I", "V")
        frasedescrip = frasedescrip.replace("J", "W")
        frasedescrip = frasedescrip.replace("K", "X")
        frasedescrip = frasedescrip.replace("L", "Y")
        frasedescrip = frasedescrip.replace("M", "Z")
        frasedescrip = frasedescrip.replace("N", "A")
        frasedescrip = frasedescrip.replace("O", "B")
        frasedescrip = frasedescrip.replace("P", "C")
        frasedescrip = frasedescrip.replace("Q", "D")
        frasedescrip = frasedescrip.replace("R", "E")
        frasedescrip = frasedescrip.replace("S", "F")
        frasedescrip = frasedescrip.replace("T", "G")
        frasedescrip = frasedescrip.replace("U", "H")
        frasedescrip = frasedescrip.replace("V", "I")
        frasedescrip = frasedescrip.replace("W", "J")
        frasedescrip = frasedescrip.replace("X", "K")
        frasedescrip = frasedescrip.replace("Y", "L")
        frasedescrip = frasedescrip.replace("Z", "M")
    }
    else if (chave = 14) {

        frasedescrip = texto1.value
        frasedescrip = frasedescrip.replace("A", "O")
        frasedescrip = frasedescrip.replace("B", "P")
        frasedescrip = frasedescrip.replace("C", "Q")
        frasedescrip = frasedescrip.replace("D", "R")
        frasedescrip = frasedescrip.replace("E", "S")
        frasedescrip = frasedescrip.replace("F", "T")
        frasedescrip = frasedescrip.replace("G", "U")
        frasedescrip = frasedescrip.replace("H", "V")
        frasedescrip = frasedescrip.replace("I", "W")
        frasedescrip = frasedescrip.replace("J", "X")
        frasedescrip = frasedescrip.replace("K", "Y")
        frasedescrip = frasedescrip.replace("L", "Z")
        frasedescrip = frasedescrip.replace("M", "A")
        frasedescrip = frasedescrip.replace("N", "B")
        frasedescrip = frasedescrip.replace("O", "C")
        frasedescrip = frasedescrip.replace("P", "D")
        frasedescrip = frasedescrip.replace("Q", "E")
        frasedescrip = frasedescrip.replace("R", "F")
        frasedescrip = frasedescrip.replace("S", "G")
        frasedescrip = frasedescrip.replace("T", "H")
        frasedescrip = frasedescrip.replace("U", "I")
        frasedescrip = frasedescrip.replace("V", "J")
        frasedescrip = frasedescrip.replace("W", "K")
        frasedescrip = frasedescrip.replace("X", "L")
        frasedescrip = frasedescrip.replace("Y", "M")
        frasedescrip = frasedescrip.replace("Z", "N")
    }
    else if (chave = 15) {

        frasedescrip = texto1.value
        frasedescrip = frasedescrip.replace("A", "P")
        frasedescrip = frasedescrip.replace("B", "Q")
        frasedescrip = frasedescrip.replace("C", "R")
        frasedescrip = frasedescrip.replace("D", "S")
        frasedescrip = frasedescrip.replace("E", "T")
        frasedescrip = frasedescrip.replace("F", "U")
        frasedescrip = frasedescrip.replace("G", "V")
        frasedescrip = frasedescrip.replace("H", "W")
        frasedescrip = frasedescrip.replace("I", "X")
        frasedescrip = frasedescrip.replace("J", "Y")
        frasedescrip = frasedescrip.replace("K", "Z")
        frasedescrip = frasedescrip.replace("L", "A")
        frasedescrip = frasedescrip.replace("M", "B")
        frasedescrip = frasedescrip.replace("N", "C")
        frasedescrip = frasedescrip.replace("O", "D")
        frasedescrip = frasedescrip.replace("P", "E")
        frasedescrip = frasedescrip.replace("Q", "F")
        frasedescrip = frasedescrip.replace("R", "G")
        frasedescrip = frasedescrip.replace("S", "H")
        frasedescrip = frasedescrip.replace("T", "I")
        frasedescrip = frasedescrip.replace("U", "J")
        frasedescrip = frasedescrip.replace("V", "K")
        frasedescrip = frasedescrip.replace("W", "L")
        frasedescrip = frasedescrip.replace("X", "M")
        frasedescrip = frasedescrip.replace("Y", "N")
        frasedescrip = frasedescrip.replace("Z", "O")
    }
    else if (chave = 16) {

        frasedescrip = texto1.value
        frasedescrip = frasedescrip.replace("A", "Q")
        frasedescrip = frasedescrip.replace("B", "R")
        frasedescrip = frasedescrip.replace("C", "S")
        frasedescrip = frasedescrip.replace("D", "T")
        frasedescrip = frasedescrip.replace("E", "U")
        frasedescrip = frasedescrip.replace("F", "V")
        frasedescrip = frasedescrip.replace("G", "W")
        frasedescrip = frasedescrip.replace("H", "X")
        frasedescrip = frasedescrip.replace("I", "Y")
        frasedescrip = frasedescrip.replace("J", "Z")
        frasedescrip = frasedescrip.replace("K", "A")
        frasedescrip = frasedescrip.replace("L", "B")
        frasedescrip = frasedescrip.replace("M", "C")
        frasedescrip = frasedescrip.replace("N", "D")
        frasedescrip = frasedescrip.replace("O", "E")
        frasedescrip = frasedescrip.replace("P", "F")
        frasedescrip = frasedescrip.replace("Q", "G")
        frasedescrip = frasedescrip.replace("R", "H")
        frasedescrip = frasedescrip.replace("S", "I")
        frasedescrip = frasedescrip.replace("T", "J")
        frasedescrip = frasedescrip.replace("U", "K")
        frasedescrip = frasedescrip.replace("V", "L")
        frasedescrip = frasedescrip.replace("W", "M")
        frasedescrip = frasedescrip.replace("X", "N")
        frasedescrip = frasedescrip.replace("Y", "O")
        frasedescrip = frasedescrip.replace("Z", "P")
    }
    else if (chave = 17) {

        frasedescrip = texto1.value
        frasedescrip = frasedescrip.replace("A", "R")
        frasedescrip = frasedescrip.replace("B", "S")
        frasedescrip = frasedescrip.replace("C", "T")
        frasedescrip = frasedescrip.replace("D", "U")
        frasedescrip = frasedescrip.replace("E", "V")
        frasedescrip = frasedescrip.replace("F", "W")
        frasedescrip = frasedescrip.replace("G", "X")
        frasedescrip = frasedescrip.replace("H", "Y")
        frasedescrip = frasedescrip.replace("I", "Z")
        frasedescrip = frasedescrip.replace("J", "A")
        frasedescrip = frasedescrip.replace("K", "B")
        frasedescrip = frasedescrip.replace("L", "C")
        frasedescrip = frasedescrip.replace("M", "D")
        frasedescrip = frasedescrip.replace("N", "E")
        frasedescrip = frasedescrip.replace("O", "F")
        frasedescrip = frasedescrip.replace("P", "G")
        frasedescrip = frasedescrip.replace("Q", "H")
        frasedescrip = frasedescrip.replace("R", "I")
        frasedescrip = frasedescrip.replace("S", "J")
        frasedescrip = frasedescrip.replace("T", "K")
        frasedescrip = frasedescrip.replace("U", "L")
        frasedescrip = frasedescrip.replace("V", "M")
        frasedescrip = frasedescrip.replace("W", "N")
        frasedescrip = frasedescrip.replace("X", "O")
        frasedescrip = frasedescrip.replace("Y", "P")
        frasedescrip = frasedescrip.replace("Z", "Q")
    }
    else if (chave = 18) {

        frasedescrip = texto1.value
        frasedescrip = frasedescrip.replace("A", "S")
        frasedescrip = frasedescrip.replace("B", "T")
        frasedescrip = frasedescrip.replace("C", "U")
        frasedescrip = frasedescrip.replace("D", "V")
        frasedescrip = frasedescrip.replace("E", "W")
        frasedescrip = frasedescrip.replace("F", "X")
        frasedescrip = frasedescrip.replace("G", "Y")
        frasedescrip = frasedescrip.replace("H", "Z")
        frasedescrip = frasedescrip.replace("I", "A")
        frasedescrip = frasedescrip.replace("J", "B")
        frasedescrip = frasedescrip.replace("K", "C")
        frasedescrip = frasedescrip.replace("L", "D")
        frasedescrip = frasedescrip.replace("M", "E")
        frasedescrip = frasedescrip.replace("N", "F")
        frasedescrip = frasedescrip.replace("O", "G")
        frasedescrip = frasedescrip.replace("P", "H")
        frasedescrip = frasedescrip.replace("Q", "I")
        frasedescrip = frasedescrip.replace("R", "J")
        frasedescrip = frasedescrip.replace("S", "K")
        frasedescrip = frasedescrip.replace("T", "L")
        frasedescrip = frasedescrip.replace("U", "M")
        frasedescrip = frasedescrip.replace("V", "N")
        frasedescrip = frasedescrip.replace("W", "O")
        frasedescrip = frasedescrip.replace("X", "P")
        frasedescrip = frasedescrip.replace("Y", "Q")
        frasedescrip = frasedescrip.replace("Z", "R")
    }
    else if (chave = 19) {

        frasedescrip = texto1.value
        frasedescrip = frasedescrip.replace("A", "T")
        frasedescrip = frasedescrip.replace("B", "U")
        frasedescrip = frasedescrip.replace("C", "V")
        frasedescrip = frasedescrip.replace("D", "W")
        frasedescrip = frasedescrip.replace("E", "X")
        frasedescrip = frasedescrip.replace("F", "Y")
        frasedescrip = frasedescrip.replace("G", "Z")
        frasedescrip = frasedescrip.replace("H", "A")
        frasedescrip = frasedescrip.replace("I", "B")
        frasedescrip = frasedescrip.replace("J", "C")
        frasedescrip = frasedescrip.replace("K", "D")
        frasedescrip = frasedescrip.replace("L", "E")
        frasedescrip = frasedescrip.replace("M", "F")
        frasedescrip = frasedescrip.replace("N", "G")
        frasedescrip = frasedescrip.replace("O", "H")
        frasedescrip = frasedescrip.replace("P", "I")
        frasedescrip = frasedescrip.replace("Q", "J")
        frasedescrip = frasedescrip.replace("R", "K")
        frasedescrip = frasedescrip.replace("S", "L")
        frasedescrip = frasedescrip.replace("T", "M")
        frasedescrip = frasedescrip.replace("U", "N")
        frasedescrip = frasedescrip.replace("V", "O")
        frasedescrip = frasedescrip.replace("W", "P")
        frasedescrip = frasedescrip.replace("X", "Q")
        frasedescrip = frasedescrip.replace("Y", "R")
        frasedescrip = frasedescrip.replace("Z", "S")
    }
    else if (chave = 20) {

        frasedescrip = texto1.value
        frasedescrip = frasedescrip.replace("A", "U")
        frasedescrip = frasedescrip.replace("B", "V")
        frasedescrip = frasedescrip.replace("C", "W")
        frasedescrip = frasedescrip.replace("D", "X")
        frasedescrip = frasedescrip.replace("E", "Y")
        frasedescrip = frasedescrip.replace("F", "Z")
        frasedescrip = frasedescrip.replace("G", "A")
        frasedescrip = frasedescrip.replace("H", "B")
        frasedescrip = frasedescrip.replace("I", "C")
        frasedescrip = frasedescrip.replace("J", "D")
        frasedescrip = frasedescrip.replace("K", "E")
        frasedescrip = frasedescrip.replace("L", "F")
        frasedescrip = frasedescrip.replace("M", "G")
        frasedescrip = frasedescrip.replace("N", "H")
        frasedescrip = frasedescrip.replace("O", "I")
        frasedescrip = frasedescrip.replace("P", "J")
        frasedescrip = frasedescrip.replace("Q", "K")
        frasedescrip = frasedescrip.replace("R", "L")
        frasedescrip = frasedescrip.replace("S", "M")
        frasedescrip = frasedescrip.replace("T", "N")
        frasedescrip = frasedescrip.replace("U", "O")
        frasedescrip = frasedescrip.replace("V", "P")
        frasedescrip = frasedescrip.replace("W", "Q")
        frasedescrip = frasedescrip.replace("X", "R")
        frasedescrip = frasedescrip.replace("Y", "S")
        frasedescrip = frasedescrip.replace("Z", "T")
    }
    else if (chave = 21) {

        frasedescrip = texto1.value
        frasedescrip = frasedescrip.replace("A", "V")
        frasedescrip = frasedescrip.replace("B", "W")
        frasedescrip = frasedescrip.replace("C", "X")
        frasedescrip = frasedescrip.replace("D", "Y")
        frasedescrip = frasedescrip.replace("E", "Z")
        frasedescrip = frasedescrip.replace("F", "A")
        frasedescrip = frasedescrip.replace("G", "B")
        frasedescrip = frasedescrip.replace("H", "C")
        frasedescrip = frasedescrip.replace("I", "D")
        frasedescrip = frasedescrip.replace("J", "E")
        frasedescrip = frasedescrip.replace("K", "F")
        frasedescrip = frasedescrip.replace("L", "G")
        frasedescrip = frasedescrip.replace("M", "H")
        frasedescrip = frasedescrip.replace("N", "I")
        frasedescrip = frasedescrip.replace("O", "J")
        frasedescrip = frasedescrip.replace("P", "K")
        frasedescrip = frasedescrip.replace("Q", "L")
        frasedescrip = frasedescrip.replace("R", "M")
        frasedescrip = frasedescrip.replace("S", "N")
        frasedescrip = frasedescrip.replace("T", "O")
        frasedescrip = frasedescrip.replace("U", "P")
        frasedescrip = frasedescrip.replace("V", "Q")
        frasedescrip = frasedescrip.replace("W", "R")
        frasedescrip = frasedescrip.replace("X", "S")
        frasedescrip = frasedescrip.replace("Y", "T")
        frasedescrip = frasedescrip.replace("Z", "U")
    }
    else if (chave = 22) {

        frasedescrip = texto1.value
        frasedescrip = frasedescrip.replace("A", "W")
        frasedescrip = frasedescrip.replace("B", "X")
        frasedescrip = frasedescrip.replace("C", "Y")
        frasedescrip = frasedescrip.replace("D", "Z")
        frasedescrip = frasedescrip.replace("E", "A")
        frasedescrip = frasedescrip.replace("F", "B")
        frasedescrip = frasedescrip.replace("G", "C")
        frasedescrip = frasedescrip.replace("H", "D")
        frasedescrip = frasedescrip.replace("I", "E")
        frasedescrip = frasedescrip.replace("J", "F")
        frasedescrip = frasedescrip.replace("K", "G")
        frasedescrip = frasedescrip.replace("L", "H")
        frasedescrip = frasedescrip.replace("M", "I")
        frasedescrip = frasedescrip.replace("N", "J")
        frasedescrip = frasedescrip.replace("O", "K")
        frasedescrip = frasedescrip.replace("P", "L")
        frasedescrip = frasedescrip.replace("Q", "M")
        frasedescrip = frasedescrip.replace("R", "N")
        frasedescrip = frasedescrip.replace("S", "O")
        frasedescrip = frasedescrip.replace("T", "P")
        frasedescrip = frasedescrip.replace("U", "Q")
        frasedescrip = frasedescrip.replace("V", "R")
        frasedescrip = frasedescrip.replace("W", "S")
        frasedescrip = frasedescrip.replace("X", "T")
        frasedescrip = frasedescrip.replace("Y", "U")
        frasedescrip = frasedescrip.replace("Z", "V")
    }
    else if (chave = 23) {

        frasedescrip = texto1.value
        frasedescrip = frasedescrip.replace("A", "X")
        frasedescrip = frasedescrip.replace("B", "Y")
        frasedescrip = frasedescrip.replace("C", "Z")
        frasedescrip = frasedescrip.replace("D", "A")
        frasedescrip = frasedescrip.replace("E", "B")
        frasedescrip = frasedescrip.replace("F", "C")
        frasedescrip = frasedescrip.replace("G", "D")
        frasedescrip = frasedescrip.replace("H", "E")
        frasedescrip = frasedescrip.replace("I", "F")
        frasedescrip = frasedescrip.replace("J", "G")
        frasedescrip = frasedescrip.replace("K", "H")
        frasedescrip = frasedescrip.replace("L", "I")
        frasedescrip = frasedescrip.replace("M", "J")
        frasedescrip = frasedescrip.replace("N", "K")
        frasedescrip = frasedescrip.replace("O", "L")
        frasedescrip = frasedescrip.replace("P", "M")
        frasedescrip = frasedescrip.replace("Q", "N")
        frasedescrip = frasedescrip.replace("R", "O")
        frasedescrip = frasedescrip.replace("S", "P")
        frasedescrip = frasedescrip.replace("T", "Q")
        frasedescrip = frasedescrip.replace("U", "R")
        frasedescrip = frasedescrip.replace("V", "S")
        frasedescrip = frasedescrip.replace("W", "T")
        frasedescrip = frasedescrip.replace("X", "U")
        frasedescrip = frasedescrip.replace("Y", "V")
        frasedescrip = frasedescrip.replace("Z", "W")
    }
    else if (chave = 24) {

        frasedescrip = texto1.value
        frasedescrip = frasedescrip.replace("A", "Y")
        frasedescrip = frasedescrip.replace("B", "Z")
        frasedescrip = frasedescrip.replace("C", "A")
        frasedescrip = frasedescrip.replace("D", "B")
        frasedescrip = frasedescrip.replace("E", "C")
        frasedescrip = frasedescrip.replace("F", "D")
        frasedescrip = frasedescrip.replace("G", "E")
        frasedescrip = frasedescrip.replace("H", "F")
        frasedescrip = frasedescrip.replace("I", "G")
        frasedescrip = frasedescrip.replace("J", "H")
        frasedescrip = frasedescrip.replace("K", "I")
        frasedescrip = frasedescrip.replace("L", "J")
        frasedescrip = frasedescrip.replace("M", "K")
        frasedescrip = frasedescrip.replace("N", "L")
        frasedescrip = frasedescrip.replace("O", "M")
        frasedescrip = frasedescrip.replace("P", "N")
        frasedescrip = frasedescrip.replace("Q", "O")
        frasedescrip = frasedescrip.replace("R", "P")
        frasedescrip = frasedescrip.replace("S", "Q")
        frasedescrip = frasedescrip.replace("T", "R")
        frasedescrip = frasedescrip.replace("U", "S")
        frasedescrip = frasedescrip.replace("V", "T")
        frasedescrip = frasedescrip.replace("W", "U")
        frasedescrip = frasedescrip.replace("X", "V")
        frasedescrip = frasedescrip.replace("Y", "W")
        frasedescrip = frasedescrip.replace("Z", "X")
    }
    else if (chave = 25) {

        frasedescrip = texto1.value
        frasedescrip = frasedescrip.replace("A", "Z")
        frasedescrip = frasedescrip.replace("B", "A")
        frasedescrip = frasedescrip.replace("C", "B")
        frasedescrip = frasedescrip.replace("D", "C")
        frasedescrip = frasedescrip.replace("E", "D")
        frasedescrip = frasedescrip.replace("F", "E")
        frasedescrip = frasedescrip.replace("G", "F")
        frasedescrip = frasedescrip.replace("H", "G")
        frasedescrip = frasedescrip.replace("I", "H")
        frasedescrip = frasedescrip.replace("J", "I")
        frasedescrip = frasedescrip.replace("K", "J")
        frasedescrip = frasedescrip.replace("L", "K")
        frasedescrip = frasedescrip.replace("M", "L")
        frasedescrip = frasedescrip.replace("N", "M")
        frasedescrip = frasedescrip.replace("O", "N")
        frasedescrip = frasedescrip.replace("P", "O")
        frasedescrip = frasedescrip.replace("Q", "P")
        frasedescrip = frasedescrip.replace("R", "Q")
        frasedescrip = frasedescrip.replace("S", "R")
        frasedescrip = frasedescrip.replace("T", "S")
        frasedescrip = frasedescrip.replace("U", "T")
        frasedescrip = frasedescrip.replace("V", "U")
        frasedescrip = frasedescrip.replace("W", "V")
        frasedescrip = frasedescrip.replace("X", "W")
        frasedescrip = frasedescrip.replace("Y", "X")
        frasedescrip = frasedescrip.replace("Z", "Y")
    }
    saidah32.innerText = frasedescrip
    e.preventDefault()
    alert(cod)


})



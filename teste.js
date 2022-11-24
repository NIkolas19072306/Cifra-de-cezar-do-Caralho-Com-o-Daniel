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


// códigos do teclado
var esquerda = 37
var cima = 38
var direita = 39
var baixo = 40

// Quantidade de pixel que o objeto se movimenta.
var taxa = 25;

// função que cria o objeto.
{
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

    } else if (evento.keyCode == direita && x + taxa < 625) {
        x = x + taxa;
    }

}



document.onkeydown = leDoTeclado;

botao1.addEventListener("click", (e) => {

    cod = (x / 25) + 0.5
    chave = cod

    
    var textoo = texto1.value;
    resultado = textoo.split("");
    teste = tesultado.length

    saidah31.innerText = resultado
    e.preventDefault()


})

/*      



var texton
    var texton2
    var texton3
    var texton4
    var texton5
    var texton6
    var texton7
    var texton8
    var texton9
    var texton10
    var texton11
    var texton12
    var texton13
    var texton14
    var texton15
    var texton16
    var texton17
    var texton18
    var texton19
    var texton20
    var texton21
    var texton22
    var texton23
    var texton24
    var texton25
    var texton26
    
    

    frasedescrip = texto1.value
    texton = frasedescrip.replace(/A/gi, "B")
    texton2 = texton.replace(/B/gi, "C")
    texton3 = texton2.replace(/C/gi, "D")
    texton4 = texton3.replace(/D/gi, "E")
    texton5 = texton4.replace(/E/gi, "F")
    texton6 = texton5.replace(/F/gi, "G")
    texton7 = texton6.replace(/G/gi, "H")
    texton8 = texton7.replace(/H/gi, "I")
    texton9 = texton8.replace(/I/g, "J")
    texton10 = texton9.replace(/J/g, "K")
    texton11 = texton10.replace("/K/g", "L")
    texton12 = texton11.replace("/L/g", "M")
    texton13 = texton12.replace("/M/g", "N")
    texton14 = texton13.replace("/N/g", "O")
    texton15 = texton14.replace("/O/g", "P")
    texton16 = texton15.replace("/P/g", "Q")
    texton17 = texton16.replace("/Q/g", "R")
    texton18 = texton17.replace("/R/g", "S")
    texton19 = texton18.replace("/S/g", "T")
    texton20 = texton19.replace("/T/g", "U")
    texton21 = texton20.replace("/U/g", "V")
    texton22 = texton21.replace("/V/g", "W")
    texton23 = texton22.replace("/W/g", "X")
    texton24 = texton23.replace("/X/g", "Y")
    texton25 = texton24.replace("/Y/g", "Z")
    texton26 = texton25.replace("/Z/g", "A")
    

    saidah31.innerText = texton26
    e.preventDefault()
    alert(cod)
    
    */
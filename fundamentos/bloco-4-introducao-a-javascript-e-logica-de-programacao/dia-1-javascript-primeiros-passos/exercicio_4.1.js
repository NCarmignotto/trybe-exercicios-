// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados.
const a = 5;
const b = 8;
console.log (a + b);
console.log (a - b);
console.log (a * b);
console.log (a / b);
console.log (a % b);

// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
if (a > b) {
    console.log (a);
} else {
    console.log (b);
}

// Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
const c = 7;
let d;
if (a > b) {
    d = a;
} else {
    d = b;
}
if (d > c) {
    console.log (d);
} else {
    console.log (c);
}

// Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.//
const sinal = 0;
if (sinal > 0) {
    console.log ("Positivo");
} else {
    if (sinal < 0) {
        console.log ("Negativo");
    } else {
        console.log ("Zero");
    }
}

// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
// ?????????????

// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
let pecaXadrez = "peão";
switch (pecaXadrez) {
    case "peão":
        console.log ("Uma ou duas casas na vertical ou uma casa na diagonal, sempre para frente");
        break;
    case "torre":
        console.log ("Movimentos na horizontal e vertical");
        break;
    case "torre":
        console.log ("Movimentos na horizontal e vertical");
        break;
    case "cavalo":
        console.log ("Movimentos em L");
        break;
    case "bispo":
        console.log ("Movimentos na diagonal");
        break;
    case "rainha":
        console.log ("Movimentos na horizontal, vertical e diagonal, podendo movimentar em mais de uma casa");
        break;
    case "rei":
        console.log ("Movimentos na horizontal, vertical e diagonal, limitado a uma casa por jogada");
        break;
    default:
        console.log ("Não é uma peça de xadrez !!!")
}

// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
const num1 = 1;
const num2 = 3;
const num3 = 5;
if (num1 % 2 == 0) {
    console.log (true);
} else {
    if (num2 % 2 == 0) {
        console.log (true);
    } else {
        if (num3 % 2 == 0) {
            console.log (true);
        } else {
            console.log ("Nenhuma das constantes é um número par")
        }
    }
}

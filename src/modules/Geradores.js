const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const GeraMaiuscula = () => String.fromCharCode(rand(65, 91));
const GeraMinuscula = () => String.fromCharCode(rand(97, 123));
const GeraNumero = () => String.fromCharCode(rand(48, 58));
const Simbolos = '.,;/!@#$%¨&*()_+=\|[]{}<>';
const GeraSimbolo = () => Simbolos[rand(0, Simbolos.length)];


export default function GeraSenha(qtd, maiusculas, minusculas, numeros, simbolos) {
    const senhaArray = [];
    qtd = Number(qtd);
    for (let i = 0; i <= qtd; i++) {
        maiusculas && senhaArray.push(GeraMaiuscula());
        minusculas && senhaArray.push(GeraMinuscula());
        numeros && senhaArray.push(GeraNumero());
        simbolos && senhaArray.push(GeraSimbolo());
    }
    return senhaArray.join('').slice(0, qtd);
}
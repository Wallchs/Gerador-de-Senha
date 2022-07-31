import GeraSenha from "./Geradores";

const senha = document.querySelector('.gerar-senha');
const aqui = document.querySelector('.Aqui');
const caracteres = document.querySelector('.qtd-caracteres');
const chkMaiusuculas = document.querySelector('.chk-maiusculas');
const chkMinusculas = document.querySelector('.chk-minusculas');
const chkNumeros = document.querySelector('.chk-numeros');
const chkSimbolos = document.querySelector('.chk-simbolos');


export default () => {

    senha.addEventListener('click', () => {
            aqui.innerHTML = gera();

    });

    
}

function gera(){
        const senha = GeraSenha(
                caracteres.value,
                chkMaiusuculas.checked,
                chkMinusculas.checked,
                chkNumeros.checked,
                chkSimbolos.checked
        );
        return senha;
}

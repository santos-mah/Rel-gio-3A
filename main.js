const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");

// Datas futuras (mais de 1 ano)
const tempoObjetivo1 = new Date("2028-12-31T23:59:59"); // Comprar uma casa
const tempoObjetivo2 = new Date("2028-06-30T23:59:59"); // Fazer uma faculdade
const tempoObjetivo3 = new Date("2027-11-30T23:59:59"); // Passar no vestibular
const tempoObjetivo4 = new Date("2028-08-15T23:59:59"); // Viajar

const tempos = [
    tempoObjetivo1,
    tempoObjetivo2,
    tempoObjetivo3,
    tempoObjetivo4
];

function calculaTempo(tempoObjetivo) {
    const agora = new Date();
    const diferenca = tempoObjetivo - agora;

    if (diferenca <= 0) {
        return [0, 0, 0, 0];
    }

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    return [dias, horas, minutos, segundos];
}

function atualizaCronometro() {
    for (let i = 0; i < contadores.length; i++) {

        const tempo = calculaTempo(tempos[i]);

        document.getElementById("dias" + i).textContent = tempo[0];
        document.getElementById("horas" + i).textContent = String(tempo[1]).padStart(2, "0");
        document.getElementById("min" + i).textContent = String(tempo[2]).padStart(2, "0");
        document.getElementById("seg" + i).textContent = String(tempo[3]).padStart(2, "0");
    }
}

atualizaCronometro();
setInterval(atualizaCronometro, 1000);
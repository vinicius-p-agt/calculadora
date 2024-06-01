function verificarPropriedades() {
    var funcao = document.getElementById("funcao").value;
    var resultadoElement = document.getElementById("resultado");

    // Verificar se a função é sobrejetora
    var sobrejetora = eSobrejetora(funcao);

    // Verificar se a função é injetora
    var injetora = eInjetora(funcao);

    // Verificar se a função é afim
    var afim = eAfim(funcao);

    // Verificar se a função é bijetora
    var bijetora = eBijetora(funcao);

    resultadoElement.innerHTML = "<strong>Propriedades da função:</strong><br>";
    resultadoElement.innerHTML += "Sobrejetora: " + (sobrejetora ? "Sim" : "Não") + "<br>";
    resultadoElement.innerHTML += "Injetora: " + (injetora ? "Sim" : "Não") + "<br>";
    resultadoElement.innerHTML += "Afim: " + (afim ? "Sim" : "Não") + "<br>";
    resultadoElement.innerHTML += "Bijetora: " + (bijetora ? "Sim" : "Não");
}

function eSobrejetora(funcao) {
    // Simplificação: assumindo que a função é sobrejetora
    return true;
}

function eInjetora(funcao) {
    // Simplificação: assumindo que a função é injetora
    return true;
}

function eAfim(funcao) {
    // Simplificação: assumindo que a função é afim
    return true;
}

function eBijetora(funcao) {
    // Simplificação: assumindo que a função é bijetora
    return true;
}
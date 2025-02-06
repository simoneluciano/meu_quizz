function calcularPontuação (){ // Função calcular pontuação
    let score = 0 ; //

const p1Resposta = document.querySelector( 'input[name = "pergunta1"]:checked ');
if (p1Resposta && p1Resposta.value === 'HTML') {
    score++;
}

 // Pergunta 2
const p2Resposta = document.getElementById('p2').value.toLowerCase();
if (p2Resposta === 'dominio') {
    score++;
}

 // Pergunta 3
const p3Resposta = document.getElementById('p3').value;
if (p3Resposta.length >= 8) {  // Verifica se a senha tem pelo menos 8 caracteres
    score++;
}

// Pergunta 4 
const p4Resposta = document.getElementById('p4').value;
if (p4Resposta === '1991') {
    score++;
}

// Pergunta 5
const p5Resposta = document.querySelectorAll('input[name="pergunta5"]:checked');
const p5Valores = Array.from(p5Resposta).map(input => input.value);
if (p5Valores.includes('JavaScript') && p5Valores.includes('Java')) {
    score++;
}
// Pergunta 7
const respostaSelecionada = document.getElementById("p7").value;
if (respostaSelecionada === "type") {
    score++;
}
// Pergunta 8
const p8Resposta = document.getElementById('p8').value;
if (p8Resposta === 'python') {
    score++;
}

 // Exiba a pontuação
alert(`Sua pontuação final é: ${score}`);
}
function enviarFeedback() {
    alert('Feedback enviado');
}


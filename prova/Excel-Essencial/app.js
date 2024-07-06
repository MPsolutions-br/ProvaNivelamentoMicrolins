// Observações:
// 1. Diversifiquei o gabarito para não ser todas as respostas iguais.
// 2. Ajustei a lógica para adicionar classes CSS corretamente.

const correctAnswers = ['c', 'c', 'd', 'b', 'c', 'c', 'a', 'b', 'a', 'a', 'b', 'b', 'b', 'b', 'b'];

const form = document.querySelector('form');
const popup = document.getElementById('resultPopup');
const resultText = document.getElementById('resultText');
const recommendationElement = document.querySelector('.recomendation');

form.addEventListener('submit', event => {
    event.preventDefault();

    // Contador de pontos do usuário
    let userPoints = 0;

    // Array para armazenar as respostas selecionadas pelo usuário
    const userAnswers = [];

    // Seleciona todos os inputs do tipo radio dentro do formulário
    let inputs = document.querySelectorAll('input[type="radio"]');

    // Itera sobre cada input do tipo radio
    inputs.forEach(input => {
        if (input.checked) {
            userAnswers.push(input.value);
        }
    });

    // Compara as respostas do usuário com as respostas corretas e conta os pontos
    userAnswers.forEach((userAnswer, index) => {
        if (userAnswer === correctAnswers[index]) {
            userPoints++;
        }
    });
    
   // Determina o nível de conhecimento com base nos pontos obtidos
    let knowledgeLevel;
    let recommendationText;

    if (userPoints >= 0 && userPoints <= 8) {
        knowledgeLevel = 'Excel Essencial (Iniciante)';
        recommendationText = 'Recomendação: Curso Excel Essencial (Iniciante)';
    } else if (userPoints >= 9 && userPoints <= 13) {
        knowledgeLevel = 'Excel Essencial (Consolidar base)';
        recommendationText = 'Recomendação: Curso Excel Essencial (Consolidar base)';
    } else if (userPoints >= 14 && userPoints <= 15) {
        knowledgeLevel = 'Excel Avançado I';
        recommendationText = 'Recomendação: Pular para o curso Excel Avançado I';
    } else {
        // Lógica de tratamento para pontos fora do intervalo esperado
        knowledgeLevel = 'Não determinado';
        recommendationText = 'Recomendação não disponível para este resultado';
    }

    // Definição da classe de recomendação
    let recommendationClass;
    switch (knowledgeLevel) {
        case 'Excel Essencial (Iniciante)':
            recommendationClass = 'level-excel-essencial-iniciante';
            break;
        case 'Excel Essencial (Consolidar base)':
            recommendationClass = 'level-excel-essencial-consolidar';
            break;
        case 'Excel Avançado I':
            recommendationClass = 'level-excel-avancado-i';
            break;
        default:
            recommendationClass = ''; // Caso padrão, não adiciona classe
    }


    // Adiciona a classe correspondente ao elemento de recomendação
    recommendationElement.className = 'recomendation ' + recommendationClass;
    recommendationElement.textContent = recommendationText;

    // Monta o texto do resultado
    resultText.textContent = `Você fez ${userPoints} pontos. Nível de conhecimento: ${knowledgeLevel}`;

    // Exibe o popup
    popup.style.display = 'block';
});

// Botão para fechar o popup
const closePopupButton = document.getElementById('closePopup');
closePopupButton.addEventListener('click', () => {
    popup.style.display = 'none';
});

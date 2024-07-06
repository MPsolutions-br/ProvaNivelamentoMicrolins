// Observações:
// 1. Diversifiquei o gabarito para não ser todas as respostas iguais.
// 2. Ajustei a lógica para adicionar classes CSS corretamente.

const correctAnswers = ['b', 'c', 'c', 'b', 'b', 'a', 'b', 'a', 'b', 'b', 'd', 'b', 'b', 'b', 'c'];

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
    if (userPoints >= 0 && userPoints <= 5) {
        knowledgeLevel = 'Conhecimento básico';
        recommendationText = 'Recomendação: Informática básica e Windows 11';
    } else if (userPoints >= 6 && userPoints <= 10) {
        knowledgeLevel = 'Conhecimento intermediário';
        recommendationText = 'Recomendação: Windows 11';
    } else if (userPoints >= 11 && userPoints <= 14) {
        knowledgeLevel = 'Conhecimento avançado';
        recommendationText = 'Recomendação: Pacote Office';
    } else if (userPoints === 15) {
        knowledgeLevel = 'Domínio completo';
        recommendationText = 'Recomendação: Pacote Office';
    }

    let recommendationClass;
    switch (knowledgeLevel) {
        case 'Conhecimento básico':
            recommendationClass = 'level-basico';
            break;
        case 'Conhecimento intermediário':
            recommendationClass = 'level-intermediario';
            break;
        case 'Conhecimento avançado':
            recommendationClass = 'level-avancado';
            break;
        case 'Domínio completo':
            recommendationClass = 'level-perfeito';
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

document.addEventListener('DOMContentLoaded', function() {
    const examLinks = document.querySelectorAll('.exam-link');

    examLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const confirmation = confirm(`Você selecionou a prova: ${link.textContent}. Deseja continuar?`);
            if (confirmation) {
                window.location.href = link.href;
            }
        });
    });
});

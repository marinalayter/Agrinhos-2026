document.addEventListener("DOMContentLoaded", () => {
    
    // Lógica dos Contadores Dinâmicos (Efeito de números subindo)
    const counters = document.querySelectorAll('.counter');
    const speed = 100; // Quanto menor, mais rápido o contador se move

    const startCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 20);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    };

    // Ativar o contador apenas quando o usuário rolar até a seção de impacto
    const impactoSection = document.getElementById('impacto');
    let animated = false;

    window.addEventListener('scroll', () => {
        const sectionPos = impactoSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.2;

        if (sectionPos < screenPos && !animated) {
            startCounters();
            animated = true; // Evita que a animação rode repetidamente ao rolar a página
        }
    });

    // Controle e Validação do Formulário de Contato
    const form = document.getElementById('agrinhoForm');
    const feedback = document.getElementById('formFeedback');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede o recarregamento da página

        // Captura os dados inseridos (podem ser usados no futuro)
        const nome = document.getElementById('nome').value;

        // Exibe mensagem de sucesso estilizada
        feedback.innerText = `Obrigado pelo apoio, ${nome}! Sua ideia sustentável foi enviada com sucesso para nossa comissão do Agrinho.`;
        feedback.className = "success"; // Adiciona classe CSS de sucesso
        feedback.classList.remove('hidden');

        // Limpa os campos do formulário
        form.reset();

        // Esconde a mensagem de sucesso após 5 segundos
        setTimeout(() => {
            feedback.classList.add('hidden');
        }, 5000);
    });
});
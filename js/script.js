// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function() {
    console.log('Script carregado com sucesso!');
    
    // Inicializa funcionalidades
    initSmoothScroll();
    initFormValidation();
    initButtonInteractions();
});

// Scroll suave para links de navegação
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Validação do formulário de contato
function initFormValidation() {
    const form = document.querySelector('.contact-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            // Validação básica
            if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
                showMessage('Por favor, preencha todos os campos!', 'error');
                return;
            }
            
            // Validação de email
            if (!isValidEmail(email)) {
                showMessage('Por favor, insira um email válido!', 'error');
                return;
            }
            
            // Simula envio do formulário
            showMessage('Mensagem enviada com sucesso!', 'success');
            this.reset();
        });
    }
}

// Validação de email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Exibe mensagens para o usuário
function showMessage(message, type) {
    // Remove mensagem anterior se existir
    const existingMessage = document.querySelector('.alert-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Cria nova mensagem
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert-message alert-${type}`;
    alertDiv.textContent = message;
    
    // Estilos inline para a mensagem
    alertDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        border-radius: 5px;
        color: white;
        font-weight: bold;
        z-index: 1000;
        animation: slideIn 0.3s ease;
        background-color: ${type === 'success' ? '#28a745' : '#dc3545'};
    `;
    
    document.body.appendChild(alertDiv);
    
    // Remove mensagem após 3 segundos
    setTimeout(() => {
        alertDiv.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => alertDiv.remove(), 300);
    }, 3000);
}

// Interações com botões
function initButtonInteractions() {
    const heroButton = document.querySelector('.hero .btn-primary');
    
    if (heroButton) {
        heroButton.addEventListener('click', function() {
            const aboutSection = document.querySelector('#sobre');
            if (aboutSection) {
                aboutSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
}

// Adiciona animações CSS via JavaScript
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

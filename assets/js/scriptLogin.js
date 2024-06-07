document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simulação de autenticação
    if (username === 'admin' && password === 'admin') {
        alert('Login bem-sucedido!');
        window.location.href = "index.html"; 
    } else {
        const errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.textContent = 'Usuário ou senha incorretos';
        
        const form = document.getElementById('loginForm');
        if (!document.querySelector('.error-message')) {
            form.appendChild(errorMessage);
        }
    }
});

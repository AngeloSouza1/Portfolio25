document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio real do formulário
    alert('Mensagem enviada com sucesso!');
});

const projects = document.querySelectorAll('.project');

window.addEventListener('scroll', () => {
    projects.forEach(project => {
        const rect = project.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            project.classList.add('in-view');
        }
    });
});

// Captura o evento de submit do formulário
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio real do formulário

    // Obtém os valores dos campos do formulário
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // Verifica se os campos estão vazios
    if (name === "" || email === "" || message === "") {
        alert('Por favor, preencha todos os campos.');
    } else {
        alert('Mensagem enviada com sucesso!');
        // Aqui você pode adicionar a lógica para enviar os dados, como por meio de um backend ou API
        // Por enquanto, vamos apenas limpar os campos do formulário
        document.getElementById('contact-form').reset();
    }
});






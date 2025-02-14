document.addEventListener('DOMContentLoaded', function() {
    // Remove loading class after 1 second
    setTimeout(() => {
        document.body.classList.remove('not-loaded');
    }, 1000);

    // Valentine's button functionality
    const yesBtn = document.querySelector('.valentine-btn.yes');
    const noBtn = document.querySelector('.valentine-btn.no');
    const prompt = document.querySelector('.valentine-prompt');
    
    function showMessage(text) {
        // Remove existing message if any
        const existingMessage = prompt.querySelector('.valentine-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Create and show new message
        const message = document.createElement('div');
        message.className = 'valentine-message';
        message.textContent = text;
        message.style.color = 'white';
        message.style.fontSize = '1.5rem';
        message.style.marginTop = '1rem';
        prompt.appendChild(message);
        setTimeout(() => message.remove(), 30000);
    }
    
    yesBtn.addEventListener('click', () => {
        showMessage("Let's begin a new journey together ❤️");
    });
    
    noBtn.addEventListener('click', () => {
        showMessage("It's a prank 📸");
    });
});

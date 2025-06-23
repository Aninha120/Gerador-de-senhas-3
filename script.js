document.addEventListener('DOMContentLoaded', () => {
    const passwordOutput = document.getElementById('passwordOutput');
    const copyButton = document.getElementById('copyButton');
    const generateButton = document.getElementById('generateButton');
    const passwordLength = document.getElementById('passwordLength');
    const includeUppercase = document.getElementById('includeUppercase');
    const includeLowercase = document.getElementById('includeLowercase');
    const includeNumbers = document.getElementById('includeNumbers');
    const includeSymbols = document.getElementById('includeSymbols');

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    function generatePassword() {
        let chars = '';
        if (includeUppercase.checked) chars += uppercaseChars;
        if (includeLowercase.checked) chars += lowercaseChars;
        if (includeNumbers.checked) chars += numberChars;
        if (includeSymbols.checked) chars += symbolChars;

        if (chars === '') {
            passwordOutput.value = 'Selecione pelo menos um tipo de caractere!';
            return;
        }

        let password = '';
        const length = parseInt(passwordLength.value);

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            password += chars[randomIndex];
        }
        passwordOutput.value = password;
    }

    // Gerar senha inicial ao carregar a página
    generatePassword();

    // Event Listeners
    generateButton.addEventListener('click', generatePassword);

    copyButton.addEventListener('click', () => {
        passwordOutput.select(); // Seleciona o texto no input
        passwordOutput.setSelectionRange(0, 99999); // Para dispositivos móveis
        document.execCommand('copy'); // Copia o texto selecionado
        alert('Senha copiada para a área de transferência!');
    });

    // Atualiza a senha quando as opções mudam
    passwordLength.addEventListener('change', generatePassword);
    includeUppercase.addEventListener('change', generatePassword);
    includeLowercase.addEventListener('change', generatePassword);
    includeNumbers.addEventListener('change', generatePassword);
    includeSymbols.addEventListener('change', generatePassword);
});
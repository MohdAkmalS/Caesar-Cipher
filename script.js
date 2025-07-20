document.addEventListener('DOMContentLoaded', function() {
    const shiftInput = document.getElementById('shift');
    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');
    const encryptButton = document.getElementById('encryptButton');
    const decryptButton = document.getElementById('decryptButton');

    encryptButton.addEventListener('click', function() {
        const shift = parseInt(shiftInput.value) % 26;
        const text = inputText.value;
        const encryptedText = encrypt(text, shift);
        outputText.value = encryptedText;
    });

    decryptButton.addEventListener('click', function() {
        const shift = parseInt(shiftInput.value) % 26;
        const text = inputText.value;
        const decryptedText = encrypt(text, 26 - shift); // reverse shift
        outputText.value = decryptedText;
    });

    function encrypt(text, shift) {
        let result = '';
        for (let i = 0; i < text.length; i++) {
            const charCode = text.charCodeAt(i);
            if (charCode >= 65 && charCode <= 90) {
                result += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
            } else if (charCode >= 97 && charCode <= 122) {
                result += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
            } else {
                result += text[i];
            }
        }
        return result;
    }
});

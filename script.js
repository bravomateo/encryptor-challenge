const inputTextArea = document.querySelector(".input-text");
const outputTextArea = document.querySelector(".output-text");
let copiedText;

function encryptButton() {
    const encryptedText = encrypt(inputTextArea.value);
    outputTextArea.value = encryptedText;
    inputTextArea.value = "";
    outputTextArea.style.backgroundImage = "none";
}

function decryptButton() {
    const decryptedText = decrypt(inputTextArea.value);
    outputTextArea.value = decryptedText;
    inputTextArea.value = "";
}

function copyButton() {
    copiedText = outputTextArea.value;
    navigator.clipboard.writeText(copiedText)
    .then(() => {
        alert('Content copied to clipboard');
    }, () => {
        console.error('Error copying text');
    });
}


function encrypt(textToEncrypt) {
    if (textToEncrypt != "") {
        let codeMatrix = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        textToEncrypt = textToEncrypt.toLowerCase();

        for (let i = 0; i < codeMatrix.length; i++) {
            if (textToEncrypt.includes(codeMatrix[i][0])) {
                textToEncrypt = textToEncrypt.replaceAll(codeMatrix[i][0], codeMatrix[i][1]);
            }
        }
        return textToEncrypt;
    } else {
        alert("Please enter text to encrypt");
        return ""; // Changed from `none` to empty string
    }
}

function decrypt(textToDecrypt) {
    if (textToDecrypt != "") {
        let codeMatrix = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        textToDecrypt = textToDecrypt.toLowerCase();

        for (let i = 0; i < codeMatrix.length; i++) {
            if (textToDecrypt.includes(codeMatrix[i][1])) {
                textToDecrypt = textToDecrypt.replaceAll(codeMatrix[i][1], codeMatrix[i][0]);
            }
        }
        return textToDecrypt;
    } else {
        alert("Please enter text to decrypt");
        return ""; // Changed from `none` to empty string
    }
}

window.onload = function () { 

    const inputText = document.getElementById("inputText") ? document.getElementById("inputText") : '';
    const btn = document.getElementById("btn") ? document.getElementById("btn") : '';
    const entry = document.getElementById("entry") ? document.getElementById("entry") : '';
    const result = document.getElementById("result") ? document.getElementById("result") : '';
    const result1 = document.getElementById("result1") ? document.getElementById("result1") : '';

    
    btn.addEventListener("click", function() {
        entry.innerHTML = "Entrada: " + inputText.value;
        result.innerHTML = "Resultado: " + inverterTexto(inputText.value);
    });

    function inverterTexto(text)
    {
        let letters = text.split(""); // transforma o texto em array de letras
        let invertedLetters = letters.reverse(); // inverte a primeira posição do do array pela última e etc...
        let invertedText = invertedLetters.join(""); // junta os elementos de um arry e transforma em string
        return invertedText;
    }
}

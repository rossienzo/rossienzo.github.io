window.onload = function () { 

    const inputText = document.getElementById("inputText") ? document.getElementById("inputText") : '';
    const btn = document.getElementById("btn") ? document.getElementById("btn") : '';
    const entry = document.getElementById("entry") ? document.getElementById("entry") : '';
    const result = document.getElementById("result") ? document.getElementById("result") : '';

    btn.addEventListener("click", function() {
        entry.innerHTML = "Entrada: " + inputText.value;
        result.innerHTML = "Resultado: " + marcaVogais(inputText.value);
    });

    function marcaVogais(text) {
        let vowels = ['a', 'e', 'i', 'o', 'u'];
        let letters = text.split("");
        let markedVoewls = [];

        letters.map( function (letter) { 
            if(vowels.includes(letter)) // verifica se no array contém determinada letra
                return `<b>${letter}</b>`; // caso seja vogal irá retornar a letra em negrito
            return letter;
        });
        
        return markedVoewls.push(""); // retorna as vogais marcadas
    }
}

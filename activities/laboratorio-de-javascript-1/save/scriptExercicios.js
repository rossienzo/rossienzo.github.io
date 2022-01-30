window.onload = function () { 
    import './script';
    
    const btn1 = document.getElementById("btn1") ? document.getElementById("btn1") : '';
    const btn2 = document.getElementById("btn2") ? document.getElementById("btn2") : '';
    const btn3 = document.getElementById("btn3") ? document.getElementById("btn3") : '';
    const btn4 = document.getElementById("btn4") ? document.getElementById("btn4") : '';

    const inputText = document.getElementById("inputText") ? document.getElementById("inputText") : '';
    const entry = document.getElementById("entry") ? document.getElementById("entry") : '';
    const result = document.getElementById("result") ? document.getElementById("result") : '';
  
    
    if(btn1 != '')
    {
        btn1.addEventListener("click", function() {
            entry.innerHTML = "Entrada: " + inputText.value;
            result.innerHTML = "Resultado: " + inverterTexto(inputText.value);
        });
    }

    if(btn2 != '')
    {
        btn2.addEventListener("click", function() {
            entry.innerHTML = "Entrada: " + inputText.value;
            result.innerHTML = "Resultado: " + marcaVogais(inputText.value);
        });
    }

    if(btn3 != '')
    {
        btn3.addEventListener("click", function() {
            entry.innerHTML = "Entrada: " + inputText.value;
            result.innerHTML = "Resultado: ";
            let data = palavrasRepedidas(inputText.value);
            montaTabela(data, result);
        });
    }

    if(btn4 != '')
    {
        btn4.addEventListener("click", function() {
            entry.innerHTML = "Entrada: " + inputText.value;
            result.innerHTML = "Resultado: ";
            let data = palavraMaisRepetida(inputText.value);
            montaTabela(data, result);
        });
    }

    console.log(btn3)
}
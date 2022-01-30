window.onload = function () { 

    const inputText = document.getElementById("inputText") ? document.getElementById("inputText") : '';
    const btn = document.getElementById("btn") ? document.getElementById("btn") : '';
    const entry = document.getElementById("entry") ? document.getElementById("entry") : '';
    const result = document.getElementById("result") ? document.getElementById("result") : '';
  
    btn.addEventListener("click", function() {
        entry.innerHTML = "Entrada: " + inputText.value;
        result.innerHTML = "Resultado: ";
        let data = palavraMaisRepetida(inputText.value);
        montaTabela(data, result);
    });

    function transformaEmPalavras(text)
    {
        // Remove os caracteres especiais do texto
        let words = text.toLowerCase().replace(/[.,]\s/g, " ");
        return words.split(" "); // transforma em array de palavras
    }

    // Calcula a palavra que mais se repete
    function palavraMaisRepetida(text)
    {
        let repeatedWords = palavrasMaisUsadas(text);

        // caso haja palavras com o mesmo número de repetição será salvo no array
        let mostRepeated = {words: [], counts: []};
        let repeated = 2; // filtro de repetição
   
        for(let i = 0; i < repeatedWords.words.length; i++)
        {
            if(repeatedWords.counts[i] >= repeated)
            {
                repeated = repeatedWords.counts[i];// novo filtro de repetição

                // adiciona o nome e o número de repetições da variável no array
                mostRepeated.words.push(repeatedWords.words[i]);
                mostRepeated.counts.push(repeatedWords.counts[i]);
            }
        }

        return mostRepeated;
    }

    function palavrasMaisUsadas(text) {
        let words = transformaEmPalavras(text);
        
        // objeto que armazena as palavras e o número de repetições
        let repeatedWords = { words: [], counts: [] }; 
        
        words.forEach(word => {
            let count = 0;

            for(let i = 0; i < words.length; i++)
            // se as palavras forem iguais, irá incrementar o número de vezes que ela aparece
                if(words[i] == word && !words[i].includes(" ")) 
                    count++;

                // Caso a palavra não se repita, ela será colocada no array
                if(count > 0 && !repeatedWords.words.includes(word)) 
                {
                    repeatedWords.words.push(word);
                    repeatedWords.counts.push(count);
                }
        });

        return repeatedWords;
    }

    function montaTabela(obj, docElement)
    {
        // Cria os elementos da tabela
        let table = document.createElement("table");
        let thead = document.createElement("thead");
        let tbody = document.createElement("tbody");
        
        // Table Head
        let row1 = document.createElement("tr");
        let heading1 = document.createElement("th");
        let heading2 = document.createElement("th");
        heading1.innerHTML = "Palavras";
        heading2.innerHTML = "Número de repetições";

        // Adiciona o título da tabela da coluna 1 e 2
        row1.appendChild(heading1);
        row1.appendChild(heading2);
        thead.appendChild(row1);

        // Table Body
        // Cria as colunas e linhas do corpo da tabela
        for(let i = 0; i < obj.words.length; i++)
        {
            let tr = document.createElement("tr");
            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            
            // adiciona os dados no HTML
            td1.innerHTML = obj.words[i];
            td2.innerHTML = obj.counts[i];
            tr.appendChild(td1);
            tr.appendChild(td2);
            tbody.appendChild(tr);
        }

        //adiciona o cabeçalho e o corpo da tabela
        table.appendChild(thead);
        table.appendChild(tbody);

        // adiciona a tabela no document passado pelo parâmetro
        docElement.appendChild(table);
    }
}

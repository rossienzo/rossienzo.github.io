window.onload = function () { 

    const inputText = document.getElementById("inputText") ? document.getElementById("inputText") : '';
    const btn = document.getElementById("btn") ? document.getElementById("btn") : '';
    const entry = document.getElementById("entry") ? document.getElementById("entry") : '';
    const result = document.getElementById("result") ? document.getElementById("result") : '';
  
    btn.addEventListener("click", function() {
        entry.innerHTML = "Entrada: " + inputText.value;
        result.innerHTML = "Resultado: ";
        let data = palavrasRepedidas(inputText.value);
        montaTabela(data, result);
    });
    

    // Remove os caracteres especiais do texto
    function removeCaracteresEspeciais(text)
    {
        return text.toLowerCase().replace(/[.,]\s/g, " ");
    }
 
    function palavrasRepedidas(text) {
        let words = removeCaracteresEspeciais(text);
        words = words.split(" "); // transforma em array de palavras
        
        // objeto que armazena as palavras e o número de repetições
        let tableRepeated = { words: [], counts: [] }; 
        
        
        words.forEach(word => {
            let count = 0;

            for(let i = 0; i < words.length; i++)
            // se as palavras forem iguais, irá incrementar o número de vezes que ela aparece
                if(words[i] == word && !words[i].includes(" ")) 
                    count++;

                // Caso a palavra não se repita, ela será colocada no array
                if(count > 0 && !tableRepeated.words.includes(word)) 
                {
                    tableRepeated.words.push(word);
                    tableRepeated.counts.push(count);
                }
        });

        return tableRepeated;
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

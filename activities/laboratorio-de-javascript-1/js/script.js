window.onload = function () { 
    
    // Botões de ativação dos exercícios
    const btn1 = document.getElementById("btn1") ? document.getElementById("btn1") : '';
    const btn2 = document.getElementById("btn2") ? document.getElementById("btn2") : '';
    const btn3 = document.getElementById("btn3") ? document.getElementById("btn3") : '';
    const btn4 = document.getElementById("btn4") ? document.getElementById("btn4") : '';
    const btn5 = document.getElementById("btn5") ? document.getElementById("btn5") : '';
    const btn6 = document.getElementById("btn6") ? document.getElementById("btn6") : '';
    const btn7 = document.getElementById("btn7") ? document.getElementById("btn7") : '';
    const btn8 = document.getElementById("btn8") ? document.getElementById("btn8") : '';
    const btn9 = document.getElementById("btn9") ? document.getElementById("btn9") : '';
    const btn10 = document.getElementById("btn10") ? document.getElementById("btn10") : '';

    // Entrada e saída de dados dos exercícios
    const entry = document.getElementById("entry") ? document.getElementById("entry") : '';
    const result = document.getElementById("result") ? document.getElementById("result") : '';

    // Exercício 1, 2, 3, 4, 5
    const inputText = document.getElementById("inputText") ? document.getElementById("inputText") : '';
    
    // Exercício 5
    const inputTextSearch = document.getElementById("inputTextSearch") ? document.getElementById("inputTextSearch") : '';
    const inputTextChange = document.getElementById("inputTextChange") ? document.getElementById("inputTextChange") : '';

    // Exercício 6, 7, 8
    const inputDate1 = document.getElementById("inputDate1") ? document.getElementById("inputDate1") : '';
    const inputDate2 = document.getElementById("inputDate2") ? document.getElementById("inputDate2") : '';

    // Exercício 9
    const inputTextarea = document.getElementById("inputTextarea") ? document.getElementById("inputTextarea") : '';

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
            let data = palavrasMaisUsadas(inputText.value);
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

    if(btn5 != '')
    {
        btn5.addEventListener("click", function() {
            entry.innerHTML = "Entrada: " + inputText.value;
            result.innerHTML = "Resultado: " + subistituiTexto(inputText.value, inputTextSearch.value, inputTextChange.value);
        });
    }

    if(btn6 != '')
    {
        btn6.addEventListener("click", function() {
            entry.innerHTML = "Entrada: " + inputDate1.value;
            
            if(diasDeVida(inputDate1.value))
                result.innerHTML = `Resultado: ${diasDeVida(inputDate1.value)} dia(s).`;
            else
                result.innerHTML = "Resultado: Data inválida!";
        });
    }

    if(btn7 != '')
    {
        btn7.addEventListener("click", function() {
            entry.innerHTML = "Entrada: " + dataFormatoBR(inputDate1.value);
            result.innerHTML = "Resultado: " + dataPorExtenso(inputDate1.value);
        });
    }

    if(btn8 != '')
    {
        btn8.addEventListener("click", function() {
            entry.innerHTML = "Entrada: <br>Data 1: " + dataFormatoBR(inputDate1.value) + "<br>Data 2: " + dataFormatoBR(inputDate2.value);
            result.innerHTML = `Resultado: ${distanciaEmSemanas(inputDate1.value, inputDate2.value)} semana(s).`;
        });
    }

    if(btn9 != '')
    {
        btn9.addEventListener("click", function() {
            let textResult = classificaTexto(inputTextarea.value);

            // Define a mensagem e a cor do box
            result.innerHTML = `Resultado: ${textResult.msg}`;
            result.style.border = `1px solid ${textResult.color}`;
            result.style.color = textResult.color;
        });
    }

    if(btn10 != '')
    {
        btn10.addEventListener("click", function() {
            entry.innerHTML = "Entrada: " + inputText.value;
            result.innerHTML = "Resultado: " + aplicaCriptografiaTenisPolar(inputText.value);
        });
    }

    /***********************
     ******** Functions ****
     */

    /*
     * 1
     */

    function inverterTexto(text)
    {
        let letters = text.split(""); // transforma o texto em array de letras
        let invertedLetters = letters.reverse(); // inverte a primeira posição do do array pela última e etc...
        let invertedText = invertedLetters.join(""); // junta os elementos de um arry e transforma em string
        return invertedText;
    }

    /*
     * 2
     */

    function marcaVogais(text) {
        let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
        let letters = text.split("");

        let boldVowels = letters.map( function (letter) { 
            if(vowels.includes(letter)) // verifica se no array contém determinada letra
                return `<b>${letter}</b>`; // caso seja vogal irá retornar a letra em negrito
            return letter;
        });

        return boldVowels.join(""); // junta os elementos do array e transforma em string
    }

    /*
     * 3 e 4
     */

    function transformaEmPalavras(text)
    {
        // Remove os caracteres especiais do texto
        let words = text.toLowerCase().replace(/[.,]\s/g, " ");
        return words.split(" "); // transforma em array de palavras
    }

    /*
     * 3
     */

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

    /*
     * 3 e 4
     */

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

    /*
     * 4
     */

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

    /*
     * 5
     */

    function subistituiTexto(text, wordTosearch, newWord)
    {
        return text.replaceAll(wordTosearch, newWord); // busca cada palavra do texto  e substitui pela nova
    }

    /**
     * 6
     */

    // retorna o número de dias que a pessoa já viveu
    function diasDeVida(date)
    {
        const oneDay = 1000 * 60 * 60 * 24; // equivalência de um dia
        let birth = subistituiTexto(date, '-', '/'); // converte o ano para o modelo EUA
        
        // converte para objeto de Date
        birth = new Date(birth); 
        let dateNow = new Date(dataAtual());

        // tempo em milissegundos
        birth = birth.getTime(); 
        dateNow = dateNow.getTime();

        // calcula a diferença
        let diference = dateNow - birth;

        if(diference < 0)
            return false;
        else
            return diference / oneDay; // converte os segundos para dias
        
    }

    // formata a data para o dia atual
    function dataAtual(format = 'eua'){
        let dateNow = new Date(),
            day  = dateNow.getDate().toString(),
            dayFormated = (day.length == 1) ? '0' + day : day,
            month  = (dateNow.getMonth()+1).toString(),
            monthFormated = (month.length == 1) ? '0' + month : month,
            yearFormated = dateNow.getFullYear();

        // retorna no formato BR ou EUA
        if(format == 'br' || format == 'BR')
            return (dayFormated  + "/" + monthFormated + "/"+ yearFormated);
        else
            return (yearFormated  + "/" + monthFormated + "/"+ dayFormated);
    }

    /**
     * 7
     */

    // formata a entrada para 
     function dataFormatoBR(date)
     {
         let dateSplited = date.split("-");
         let day = dateSplited[2];
         let month = dateSplited[1];
         let year = dateSplited[0];
         return day + "/" + month + "/" + year;
     }

     // retorna uma data escrita por extenso
    function dataPorExtenso(date)
    {
        let dateSplited = date.split("-"); // quebra a string em um array
        let day = dateSplited[2];
        let month = dateSplited[1];
        let year = dateSplited[0];

        switch (month) {
            case '01':
                return `${day} de janeiro de ${year}`;
                break;
            case '02':
                return `${day} de fevereiro de ${year}`;
                break;
            case '03':
                return `${day} de março de ${year}`;
                break;
            case '04':
                return `${day} de abril de ${year}`;
                break;
            case '05':
                return `${day} de maio de ${year}`;
                break;
            case '06':
                return `${day} de junho de ${year}`;
                break;
            case '07':
                return `${day} de julho de ${year}`;
                break;
            case '08':
                return `${day} de agosto de ${year}`;
                break;
            case '09':
                return `${day} de setembro de ${year}`;
                break;
            case '10':
                return `${day} de outubro de ${year}`;
                break;
            case '11':
                return `${day} de novembro de ${year}`;
                break;
            case '12':
                return `${day} de dezembro de ${year}`;
                break;                                
            default:
                return "mês inválido";
                break;
        }
    }

    /**
     * 8
     */

    // calcula a diferença entre duas datas e retorna em semanas
    function distanciaEmSemanas(date1, date2)
    {
        const oneDay = 1000 * 60 * 60 * 24; // equivalência de um dia

        // converte para milissegundos
        date1 = new Date(date1).getTime();
        date2 = new Date(date2).getTime();
        
        let diference = 0;
        
        if(date1 >= date2)
            diference = date1 - date2;
        else
            diference = date2 - date1;

        let weeks = (diference / oneDay) / 7;
        return weeks.toFixed(0);
    }

    /**
     * 9
     */
    
    function classificaTexto(text)
    {
        if(contemNumero(text) && verificaCaractere(text) && 
           verificaCaractere(text, "uppercase") && verificaCaracteresEspeciais(text))
            return {msg: "Forte", color: "green"}
        else if(contemNumero(text) && verificaCaractere(text) && verificaCaractere(text, "uppercase"))
            return {msg: "Moderado", color: "yellow"}
        else if(text == text.toLowerCase() || text == text.toUpperCase())
            return {msg: "Fraco", color: "red"}
        else 
            return {msg: "Fraco", color : "red"}
    }

    // verifica se o texto contem numero
    function contemNumero(text)
    {
        for(let i = 0; i < text.length; i++)
            if(!isNaN(text.charAt(i)) && text.charAt(i) != " ")
                return true;
    }

    // Verifica se o texto tem minusculo ou maiusculo
    function verificaCaractere(text, typeCase = "smallcase")
    {
        if (typeCase == "uppercase")
            for(let i = 0; i < text.length; i++)
                if(text.charAt(i) >= 'a' && text.charAt(i) <= 'z')
                    return true;
        if (typeCase == "smallcase")
            for(let i = 0; i < text.length; i++)
                if(text.charAt(i) >= 'a' && text.charAt(i) <= 'z')
                    return true;
    }

    // Verifica se existe caracteres especiais no texto
    function verificaCaracteresEspeciais(text)
    {
        // Regex com caracteres especiais
        const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        return specialChars.test(text);
    }

    /**
     * 10
     */

    // aplica a criptografia TENIS/POLAR para cada letra envolvida
    function aplicaCriptografiaTenisPolar(text)
    {
        let encryptedMessage = "";
        let letters = text.split(""); // Quebra em array de letras
        letters.map(letter => {
            encryptedMessage += criptografiaTenisPolar(letter);
        });
        return encryptedMessage;
    }

    // Substitui as letras na forma TENIS/POLAR
    function criptografiaTenisPolar(letter)
    {
        switch (letter) {
            case 't' || 'T':
                if(letter == 't')
                    return 'p';
                return 'P';
            case 'p' || 'P':
                if(letter == 'p')
                    return 't';
                return 'T';
            case 'e' || 'E':
                if(letter == 'e')
                    return 'o';
                return 'O';
            case 'o' || 'O':
                if(letter == 'o')
                    return 'e';
                return 'E'
            case 'n' || 'N':
                if(letter == 'n')
                    return 'l';
                return 'L';
            case 'l' || 'L':
                if(letter == 'l')
                    return 'n';
                return 'N';
            case 'i' || 'I':
                if(letter == 'i')
                    return 'a';
                return 'A';
            case 'a' || 'A':
                if(letter == 'a')
                    return 'i';
                return 'I';
            case 's' || 'S':
                if(letter == 's')
                    return 'r';
                return 'R';
            case 'r' || 'R':
                if(letter == 'r')
                    return 's';
                return 'S';
            default:
                return letter;
        }
    }
}


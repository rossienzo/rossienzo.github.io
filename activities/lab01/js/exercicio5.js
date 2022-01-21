
// Verifica se o número é primo
function ePrimo(num)
{
    for(let i = 2; i < num; i++)
    {
        if (num % i == 0)
            return false;
    }

    return true;
}

// Imprime os números primos no console
function imprimePrimos(inicio, fim)
{
    for(let i = inicio; i <= fim; i++)
        if(ePrimo(i)) console.log(i);
}

imprimePrimos(2, 1000);
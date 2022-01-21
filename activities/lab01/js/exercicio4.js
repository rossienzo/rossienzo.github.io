
// Calcula a sequência de Fibonacci
function calculaFibonacci(num)
{
    let numAnterior = 0, proxNum = 1, soma;

    for(let i = 1; i <= num; i++)
    {
        console.log(`Fibo de ${i}: ${numAnterior}`);
        soma = numAnterior + proxNum;
        numAnterior = proxNum;
        proxNum = soma;
    }
}

calculaFibonacci(100);

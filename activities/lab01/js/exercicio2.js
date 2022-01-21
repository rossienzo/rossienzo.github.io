
// Potência de um numero repetido n vezes
function potenciaNVezes(num1, num2)
{
    for(let i = 1; i <= num2; i++)
        console.log(`Resultado de ${num1}^${i} = ${Math.pow(num1, i)}`);
}

potenciaNVezes(4, 30);

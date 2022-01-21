
// Pares positivos em n
function paresPositivos(num)
{
    let total = 0;
    
    for(let i = 0; i <= num; i++)
    {
        if((i % 2) == 0)
            total += i; 
    }
    console.log(`A soma de todos os pares de ${num} é: ${total}`);
}

paresPositivos(1000);
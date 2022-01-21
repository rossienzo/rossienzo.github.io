
// fatorial de um número
function fatorial(num)
{
    if(num == 0)
        return 1;
    else if(num < 0)
        return "Entrada inválida!";
    else
        return num * fatorial(num - 1);
}

console.log("Resultado: " + fatorial(12));



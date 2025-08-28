let alunos = []
let studentAmount = prompt("Quantos alunos temos?")
while (parseInt(studentAmount) < 0 || isNaN(parseInt(studentAmount)) || (parseInt(studentAmount)) !== (parseFloat(studentAmount)))
{
    studentAmount = prompt("Input Inválido. Quantos alunos temos?")
}

studentAmount = parseInt(studentAmount)

for (counter = 0; counter < studentAmount; counter++)
{
    let nome = prompt(`Qual o nome do ${counter+1}º aluno?`);
    let notap1 = prompt(`Qual a nota do ${counter+1}º aluno na P1?`);    
    while (parseFloat(notap1) < 0 || parseFloat(notap1) > 10 || isNaN(parseInt(notap1)))
    {
        notap1 = prompt(`Input Inválido. Qual a nota do ${counter+1}º aluno na P1?`);   
    }

    let notap2 = prompt(`Qual a nota do ${counter+1}º aluno na P2?`);
    while (parseFloat(notap2) < 0 || parseFloat(notap2) > 10 || isNaN(parseInt(notap2)))
    {
        notap2 = prompt(`Input Inválido. Qual a nota do ${counter+1}º aluno na P2?`);   
    }

    let media = ((parseFloat(notap1) + parseFloat(notap2))/2);

    if (media < 4)
        situacao = "Reprovado"
    else if (media >= 4 && media < 6)
        situacao = "Em recuperação"
    else
        situacao = "Aprovado"
    
    alunos.push(`Aluno: ${nome}<br>Nota P1: ${notap1}<br>Nota P2: ${notap2}<br>Média: ${media}<br>Situação: ${situacao}<br><br>`)
}

document.write(`${alunos.join('')}`)

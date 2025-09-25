class ContaBancaria {
  // A propriedade também é privada. Ninguém de fora pode ver ou alterar o saldo diretamente.
  #saldo;
  #senha;

  constructor(saldoInicial, senha) {
    this.#saldo = saldoInicial;
    this.#senha = senha;
  }

  // >>> MÉTODO PRIVADO <<<
  // Começa com #. Só pode ser chamado aqui de dentro.
  // Sua função é apenas validar, uma tarefa interna.
  #validarSenha(senhaDigitada) {
    return this.#senha === senhaDigitada;
  }

  // >>> MÉTODO PÚBLICO <<<
  // Esta é a interface para o usuário.
  sacar(valor, senha) {
    // 1. O método público CHAMA o método privado para fazer a validação.
    if (!this.#validarSenha(senha)) {
      console.error("ERRO: Senha incorreta!");
      return; // Para a execução
    }

    if (valor > this.#saldo) {
      console.error("ERRO: Saldo insuficiente!");
      return;
    }

    this.#saldo -= valor;
    console.log(`Saque de R$${valor} realizado. Novo saldo: R$${this.#saldo}`);
  }

  // Outro método público para acessar uma informação de forma segura.
  consultarSaldo(senha) {
    if (this.#validarSenha(senha)) {
      console.log(`Seu saldo é R$${this.#saldo}.`);
    } else {
      console.error("ERRO: Senha incorreta!");
    }
  }
}

// --- Uso ---
const minhaConta = new ContaBancaria(1000, "segredo");

// Chamando o método público (forma correta)
minhaConta.sacar(200, "segredo"); // Saída: Saque de R$200 realizado. Novo saldo: R$800
minhaConta.sacar(200, "segre4o"); // Saída: Saque de R$200 realizado. Novo saldo: R$800
minhaConta.sacar(1000, "segredo"); // Saída: Saque de R$200 realizado. Novo saldo: R$800
minhaConta.sacar(2000, "segredo"); // Saída: Saque de R$200 realizado. Novo saldo: R$800

// Tentando chamar o método privado de fora...
try {
  //minhaConta.#validarSenha("segredo");
} catch (error) {
  // ISSO VAI DAR ERRO! E é exatamente o que queremos.
  console.error("Tentativa de acesso falhou:", error.message);
}

// Tentando acessar a propriedade privada diretamente...
try {
    //console.log(minhaConta.#saldo); // Também vai dar um erro!
} catch (error) {
  console.error("Tentativa de acesso falhou:", error.message);
}

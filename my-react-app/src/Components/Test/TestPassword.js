export default function PasswordCheck(senha, confirmacao) {
    // Verifica se a confirmação de senha é igual à senha original
    if (senha !== confirmacao) {
      return "As Senhas Não São Iguais";
    }
  
    // Verifica se a senha atende aos requisitos
    if (senha.length < 8) {
      return "Senha Precisa Ter 8 ou mais caracteres";
    }
    if (!/[A-Z]/.test(senha)) {
      return "Senha precisa ter ao menos uma letra maiuscula";
    }
    if (!/[a-z]/.test(senha)) {
      return "Senha precisa ter ao menos uma letra minuscula";
    }
    if (!/[0-9]/.test(senha)) {
      return "Senha precisa ter ao menos um numero";
    }
    if (!/[!@#$%^&*()-_=+\[\]{};:'"\\|,.<>/?`~]/.test(senha)) {
      return "Senha precisa ter um caracter especial";
    }
  
    // Se todos os requisitos forem atendidos, retorna true
    return true;
  }
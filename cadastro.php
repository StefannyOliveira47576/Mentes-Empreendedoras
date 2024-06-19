<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Capturar os dados do formulário
    $nome = htmlspecialchars($_POST['nome']);
    $email = htmlspecialchars($_POST['email']);
    $senha = password_hash($_POST['senha'], PASSWORD_DEFAULT);
    $telefone = htmlspecialchars($_POST['telefone']);
    
    // Armazenar os dados (exemplo: em um arquivo)
    $data = "$nome, $email, $senha, $telefone\n";
    file_put_contents("cadastros.txt", $data, FILE_APPEND);

    // Enviar email de confirmação
    $to = $email;
    $subject = "Confirmação de Cadastro";
    $message = "Olá $nome,\n\nObrigado por se cadastrar. Aqui estão seus dados:\n\nNome: $nome\nEmail: $email\nTelefone: $telefone\n\nAtenciosamente,\nEquipe";
    $headers = "From: no-reply@seusite.com";

    if (mail($to, $subject, $message, $headers)) {
        echo "Cadastro realizado com sucesso. Um email de confirmação foi enviado.";
    } else {
        echo "Ocorreu um erro ao enviar o email de confirmação.";
    }
} else {
    echo "Método de requisição inválido.";
}
?>

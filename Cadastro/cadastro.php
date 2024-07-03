<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Capturar os dados do formulário
    $nome = htmlspecialchars($_POST['nome']);
    $email = htmlspecialchars($_POST['email']);
    $senha = password_hash($_POST['senha'], PASSWORD_DEFAULT);
    $telefone = htmlspecialchars($_POST['telefone']);
    
    // Armazenar os dados (exemplo: em um arquivo)
    $data = "$nome, $email, $senha, $telefone\n";
    
    if (file_put_contents("cadastros.txt", $data, FILE_APPEND)) {
        echo json_encode(["status" => "success", "message" => "Cadastro realizado com sucesso."]);
    } else {
        echo json_encode(["status" => "error", "message" => "Ocorreu um erro ao salvar os dados."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Método de requisição inválido."]);
}
?>

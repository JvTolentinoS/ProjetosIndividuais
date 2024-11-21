<?php
session_start();

include('conexao.php');

$loginError = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = htmlspecialchars($_POST['username'], ENT_QUOTES, 'UTF-8');
    $password = $_POST['password'];

    try {
        // Consulta no banco para pegar o usuário e senha
        $sql = "SELECT * FROM user WHERE username = :username";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':username', $username);
        $stmt->execute();

        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user) {
            // Comparação simples de senha
            if ($password === $user['password']) {
                $_SESSION['user_id'] = $user['id'];
                $_SESSION['username'] = $user['username'];

                header("Location: index.php");
                exit();
            } else {
                $loginError = 'Usuário ou Senha incorretos';
            }
        } else {
            $loginError = 'Usuário não encontrado';
        }
    } catch (PDOException $e) {
        $loginError = 'Erro ao se conectar';
    }
}
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/mainstyle.css">
    <script src="/script/script.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet">
    <title>Portfólio</title>
</head>
<body>
    <div class="main-login">
        <div class="main-content-login">
            <div class="h2-login">
                <h2>Login</h2>
            </div>
            <div class="form-container">
                <form action="" method="post">
                    <div class="content-login-1">
                        <label for="username">Usuário</label>
                        <input placeholder="Nome de Usuário" class="input-numero" type="text" id="username" name="username" required>
                        <br>
                        <label for="password">Senha</label>
                        <input placeholder="Senha" class="input-numero" type="password" id="password" name="password" required>
                    </div>
                    <p id="alerta"><?php echo $loginError; ?></p>
                    <button class="input-enviar" type="submit">Entrar</button>
                </form>
            </div>
        </div>
    </div>
</body>
</html>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Consulta</title>
</head>
<body>
    <h1>Consulta cadastro</h1>
    <form method="GET" action="">
        <input type="text" name="parametro" placeholder="Nome"/><br><br>
        <button type="submit">Consultar</button><br><br>
    </form>
    
    <?php
    
    if(isset($_GET["parametro"])) {
        $parametro = $_GET["parametro"];

        
        $mysqli = new mysqli(
            "localhost",
            "root",
            "unisuam123",
            "aula1"
        );

        
        if ($mysqli->connect_errno){
            echo "Erro ao se conectar (".$mysqli->connect_errno.")";
            exit();
        }

        
        $query = "SELECT * FROM cadastro WHERE nome LIKE '%$parametro%' ORDER BY nome";

        
        if($result = $mysqli->query($query)){
            
            while($linha = $result->fetch_assoc()){
                echo "<p>Id: " . $linha['idconsulta'] . "</p>";
                echo "<p>Nome: " . $linha['nome'] . "</p>";
                echo "<p>CPF: " . $linha['cpf'] . "</p>";
                echo "<p>Número do celular: " . $linha['numero'] . "</p>";
                echo "<h2>Endereço:</h2>";
                echo "<p>Rua: " . $linha['rua'] . "</p>";
                echo "<p>Cep: " . $linha['cep'] . "</p>";
                echo "<p>Nº: " . $linha['numero'] . "</p>";
                echo "<p>UF: " . $linha['uf'] . "</p>";
            }
            
            $result->free();
        } else {
            
            echo "Erro na consulta: " . $mysqli->error;
        }

        
        $mysqli->close();
    }

    ?>
    <h1>Adicionar cadastro</h1>
    <form method="POST" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
        <input type="text" placeholder="id" name='id'/>
        <input type="text" placeholder="Nome" name='nome'/><br><br>
        <input type="text" placeholder="cpf" name='cpf'/>
        <input type="text" placeholder="CELULAR"name='numero'/><br><br>
        <input type="text" placeholder="RUA"name='rua'/>
        <input type="text" placeholder="CEP"name='cep'/><br><br>
        <input type="text" placeholder="RJ"name='uf'/><br>
        <button type='submit'>Cadastrar</button>
    </form>
    <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            
            $id = $_POST["id"];
            $nome = $_POST["nome"];
            $cpf = $_POST["cpf"];
            $numero = $_POST["numero"];
            $rua = $_POST["rua"];
            $cep = $_POST["cep"];
            $uf = $_POST["uf"];
        
            
            $mysqli = new mysqli("localhost", "root", "unisuam123", "aula1");
        
            if ($mysqli->connect_errno) {
                echo "Erro ao se conectar (" . $mysqli->connect_errno . ")";
                exit();
            }
        
        
            $query = "INSERT INTO cadastro (idconsulta, nome, cpf, numero,rua, cep, uf) VALUES ('$id', '$nome', '$cpf', '$numero','$rua', '$cep', '$uf')";
        
            
            if ($mysqli->query($query) === TRUE) {
                echo "Cadastro adicionado com sucesso!";
                echo "<br><br>Nome: $nome <br> cpf: $cpf <br> Celular: $numero <br> Rua: $rua <br> CEP: $cep <br> Uf: $uf";
            } else {
                echo "Erro ao adicionar cadastro: " . $mysqli->error;
            }
    

            $mysqli->close();
        }
        ?>
         



</body>
</html>


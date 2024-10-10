<?php
  // Conexão com o banco de dados
  $servername = "localhost:8080";
  $username = "root";
  $password = "usbw";
  $database = "react_localhost";

  $conn = new mysqli($servername, $username, $password, $database);

  // Verificar conexão
  if ($conn->connect_error) {
    die("A conexão falhou: " . $conn->connect_error);
  }

  // Verificar o método de requisição
  $method = $_SERVER['REQUEST_METHOD'];

  switch ($method) {
    case 'POST':
      // Lógica para lidar com requisições POST do React
      $name = $_POST['name'];
      $email = $_POST['email'];
      $password = $_POST['password'];

      // Inserir dados no banco de dados
      $sql = "INSERT INTO users (name, email, password) VALUES ('$name', '$email', '$password')";
      if ($conn->query($sql) === TRUE) {
        echo json_encode(array('message' => 'Dados salvos com sucesso'));
      } else {
        echo json_encode(array('message' => 'Erro ao salvar dados'));
      }
      break;
  }

  $conn->close();
?>
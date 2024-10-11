-- Criação da tabela 'Users'
CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(16) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(32) NOT NULL,
    create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Criação da tabela 'Tasks'
CREATE TABLE Tasks (
    idTasks INT AUTO_INCREMENT PRIMARY KEY,
    Task_Name VARCHAR(60) NOT NULL,
    Task_description VARCHAR(45),
    task_status TINYINT NOT NULL,
    task_create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    Users_id INT,
    FOREIGN KEY (Users_id) REFERENCES Users(id) ON DELETE CASCADE
);

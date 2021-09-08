CREATE DATABASE coronagency;
USE coronagency;

CREATE TABLE users
(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(20),
    email VARCHAR(60),
    password VARCHAR(100)
);

INSERT INTO users (name, email, password) VALUES ('user', 'user@mail.com', 'mdp');
-- Active: 1705367913692@@127.0.0.1@5432@tbl_videojuegos@public
CREATE TABLE tbl_videjuegos
(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(30),
    desarrollador VARCHAR(30),
    Registrado TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
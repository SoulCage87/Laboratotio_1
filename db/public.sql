-- Active: 1705367913692@@127.0.0.1@5432@tbl_videojuegos@public
CREATE TABLE tbl_videjuegos
(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(30),
    desarrollador VARCHAR(30),
    Registrado TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO tbl_videjuegos
(nombre, desarrollador)
VALUES
('Sonic','SEGA'),
('Mario Bros','Nintendo'),
('Five Nights at Freddys','Scott Cawthon');

SELECT * from tbl_videjuegos

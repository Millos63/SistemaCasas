CREATE DATABASE SistemaCasas;
USE SistemaCasas;
CREATE TABLE LandLords(
    idLandLord INT(6) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    firstName VARCHAR (50),
    lastName VARCHAR(100),
    email VARCHAR(256),
    phoneNumber VARCHAR(60)
);


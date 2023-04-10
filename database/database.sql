CREATE DATABASE SistemaCasas;
USE SistemaCasas;


CREATE TABLE LandLords(
    idLandLord INT(6) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    firstName VARCHAR (50),
    lastName VARCHAR(100),
    email VARCHAR(256),
    phoneNumber VARCHAR(60)
);

CREATE TABLE Properties(
    idProperty INT(6) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    propertyType VARCHAR(255),
    streetAddress VARCHAR(255),
    city VARCHAR(255),
    stateProvince VARCHAR(255),
    zipCode VARCHAR(10),
    price FLOAT(12,2),
    numBedrooms INT,
    numBathrooms FLOAT,
    landMeters INT,
    constructionMeters INT,
    photo VARCHAR(1000),
    garageSize INT,
    sisternSize INT,
    bonus VARCHAR(1000)
);

CREATE TABLE Advisors(
    idAdvisor INT(6) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    firstName VARCHAR(50),
    lastName VARCHAR(100),
    email VARCHAR(256),
    phoneNumber VARCHAR(60),
    notes VARCHAR(1000)
);

CREATE TABLE LandLordsProperties(
    idLandLord INT,
    idProperty INT,
    isLandLord BOOLEAN,
    FOREIGN KEY (idLandLord) REFERENCES LandLords(idLandLord),
    FOREIGN KEY (idProperty) REFERENCES Properties(idProperty)
);


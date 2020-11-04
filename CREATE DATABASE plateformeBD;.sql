CREATE DATABASE plateformeBD;

USE plateformeBD;


CREATE TABLE agent (
    idAg int NOT NULL AUTO_INCREMENT,
	codeAg Varchar(4) NOT NULL,
    nomUtilisateur Varchar(50) NOT NULL,
    motDePasse Varchar(50) NOT NULL,
    PRIMARY KEY (idAg)
)ENGINE=INNODB;

CREATE TABLE compteFormateur (
    idFor int NOT NULL AUTO_INCREMENT,
    codeFor Varchar(4) NOT NULL,
    nomFor Varchar(50) NOT NULL,
    motDePasseFor Varchar(50) NOT NULL,
    idAg int NOT NULL,
    PRIMARY KEY (idFor)
)ENGINE=INNODB;

ALTER TABLE compteFormateur ADD CONSTRAINT FK_idAg FOREIGN KEY (idAg) REFERENCES agent(idAg);

CREATE TABLE compteApprenant (
    idAp int NOT NULL AUTO_INCREMENT ,
    codeAp Varchar(4) NOT NULL,
    nomAp Varchar(50) NOT NULL,
    motDePasseAp Varchar(50) NOT NULL,
    idAg int NOT NULL,
    PRIMARY KEY(idAp)
)ENGINE=INNODB;
ALTER TABLE compteApprenant ADD CONSTRAINT FK_idAgAp1 FOREIGN KEY (idAg) REFERENCES agent(idAg);

CREATE TABLE poleFormation (
    idPolFor int NOT NULL AUTO_INCREMENT,
	codePolFor Varchar(4) NOT NULL,
    libellePolFor Varchar(50) NOT NULL,
    idAg int NOT NULL,
    PRIMARY KEY(idPolFor)
)ENGINE=INNODB;

ALTER TABLE poleFormation ADD CONSTRAINT FK_idAg2 FOREIGN KEY (idAg) REFERENCES agent(idAg);

CREATE TABLE formation (
    idFormation int NOT NULL AUTO_INCREMENT,
	codeFormation Varchar(4) NOT NULL,
    libelleFormation Varchar(50) NOT NULL,
    dureeFormation int NOT NULL,
    idPolFor int NOT NULL,
	idAg int NOT NULL,
    PRIMARY KEY(idFormation)
)ENGINE=INNODB;

ALTER TABLE formation ADD CONSTRAINT FK_idPolFor FOREIGN KEY (idPolFor) REFERENCES poleFormation(idPolFor);
ALTER TABLE formation ADD CONSTRAINT FK_idAg3 FOREIGN KEY (idAg) REFERENCES agent(idAg);

CREATE TABLE moduleFormation (
    idModule int NOT NULL AUTO_INCREMENT,
	codeModule Varchar(4) NOT NULL,
    dureeModule Varchar(50) NOT NULL,
    titreModule Varchar(50) NOT NULL,
    contenuModule text NOT NULL,
    idFormation int NOT NULL,
    idFor int NOT NULL,
    PRIMARY KEY(idModule)
)ENGINE=INNODB;
ALTER TABLE moduleFormation ADD CONSTRAINT FK_idFormation2 FOREIGN KEY (idFormation) REFERENCES formation(idFormation);
ALTER TABLE moduleFormation ADD CONSTRAINT FK_idFormateur2 FOREIGN KEY (idFor) REFERENCES compteFormateur(idFor);

CREATE TABLE apprenantModule (
    idModule int NOT NULL,
	idAp int NOT NULL,
)ENGINE=INNODB;
ALTER TABLE apprenantModule ADD CONSTRAINT PK_idApMo PRIMARY KEY (idModule, idAp);
ALTER TABLE apprenantModule ADD CONSTRAINT FK_idModule FOREIGN KEY (idModule) REFERENCES moduleFormation(idModule);
ALTER TABLE apprenantModule ADD CONSTRAINT FK_idAp1 FOREIGN KEY (idAp) REFERENCES compteApprenant(idAp);

CREATE TABLE message (
    idMessage int NOT NULL AUTO_INCREMENT,
    sujetMessage Varchar(255) NOT NULL,
    dateMessage datetime NOT NULL,
    PolFor Varchar(50) NOT NULL,
    PRIMARY KEY(idMessage)
)ENGINE=INNODB;

CREATE TABLE commentaires (
    idpoleTech int NOT NULL AUTO_INCREMENT,
	idMessage int NOT NULL,
    reponse Varchar(255) NOT NULL,
    daterep date NOT NULL,
    PRIMARY KEY(idpoleTech)
)ENGINE=INNODB;

-- ALTER TABLE poleTechnologique ADD CONSTRAINT FK_Idmessage FOREIGN KEY (idMessage) REFERENCES message(idMessage);

-- CREATE TABLE poleTechnologique (
--     idpoleTech int NOT NULL AUTO_INCREMENT,
-- 	idMessage int NOT NULL,
--     reponse Varchar(255) NOT NULL,
--     daterep date NOT NULL,
--     PRIMARY KEY(idpoleTech)
-- )ENGINE=INNODB;
-- ALTER TABLE poleTechnologique ADD CONSTRAINT FK_Idmessage FOREIGN KEY (idMessage) REFERENCES message(idMessage);

-- CREATE TABLE poleGestion(
--     idpoleGes int NOT NULL AUTO_INCREMENT,
--     idMessage int NOT NULL,
--     reponse Varchar(255) NOT NULL,
--     daterep date NOT NULL,
--     PRIMARY KEY(idpoleGes)
-- )ENGINE=INNODB;
-- ALTER TABLE poleGestion ADD CONSTRAINT FK_Idmsg FOREIGN KEY (idMessage) REFERENCES message(idMessage);


-- CREATE TABLE poleAdministratif (
--     idpoleAdmin int NOT NULL AUTO_INCREMENTPRIMARY KEY,
--     idMessage int NOT NULL,
--     reponse Varchar(255) NOT NULL,
--     daterep date NOT NULL,
--     compteUtilisateur Varchar(50) NOT NULL
-- )ENGINE=INNODB;
-- ALTER TABLE poleAdministratif ADD CONSTRAINT FK_Idmsge FOREIGN KEY (idMessage) REFERENCES message(idMessage);

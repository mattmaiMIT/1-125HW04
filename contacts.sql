--  CREATE CONTACTS DB

DROP DATABASE IF EXISTS `contacts`;
CREATE DATABASE IF NOT EXISTS `contacts`;
USE `contacts`;

--  CREATE CONTACTS TABLE

CREATE TABLE `contacts` (
   `FirstName`		varchar (40),
   `LastName`		varchar (40),
   `PhoneNumber`	varchar (40),
   `Email`			varchar (40),
   `University`  	varchar (40),
   `Major`  		varchar (40)
);

--  INSERT INTO CONTACTS
-- INSERT INTO `contacts` VALUES('Peter');

INSERT INTO `contacts` (`FirstName`, `LastName`, `PhoneNumber`, `Email`, `University`, `Major`)
VALUES('Test First Name', 'Test Last Name', '6171234567', 'Test@mit.edu', 'MIT', 'IDM');

-- SELECT * FROM contacts;
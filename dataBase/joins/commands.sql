-- Single-line comments like that
-- Create the database...
CREATE DATABASE animals;
-- ... and choose it
USE animals;
-- First table
CREATE TABLE owners (
  id INTEGER UNSIGNED AUTO_INCREMENT,
  name VARCHAR(50),
	PRIMARY KEY(id)
);
-- Insert data into the table
INSERT INTO owners (name) VALUES
  ('Cheng Chui Ping'),
	('Jacquotte Delahaye'),
	('Anne Dieu-le-Veut'),
	('Ching Shih');
-- Second table
CREATE TABLE emails (
  id INTEGER UNSIGNED AUTO_INCREMENT,
	email VARCHAR(50),
	person INTEGER UNSIGNED,
	FOREIGN KEY(person) REFERENCES owners(id),
	PRIMARY KEY(id)
);
-- Populate with data
INSERT INTO emails (email, person) VALUES
  ('cheng@pingping.com', 1),
	('anne@wherever.com', 3),
	('someone@annesplace.com', 3),
	('ching@example.com', 4),
	('jacquotte@tornet.com', 2);
-- Third table
CREATE TABLE pets (
  id INTEGER UNSIGNED AUTO_INCREMENT,
  name VARCHAR(20),
	species VARCHAR(20),
	owner INTEGER UNSIGNED,
	FOREIGN KEY(owner) REFERENCES owners(id),
	PRIMARY KEY(id)
);
-- Enter data
INSERT INTO pets (name, species, owner) VALUES
  ('Fafner', 'dragon', 3),
	('Errol', 'cat', 2),
	('Glaurung', 'cat', 2),
	('Katla', 'snail', 1);

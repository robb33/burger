-- schema template

--make database

DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers (
	id INT AUTO_INCREMENT,
	burger_name VARCHAR (255) NOT NULL,
	devoured tinyint(1),
	date TIMESTAMP,
	PRIMARY KEY (id)
);


--???
--created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
--updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

--change devoured BOOLEAN false,










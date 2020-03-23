CREATE DATABASE todoer COLLATE utf8_general_ci;

USE todoer;

CREATE TABLE user(
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE task(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  user_id INT NOT NULL,
  date DATETIME NOT NULL,
  alarm DATETIME NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES user(id)
);

CREATE TABLE category(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  color VARCHAR(255),
  PRIMARY KEY (id)
);

CREATE TABLE task_category(
  id INT NOT NULL AUTO_INCREMENT,
  task_id INT NOT NULL,
  category_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (task_id) REFERENCES task(id),
  FOREIGN KEY (category_id) REFERENCES category(id)
);

CREATE TABLE settings(
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  type VARCHAR(255),
  value VARCHAR(255),
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES user(id)
);

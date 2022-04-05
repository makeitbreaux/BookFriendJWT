CREATE DATABASE bookfriend;

-- CREATE EXTENSION FOR UUID IN PSQL
-- create extension if not exists "uuid-ossp";
CREATE TABLE users(
    user_id SERIAL PRIMARY KEY ,
    user_first_name VARCHAR(255) NOT NULL,
    user_last_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL, 
    user_password VARCHAR(255) NOT NULL
);

CREATE TABLE authors(
    key INT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    birth_date DATE,
    top_work TEXT,
    top_subjects TEXT,
    PRIMARY KEY(key)
);

CREATE TABLE works(
    key INT,
    title VARCHAR(255),
    author_name TEXT,
    subject TEXT,
    PRIMARY KEY(key),
    FOREIGN KEY (key) REFERENCES authors(key)
);

--insert a fake user
INSERT INTO users (user_first_name, user_last_name, user_email, user_password) VALUES ('briana', 'breaux', 'brianabreaux@gmail.com', '123456');
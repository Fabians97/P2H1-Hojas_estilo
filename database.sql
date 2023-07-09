CREATE extension IF NOT EXISTS "uuid-ossp";

CREATE DATABASE P3H1_javascript;

CREATE TABLE users (
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_name TEXT NOT NULL,
    user_password TEXT NOT NULL,
    user_email TEXT NOT NULL UNIQUE
);

SELECT * FROM users;

INSERT INTO users (user_name, user_password, user_email) 
values ('Fabian','holamundo','fabian_suquilanda@gmail.com');
INSERT INTO users (user_name, user_password, user_email) 
values ('Alejandro','holamundo2','alejo_magno@gmail.com');

--psql -U postgres
--\c p3h1_javascript
--\dt
--heroku pg:psql
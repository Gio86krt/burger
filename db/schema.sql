-- create database burgers_db;

use burgers_db;

create table burgers (
    id int auto_increment primary key not null,
    burger_name varchar(30),
    devoured boolean
)


create database bdcalltech;
use bdcalltech;

create table tbcallcenter(
	idcallcenter int primary key auto_increment,
    razaosocial varchar(100),
    nomefantasia varchar(100),
    cnpj varchar(18),
    logradouro varchar(50),
    cep varchar(8),
    bairro varchar(50),
    numero varchar(10),
    nomeresponsavel varchar(50),
    emailresponsavel varchar(50),
    telefone varchar(13)
)auto_increment = 1;

create table tblogin(
	idlogin int primary key auto_increment,
    login varchar(30),
    senha varchar(30),
    fkcallcenter int,
    foreign key (fkcallcenter) references tbcallcenter (idcallcenter)
)auto_increment = 1;

create table tbmaquina(
	idmaquina int primary key auto_increment,
    nome varchar(45),
    modelo varchar(45),
    fabricante varchar(45),
    setor varchar(45),
    status varchar(45),
    fkcallcenter int,
    foreign key (fkcallcenter) references tbcallcenter (idcallcenter)
)auto_increment = 1;

create table tbcomponentes(
	idcomponentes int primary key auto_increment,
    cpu varchar(45),
    memoria varchar(45),
    disco varchar(45),
    rede varchar(45),
    datahora datetime,
    fkmaquina int,
    foreign key (fkmaquina) references tbmaquina (idmaquina)
);

create table tbocorrencia(
	idocorrencia int primary key auto_increment,
    componente varchar(45),
    situacao varchar(45),
    datahorafim datetime,
	fkmaquina int,
    foreign key (fkmaquina) references tbmaquina (idmaquina),
    fkcomponentes int,
    foreign key (fkcomponentes) references tbcomponentes (idcomponentes)
);


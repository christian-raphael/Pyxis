CREATE TABLE plano(
	idPlano INT PRIMARY KEY IDENTITY(1,1),
	tipo VARCHAR(10) NOT NULL,
	quantidadeMaquinas INT NOT NULL
)

CREATE TABLE callcenter(
	idCallcenter INT PRIMARY KEY IDENTITY(1,1),
	razaoSocial VARCHAR(45) NOT NULL,
	nomeFantasia VARCHAR(45) NOT NULL,
	cnpj VARCHAR(8) NOT NULL, 
	bairro VARCHAR(25) NOT NULL,
	numero VARCHAR(12) NOT NULL,
	nomeResponsavel VARCHAR(45) NOT NULL, 
	emailResponsavel VARCHAR(45) NOT NULL,
	fkPlano INT FOREIGN KEY REFERENCES plano(idPlano)
)

CREATE TABLE usuario(
	idUsuario INT PRIMARY KEY IDENTITY(1,1),
	nome VARCHAR(45) NOT NULL,
	email VARCHAR(30) NOT NULL,
	login VARCHAR(25) NOT NULL,
	senha VARCHAR(16) NOT NULL,
	tipo BIT NOT NULL,
	isAdmin BIT NOT NULL,
	chaveAtivacao VARCHAR(20) NOT NULL,
	fkCallcenter INT FOREIGN KEY REFERENCES callcenter(idCallcenter)
)

CREATE TABLE setor(
	idSetor INT PRIMARY KEY IDENTITY(1,1),
	nome VARCHAR(15) NOT NULL,
	fkCallcenter INT FOREIGN KEY REFERENCES callcenter(idCallcenter)
)

CREATE TABLE maquina(
	idMaquina INT PRIMARY KEY IDENTITY(1,1),
	nome VARCHAR(30) NOT NULL,
	modelo VARCHAR(30) NOT NULL,
	fabricante VARCHAR(30) NOT NULL,
	status BIT,
	fkSetor INT FOREIGN KEY REFERENCES setor(idSetor)
)

CREATE TABLE leitura(
	idLeitura INT PRIMARY KEY IDENTITY(1,1),
	usoCpu FLOAT NOT NULL,
	usoMemoria FLOAT NOT NULL,
	usoDisco FLOAT NOT NULL,
	velocidadeRede FLOAT NOT NULL,
	dataHoraLeitura DATETIME NOT NULL,
	fkMaquina INT FOREIGN KEY REFERENCES maquina(idMaquina)
)

CREATE TABLE ocorrencia(
	idOcorrencia INT PRIMARY KEY IDENTITY(1,1),
	componente VARCHAR(10) NOT NULL,
	situacao VARCHAR(10) NOT NULL,
	dataHoraFim DATETIME NOT NULL,
	fkLeitura INT FOREIGN KEY REFERENCES leitura(idLeitura)
)
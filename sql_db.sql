-- Crear base de datos si no existe
CREATE DATABASE IF NOT EXISTS algo_mio_gas;

-- Usar la base de datos
USE algo_mio_gas;
-- Crear tabla cliente
CREATE TABLE IF NOT EXISTS t_cliente (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    apellidos VARCHAR(50) NOT NULL,
    direccion VARCHAR(100),
    telefono VARCHAR(15),
    correo VARCHAR(50),
    creado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modificado TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
-- Crear tabla t_estado
CREATE TABLE IF NOT EXISTS t_estado (
    id INT PRIMARY KEY AUTO_INCREMENT,
    estado VARCHAR(50) NOT NULL
);
-- Crear tabla t_tipo_pedido
CREATE TABLE IF NOT EXISTS t_tipo_pedido (
    id INT PRIMARY KEY AUTO_INCREMENT,
    tipo_pedido VARCHAR(50) NOT NULL
);

-- Crear tabla balon_gas
CREATE TABLE IF NOT EXISTS t_balon_gas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_qr VARCHAR(50) NOT NULL,
    id_cliente INT,
    id_estado INT,
    creado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modificado TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
-- Crear tabla pedido
CREATE TABLE IF NOT EXISTS t_pedido (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_tipo_pedido INT,
    id_cliente INT,
    creado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modificado TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);




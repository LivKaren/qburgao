-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 22-Out-2021 às 23:28
-- Versão do servidor: 10.4.19-MariaDB
-- versão do PHP: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `xdev`
--
CREATE DATABASE IF NOT EXISTS `xdev` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `xdev`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `pedidos`
--

CREATE TABLE `pedidos` (
  `idpedidos` int(11) NOT NULL,
  `hora` datetime DEFAULT NULL,
  `status` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `produtos`
--

CREATE TABLE `produtos` (
  `idprodutos` int(11) NOT NULL,
  `nome` varchar(45) DEFAULT NULL,
  `valor` decimal(10,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `produtos`
--

INSERT INTO `produtos` (`idprodutos`, `nome`, `valor`) VALUES
(0, 'X salada simples', '2'),
(1, 'X salada simples', '2'),
(2, 'X salada completo', '5'),
(3, 'X simples', '2'),
(4, 'X coração', '9'),
(5, 'X egg', '9'),
(6, 'Coca-cola lata', '3'),
(7, 'Coca-cola 2 litros', '8'),
(8, 'soda lata', '3'),
(9, 'sprite lata', '3'),
(10, 'suco', '4');

-- --------------------------------------------------------

--
-- Estrutura da tabela `produtos_pedidos`
--

CREATE TABLE `produtos_pedidos` (
  `idprodutos_pedidos` int(11) NOT NULL,
  `observacao` varchar(100) DEFAULT NULL,
  `produtos_idprodutos` int(11) NOT NULL,
  `pedidos_idpedidos` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`idpedidos`);

--
-- Índices para tabela `produtos`
--
ALTER TABLE `produtos`
  ADD PRIMARY KEY (`idprodutos`);

--
-- Índices para tabela `produtos_pedidos`
--
ALTER TABLE `produtos_pedidos`
  ADD PRIMARY KEY (`idprodutos_pedidos`),
  ADD KEY `fk_produtos_pedidos_produtos_idx` (`produtos_idprodutos`),
  ADD KEY `fk_produtos_pedidos_pedidos1_idx` (`pedidos_idpedidos`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `idpedidos` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `produtos`
--
ALTER TABLE `produtos`
  MODIFY `idprodutos` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de tabela `produtos_pedidos`
--
ALTER TABLE `produtos_pedidos`
  MODIFY `idprodutos_pedidos` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `produtos_pedidos`
--
ALTER TABLE `produtos_pedidos`
  ADD CONSTRAINT `fk_produtos_pedidos_pedidos1` FOREIGN KEY (`pedidos_idpedidos`) REFERENCES `pedidos` (`idpedidos`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_produtos_pedidos_produtos` FOREIGN KEY (`produtos_idprodutos`) REFERENCES `produtos` (`idprodutos`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

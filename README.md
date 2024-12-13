# Comparação entre Arquiteturas Monolítica e de Microsserviços

Este repositório contém o código e os testes desenvolvidos para o Trabalho de Conclusão de Curso (TCC), cujo objetivo foi comparar as arquiteturas monolítica e de microsserviços. O estudo analisa aspectos como **manutenibilidade**, **escalabilidade** e **complexidade** dessas abordagens, exemplificando as diferenças por meio do desenvolvimento de um sistema de pedidos de produtos.

## 📝 Objetivo

O TCC busca explorar como cada arquitetura impacta o desenvolvimento e o desempenho de sistemas, avaliando os desafios e benefícios de cada abordagem em diferentes contextos empresariais.

### Principais objetivos:

- Implementar um sistema em ambas as arquiteturas.
- Realizar testes de desempenho e escalabilidade.
- Analisar os impactos nas operações, como manutenções e adaptações ao longo do tempo.

## 🛠️ Tecnologias Utilizadas

### Backend

- **[NestJS](https://nestjs.com/):** Framework para construção de APIs RESTful, usado para estruturar tanto o monólito quanto os microsserviços.
- **[Node.js](https://nodejs.org/):** Plataforma de execução de JavaScript para o backend.
- **[RabbitMQ](https://www.rabbitmq.com/):** Sistema de mensageria para comunicação assíncrona entre microsserviços.

### Banco de Dados

- **[PostgreSQL](https://www.postgresql.org/):** Banco de dados objeto-relacional para armazenar e gerenciar dados de ambas as arquiteturas.

### Testes de Desempenho

- **[JMeter](https://jmeter.apache.org/):** Ferramenta para testes de carga e análise de desempenho.

### Infraestrutura

- **[Docker](https://www.docker.com/):** Ferramenta de contêinerização para facilitar o setup e a execução dos serviços.

## 📂 Estrutura do Repositório

- **/monolith**: Implementação do sistema utilizando arquitetura monolítica.
- **/microservices**: Implementação do sistema utilizando arquitetura de microsserviços.
- **/docs**: Diagramas de arquitetura e banco de dados utilizados no estudo.

## 🚀 Execução do Projeto

Para executar o projeto localmente, é necessário ter o **Docker** instalado.

## 📚 Conclusões

O estudo demonstrou que a escolha da arquitetura ideal depende do contexto do sistema e das suas demandas. Monólitos são mais simples e rápidos de implementar no início, enquanto microsserviços são mais escaláveis e flexíveis em sistemas maiores.

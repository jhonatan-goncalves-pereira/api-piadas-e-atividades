# Avaliação Sprint 4 - Programa de Bolsas Compass UOL / AWS e IFCE

Avaliação da quarta sprint do programa de bolsas Compass UOL para formação em machine learning para AWS.

***

## Equipe 4

- Nicolas Ferreira
- Josiana Silva
- Samara Oliveira
- Jhonatan Gonçalves

## Aplicação Web com deploy em Elastic Beanstalk:

Esta é uma aplicação web que exibe três páginas: uma de boas-vindas e mais duas que utilizam informações vindas de duas APIs externas:
- API Chuck Norris: Retorna em JSON uma piada aleatória relacionada ao personagem Chuck Norris, assim como seu id, data de criação e atualização, uma imagem e um link de referência. Disponível em https://api.chucknorris.io/jokes/random
- API Atividades: Retorna em JSON uma atividade aleatória (exemplo: "Lave seu carro") assim como um id, tipo de atividade, participantes, e a acessibilidade dessa atividade. Disponível em: https://www.boredapi.com/api/activity

***

## Tecnologias e módulos utilizados/necessários

- JavaScript
- Node JS e os módulos express, nodemon e request
- AWS Elastic Beanstalk

***

### Rota → Get /

Através da url https://urlexemplo.com/ deverá ser exibida a seguinda mensagem para o usuário:

```json
 Este é o app do Grupo 4 🐊
```



***
### Rota → Get /api/piadas

Através da url https://urlexemplo.com/api/piadas deverá ser retornada ao usuário uma página contendo o retorno da API Chuck Norris em JSON seguindo o exemplo abaixo:

```json
{
  "data_atualizacao": "05-01-2020",
  "data_criacao": "05-01-2020",
  "icone": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
  "id": "b7585687-b14b-406d-a557-9cfeea4a8c16",
  "piada": "CHUCK NORRIS can slit your throat with his pinkie toenail.",
  "referencia": "https://api.chucknorris.io/jokes/2itjvbXZTcScUiuAMoOPLA"
}
```


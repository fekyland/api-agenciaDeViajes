<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h3 align="center">agenciadeviajes</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> Few lines describing your project.
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>

Agencia de viajes is an api open source that enable users to search hotel reservations whith any data of clients attributes(name,id,email,phone) to stick with their reservations attributes (name of hotels,dates of concurrency,reservation id,)a get full informed about de client history reservation and hotels that they stayed or staying 

## 🏁 Getting Started <a name = "getting_started"></a>



### Prerequisites

Agencia de viajes API has this dependencies
    "cookie-parser": "~1.4.4",
    "cors": "^2.8.5",
    "debug": "~2.6.9",
    "express": "~4.16.1",
    "http-errors": "~1.6.3",
    "jade": "~1.11.0",
    "morgan": "~1.9.1",
    "mysql2": "^2.3.3",
    "node": "^19.2.0",
    "nodemon": "^2.0.20",
    "sequelize": "^6.26.0",
    "sequelize-auto": "^0.8.8"


### Installing
First of all you need to install nodeJS at https://nodejs.org/es/download/
second step
clone our repository :

git clone https://github.com/fekyland/api-agenciaDeViajes.git

our package.json has all depencies to start de program,only you have to run npm i and node will install all the de dependencies 


## 🔧 Running the API <a name = "tests"></a>

run nodemon to run the server 

type "run start nodemon" 

### Break down into end to end tests

API Endpoints
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| GET | /clientes/ | To get a list of clientes |
| GET | /clientes/id/id:| To search clients with their id (dni identification) |
| GET | /clientes/nombres/:nombre | To search clients by name |
  GET | /telefonos/:telefono | search by telephone number |
| GET | /reservas/ | To retrieve the list of all reservas |
| GET | /reservas/id/:id| To retrieve details of reservas including clientes and hoteles where they been |
| GET | /fechain/:fechain | search dates of incoming clientes to de hotels |
| GET | /fechaout/:fechaout | search dates of incoming clientes to de hotels |
| GET | /hoteles/nombre | get a list of hotels |
| GET | /hoteles/nombre/:nombre | search for a particular hotel by name|




## 🎈 Usage <a name="usage"></a>

example

put on your browser http://localhost:3000/fechain/1900-01-01 this give you de list of clients
that check in on that date


## 🚀 Deployment <a name = "deployment"></a>

for a deployment and get a live system you can set up a database on railway on the same models clientes,reservas and hoteles tables and get a live database,and set up config.json to set the same variables from your database server
production": {
    "username": "ooort",
    "password": "passeord",
    "database": "railway",
    "host": "railway info",
    "port": por number
    "dialect": "yout database",
    "use_env_variable": "database_url"

## ⛏️ Built Using <a name = "built_using"></a>

- [Mysql](https://www.mysql.com/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [Sequelize](https://sequelize.org/) - TypeScript and Node.js ORM 
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [Squelize](https://sequelize.org/) - Server Environment

## ✍️ Authors <a name = "authors"></a>

- [@fekyland](https://github.com/fekyland) -  Initial work



## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- all geekhub classroom companions


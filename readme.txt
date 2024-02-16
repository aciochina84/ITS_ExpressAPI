npm init -y

"devDependencies" servono in fase di sviluppo
-D
--save-dev
ex. $ npm install --save-dev @faker-js/faker
------------------------------------------------
npm run dev
------------------------------------------------
npm i cors morgan
------------------------------------------------
npm @types/[nome]
$ npm i -D @types/express ---> mia app diventa di tipo express
$ npm i -D @types/morgan
$ npm i -D @types/cors
se instaleaza ca dev dependencies fiindca se foloseste doar in partea de dezvoltare
dar nu ma intereseaza in productie
-------------------------------------------------------------------------------------

// const express = require('express');
// const http = require('http');
// const cors = require('cors');
// const morgan = require('morgan');



// const server = http.createServer(app);
// server.listen(3000);

// app.listen(port);
// console.log('Server is running on port: ', port);
// http
//   .createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Hello World');
//   })
//   .listen(3000);

--------------------------------------------------------------
export default cart; --> exports from a file

import cartItems from '../cartItems'; --> imports in another
--------------------------------------------------------------
------------------------------------------------------------------------------

const products = Array.from({ length: num }).map(() =>
    generateRandomProduct()
  );

Array.from({ length: num }): Aceasta creează un array cu num elemente, 
unde num este o variabilă sau o valoare numerică specificată anterior. 
Aceste elemente vor fi inițializate cu undefined, 
deoarece obiectul pasat către Array.from() are o lungime specificată, 
dar valorile elementelor nu sunt definite.

.map(() => generateRandomProduct()): Apoi, se aplică funcția map() 
asupra array-ului creat mai devreme. 
Pentru fiecare element (care inițial este undefined), 
funcția furnizată ca argument este apelată. În acest caz, 
funcția anonimă () => generateRandomProduct() este utilizată 
pentru a apela generateRandomProduct() pentru fiecare element al array-ului. 
Rezultatul apelului funcției generateRandomProduct() este valoarea 
cu care fiecare element al array-ului va fi înlocuit.
-------------------------------------------------------------------------------

//***************************
//******* class *************
//***************************
class Car {
  public engine: string;
  private serialNum: string;

  constructor(engine: string, serial: string) {
    this.engine = engine;
    this.serialNum = serial;
  }

  drive() {
    console.log('Brum Brum');
  }
}

const simpleCar = new Car('1200', 'sdfsdf');
simpleCar.drive();

class Punto extends Car {
  drive() {
    console.log('');
  }

  stop() {
    this.engine;
  }
}

const punto = new Punto('1200', 'jjjhjhgf');
punto.drive();

const myCar: Car = new Punto('1200', 'dgfg');

const myCarr: Punto = new Car('234', 'fdgfdgf');

import express from 'express';
import http from 'http';
import cors from 'cors';
import morgan from 'morgan';

import cart from '../cartItems';

import { Request, Response, NextFunction } from 'express'; // destructuring
import { detail, list } from './api/product/product.controller';

const app = express(); // crea una applicazione

app.use(cors()); // e un middleware
app.use(morgan('tiny'));

const { name, netPrice } = cart[0]; // creeaza doua variabile cu valorile name si netPrice din primul obiect cart

// My Middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  // console.log('my middleware');
  // res.send('Non puoi accedere');
  next();
});

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Content-Type', 'text/plain');
  res.status(200);
  res.send('Hello Home!');
});

app.get('/greet', (req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Content-Type', 'text/plain');
  res.status(200);
  res.send('Hello World!');
});

app.post('/submit', (req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Content-Type', 'text/plain');
  res.status(200);
  res.send('Hello World!');
});

app.get('/cart-item', (req: Request, res: Response) => {
  res.json(PRODUCTS);
  // res.send(name);
});

app.get('/products', list);

app.get('/products/:id', detail);

const port = 3000;
// const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

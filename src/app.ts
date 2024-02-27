import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import { detail, list } from './api/product/product.controller';
import {
  list as cartItemList,
  add,
  updateQuantity,
} from './api/cart-item/cart-item.controller';

// import cart from '../cartItems';

// import type { Request, Response, NextFunction } from 'express'; // destructuring

const app = express(); // crea una applicazione
// app.use(express.urlencoded({ extended: false }));

app.use(cors()); // e un middleware
app.use(morgan('tiny'));
app.use(bodyParser.json());

// -----------------------------------

app.get('/products', list);

app.get('/products/:id', detail);

// ------------------------------------

app.get('/cart-items', cartItemList);

app.post('/cart-items', add);

app.patch('/cart-items/:id', updateQuantity);

export default app;

// const { name, netPrice } = cart[0]; // creeaza doua variabile cu valorile name si netPrice din primul obiect cart

// // My Middleware
// app.use((req: Request, res: Response, next: NextFunction) => {
//   // console.log('my middleware');
//   // res.send('Non puoi accedere');
//   next();
// });

// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   res.setHeader('Content-Type', 'text/plain');
//   res.status(200);
//   res.send('Hello Home!');
// });

// app.get('/greet', (req: Request, res: Response, next: NextFunction) => {
//   res.setHeader('Content-Type', 'text/plain');
//   res.status(200);
//   res.send('Hello World!');
// });

// app.post('/submit', (req: Request, res: Response, next: NextFunction) => {
//   res.setHeader('Content-Type', 'text/plain');
//   res.status(200);
//   res.send('Hello World!');
// });

// app.get('/cart-item', (req: Request, res: Response) => {
//   res.json(PRODUCTS);
//   // res.send(name);
// });

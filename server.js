// 1. Import Express
import express from 'express';
import productRouter from './src/features/product/product.routes.js';
import userRouter from './src/features/user/user.routes.js';
import bodyParser from 'body-parser';
import jwtAuth from './src/middlewares/jwt.middleware.js';

// 2. Create a Server
const server = express();

server.use(bodyParser.json());

// for all requests related to product, redirect to product routes
// localhost:3200/api/products
server.use('/api/products', jwtAuth, productRouter);
// localhost:3200/api/users
server.use('/api/users', userRouter);

// 3. Defualt request handler
server.get('/', (req, res) => {
  res.send('Welcome to Ecommerce APIs');
});

// 4. Specify Port.
const PORT = 3200;
server.listen(PORT);
console.log('Server is running at', PORT);

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import usersRoutes from './infrastructure/controllers';
const app = express();
const port = 8080; // default port to listen

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());

// define a route handler for the default home page
app.get('/', (req, res) => {
    res.send('Hello world!');
});
app.use('/users', usersRoutes);

// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});

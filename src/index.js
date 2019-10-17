/* eslint-disable no-console */
import '@babel/polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import routes from './routes';
const app = express();

app.enable('trust proxy');
app.use(cors());
app.use(fileUpload({
  useTempFiles : true,
  tempFileDir: '/tmp/'
}));
app.use('/',routes);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'NodeJS - Express - Postgres - Sequelize App Template',
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

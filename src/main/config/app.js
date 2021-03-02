import express from 'express';
import morgan from 'morgan';
import { config as dotenv } from 'dotenv';
import cors from 'cors';
import path from 'path';

//Me dió error al usar __dirname para decir donde estan los archivos estaticos, recuerdo en proyectos de clase que no era necesario.
//Creo que es al estar usando ES6. Aqui decimos donde trabaja __dirname y abajo ya lo podemos usar sin problema al decirle a express donde estan los
//archivos estaticos
const __dirname = path.resolve();

import userRoutes from '../../routes/user.route.js';
import loginRoutes from '../../routes/login.route.js';
import profileRoutes from '../../routes/profile.route.js';

const app = express();

app.set('port', process.env.PORT || 3000);

dotenv();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', userRoutes);
app.use('/api', loginRoutes);
app.use('/api', profileRoutes);

app.use(express.static(__dirname + '/public'));

export default app;

import express from 'express';
const juego = express();

import {getJuego} from '../controllers/ApiControllers.js';

juego.get('', getJuego);

export {juego};
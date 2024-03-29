import express from 'express';
const juego = express();

import {getJuego, postJuego, putJuego, dltJuego} from '../controllers/ApiControllers.js';

juego.get('', getJuego);
juego.post('', postJuego);
//siempre van los dos puntos antes de escrubir 'id'
juego.put('/:id', putJuego);
juego.delete('/:id', dltJuego);

export {juego};
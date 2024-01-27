import express from 'express';
import { juego } from './routes/ApiJuego.js';
const port = 4000;
const app = express();

app.use(express.json());

app.use('/api/juego', juego)

app.listen(port, ()=>{

    console.log(`Escuchando en el puerto ${port} `);
});

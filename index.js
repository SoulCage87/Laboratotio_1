import express from 'express';
const port = 4000;
const app = express();

app.use(express.json());

app.listen(port, ()=>{

    console.log(`Escuchando en el puerto ${port} `);
});

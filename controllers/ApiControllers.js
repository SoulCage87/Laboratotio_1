import {db} from '../db/conn.js';

const getJuego = async (req, res) => {
 
    const sql = `SELECT * FROM tbl_videjuegos`;
    const result = await db.query(sql);
    res.json(result);
};

const postJuego = async (req,res) => {

   const {nombre, desarrollador} = req.body;
   const params = [nombre,desarrollador];

   const sql = `INSERT INTO tbl_videjuegos
                (nombre,desarrollador)
                VALUES
                ($1, $2) returning *`;

   const result = await db.query(sql, params); 
   res.json(result);            

};


export {getJuego, postJuego};
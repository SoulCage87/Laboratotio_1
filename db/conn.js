import pg from 'pg-promise'
const pgp = pg();
const connstr = `postgresql://postgres:Apex2077@localhost:5432/tbl_videojuegos`;
const db = pgp(connstr);

db.connect()
.then(() => {

console.log("Conexion Exitosa");

})
.catch(() => {

console.log("Falla de Conexion");

});

export { db };
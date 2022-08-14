import mysql from 'mysql'

const dbConnection = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: 'admin',
    database: 'music-library'
})

export default dbConnection
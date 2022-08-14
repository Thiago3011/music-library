import { dbConnection } from '../modules/myModules.js'

class Usuario {
    listarUsuarios() {
        const query = 'SELECT * FROM Usuarios'

        return new Promise((resolve, reject) => {
            dbConnection.query(query, (err, results) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(results)
                }
            })
        })
    }

    criarUsuario(dados) {
        const query = 'INSERT INTO Usuarios SET ?'

        return new Promise((resolve, reject) => {
            dbConnection.query(query, dados, (err, resuts) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(resuts)
                }
            })

        })

    }
}




export default new Usuario
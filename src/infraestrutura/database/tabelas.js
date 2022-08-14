import { chalk } from '../../modules/myModules.js'

class Tabela {
    init(dbConnection) {
        this.dbConnection = dbConnection

        this.usuario()
    }

    usuario() {
        const query = 'CREATE TABLE IF NOT EXISTS Usuarios(id int NOT NULL AUTO_INCREMENT, email CHAR(30) NOT NULL, senha CHAR(30) NOT NULL, dataCriacao DATETIME NOT NULL, PRIMARY KEY (id))'

        this.dbConnection.query(query, (err) => {
            if (err) {
                throw new Error(chalk.red(`Erro ao criar a tabela de usuários: ${err}`))
            } else {
                console.log(chalk.blue('A tabela de usuários foi criada com sucesso!'))
            }
        })
    }
}

export default new Tabela
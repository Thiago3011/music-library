import { customExpress, dbConnection, chalk, Tabela } from './src/modules/myModules.js'

const port = 3000

dbConnection.connect((err) => {
    if (err) {
        throw new Error(chalk.red(`Erro ao realizar a conexão com o BD: ${err}`))
    } else {

        console.log(chalk.blue('Conexão com o BD estabelecida!'))

        Tabela.init(dbConnection)

        const app = customExpress()

        app.listen(port, (err) => {
            if (err) {
                throw new Error(chalk.red(`Erro ao ligar o servidor: ${err}`))
            } else {
                console.log(chalk.blue('O servidor está rodando!'))
            }
        })
    }
})
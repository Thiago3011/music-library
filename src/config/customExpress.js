import { express, bodyParser, usuariosRoutes } from '../modules/myModules.js'

export default () => {
    const app = express()

    
    app.use(bodyParser.json())
    app.use(express.static('public'))
    
    app.use(
        usuariosRoutes
    )

    return app
}   
import {express, consign, bodyParser} from '../modules/myModules.js'

export default () => {
    const app = express()

    app.use(bodyParser.json())
    app.use(express.static('public'))

    // consign()
    //     .include('controllers')
    //     .into(app)

    return app
}   
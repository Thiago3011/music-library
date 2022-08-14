import { express, usuarioController } from '../modules/myModules.js'

const router = express.Router()

router
    .get('/usuarios', usuarioController.listarUsuarios)
    .post('/usuarios', usuarioController.criarUsuario)

export default router
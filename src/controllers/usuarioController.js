import { Usuario } from '../modules/myModules.js'

class UsuarioController {
    listarUsuarios(req, res) {
        Usuario.listarUsuarios()
            .then(listaDeUsuarios => res.status(200).send(listaDeUsuarios))
            .catch(err => res.status(400).send(err))
    }
    
    criarUsuario(req, res) {
        const dados = req.body
        
        Usuario.criarUsuario(dados)
            .then(usuarioCadastrado => res.status(200).send(usuarioCadastrado))
            .catch(err => res.status(400).send(err))
    }
}

export default new UsuarioController
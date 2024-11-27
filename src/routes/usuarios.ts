import { Router } from 'express'
import { UsuarioController } from '../controllers/usuarios.controller';

const router = Router();
const usuarioController = new UsuarioController();

// USUARIOS
router.get('/login', usuarioController.login)
router.get('/', usuarioController.list)
router.post('/', usuarioController.create)
router.put('/', usuarioController.update)
router.patch('/password/:id', usuarioController.updatePassword)
router.delete('/:id', usuarioController.delete)

// CONVENIOS

export default router;


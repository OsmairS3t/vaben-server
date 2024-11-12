import { Router, Request, Response } from 'express'

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Lista de categorias de usuario')
})

router.post('/', (req: Request, res: Response) => {
  res.send('Categoria de Usuario criado')
})

router.put('/', (req: Request, res: Response) => {
  res.send(`Categoria de Usuario Atualizada.`)
})

router.delete('/:id', (req: Request, res: Response) => {
  res.send(`Categoria de Usuario com o Id ${req.params.id} excluido.`)
})

export default router;
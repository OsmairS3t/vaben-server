import { Router, Request, Response } from 'express'

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Lista de tipos de usuario')
})

router.post('/', (req: Request, res: Response) => {
  res.send('Tipo de Usuario criado')
})

router.put('/', (req: Request, res: Response) => {
  res.send(`Tipo de Usuario Atualizado.`)
})

router.delete('/:id', (req: Request, res: Response) => {
  res.send(`Tipo Usuario com o Id ${req.params.id} excluido.`)
})

export default router;
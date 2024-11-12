import { Router, Request, Response } from 'express'

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Lista de usuarios')
})

router.post('/', (req: Request, res: Response) => {
  res.send('Usuario criado')
})

router.put('/', (req: Request, res: Response) => {
  res.send(`Usuario Atualizado.`)
})

router.delete('/:id', (req: Request, res: Response) => {
  res.send(`Usuario com o Id ${req.params.id} excluido.`)
})

export default router;
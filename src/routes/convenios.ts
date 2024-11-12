import { Router, Request, Response } from 'express'

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Lista de convenios')
})

router.post('/', (req: Request, res: Response) => {
  res.send('Convenio criado')
})

router.put('/', (req: Request, res: Response) => {
  res.send(`Convenio Atualizado.`)
})

router.delete('/:id', (req: Request, res: Response) => {
  res.send(`Convenio com o Id ${req.params.id} excluido.`)
})

export default router;
import { prisma } from '../database/prismaClient';
import { Router, Request, Response } from 'express'

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Listagem')
})

router.post('/', (req: Request, res: Response) => {
  res.send('Registro criado')
})

router.put('/', (req: Request, res: Response) => {
  res.send(`Registro Atualizado.`)
})

router.delete('/:id', (req: Request, res: Response) => {
  res.send(`Registro com o Id ${req.params.id} excluido.`)
})

export default router;
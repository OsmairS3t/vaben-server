import { prisma } from './prismaClient';
import { Router, Request, Response } from 'express'
import { IUsuario } from "utils/interface";
const router = Router();

router.get('/', async(req: Request, res: Response) => {
  try {
    const usuarios = await prisma.usuarios.findMany()
    res.send(usuarios)
  } catch (error) {
    console.log(error)
  }
})

router.post('/', async(req: Request, res: Response) => {
  const usuario:IUsuario = req.body
  const user = await prisma.usuarios.create({ data: usuario })
  res.send(user)
})

router.put('/', async(req: Request, res: Response) => {
  const usuario:IUsuario = req.body
  const user = await prisma.usuarios.update({ 
    where: {id: usuario.id },
    data: {
      nome: usuario.nome,
      email: usuario.email,
      categoria: usuario.categoria,
      celular: usuario.celular,
      cnpj_cpf: usuario.cnpj_cpf,
      codparc: usuario.codparc,
      emite_cartao: usuario.emite_cartao,
      situacao: usuario.situacao
    },
  })
  res.send(user)
})

router.delete('/:id', async(req: Request, res: Response) => {
  const idUsuario = req.params.id
  await prisma.usuarios.delete({
    where: {id: Number(idUsuario) },
  })
  res.send(`Usuario com o Id ${idUsuario} excluido.`)
})

export default router;
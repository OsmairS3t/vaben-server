import { prisma } from './prismaClient';
import { Router, Request, Response } from 'express'
import { IUsuario } from "utils/interface";
import { hashPassword, verifyPassword } from '../utils/authService';

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
  const { nomeusuario, senha, contacesso, ultimoacesso }:IUsuario = req.body
  const novasenha = await hashPassword(senha);
  const user = await prisma.usuarios.create({ 
    data: {
      nomeusuario,
      senha: novasenha, 
      contacesso, 
      ultimoacesso
    }
  })
  res.send(user)
})

router.put('/', async(req: Request, res: Response) => {
  const usuario:IUsuario = req.body
  const user = await prisma.usuarios.update({ 
    where: {id: usuario.id },
    data: {
      nomeusuario: usuario.nomeusuario,
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
import { prisma } from './prismaClient';
import { Router, Request, Response } from 'express'
import { IUsuario } from "utils/interface";
import { hashPassword, verifyPassword, loginUser } from '../core/authService';

const router = Router();

router.get('/login', async(req: Request, res: Response) => {
  try {
    const { nomeusuario, senha } = req.body
    const senhaBanco = await prisma.usuarios.findFirst({ where: { 'nomeusuario': nomeusuario }})
    if (senhaBanco) {
      const loggedUser = await verifyPassword(senha, senhaBanco.senha)
      if (loggedUser) {
        res.status(200).json({message: 'Usuário logado com sucesso.'})
      } else {
        res.status(401).json({message: 'Usuário ou Senha não conferem.'})
      }
    } else {
      res.status(404).json({message: 'Usuário não encontrado.'})
    }
  } catch (error) {
    console.log(error)
  }
})

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
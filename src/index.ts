import 'dotenv/config'
import express, { Application } from 'express'
import userRoutes from './routes/usuarios'
import tipoUsuarioRoutes from './routes/tiposUsuario'
import categoriaUsuarioRoutes from './routes/categoriasUsuario'
import convenioRoutes from './routes/convenios'
import segmentoConvenioRoutes from './routes/segmentosConvenio'
import tipoVigenciaRoutes from './routes/tiposVigencia'
import tipoSituacaoRoutes from './routes/tiposSituacao'

const app: Application = express();
const PORT = process.env.APP_PORT;
app.use(express.json());

app.use('/usuarios', userRoutes);
app.use('/tiposusuario', tipoUsuarioRoutes);
app.use('/categoriasusuario', categoriaUsuarioRoutes);
app.use('convenios', convenioRoutes)
app.use('/segmentosconvenio', segmentoConvenioRoutes)
app.use('/tiposvigencia', tipoVigenciaRoutes)
app.use('/tipossituacao', tipoSituacaoRoutes)

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})

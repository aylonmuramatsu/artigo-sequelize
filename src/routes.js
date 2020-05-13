import { Router } from 'express';
import CursoController from './app/controllers/CursoController';
import AlunoController from './app/controllers/AlunoController';
const routes = Router();

routes.get('/cursos', CursoController.index)
routes.get('/cursos/:id', CursoController.show)
routes.post('/cursos', CursoController.store)
routes.put('/cursos/:id', CursoController.update)
routes.delete('/cursos/:id', CursoController.delete)

routes.get('/alunos', AlunoController.index)
routes.get('/alunos/:id', AlunoController.show)
routes.post('/alunos', AlunoController.store)
routes.put('/alunos/:id', AlunoController.update)
routes.delete('/alunos/:id', AlunoController.delete)



export default routes;
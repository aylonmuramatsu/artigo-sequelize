import Curso from "../models/Curso";

class CursoController {
  async store(req, res) {
    const curso = await Curso.create(req.body);
    return res.json(curso)
  }
  async index(req, res) {
    const cursos = await Curso.findAll();
    return res.json(cursos)
  }
  async update(req, res) {
    let curso = await Curso.findByPk(req.params.id)
    curso = await curso.update(req.body)
    return res.json(curso)
  }
  async delete(req, res) {
    let curso = await Curso.findByPk(req.params.id)
    curso = await curso.destroy(req.body)
    return res.json(curso)
  }
  async show(req, res) {
    let curso = await Curso.findByPk(req.params.id)
    return res.json(curso)
  }
}

export default new CursoController();
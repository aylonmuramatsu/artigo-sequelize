import Aluno from "../models/Aluno";
import Curso from "../models/Curso";

class AlunoController {
  async store(req, res) {
    const aluno = await Aluno.create(req.body);
    return res.json(aluno)
  }
  async index(req, res) {
    const alunos = await Aluno.findAll({
        attributes: [
            'id','nome', 'dtnascimento', 'telefone', 'bairro', 'cep'
        ],
        include: [
            { 
                model: Curso,
                as: 'curso'
            }
        ]
    });
    return res.json(alunos)
  }
  async update(req, res) {
    let aluno = await Aluno.findByPk(req.params.id)
    aluno = await aluno.update(req.body)
    return res.json(aluno)
  }
  async delete(req, res) {
    let aluno = await Aluno.findByPk(req.params.id)
    aluno = await aluno.destroy(req.body)
    return res.json(aluno)
  }
  async show(req, res) {
    let aluno = await Aluno.findByPk(req.params.id, {
        attributes: [
            'id','nome', 'dtnascimento', 'telefone', 'bairro', 'cep'
        ],
        include: [
            { 
                model: Curso,
                as: 'curso'
            }
        ]
    })
    return res.json(aluno)
  }
}

export default new AlunoController();
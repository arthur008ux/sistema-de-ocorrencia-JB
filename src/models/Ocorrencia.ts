import { Disciplina } from "./Disciplina";
import { Turma } from "./Turma";

export interface Ocorrencia{
    descricao: string;
    professorNome: string;
    alunoTurma:Turma;
    alunoNome: string;
    disciplina: Disciplina;
    data: string;
}
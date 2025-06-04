import React, { useState } from "react";
import { Professor } from '../models/Professor'
import { Disciplina } from "../models/Disciplina";
import { Ocorrencia } from "../models/Ocorrencia";
import { Turma } from "../models/Turma";


export default function CriarOcorrencia() {

    let [alunoNome, setAlunoNome] = useState("");
    let [descricao, setDescricao] = useState("");
    let [professorNome, setProfessor] = useState("")
    let [disciplinaSelecionada, setDisciplinaSelecionada] = useState <Disciplina>(Disciplina.LinguaPortuguesa);
    let [turmaSelecionada, setTurmaSelecionada] = useState <Turma>(Turma.Administracao1);
    let [ocorrenciaGerada, setOcorrenciaGerada] = useState < Ocorrencia | null >(null);


    const gerarOcorrencia = () => {


        let professor = new Professor(

            11111,
            professorNome,
            "xxxxx",
            disciplinaSelecionada,
            "(88)xxxxx-xxxx"

        );

        let ocorrencia = professor.gerarOcorrencia(alunoNome, descricao, turmaSelecionada);
        setOcorrenciaGerada(ocorrencia);

    
    }


    return (
        <>
            <h2>Gerar Ocorrência</h2>
            
            <label>Nome do Professor</label>
            <input type="text" value={professorNome} onChange={(e) => setProfessor(e.target.value)} placeholder="Digite o nome do professor" />

            <label>Nome do Aluno</label>
            <input type="text" value={alunoNome} onChange={(e) => setAlunoNome(e.target.value)} placeholder="digite o nome do aluno" />

             <label>Turma</label>
            <select value={turmaSelecionada}
             onChange= {(e) => setTurmaSelecionada(e.target.value as Turma)}>

            {Object.values(Turma).map((turma) => (
                <option key={turma} value={turma}>{turma}</option>
            ))}
            </select>

            <label>Motivo da Ocorrencia</label>
            <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} placeholder="Qual o motivo da ocorrencia?" />

            <label>Disciplina</label>
            <select value={disciplinaSelecionada}
             onChange= {(e) => setDisciplinaSelecionada(e.target.value as Disciplina)}>

            {Object.values(Disciplina).map((disc) => (
                <option key={disc} value={disc}>{disc}</option>
            ))}
            </select>

            <button onClick={gerarOcorrencia}>Aplicar ocorrência</button>

               {ocorrenciaGerada && (
                <div>
                    <h3>Ocorrência Gerada:</h3>
                    <p><strong>Aluno:</strong> {ocorrenciaGerada.alunoNome}</p>
                    <p><strong>Turma</strong> {ocorrenciaGerada.alunoTurma}</p>
                    <p><strong>Professor:</strong> {ocorrenciaGerada.professorNome}</p>
                    <p><strong>Disciplina:</strong> {ocorrenciaGerada.disciplina}</p>
                    <p><strong>Descrição:</strong> {ocorrenciaGerada.descricao}</p>
                    <p><strong>Data:</strong> {ocorrenciaGerada.data}</p>
                </div>
            )}
        </>
    )



}
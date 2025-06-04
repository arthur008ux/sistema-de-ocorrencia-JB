# 📚 Sistema de Ocorrências Escolares

Este projeto é um sistema educacional simples desenvolvido com **React** e **TypeScript**, onde professores podem gerar ocorrências para alunos, e essas ocorrências afetam a nota dos estudantes nas disciplinas correspondentes.

---

## ✨ Funcionalidades

- Cadastro de Professores.
- Geração de Ocorrências para alunos.
- Seleção de Disciplinas com base no Curso e Semestre.
- Interface amigável com campos de texto e `select`.
- Organização de disciplinas comuns e específicas por curso/semestre.

---

## 🧠 Tecnologias Utilizadas

- ⚛️ **React** – Interface do usuário
- 🟦 **TypeScript** – Tipagem estática
- 🎯 **Vite** (opcional) – Empacotamento rápido de projetos React
- 💅 **CSS** – Estilização básica

---

## 🏗️ Estrutura do Projeto

```bash
src/
│
├── models/                # Tipos, enums e classes (Professor, Ocorrencia, Disciplina, etc)
│   ├── Professor.ts
│   ├── Ocorrencia.ts
│   ├── Disciplina.ts
│   ├── Curso.ts
│   ├── Semestre.ts
│
├── components/            # Componentes de interface
│   ├── CriarOcorrencia.tsx
│
├── App.tsx                # Componente principal
├── main.tsx               # Ponto de entrada do React
└── index.css              # Estilizações globais

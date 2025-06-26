# 🎮 Game Idea Generator

Uma API simples desenvolvida com Node.js + TypeScript que utiliza o modelo **Gemini (Google GenAI)** para gerar ideias criativas de jogos com base em um tema fornecido.

## 🚀 Funcionalidades

- Recebe um tema e retorna uma ideia de jogo original.
- Utiliza a API Gemini (Google GenAI) para gerar o conteúdo.
- Estruturado com boas práticas em TypeScript e Express.

## 🧪 Exemplo de Uso

### Requisição

```http
POST /idea
Content-Type: application/json

{
  "theme": "viagem no tempo"
}
```

### Resposta

```json
{
  "idea": "🎮 *Time Loopers*: Um jogo onde..."
}
```

### 📦 Tecnologias Utilizadas

- Node.js

- TypeScript

- Express

- Google GenAI

- dotenv

### ⚙️ Como Executar Localmente

1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/game-idea-generator.git
cd game-idea-generator
```

2. Instale as dependências

```bash
npm install
```

3. Configure suas variáveis de ambiente

- Crie um arquivo .env na raiz do projeto:

```json
GEMINI_API_KEY=sua_chave_aqui
```

4. Inicie o servidor

```bash
npm run dev
```

O servidor estará disponível em: http://localhost:3000

### ✅ Requisitos

- Node.js v18+

- Chave de API da Google GenAI

### 📁 Estrutura do Projeto

```bash
src/
├── gemini.ts        # Integração com a API Gemini
├── index.ts         # Ponto de entrada do servidor Express
.env                 # Chaves de API
```

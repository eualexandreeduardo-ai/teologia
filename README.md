# Academia Teológica do zero ao saber

Site estático pronto para rodar no GitHub e publicar na Vercel.

## Estrutura

- `index.html` — página inicial
- `modulos.html` — lista de módulos
- `modulo-01.html` até `modulo-13.html` — páginas dos módulos
- `progresso.html` — painel de progresso
- `glossario.html` — glossário
- `biblioteca.html` — biblioteca
- `orientacoes.html` — orientações de estudo
- `assets/style.css` — estilos
- `assets/app.js` — funcionamento da plataforma, exercícios, progresso e bloqueios
- `vercel.json` — configuração para publicação na Vercel

## Como subir no GitHub pelo navegador

1. Entre em https://github.com
2. Clique em **New repository**.
3. Nome sugerido: `academia-teologica`.
4. Deixe como **Public** ou **Private**.
5. Clique em **Create repository**.
6. Clique em **uploading an existing file**.
7. Envie todos os arquivos e pastas deste projeto, mantendo `index.html` na raiz.
8. Clique em **Commit changes**.

## Como publicar na Vercel

1. Entre em https://vercel.com
2. Clique em **Add New Project**.
3. Importe o repositório do GitHub.
4. Em **Framework Preset**, escolha **Other**.
5. Em **Root Directory**, deixe a raiz do projeto.
6. Em **Build Command**, deixe vazio.
7. Em **Output Directory**, deixe vazio ou use `.`.
8. Clique em **Deploy**.

## Rodar localmente

Abrindo direto:

```bash
abra o arquivo index.html no navegador
```

Ou usando servidor local:

```bash
npm install
npm run dev
```

Depois acesse o endereço mostrado no terminal.

## Observação sobre bloqueio dos módulos

O bloqueio dos módulos funciona usando `localStorage`, ou seja, fica salvo no navegador do aluno. Para controle real com login, banco de dados, painel administrativo e impedimento mais seguro de acesso direto, a próxima evolução deve usar Supabase, Firebase ou outro backend.

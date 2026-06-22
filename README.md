# Academia Teológica do zero ao saber

Plataforma estática de estudo teológico, feita em HTML, CSS e JavaScript puro. Ela usa Supabase Auth para login e Supabase Database para guardar o progresso de cada aluno.

## Estrutura

- `login.html` — acesso e criação de conta
- `index.html`, `modulos.html`, `modulo-01.html` a `modulo-13.html` — área protegida do aluno
- `progresso.html` — acompanhamento e sincronização manual
- `assets/style.css` — visual e responsividade
- `assets/app.js` — módulos, avaliações, bloqueios e progresso visual
- `assets/supabase-config.js` — configuração pública do Supabase
- `assets/auth.js` — login, cadastro, logout e proteção de rotas
- `assets/progress-cloud.js` — sincronização Supabase + fallback local

## Configurar o Supabase

1. Crie um projeto em [Supabase](https://supabase.com).
2. Em **Authentication > Providers**, habilite **Email**. Para testar mais rapidamente, você pode desativar temporariamente a confirmação de e-mail em **Authentication > Settings**.
3. Em **Authentication > URL Configuration**, informe a URL da Vercel como **Site URL** e também em **Redirect URLs** (por exemplo, `https://seu-projeto.vercel.app`).
4. Em **Project Settings > API**, copie a **Project URL** e a chave pública **anon**.
5. Abra `assets/supabase-config.js` e preencha:

```js
window.SUPABASE_URL = 'https://SEU-PROJETO.supabase.co';
window.SUPABASE_ANON_KEY = 'SUA_CHAVE_ANON_PUBLICA';
```

Nunca coloque a chave `service_role` neste projeto. A chave `anon` é pública e segura no frontend somente quando as políticas RLS abaixo estão ativas.

## Criar a tabela de progresso

No Supabase, abra **SQL Editor > New query**, cole e execute:

```sql
create table if not exists user_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  progress_data jsonb not null default '{}',
  updated_at timestamptz default now(),
  unique(user_id)
);

alter table user_progress enable row level security;

create policy "Usuário vê apenas o próprio progresso"
on user_progress
for select
using (auth.uid() = user_id);

create policy "Usuário cria o próprio progresso"
on user_progress
for insert
with check (auth.uid() = user_id);

create policy "Usuário atualiza o próprio progresso"
on user_progress
for update
using (auth.uid() = user_id)
with check (auth.uid() = user_id);
```

`progress_data` guarda checklists, exercícios, respostas de avaliação, notas, módulos aprovados, módulos liberados, percentual e último módulo estudado. Uma cópia local também é mantida para uso sem internet.

## Testar localmente

Depois de configurar o Supabase, abra `login.html` com um servidor local. Caso tenha Node.js:

```bash
npx serve .
```

Abra o endereço exibido, crie uma conta e entre. Sem sessão, qualquer página interna redireciona automaticamente para `login.html`.

## Publicar no GitHub

```bash
git init
git add .
git commit -m "Publica Academia Teológica com Supabase"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/academia-teologica.git
git push -u origin main
```

Também é possível criar um repositório no GitHub pelo navegador e enviar todos os arquivos, mantendo `index.html` e a pasta `assets` na raiz.

## Publicar na Vercel

1. Na [Vercel](https://vercel.com), escolha **Add New Project**.
2. Importe o repositório do GitHub.
3. Selecione **Other** como Framework Preset.
4. Não informe Build Command nem Output Directory.
5. Clique em **Deploy**.

Como esta é uma aplicação estática, as chaves públicas do Supabase ficam em `assets/supabase-config.js`. Após trocar as chaves, faça commit e novo deploy.

## Limitações de segurança

O bloqueio de impressão, salvamento e clique direito é apenas visual no navegador. Para proteção robusta de conteúdo, controle de permissões avançado e segredos de servidor, a próxima evolução deve usar Next.js ou outro backend. O RLS do Supabase protege os dados de progresso de cada usuário, mas não impede que alguém autorizado copie conteúdo que já recebeu no navegador.

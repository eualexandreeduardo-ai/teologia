(() => {
  const MODULE_TASKS = {
  "1": [
    "m1c1",
    "m1c2",
    "m1c3",
    "m1c4",
    "m1c5",
    "m1c6",
    "m1c7",
    "m1c8",
    "m1c9",
    "m1c10"
  ],
  "2": [
    "m2c1",
    "m2c2",
    "m2c3",
    "m2c4",
    "m2c5",
    "m2c6",
    "m2c7",
    "m2c8"
  ],
  "3": [
    "m3c1",
    "m3c2",
    "m3c3",
    "m3c4",
    "m3c5",
    "m3c6",
    "m3c7",
    "m3c8"
  ],
  "4": [
    "m4c1",
    "m4c2",
    "m4c3",
    "m4c4",
    "m4c5",
    "m4c6",
    "m4c7"
  ],
  "5": [
    "m5c1",
    "m5c2",
    "m5c3",
    "m5c4",
    "m5c5",
    "m5c6",
    "m5c7"
  ],
  "6": [
    "m6c1",
    "m6c2",
    "m6c3",
    "m6c4",
    "m6c5",
    "m6c6",
    "m6c7",
    "m6c8"
  ],
  "7": [
    "m7c1",
    "m7c2",
    "m7c3",
    "m7c4",
    "m7c5",
    "m7c6",
    "m7c7"
  ],
  "8": [
    "m8c1",
    "m8c2",
    "m8c3",
    "m8c4",
    "m8c5",
    "m8c6",
    "m8c7"
  ],
  "9": [
    "m9c1",
    "m9c2",
    "m9c3",
    "m9c4",
    "m9c5",
    "m9c6",
    "m9c7",
    "m9c8"
  ],
  "10": [
    "m10c1",
    "m10c2",
    "m10c3",
    "m10c4",
    "m10c5",
    "m10c6",
    "m10c7"
  ],
  "11": [
    "m11c1",
    "m11c2",
    "m11c3",
    "m11c4",
    "m11c5",
    "m11c6",
    "m11c7",
    "m11c8"
  ],
  "12": [
    "m12c1",
    "m12c2",
    "m12c3",
    "m12c4",
    "m12c5",
    "m12c6",
    "m12c7",
    "m12c8"
  ],
  "13": [
    "m13c1",
    "m13c2",
    "m13c3",
    "m13c4",
    "m13c5",
    "m13c6"
  ]
};
  const QUIZZES = {
  "1": [
    {
      "q": "Qual é o centro do evangelho cristão?",
      "options": [
        "A melhoria moral do ser humano por esforço próprio",
        "A morte e ressurreição de Cristo por nossos pecados",
        "A prosperidade material como sinal da fé",
        "A obediência a tradições religiosas humanas"
      ],
      "answer": 1
    },
    {
      "q": "Em João 1, Jesus é apresentado principalmente como:",
      "options": [
        "Apenas um profeta importante",
        "O Verbo eterno que estava com Deus e era Deus",
        "Um anjo superior aos demais",
        "Um mestre criado no início do mundo"
      ],
      "answer": 1
    },
    {
      "q": "Biblicamente, pecado é melhor definido como:",
      "options": [
        "Somente um erro psicológico",
        "Uma rebeldia contra Deus que afeta toda a pessoa",
        "Apenas descumprir costumes culturais",
        "Um problema que atinge só pessoas muito más"
      ],
      "answer": 1
    },
    {
      "q": "Fé salvadora envolve principalmente:",
      "options": [
        "Apenas acreditar que Deus existe",
        "Confiar em Cristo e render-se a Ele",
        "Conhecer muitas doutrinas sem obediência",
        "Frequentar reuniões religiosas"
      ],
      "answer": 1
    },
    {
      "q": "A autoridade da Bíblia para o cristão vem do fato de ela ser:",
      "options": [
        "Uma coleção de frases motivacionais",
        "Um livro antigo e popular",
        "Revelação inspirada por Deus",
        "Um manual de opiniões pessoais"
      ],
      "answer": 2
    }
  ],
  "2": [
    {
      "q": "Hermenêutica bíblica é:",
      "options": [
        "A ciência e arte de interpretar corretamente o texto",
        "A prática de escolher versículos isolados",
        "A tentativa de achar códigos secretos em todo texto",
        "Uma técnica para evitar o contexto histórico"
      ],
      "answer": 0
    },
    {
      "q": "O método histórico-gramatical busca primeiro:",
      "options": [
        "O que o texto significa para mim hoje",
        "O sentido do texto no contexto do autor e dos primeiros leitores",
        "Uma aplicação política imediata",
        "Uma interpretação alegórica independente do texto"
      ],
      "answer": 1
    },
    {
      "q": "Por que o gênero literário é importante?",
      "options": [
        "Porque poesia, narrativa, lei, carta e apocalipse são lidos do mesmo modo",
        "Porque cada gênero tem formas próprias de comunicar sentido",
        "Porque elimina a necessidade de contexto",
        "Porque substitui a leitura bíblica"
      ],
      "answer": 1
    },
    {
      "q": "A diferença entre descrição e prescrição ajuda a perceber que:",
      "options": [
        "Tudo que a Bíblia relata deve ser repetido literalmente",
        "Nem tudo que a Bíblia descreve é mandamento para hoje",
        "Narrativas não têm valor teológico",
        "Cartas apostólicas não ensinam doutrina"
      ],
      "answer": 1
    },
    {
      "q": "Uma boa aplicação bíblica deve nascer:",
      "options": [
        "Do significado correto do texto",
        "De frases soltas que combinam com minha ideia",
        "Da emoção do momento apenas",
        "De tradições sem exame"
      ],
      "answer": 0
    }
  ],
  "3": [
    {
      "q": "O Antigo Testamento deve ser lido como:",
      "options": [
        "Um livro desconectado de Cristo",
        "A história da criação, queda, alianças e promessa de redenção",
        "Apenas uma coleção de regras antigas",
        "Um texto sem valor para cristãos"
      ],
      "answer": 1
    },
    {
      "q": "Gênesis 1–3 apresenta principalmente:",
      "options": [
        "Criação, dignidade humana, queda e promessa inicial",
        "A história final da igreja",
        "A instituição da monarquia de Israel",
        "A destruição de Jerusalém"
      ],
      "answer": 0
    },
    {
      "q": "As alianças no AT revelam:",
      "options": [
        "O plano progressivo de Deus na história",
        "Que Deus muda de caráter constantemente",
        "Que Israel não tem papel bíblico algum",
        "Que a salvação depende de mérito humano absoluto"
      ],
      "answer": 0
    },
    {
      "q": "Os profetas bíblicos eram principalmente:",
      "options": [
        "Adivinhos independentes",
        "Mensageiros da aliança que chamavam o povo ao arrependimento",
        "Filósofos sem relação com Israel",
        "Escritores apenas de previsões políticas"
      ],
      "answer": 1
    },
    {
      "q": "A leitura cristã do AT deve evitar:",
      "options": [
        "Ver promessas e padrões que apontam para Cristo",
        "Ignorar o contexto original e forçar qualquer alegoria",
        "Ler os textos com atenção histórica",
        "Observar a narrativa da redenção"
      ],
      "answer": 1
    }
  ],
  "4": [
    {
      "q": "Os Evangelhos apresentam Jesus como:",
      "options": [
        "Personagem lendário sem relação com Israel",
        "O cumprimento das promessas de Deus e o centro do Reino",
        "Apenas um moralista antigo",
        "Um líder político sem mensagem espiritual"
      ],
      "answer": 1
    },
    {
      "q": "Atos dos Apóstolos registra principalmente:",
      "options": [
        "A expansão da igreja pelo poder do Espírito",
        "A construção do templo de Salomão",
        "A criação do império romano",
        "A queda do reino do norte"
      ],
      "answer": 0
    },
    {
      "q": "As cartas de Paulo devem ser lidas considerando:",
      "options": [
        "O problema pastoral e doutrinário de cada comunidade",
        "Somente frases isoladas",
        "A ausência de contexto histórico",
        "Que todas foram escritas para esconder o evangelho"
      ],
      "answer": 0
    },
    {
      "q": "A ressurreição de Cristo no NT é tratada como:",
      "options": [
        "Símbolo opcional sem importância histórica",
        "O fundamento da fé e da esperança cristã",
        "Uma lenda periférica",
        "Um tema menos importante que costumes religiosos"
      ],
      "answer": 1
    },
    {
      "q": "O Novo Testamento mostra a igreja como:",
      "options": [
        "Comunidade formada por Cristo, guiada pelo Espírito e enviada em missão",
        "Um clube privado sem missão",
        "Uma substituta da Bíblia",
        "Uma organização apenas política"
      ],
      "answer": 0
    }
  ],
  "5": [
    {
      "q": "Bibliologia é o estudo teológico sobre:",
      "options": [
        "A doutrina da Bíblia",
        "A arquitetura de templos",
        "A história de impérios",
        "A geografia moderna"
      ],
      "answer": 0
    },
    {
      "q": "Inspiração bíblica significa que:",
      "options": [
        "Deus conduziu autores humanos na produção das Escrituras",
        "Os autores não tinham personalidade própria",
        "A Bíblia surgiu por sorte",
        "A Bíblia é apenas opinião religiosa"
      ],
      "answer": 0
    },
    {
      "q": "Suficiência das Escrituras quer dizer que:",
      "options": [
        "A Bíblia contém tudo que é necessário para fé e prática segundo Deus",
        "Não precisamos estudar nada com cuidado",
        "Toda pergunta técnica moderna está explicitamente escrita nela",
        "A tradição humana é superior à revelação"
      ],
      "answer": 0
    },
    {
      "q": "O cânon bíblico se refere:",
      "options": [
        "À lista de livros reconhecidos como Escritura",
        "A um estilo musical religioso",
        "A uma regra de arquitetura",
        "A uma tradução específica apenas"
      ],
      "answer": 0
    },
    {
      "q": "Uma postura correta diante da Bíblia envolve:",
      "options": [
        "Submissão, estudo cuidadoso e obediência",
        "Uso manipulador de versículos",
        "Leitura sem contexto",
        "Rejeição de qualquer interpretação responsável"
      ],
      "answer": 0
    }
  ],
  "6": [
    {
      "q": "A doutrina da Trindade afirma que:",
      "options": [
        "Há três deuses separados",
        "Deus é um só em essência e três pessoas: Pai, Filho e Espírito Santo",
        "Jesus é uma criatura elevada",
        "O Espírito Santo é apenas uma força impessoal"
      ],
      "answer": 1
    },
    {
      "q": "A santidade de Deus significa que Ele é:",
      "options": [
        "Separado, puro e absolutamente distinto do pecado",
        "Indiferente ao mal",
        "Limitado pelo mundo",
        "Igual aos ídolos humanos"
      ],
      "answer": 0
    },
    {
      "q": "A soberania de Deus ensina que:",
      "options": [
        "Deus governa todas as coisas com sabedoria e propósito",
        "Deus perdeu controle da criação",
        "A história é puro acaso",
        "O mal é mais forte que Deus"
      ],
      "answer": 0
    },
    {
      "q": "Os atributos comunicáveis de Deus são aqueles que:",
      "options": [
        "Têm algum reflexo nas criaturas, como amor e justiça",
        "Deus não possui",
        "Pertencem apenas aos anjos",
        "Eliminam a distinção entre Deus e homem"
      ],
      "answer": 0
    },
    {
      "q": "Conhecer a Deus teologicamente deve produzir:",
      "options": [
        "Adoração, temor, humildade e obediência",
        "Orgulho frio e arrogância",
        "Desprezo pela oração",
        "Indiferença ao próximo"
      ],
      "answer": 0
    }
  ],
  "7": [
    {
      "q": "Cristologia estuda:",
      "options": [
        "A pessoa e a obra de Jesus Cristo",
        "A origem dos templos medievais",
        "A história de Israel apenas",
        "A organização financeira da igreja"
      ],
      "answer": 0
    },
    {
      "q": "A encarnação significa que:",
      "options": [
        "O Filho eterno assumiu verdadeira natureza humana",
        "Jesus deixou de ser Deus",
        "Deus apenas fingiu ser humano",
        "Um homem comum virou Deus por esforço"
      ],
      "answer": 0
    },
    {
      "q": "A união hipostática afirma que Cristo é:",
      "options": [
        "Uma pessoa com duas naturezas, divina e humana",
        "Duas pessoas separadas",
        "Somente humano",
        "Somente uma aparência de corpo"
      ],
      "answer": 0
    },
    {
      "q": "A cruz de Cristo é central porque:",
      "options": [
        "Ali Cristo oferece reconciliação e expiação pelos pecadores",
        "Foi apenas exemplo político",
        "Não tem relação com perdão",
        "Substitui a ressurreição completamente"
      ],
      "answer": 0
    },
    {
      "q": "A ressurreição de Jesus confirma:",
      "options": [
        "Sua vitória, senhorio e a esperança futura do povo de Deus",
        "Que a morte venceu Cristo",
        "Que o evangelho não tem base",
        "Que Jesus era apenas simbólico"
      ],
      "answer": 0
    }
  ],
  "8": [
    {
      "q": "Pneumatologia é o estudo sobre:",
      "options": [
        "O Espírito Santo",
        "A estrutura física do templo",
        "A sucessão de reis",
        "A filosofia grega apenas"
      ],
      "answer": 0
    },
    {
      "q": "O Espírito Santo é biblicamente:",
      "options": [
        "Uma pessoa divina, não uma energia impessoal",
        "Uma emoção humana",
        "Um anjo criado",
        "Uma metáfora sem realidade"
      ],
      "answer": 0
    },
    {
      "q": "A obra do Espírito inclui:",
      "options": [
        "Convencer, regenerar, santificar, consolar e capacitar",
        "Substituir Cristo como Salvador",
        "Anular a Bíblia",
        "Produzir confusão como objetivo"
      ],
      "answer": 0
    },
    {
      "q": "Fruto do Espírito se refere principalmente a:",
      "options": [
        "Caráter formado por Deus",
        "Técnicas de palco",
        "Riqueza material garantida",
        "Status religioso público"
      ],
      "answer": 0
    },
    {
      "q": "Dons espirituais devem ser exercidos:",
      "options": [
        "Para edificação do corpo de Cristo, com amor e ordem",
        "Para autopromoção",
        "Sem discernimento",
        "Contra a comunidade"
      ],
      "answer": 0
    }
  ],
  "9": [
    {
      "q": "Antropologia teológica estuda:",
      "options": [
        "O ser humano à luz de Deus e da Escritura",
        "Apenas fósseis antigos",
        "O desenho de igrejas",
        "O calendário litúrgico"
      ],
      "answer": 0
    },
    {
      "q": "A imagem de Deus no ser humano fundamenta:",
      "options": [
        "A dignidade humana e a responsabilidade diante de Deus",
        "A superioridade moral automática de todos",
        "A ausência de pecado",
        "A divinização do homem"
      ],
      "answer": 0
    },
    {
      "q": "Hamartiologia é a doutrina sobre:",
      "options": [
        "O pecado",
        "A igreja",
        "Os anjos",
        "Os sacramentos"
      ],
      "answer": 0
    },
    {
      "q": "Soteriologia trata de:",
      "options": [
        "A salvação realizada por Deus em Cristo",
        "A criação do mundo físico apenas",
        "A política romana",
        "A música no culto"
      ],
      "answer": 0
    },
    {
      "q": "A salvação cristã é recebida:",
      "options": [
        "Pela graça, mediante a fé, em Cristo",
        "Por mérito moral absoluto",
        "Por nacionalidade religiosa",
        "Por conhecimento secreto"
      ],
      "answer": 0
    }
  ],
  "10": [
    {
      "q": "Eclesiologia é a doutrina sobre:",
      "options": [
        "A igreja",
        "O fim dos tempos apenas",
        "A inspiração bíblica apenas",
        "A geologia bíblica"
      ],
      "answer": 0
    },
    {
      "q": "A igreja no NT é melhor compreendida como:",
      "options": [
        "O povo de Deus reunido em Cristo e enviado em missão",
        "Um prédio sagrado apenas",
        "Uma empresa religiosa",
        "Um grupo sem responsabilidade ética"
      ],
      "answer": 0
    },
    {
      "q": "Batismo e Ceia do Senhor devem apontar para:",
      "options": [
        "Cristo, sua obra e a identidade do povo da aliança",
        "O mérito de líderes humanos",
        "A substituição da fé pessoal",
        "A negação do evangelho"
      ],
      "answer": 0
    },
    {
      "q": "A vida cristã comunitária envolve:",
      "options": [
        "Adoração, ensino, comunhão, serviço e disciplina amorosa",
        "Individualismo absoluto",
        "Isolamento espiritual",
        "Ausência de prestação de contas"
      ],
      "answer": 0
    },
    {
      "q": "A missão da igreja inclui:",
      "options": [
        "Proclamar o evangelho e viver como testemunha do Reino",
        "Guardar conhecimento sem servir",
        "Substituir Cristo",
        "Evitar o próximo"
      ],
      "answer": 0
    }
  ],
  "11": [
    {
      "q": "A história da igreja ajuda o estudante a:",
      "options": [
        "Aprender com erros, debates e testemunhos do povo cristão",
        "Ignorar a Bíblia",
        "Repetir toda tradição sem exame",
        "Abandonar a fé histórica"
      ],
      "answer": 0
    },
    {
      "q": "Os concílios cristológicos antigos foram importantes porque:",
      "options": [
        "Defenderam doutrinas centrais sobre Cristo e a Trindade",
        "Criaram o evangelho do zero",
        "Negaram a divindade de Cristo",
        "Substituíram as Escrituras completamente"
      ],
      "answer": 0
    },
    {
      "q": "A Reforma Protestante enfatizou especialmente:",
      "options": [
        "A autoridade das Escrituras e a justificação pela fé",
        "A salvação por compra de indulgências",
        "A negação da graça",
        "A inexistência da Bíblia"
      ],
      "answer": 0
    },
    {
      "q": "Patrística refere-se ao estudo:",
      "options": [
        "Dos pais da igreja e dos primeiros séculos cristãos",
        "Do fim do mundo apenas",
        "De mapas modernos",
        "Da música contemporânea"
      ],
      "answer": 0
    },
    {
      "q": "Estudar história da igreja exige:",
      "options": [
        "Caridade, discernimento e atenção ao contexto",
        "Anacronismo e julgamento simplista",
        "Desprezo por fontes primárias",
        "Ignorar controvérsias"
      ],
      "answer": 0
    }
  ],
  "12": [
    {
      "q": "Escatologia é o estudo sobre:",
      "options": [
        "As últimas coisas e a esperança cristã",
        "A arquitetura do templo",
        "A geografia de Israel apenas",
        "A filosofia moral secular"
      ],
      "answer": 0
    },
    {
      "q": "Uma escatologia saudável deve produzir:",
      "options": [
        "Esperança, vigilância e fidelidade a Cristo",
        "Medo especulativo e datas secretas",
        "Desprezo pelo presente",
        "Sensacionalismo sem santidade"
      ],
      "answer": 0
    },
    {
      "q": "Apologética cristã é:",
      "options": [
        "A defesa racional e respeitosa da fé",
        "A agressão contra quem discorda",
        "A troca da Bíblia por filosofia",
        "A negação da razão"
      ],
      "answer": 0
    },
    {
      "q": "Ao estudar temas como anticristo e fim dos tempos, é essencial:",
      "options": [
        "Manter Cristo no centro e evitar especulação irresponsável",
        "Começar por teorias conspiratórias",
        "Marcar datas definitivas",
        "Ignorar textos bíblicos difíceis"
      ],
      "answer": 0
    },
    {
      "q": "A esperança final cristã se concentra em:",
      "options": [
        "Ressurreição, juízo, nova criação e presença de Deus",
        "Fuga eterna da criação sem restauração",
        "Vitória do mal",
        "Ausência de justiça final"
      ],
      "answer": 0
    }
  ],
  "13": [
    {
      "q": "Estudos avançados em teologia exigem:",
      "options": [
        "Fundamentos sólidos, método, humildade e pesquisa séria",
        "Pular os módulos básicos",
        "Só assistir vídeos curtos",
        "Evitar bibliografia acadêmica"
      ],
      "answer": 0
    },
    {
      "q": "Línguas bíblicas ajudam porque:",
      "options": [
        "Aproximam o estudante dos textos originais com mais precisão",
        "Substituem a dependência de Deus",
        "Eliminam toda divergência interpretativa",
        "Tornam desnecessário o contexto"
      ],
      "answer": 0
    },
    {
      "q": "Teologia bíblica, sistemática, histórica e prática devem:",
      "options": [
        "Dialogar entre si de modo integrado",
        "Competir como áreas inimigas",
        "Ser estudadas sem Escritura",
        "Ser reduzidas a opinião pessoal"
      ],
      "answer": 0
    },
    {
      "q": "Um pesquisador cristão maduro deve:",
      "options": [
        "Distinguir doutrina central, secundária e opinião",
        "Tratar toda discordância como heresia",
        "Evitar ouvir autores diferentes",
        "Confundir preferência pessoal com dogma"
      ],
      "answer": 0
    },
    {
      "q": "A finalidade maior da teologia é:",
      "options": [
        "Conhecer e adorar a Deus, servindo ao próximo com fidelidade",
        "Vencer discussões online",
        "Acumular status intelectual",
        "Criar frieza espiritual"
      ],
      "answer": 0
    }
  ]
};
  const MODULE_TITLES = {
  "1": "Fundamentos da Fé Cristã",
  "2": "Hermenêutica Bíblica",
  "3": "Panorama do Antigo Testamento",
  "4": "Panorama do Novo Testamento",
  "5": "Doutrina da Bíblia — Bibliologia",
  "6": "Doutrina de Deus — Teologia Própria",
  "7": "Cristologia — A Pessoa e Obra de Jesus Cristo",
  "8": "Pneumatologia — O Espírito Santo",
  "9": "Homem, Pecado e Salvação — Antropologia, Hamartiologia e Soteriologia",
  "10": "Eclesiologia — Igreja, Sacramentos e Vida Cristã",
  "11": "História da Igreja — Dos Apóstolos à Atualidade",
  "12": "Escatologia e Apologética — Esperança Cristã e Defesa da Fé",
  "13": "Estudos Avançados — Especialização Teológica"
};
  const ALL_TASKS = Object.values(MODULE_TASKS).flat();
  const qs = (sel, root=document) => root.querySelector(sel);
  const qsa = (sel, root=document) => Array.from(root.querySelectorAll(sel));
  const isChecked = id => localStorage.getItem('task_' + id) === '1';
  function notifyProgressChanged() {
    document.dispatchEvent(new CustomEvent('academy:progress-changed'));
  }
  function setChecked(id, val) {
    localStorage.setItem('task_' + id, val ? '1' : '0');
    notifyProgressChanged();
  }
  const maxModule = Object.keys(MODULE_TASKS).length;

  function modulePct(n) {
    const ids = MODULE_TASKS[String(n)] || [];
    if(!ids.length) return 0;
    const done = ids.filter(isChecked).length;
    return Math.round((done / ids.length) * 100);
  }
  function moduleTasksComplete(n) { return modulePct(n) === 100; }
  function quizPassed(n) { return localStorage.getItem('quiz_m' + n + '_passed') === '1'; }
  function quizScore(n) { return Number(localStorage.getItem('quiz_m' + n + '_score') || 0); }
  function quizTotal(n) { return (QUIZZES[String(n)] || []).length; }
  function passScore(n) { return Math.floor(quizTotal(n) / 2) + 1; }
  // A aprovação é definida exclusivamente pela avaliação objetiva: mais da metade
  // das questões corretas. O checklist continua salvo como acompanhamento de estudo.
  function moduleApproved(n) { return quizPassed(n); }
  function moduleUnlocked(n) { return Number(n) === 1 || moduleApproved(Number(n) - 1); }
  function nextUnlockedModule() {
    for(let n=1; n<=maxModule; n++) if(moduleUnlocked(n) && !moduleApproved(n)) return n;
    return null;
  }
  function setText(id, txt) { const el = qs('#' + id); if(el) el.textContent = txt; }

  function updateProgress() {
    const total = ALL_TASKS.length;
    const done = ALL_TASKS.filter(isChecked).length;
    const pct = total ? Math.round((done / total) * 100) : 0;
    const approvedMods = Object.keys(MODULE_TASKS).filter(n => moduleApproved(Number(n))).length;
    const unlockedMods = Object.keys(MODULE_TASKS).filter(n => moduleUnlocked(Number(n))).length;
    setText('pg-pct', pct + '%');
    setText('pg-pct2', pct + '%');
    setText('pg-done', done);
    setText('pg-total', total);
    setText('pg-mods', approvedMods);
    setText('pg-approved', approvedMods);
    setText('pg-unlocked', unlockedMods);
    setText('pg-locked', maxModule - unlockedMods);
    const nextModule = nextUnlockedModule();
    setText('pg-next', nextModule ? String(nextModule).padStart(2, '0') : 'Concluída');
    setText('hdr-prog', pct + '% concluído');
    const bar = qs('#pg-bar'); if(bar) bar.style.width = pct + '%';
    Object.keys(MODULE_TASKS).forEach(n => {
      const mp = modulePct(n);
      const fill = qs('#mpp' + n); if(fill) fill.style.width = mp + '%';
      const fill2 = qs('#mod-card-p' + n); if(fill2) fill2.style.width = mp + '%';
      const txt = qs('#mod-card-t' + n); if(txt) txt.textContent = mp + '%';
    });
    updateModuleLocks();
    updateCurrentModuleStatus();
  }

  function updateModuleLocks() {
    qsa('[data-module-card]').forEach(card => {
      const n = Number(card.dataset.moduleCard);
      const unlocked = moduleUnlocked(n);
      const approved = moduleApproved(n);
      const taskPct = modulePct(n);
      card.classList.toggle('module-locked', !unlocked);
      card.classList.toggle('module-approved', approved);
      const status = card.querySelector('.module-lock-status');
      if(status) {
        if(!unlocked) {
          status.innerHTML = '🔒 Bloqueado · seja aprovado no módulo ' + String(n-1).padStart(2,'0');
        } else if(approved) {
          status.innerHTML = '✅ Aprovado · avaliação concluída';
        } else {
          status.innerHTML = '🔓 Liberado · checklist ' + taskPct + '% · avaliação pendente';
        }
      }
    });
    qsa('[data-module-link]').forEach(a => {
      const n = Number(a.dataset.moduleLink);
      if(!n) return;
      const unlocked = moduleUnlocked(n);
      a.classList.toggle('locked-link', !unlocked);
      if(!unlocked) {
        if(a.getAttribute('href')) a.dataset.originalHref = a.getAttribute('href');
        a.removeAttribute('href');
        a.setAttribute('aria-disabled', 'true');
        a.title = 'Módulo bloqueado. Seja aprovado no módulo anterior.';
      } else {
        if(!a.getAttribute('href')) a.setAttribute('href', a.dataset.originalHref || ('modulo-' + String(n).padStart(2,'0') + '.html'));
        a.removeAttribute('aria-disabled');
        a.title = '';
      }
    });
  }

  function updateCurrentModuleStatus() {
    const n = Number(document.body.dataset.module || 0);
    if(!n) return;
    const status = qs('#access-status-' + n);
    if(status) {
      const taskPct = modulePct(n);
      const qPassed = quizPassed(n);
      const approved = moduleApproved(n);
      status.innerHTML = `<div class="module-status-strip ${approved ? 'approved' : ''}">
        <div><strong>Status do Módulo ${String(n).padStart(2,'0')}</strong><span>Checklist: ${taskPct}% · Avaliação: ${qPassed ? 'aprovada' : 'pendente'}</span></div>
        <div class="status-pill">${approved ? '✅ Aprovado' : '🔓 Em andamento'}</div>
      </div>`;
    }
    const box = qs('#module-status-' + n);
    if(box) {
      const taskPct = modulePct(n);
      const score = quizScore(n);
      const total = quizTotal(n);
      const required = passScore(n);
      if(moduleApproved(n)) {
        box.className = 'module-status-box status-approved';
        box.innerHTML = `✅ <strong>Módulo aprovado.</strong> Você acertou ${score}/${total}; o próximo módulo está liberado. Seu checklist permanece salvo em ${taskPct}%.`;
      } else {
        box.className = 'module-status-box';
        box.innerHTML = `🔐 Para liberar o próximo módulo, acerte mais da metade da avaliação: no mínimo ${required}/${total}. Checklist atual: ${taskPct}%.`;
      }
    }
    const unlock = qs('#unlock-next-' + n);
    if(unlock) {
      if(moduleApproved(n) && n < maxModule) unlock.innerHTML = `<a class="link-btn" data-module-link="${n+1}" href="modulo-${String(n+1).padStart(2,'0')}.html">Avançar para o Módulo ${String(n+1).padStart(2,'0')} →</a>`;
      else if(moduleApproved(n) && n === maxModule) unlock.innerHTML = '<div class="module-status-box status-approved">🎓 Parabéns! Você concluiu a trilha principal.</div>';
      else unlock.innerHTML = '';
    }
  }

  function renderQuiz(n) {
    const root = qs('#quiz-questions-' + n);
    if(!root) return;
    const questions = QUIZZES[String(n)] || [];
    root.innerHTML = questions.map((item, idx) => {
      const saved = localStorage.getItem(`quiz_m${n}_q${idx}`);
      const opts = item.options.map((op, oi) => `
        <label class="quiz-option">
          <input type="radio" name="quiz-m${n}-q${idx}" value="${oi}" ${saved === String(oi) ? 'checked' : ''}>
          <span>${op}</span>
        </label>`).join('');
      return `<div class="quiz-question" data-question="${idx}">
        <h5>${idx+1}. ${item.q}</h5>
        <div class="quiz-options">${opts}</div>
      </div>`;
    }).join('');
    root.querySelectorAll('input[type="radio"]').forEach(inp => {
      inp.addEventListener('change', () => {
        const m = inp.name.match(/quiz-m(\d+)-q(\d+)/);
        if(m) {
          localStorage.setItem(`quiz_m${m[1]}_q${m[2]}`, inp.value);
          notifyProgressChanged();
        }
      });
    });
    showQuizResult(n, false);
  }

  function showQuizResult(n, forceShow) {
    const result = qs('#quiz-result-' + n);
    if(!result) return;
    const total = quizTotal(n);
    const scoreSaved = localStorage.getItem('quiz_m' + n + '_score');
    const passed = quizPassed(n);
    if(scoreSaved === null && !forceShow) { result.innerHTML = ''; return; }
    const score = quizScore(n);
    const required = passScore(n);
    const taskPct = modulePct(n);
    result.className = 'quiz-result ' + (passed ? 'passed' : 'failed');
    if(passed) {
      result.innerHTML = `✅ Aprovado na avaliação: ${score}/${total} acertos. O próximo módulo foi liberado.`;
    } else {
      result.innerHTML = `❌ Resultado: ${score}/${total} acertos. Para ser aprovado, precisa acertar mais da metade: no mínimo ${required}. Revise o módulo e tente novamente.`;
    }
  }

  window.submitQuiz = function(n) {
    const questions = QUIZZES[String(n)] || [];
    let score = 0;
    let missing = 0;
    questions.forEach((item, idx) => {
      const checked = qs(`input[name="quiz-m${n}-q${idx}"]:checked`);
      if(!checked) { missing++; return; }
      localStorage.setItem(`quiz_m${n}_q${idx}`, checked.value);
      if(Number(checked.value) === item.answer) score++;
    });
    const result = qs('#quiz-result-' + n);
    if(missing) {
      if(result) { result.className = 'quiz-result failed'; result.innerHTML = '⚠️ Responda todas as questões antes de enviar a avaliação.'; }
      return;
    }
    const passed = score >= passScore(n);
    localStorage.setItem('quiz_m' + n + '_score', String(score));
    localStorage.setItem('quiz_m' + n + '_passed', passed ? '1' : '0');
    showQuizResult(n, true);
    updateProgress();
    notifyProgressChanged();
  };

  window.resetQuiz = function(n) {
    if(!confirm('Deseja refazer a avaliação deste módulo? A pontuação anterior será apagada.')) return;
    localStorage.removeItem('quiz_m' + n + '_score');
    localStorage.removeItem('quiz_m' + n + '_passed');
    (QUIZZES[String(n)] || []).forEach((_, idx) => localStorage.removeItem(`quiz_m${n}_q${idx}`));
    qsa(`#quiz-questions-${n} input[type="radio"]`).forEach(inp => inp.checked = false);
    const result = qs('#quiz-result-' + n); if(result) result.innerHTML = '';
    updateProgress();
    notifyProgressChanged();
  };

  window.onCheck = function(el) { setChecked(el.id, el.checked); updateProgress(); };

  window.resetAll = function() {
    if(!confirm('Tem certeza que deseja zerar todo o progresso, avaliações, exercícios e anotações salvas?')) return;
    Object.keys(localStorage).forEach(k => {
      if(k.startsWith('task_') || k.startsWith('notes_') || k.startsWith('exercise_') || k.startsWith('quiz_')) localStorage.removeItem(k);
    });
    qsa('.task-check').forEach(el => el.checked = false);
    qsa('.notes-field, .exercise-field').forEach(el => el.value = '');
    qsa('.quiz-result').forEach(el => el.innerHTML = '');
    qsa('.quiz-questions input[type="radio"]').forEach(el => el.checked = false);
    updateProgress();
    notifyProgressChanged();
  };

  window.filterMods = function(btn, area) {
    qsa('.ftab').forEach(b => b.classList.remove('active'));
    if(btn) btn.classList.add('active');
    qsa('.module-index-card, .mod-card').forEach(card => {
      const areas = (card.dataset.areas || '').split(/\s+/);
      card.style.display = (area === 'all' || areas.includes(area)) ? '' : 'none';
    });
  };

  function enforceCurrentModuleAccess() {
    const n = Number(document.body.dataset.module || 0);
    if(!n || moduleUnlocked(n)) return;
    const main = qs('#main');
    const prev = n - 1;
    if(main) {
      main.innerHTML = `<section class="page-hero"><div class="breadcrumb"><a href="index.html">Início</a> / <a href="modulos.html">Módulos</a> / Módulo ${String(n).padStart(2,'0')}</div><h2>🔒 Módulo bloqueado</h2><p>Este módulo ainda não está disponível. Para liberá-lo, seja aprovado na avaliação do Módulo ${String(prev).padStart(2,'0')}.</p></section>
      <div class="locked-panel"><h3>O que falta?</h3><p>O sistema libera os módulos em sequência. Volte ao módulo anterior e acerte mais da metade das questões da avaliação.</p><a class="link-btn" href="modulo-${String(prev).padStart(2,'0')}.html">Voltar ao Módulo ${String(prev).padStart(2,'0')}</a> <a class="link-btn secondary" href="modulos.html">Ver todos os módulos</a></div>`;
    }
  }

  function restoreStorageFields() {
    qsa('.task-check').forEach(el => { el.checked = isChecked(el.id); });
    qsa('.notes-field').forEach(el => {
      const key = 'notes_' + el.dataset.mod;
      el.value = localStorage.getItem(key) || '';
    });
    qsa('.exercise-field').forEach(el => {
      const key = 'exercise_' + el.dataset.exercise;
      const count = qs('#ex-count-' + el.dataset.exercise);
      el.value = localStorage.getItem(key) || '';
      if(count) count.textContent = (el.value || '').length + ' caracteres';
    });
  }

  function setupStorageFields() {
    restoreStorageFields();
    qsa('.notes-field').forEach(el => {
      const key = 'notes_' + el.dataset.mod;
      el.addEventListener('input', () => localStorage.setItem(key, el.value));
    });
    qsa('.exercise-field').forEach(el => {
      const key = 'exercise_' + el.dataset.exercise;
      const count = qs('#ex-count-' + el.dataset.exercise);
      const updateCount = () => { if(count) count.textContent = (el.value || '').length + ' caracteres'; };
      updateCount();
      el.addEventListener('input', () => { localStorage.setItem(key, el.value); updateCount(); notifyProgressChanged(); });
    });
    qsa('.notes-field').forEach(el => el.addEventListener('input', notifyProgressChanged));
  }

  function showProtectionMessage() { alert('Este conteúdo não está liberado para impressão ou salvamento em PDF. O acesso é somente pela plataforma.'); }
  document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    if((event.ctrlKey || event.metaKey) && (key === 'p' || key === 's')) { event.preventDefault(); showProtectionMessage(); }
  });
  window.addEventListener('beforeprint', showProtectionMessage);
  document.addEventListener('contextmenu', (event) => { if(!event.target.closest('textarea, input, a, button, label')) event.preventDefault(); });

  let appInitialized = false;
  function initializeAcademyApp() {
    if(!appInitialized) {
      setupStorageFields();
      appInitialized = true;
    } else {
      restoreStorageFields();
    }
    const n = Number(document.body.dataset.module || 0);
    if(n) {
      window.AcademyProgressCloud?.markLastModule(n);
      enforceCurrentModuleAccess();
      if(moduleUnlocked(n)) renderQuiz(n);
      notifyProgressChanged();
    }
    updateProgress();
  }

  window.refreshAcademyProgress = initializeAcademyApp;
  window.addEventListener('academy:cloud-progress-ready', initializeAcademyApp);
  document.addEventListener('DOMContentLoaded', () => {
    // Sem Supabase configurado, mantém o modo local para facilitar a configuração inicial.
    if(!window.supabaseClient) initializeAcademyApp();
  });
})();

// Experiencia diaria da trilha intensiva de 21 dias.
// Mantem a compatibilidade com os modulos antigos, mas usa chaves proprias
// quando a pagina atual pertence ao plano diario.
(() => {
  const DAY_COUNT = 21;
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const dayTaskIds = day => [1, 2, 3].map(task => `d${day}c${task}`);
  const isDayCourse = () => Boolean(document.body.dataset.day || $('[data-day-card]'));
  const dayChecked = id => localStorage.getItem(`task_${id}`) === '1';
  const dayPercent = day => Math.round((dayTaskIds(day).filter(dayChecked).length / 3) * 100);
  const dayPassed = day => localStorage.getItem(`quiz_d${day}_passed`) === '1';
  const dayUnlocked = day => day === 1 || dayPassed(day - 1);
  const requiredScore = total => Math.floor(total / 2) + 1;

  function emitProgressChange() {
    document.dispatchEvent(new CustomEvent('academy:progress-changed'));
  }

  function updateDayCards() {
    $$('[data-day-card]').forEach(card => {
      const day = Number(card.dataset.dayCard);
      const unlocked = dayUnlocked(day);
      const approved = dayPassed(day);
      const percent = dayPercent(day);
      const fill = $(`#day-card-p${day}`, card);
      const text = $(`#day-card-t${day}`, card);
      const status = $(`#day-lock-status-${day}`, card);
      const link = $('[data-day-link]', card);
      if(fill) fill.style.width = `${percent}%`;
      if(text) text.textContent = `${percent}%`;
      card.classList.toggle('module-locked', !unlocked);
      card.classList.toggle('module-approved', approved);
      if(status) {
        status.textContent = !unlocked
          ? `Bloqueado - conclua e seja aprovado no dia ${String(day - 1).padStart(2, '0')}`
          : approved ? 'Aprovado' : `Liberado - checklist ${percent}%`;
      }
      if(link) {
        link.classList.toggle('locked-link', !unlocked);
        if(!unlocked) {
          if(link.getAttribute('href')) link.dataset.originalHref = link.getAttribute('href');
          link.removeAttribute('href');
          link.setAttribute('aria-disabled', 'true');
        } else if(!link.getAttribute('href')) {
          link.setAttribute('href', link.dataset.originalHref || `dia-${String(day).padStart(2, '0')}.html`);
          link.removeAttribute('aria-disabled');
        }
      }
    });
  }

  function updateDailySummary() {
    const tasks = Array.from({ length: DAY_COUNT }, (_, index) => dayTaskIds(index + 1)).flat();
    const done = tasks.filter(dayChecked).length;
    const percent = Math.round((done / tasks.length) * 100);
    const approved = Array.from({ length: DAY_COUNT }, (_, index) => index + 1).filter(dayPassed).length;
    const next = Array.from({ length: DAY_COUNT }, (_, index) => index + 1).find(day => dayUnlocked(day) && !dayPassed(day));
    const setText = (id, value) => { const element = $(`#${id}`); if(element) element.textContent = value; };
    setText('pg-pct', `${percent}%`);
    setText('pg-pct2', `${percent}%`);
    setText('pg-done', done);
    setText('pg-total', tasks.length);
    setText('pg-approved', approved);
    setText('pg-mods', approved);
    setText('pg-next', next ? String(next).padStart(2, '0') : 'Concluido');
    setText('hdr-prog', `${percent}% concluido`);
    const bar = $('#pg-bar'); if(bar) bar.style.width = `${percent}%`;
    updateDayCards();
  }

  function enforceDayAccess() {
    const day = Number(document.body.dataset.day || 0);
    if(!day || dayUnlocked(day)) return;
    const main = $('#main');
    if(!main) return;
    main.innerHTML = `<section class="page-hero"><h2>Dia bloqueado</h2><p>Conclua o checklist e seja aprovado no dia ${String(day - 1).padStart(2, '0')} para continuar.</p><a class="link-btn" href="dia-${String(day - 1).padStart(2, '0')}.html">Voltar ao dia anterior</a></section>`;
  }

  function restoreDayFields() {
    $$('.day-check').forEach(input => { input.checked = dayChecked(input.id); });
  }

  function updateCurrentDayStatus(day) {
    const status = $(`#access-status-${day}`);
    if(!status) return;
    const approved = dayPassed(day);
    status.innerHTML = `<div class="module-status-strip ${approved ? 'approved' : ''}"><div><strong>Dia ${String(day).padStart(2, '0')}</strong><span>Checklist: ${dayPercent(day)}% - avaliacao: ${approved ? 'aprovada' : 'pendente'}</span></div><div class="status-pill">${approved ? 'Aprovado' : 'Em andamento'}</div></div>`;
  }

  function showDayQuizResult(day, force = false) {
    const result = $(`#quiz-result-${day}`);
    if(!result) return;
    const questions = $$('.quiz-question', $('[data-quiz-day]'));
    const scoreRaw = localStorage.getItem(`quiz_d${day}_score`);
    if(scoreRaw === null && !force) { result.textContent = ''; return; }
    const score = Number(scoreRaw || 0);
    const required = requiredScore(questions.length);
    const passed = dayPassed(day);
    result.className = `quiz-result ${passed ? 'passed' : 'failed'}`;
    result.textContent = passed
      ? `Aprovado: ${score}/${questions.length} acertos. O proximo dia foi liberado.`
      : `Resultado: ${score}/${questions.length}. Voce precisa de ${required} acertos para avancar.`;
  }

  window.submitDayQuiz = function(day) {
    const panel = $('[data-quiz-day]');
    const questions = $$('.quiz-question', panel);
    let score = 0;
    let missing = 0;
    questions.forEach((question, index) => {
      const checked = $('input[type="radio"]:checked', question);
      if(!checked) { missing += 1; return; }
      localStorage.setItem(`quiz_d${day}_q${index + 1}`, checked.value);
      if(checked.dataset.correct === '1') score += 1;
    });
    const result = $(`#quiz-result-${day}`);
    if(missing) {
      if(result) { result.className = 'quiz-result failed'; result.textContent = 'Responda todas as questoes antes de enviar a avaliacao.'; }
      return;
    }
    const passed = score >= requiredScore(questions.length);
    localStorage.setItem(`quiz_d${day}_score`, String(score));
    localStorage.setItem(`quiz_d${day}_passed`, passed ? '1' : '0');
    showDayQuizResult(day, true);
    updateCurrentDayStatus(day);
    updateDailySummary();
    emitProgressChange();
  };

  window.resetDayQuiz = function(day) {
    if(!window.confirm('Deseja refazer a avaliacao deste dia?')) return;
    localStorage.removeItem(`quiz_d${day}_score`);
    localStorage.removeItem(`quiz_d${day}_passed`);
    $$('.quiz-question', $('[data-quiz-day]')).forEach((question, index) => {
      localStorage.removeItem(`quiz_d${day}_q${index + 1}`);
      $$('input[type="radio"]', question).forEach(input => { input.checked = false; });
    });
    const result = $(`#quiz-result-${day}`); if(result) result.textContent = '';
    updateCurrentDayStatus(day);
    updateDailySummary();
    emitProgressChange();
  };

  window.resetAllProgress = function() {
    if(!window.confirm('Tem certeza que deseja zerar seu progresso do plano de 21 dias?')) return;
    Object.keys(localStorage).forEach(key => {
      if(key.startsWith('task_d') || key.startsWith('quiz_d') || key.startsWith('exercise_d')) localStorage.removeItem(key);
    });
    restoreDayFields();
    updateDailySummary();
    emitProgressChange();
  };

  function initializeDailyCourse() {
    if(!isDayCourse()) return;
    window.AcademyCoreTaskIds = new Set(Array.from({ length: DAY_COUNT }, (_, index) => dayTaskIds(index + 1)).flat());
    restoreDayFields();
    $$('.day-check').forEach(input => {
      if(input.dataset.dailyBound) return;
      input.dataset.dailyBound = 'true';
      input.addEventListener('change', () => {
        localStorage.setItem(`task_${input.id}`, input.checked ? '1' : '0');
        updateDailySummary();
        emitProgressChange();
      });
    });
    const day = Number(document.body.dataset.day || 0);
    if(day) {
      window.AcademyProgressCloud?.markLastModule(day);
      enforceDayAccess();
      if(dayUnlocked(day)) {
        showDayQuizResult(day);
        updateCurrentDayStatus(day);
      }
    }
    updateDailySummary();
  }

  window.addEventListener('academy:cloud-progress-ready', initializeDailyCourse);
  document.addEventListener('DOMContentLoaded', initializeDailyCourse);
})();

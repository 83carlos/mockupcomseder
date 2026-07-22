export const NAV_ITEMS = [
  { label: "Institucional", href: "/institucional" },
  { label: "Planos", href: "/planos" },
  { label: "Atendimentos", href: "/atendimentos" },
  { label: "Prestador", href: "/prestador" },
  { label: "Portal de Serviços", href: "http://portal.comseder.net.br/", external: true, accent: true },
  { label: "Contatos", href: "/contato" },
  { label: "ANS", href: "/ans" },
];

export const QUICK_LINKS = [
  { label: "Planos", image: "/assets/crops/quick-planos.png", href: "/planos" },
  { label: "Ambulatórios", image: "/assets/crops/quick-ambulatorios.png", href: "/atendimentos" },
  { label: "Portal de Serviços", image: "/assets/crops/quick-portal.png", href: "http://portal.comseder.net.br/", external: true },
  { label: "Guias Médicos", image: "/assets/crops/quick-guias.png", href: "http://portal.comseder.com.br/portal/f?p=105:3:14515030846819::NO:::", external: true },
  { label: "2ª Via de Boletos", image: "/assets/crops/quick-boletos.png", href: "http://portal.comseder.net.br/", external: true },
];

export const CONTACT_GROUPS = [
  {
    title: "ADMINISTRAÇÃO",
    lines: ["Presidência: (83) 3216-2904", "Diretoria Administrativa / Financeira: (83) 3216-2907"],
  },
  {
    title: "PARA O CLIENTE",
    lines: [
      "Marcação de Consultas: (83) 3216-2908",
      "Tesouraria: (83) 3216-2879",
      "Policlínica: (83) 3216-2910",
      "Campina Grande: (83) 3065-0486",
      "Cancelamento de agendamento: (83) 3216-2835",
      "Pilates: (83) 3216-2835",
      "Email: comseder@comseder.net.br",
    ],
  },
  {
    title: "OUVIDORIA",
    lines: ["Telefone: (83) 3216-2835", "E-mail: ouvidoria@comseder.net.br"],
  },
  {
    title: "PARA O PRESTADOR",
    lines: [
      "Tesouraria: (83) 3216-2879",
      "Campina Grande: (83) 3065-0486",
      "Gerência Executiva: (83) 3216-2916",
      "Contas Médicas: (83) 3216-2912",
      "Autorizações: (83) 3216.2908",
      "Email: centraldocredenciado@comseder.net.br",
      "Para solicitações de Materiais especiais para cirurgias eletivas: email: opme@comseder.net.br",
    ],
  },
];

export const PLANS = [
  {
    name: "COMSEDER ESPECIAL II",
    copy: "Plano coletivo por adesão com segmentação ambulatorial + hospitalar com obstetrícia",
    accommodation: "COLETIVA (enfermaria)",
    moderator: "Fato moderador: coparticipação.",
  },
  {
    name: "COMSEDER EXECUTIVO II",
    copy: "Plano coletivo por adesão com segmentação ambulatorial + hospitalar com obstetrícia",
    accommodation: "INDIVIDUAL (apartamento)",
    moderator: "Fato moderador: coparticipação",
  },
  {
    name: "COMSEDER REFERÊNCIA II",
    copy: "Plano coletivo por adesão com segmentação ambulatorial + hospitalar com obstetrícia",
    accommodation: "INDIVIDUAL (apartamento)",
    moderator: "Não possui coparticipação.",
  },
];

export const HOW_IT_WORKS = [
  "Você tem acesso a atendimento médico por especialidade e acompanhamento em saúde.",
  "Atendemos servidores públicos do Estado que fazem parte da folha de pagamento e também suas famílias. Porque entendemos que cuidar de você também é cuidar de quem está ao seu lado todos os dias.",
  "Aqui, você tem acesso a atendimento médico, diversas especialidades e acompanhamento em saúde pensado para a sua realidade. Sem burocracia desnecessária. Sem distância no atendimento.",
];

export const SCHEDULES = [
  {
    title: "Clínica Geral / Geriatria",
    slots: [
      ["Segunda-feira - Tarde", "Primeiro Horário : 14h:00", "Segundo Horário : 14h:20"],
      ["Quarta-feira - Tarde", "Primeiro Horário : 14h:00", "Segundo Horário : 14h:20"],
      ["Sexta-feira - Tarde", "Primeiro Horário : 14h:00", "Segundo Horário : 14h:20"],
    ],
  },
  {
    title: "Dermatologia",
    slots: [
      ["Segunda-feira - Tarde", "Primeiro Horário : 14h:00", "Segundo Horário : 14h:20"],
      ["Terça-feira - Tarde", "Primeiro Horário : 14h:00", "Segundo Horário : 14h:20"],
    ],
  },
  {
    title: "Ginecologia e Obstetrícia",
    slots: [
      ["Terça-feira - Tarde", "Primeiro Horário : 14h:00", "Segundo Horário : 14h:20"],
      ["Quarta-feira - Tarde", "Primeiro Horário : 14h:00", "Segundo Horário : 14h:20"],
      ["Sexta-feira - Manhã", "Primeiro Horário : 08h:00", "Segundo Horário : 08h:20"],
    ],
  },
  {
    title: "Nutrição",
    slots: [
      ["Terça-feira - Manhã", "Primeiro Horário : 08h:00", "Segundo Horário : 08h:20"],
      ["Quinta-feira - Manhã", "Primeiro Horário : 08h:00", "Segundo Horário : 08h:20"],
    ],
  },
  { title: "Fisioterapia", slots: [["Segunda a sexta-feira", "Das 07h às 16h"]] },
  { title: "Endocrinologia", slots: [["Sexta-feira - Manhã", "Primeiro Horário : 08h:00", "Segundo Horário : 08h:20"]] },
  { title: "Pilates", slots: [["Segunda a sexta-feira", "Das 07h às 16h"]] },
];

export const VALUES = [
  ["Cuidado com o bem-estar:", "Colocar a saúde e o bem-estar dos cooperados/beneficiários e colaboradores no centro de nossas ações."],
  ["Transparência e Eficiência:", "Manter clareza e honestidade em todas as nossas operações e comunicações. Buscar a excelência na gestão e na entrega de serviços de saúde"],
  ["Compromisso:", "Dedicação total à melhoria contínua dos serviços prestados aos nossos cooperados/beneficiário"],
  ["Sustentabilidade:", "Garantir a viabilidade e continuidade dos serviços oferecidos de forma responsável."],
  ["Humanização:", "Tratar cada cooperado/beneficiário, prestador e colaborador com respeito, empatia e dignidade."],
];

export const DIRECTORS = [
  { name: "Francisco Fernandes Lisbôa", role: "Diretor Presidente", image: "/assets/pdf/8-institucional-04.png", side: "left" },
  { name: "Najla Coeli Diniz Gomes", role: "Diretora Administrativa", image: "/assets/pdf/8-institucional-05.png", side: "right" },
  { name: "Antônio Alves Vieira", role: "Diretoria Operacional", image: "/assets/pdf/8-institucional-06.png", side: "left" },
  { name: "Fernando Antônio Dias", role: "Diretor de integração", image: "/assets/pdf/8-institucional-07.png", side: "right" },
];

export const IDSS_DIMENSIONS = [
  ["1 - IDQS - QUALIDADE EM ATENÇÃO À SAÚDE", "Avaliação do conjunto de ações em saúde que contribuem para o atendimento das necessidades de saúde dos beneficiários, com ênfase nas ações de promoção, prevenção e assistência à saúde prestada", "/assets/pdf/2-idss-06.png"],
  ["2- IDGA - GARANTIA DE ACESSO", "Condições relacionadas à rede assistencial que possibilitam a garantia de acesso, abrangendo a oferta de rede de prestadores.", "/assets/pdf/2-idss-07.png"],
  ["3 - IDSM - SUSTENTABILIDADE NO MERCADO", "Monitoramento da sustentabilidade da operadora, considerando seu equilíbrio econômico-financeiro, passando pela satisfação do beneficiário e compromissos com prestadores.", "/assets/pdf/2-idss-08.png"],
  ["4 - IDGR - GESTÃO DE PROCESSOS E REGULAÇÃO", "Entre outros indicadores, essa dimensão afere o cumprimento das obrigações técnicas e cadastrais das operadoras junto à ANS.", "/assets/pdf/2-idss-09.png"],
];

export const PRIVACY_SUMMARY = [
  ["Agente de tratamento", "COMSEDER - Cooperativa Médica dos Servidores da Suplan e do DER Ltda., CNPJ 70.094.578/0001-30, com sede em João Pessoa/PB. Registro ANS nº 39.025-9."],
  ["Papel no tratamento", "Predominantemente controladora, sem prejuízo de situações em que prestadores assistenciais, fornecedores de tecnologia ou parceiros atuem como controladores independentes ou operadores, conforme o contrato e a finalidade."],
  ["Natureza dos dados", "Dados pessoais comuns, dados pessoais sensíveis, especialmente dados de saúde, dados financeiros, dados cadastrais, dados contratuais e dados de crianças e adolescentes, quando vinculados ao plano ou ao atendimento"],
  ["Principais finalidades", "Gestão do plano de saúde, cadastro e elegibilidade, atendimento, autorização de procedimentos, OPME, rede credenciada, boletos, mensalidades, reembolsos, comunicações, cumprimento de obrigações legais e regulatórias, auditorias, segurança e exercício regular de direitos"],
  ["Bases legais", "Execução de contrato, procedimentos preliminares, cumprimento de obrigação legal ou regulatória, proteção da saúde, tutela da saúde por profissionais, serviços de saúde ou autoridade sanitária, exercício regular de direitos, legítimo interesse e consentimento quando exigido pela LGPD"],
  ["Compartilhamento", "Rede assistencial, clínicas, hospitais, laboratórios, médicos, fornecedores de sistemas e infraestrutura, instituições financeiras, patrocinadores ou órgãos relacionados ao vínculo do plano, ANS, autoridades públicas, auditores e terceiros necessários à prestação dos serviços"],
  ["Proteção e guarda", "Medidas técnicas, administrativas e contratuais adequadas, controle de acesso, sigilo, termos de confidencialidade, cláusulas LGPD, inventário de acessos e matriz de temporalidade e guarda observando legislação e regulação aplicáveis"],
  ["Transferência internacional", "Não é uma finalidade ordinária declarada. Se alguma operação ou fornecedor exigir transferência internacional, a COMSEDER observará os requisitos legais aplicáveis e informará os titulares quando necessário."],
  ["Direitos dos titulares", "Confirmação de tratamento, acesso, correção, anonimização, bloqueio, eliminação, portabilidade, informação sobre compartilhamento, informação sobre consentimento e revogação do consentimento, nos limites da LGPD."],
];

export const PRIVACY_DEFINITIONS = [
  ["Dado pessoal", "Informação relacionada a uma pessoa natural identificada ou identificável."],
  ["Dado pessoal sensível", "Dado sobre origem racial ou étnica, convicção religiosa, opinião política, filiação sindical, dado referente à saúde ou à vida sexual, dado genético ou biométrico, quando vinculado a pessoa natural."],
  ["Titular", "Pessoa natural a quem se referem os dados pessoais tratados."],
  ["Tratamento", "Toda operação realizada com dados pessoais, como coleta, recepção, classificação, uso, acesso, reprodução, transmissão, armazenamento, eliminação, comunicação, transferência ou extração."],
  ["Controlador", "Agente que toma as decisões referentes ao tratamento de dados pessoais"],
  ["Operador", "Agente que trata dados pessoais em nome do controlador, conforme instruções e contrato."],
  ["Encarregado", "Pessoa indicada para atuar como canal de comunicação entre a COMSEDER, os titulares e a Autoridade Nacional de Proteção de Dados (ANPD)."],
  ["Anonimização", "Utilização de meios técnicos razoáveis para impedir a associação direta ou indireta de um dado a uma pessoa natural."],
];

export const PRIVACY_SECTIONS = [
  {
    title: "Quais Dados Tratamos",
    paragraphs: [
      "A COMSEDER trata apenas os dados necessários para finalidades legítimas e compatíveis com suas atividades de autogestão em saúde. A coleta pode ocorrer quando o titular, seu representante legal, um prestador, um empregador/patrocinador, um sistema autorizado ou um órgão regulador fornece informações à COMSEDER.",
    ],
    subheading: "Dados fornecidos pelo titular ou representante",
    bullets: [
      "Dados de identificação e contato: nome, CPF, RG, data de nascimento, gênero, estado civil quando necessário, endereço, telefone e e-mail.",
      "Dados de vínculo e plano: matrícula, código do beneficiário, código do cartão, plano contratado, elegibilidade, lotação, unidade pagadora, situação, cargo e dados do responsável legal ou financeiro.",
      "Dados assistenciais e de saúde: extrato de utilização, solicitações de OPME, nome do procedimento, código do procedimento, dados de médico assistente, CRM, guias, internações, reembolso e demais informações necessárias ao atendimento.",
      "Dados financeiros e administrativos: boletos, mensalidades, parcelamentos, quitação de débitos, extratos, dados bancários de prestadores e informações necessárias a pagamento, cobrança ou prestação de contas.",
      "Dados de prestadores e rede credenciada: nome do prestador, CPF ou CNPJ, CNES, endereço, dados bancários, e-mail, CRM e documentos exigidos pela legislação, pela ANS ou pelo contrato.",
      "Dados de crianças e adolescentes: dados cadastrais, dados de saúde e dados do representante legal, sempre observando o melhor interesse do menor e as hipóteses legais aplicáveis.",
    ],
    secondaryHeading: "Dados de canais digitais",
    secondaryParagraphs: ["Em contatos por WhatsApp, chat, telefone, portal ou atendimento digital, a COMSEDER pode solicitar dados mínimos para identificação e continuidade do atendimento, como nome, CPF, código do cartão ou matrícula do plano. Registros técnicos estritamente necessários ao funcionamento, segurança ou auditoria dos sistemas podem ser mantidos quando aplicável."],
  },
  {
    title: "Como Coletamos e Usamos os Dados",
    paragraphs: [
      "O tratamento de dados pessoais ocorre para viabilizar a relação entre a COMSEDER e os titulares, incluindo admissão e manutenção do plano, cadastro, atualização cadastral, emissão de boletos, gestão de mensalidades, autorizações, atendimento assistencial, OPME, comunicação com a rede credenciada, prestação de contas, auditoria e atendimento a exigências da ANS, do Poder Judiciário, de autoridades públicas e da legislação aplicável.",
      "Os dados sensíveis, especialmente dados de saúde, são tratados somente quando necessários para a prestação de serviços de saúde, proteção ou tutela da saúde, cumprimento de obrigação legal ou regulatória, exercício regular de direitos ou outra hipótese autorizada pela LGPD.",
    ],
    subheading: "Bases legais utilizadas",
    bullets: [
      "Execução de contrato e procedimentos preliminares, para adesão, manutenção e administração do plano.",
      "Cumprimento de obrigações legais e regulatórias, inclusive normas da ANS, legislação civil, trabalhista, cooperativista e sanitária.",
      "Proteção da saúde e tutela da saúde, quando o tratamento envolver prestação assistencial, rede credenciada, procedimentos e informações clínicas necessárias.",
      "Exercício regular de direitos em processos judiciais, administrativos ou arbitrais. Legítimo interesse, sempre com avaliação de necessidade, proporcionalidade e respeito aos direitos e liberdades dos titulares.",
      "Consentimento, quando a LGPD exigir autorização específica, especialmente para finalidades não diretamente necessárias ao contrato ou para situações envolvendo menores, pesquisas ou comunicações opcionais",
    ],
  },
  {
    title: "Crianças e Adolescentes",
    paragraphs: [
      "A COMSEDER pode tratar dados de crianças e adolescentes vinculados aos planos, dependentes ou representados por responsáveis legais. Esse tratamento será realizado conforme o melhor interesse do menor, com coleta proporcional à finalidade assistencial, contratual ou regulatória e com validação do representante legal quando aplicável.",
      "Sempre que a base legal exigir consentimento, a COMSEDER utilizará termo próprio para tratamento de dados pessoais de crianças e adolescentes, mantendo registro da autorização e permitindo sua revogação nos limites da legislação.",
    ],
  },
  {
    title: "Cookies e Tecnologias Semelhantes",
    paragraphs: [
      "A política pública vigente da COMSEDER informa que a entidade não utiliza cookies, pixel tags, beacons ou local shared objects para rastreamento em suas atividades. Caso o website ou os portais venham a empregar cookies não essenciais ou ferramentas equivalentes, a COMSEDER atualizará esta Política e adotará os avisos e consentimentos exigidos pela LGPD.",
      "Cookies técnicos indispensáveis ao funcionamento, autenticação ou segurança de sistemas podem ser utilizados quando necessários para disponibilizar serviços digitais, prevenir fraudes ou manter a estabilidade do portal.",
    ],
  },
  {
    title: "Compartilhamento de Dados",
    paragraphs: ["A COMSEDER pode compartilhar dados pessoais quando isso for necessário para cumprir as finalidades descritas nesta Política, respeitando a LGPD, contratos, normas da ANS e obrigações de sigilo. O compartilhamento é limitado ao mínimo necessário."],
    bullets: [
      "Rede assistencial e prestadores de saúde: médicos, clínicas, hospitais, laboratórios, profissionais de saúde e fornecedores de OPME.",
      "Fornecedores e parceiros essenciais: empresas de tecnologia, suporte, sistemas, hospedagem, infraestrutura, cobrança, emissão de boletos, auditoria, consultoria, atendimento e gestão documental.",
      "Patrocinadores, empregadores, entidades vinculadas ou órgãos relacionados ao plano, quando necessário à elegibilidade, custeio, auditoria ou gestão do vínculo.",
      "Autoridades públicas, órgãos reguladores, ANS, Poder Judiciário, órgãos administrativos e entidades competentes, quando houver obrigação legal, regulatória ou ordem válida.",
      "Terceiros envolvidos em reorganizações, auditorias, defesa de direitos ou continuidade de serviços, sempre com salvaguardas contratuais e finalidade compatível",
    ],
    secondaryParagraphs: ["Prestadores e fornecedores que atuarem como operadores deverão tratar dados conforme instruções da COMSEDER e compromissos contratuais de confidencialidade, segurança, retenção, eliminação e cooperação em incidentes. Quando atuarem como controladores independentes, serão responsáveis por suas próprias decisões de tratamento."],
  },
  {
    title: "Segurança, Sigilo e Governança",
    paragraphs: ["A COMSEDER utiliza medidas técnicas e administrativas razoáveis e compatíveis com o risco para proteger dados pessoais contra acesso não autorizado, perda, alteração indevida, destruição, comunicação ou tratamento inadequado."],
    bullets: [
      "Controle de acesso por pessoas autorizadas e com finalidade definida. Registro e inventário de acessos quando aplicável, com indicação de momento, duração, identidade do responsável e arquivo consultado.",
      "Termos de confidencialidade para colaboradores e terceiros que acessem dados pessoais ou dados sensíveis. Cláusulas e aditivos contratuais de proteção de dados para rede credenciada, fornecedores de tecnologia, operadores e controladores independentes.",
      "Avaliação de riscos contratuais e documentais, com atualização periódica dos instrumentos e da matriz de temporalidade e guarda.",
      "Treinamentos, orientações internas e governança em privacidade aplicada às atividades da COMSEDER.",
    ],
    secondaryParagraphs: ["Nenhuma transmissão ou armazenamento de dados é absolutamente imune a riscos. Por isso, a COMSEDER recomenda que os titulares mantenham em sigilo suas senhas, códigos de acesso e informações de identificação utilizadas em portais ou canais digitais"],
  },
  {
    title: "Retenção e Eliminação",
    paragraphs: [
      "Os dados pessoais serão mantidos pelo período necessário ao cumprimento das finalidades para as quais foram coletados, observando a matriz de temporalidade e guarda, prazos legais, regulatórios, contratuais e prescricionais aplicáveis.",
      "Quando deixarem de ser necessários, os dados poderão ser eliminados, anonimizados ou arquivados com acesso restrito, salvo quando a manutenção for exigida para cumprimento de obrigação legal ou regulatória, exercício regular de direitos, prestação de contas, auditoria, prevenção a fraudes ou outra hipótese autorizada pela LGPD.",
    ],
  },
  {
    title: "Direitos dos Titulares",
    paragraphs: ["A COMSEDER respeita os direitos previstos no art. 18 da LGPD. O titular ou seu representante legal poderá solicitar:"],
    bullets: [
      "confirmação da existência de tratamento;",
      "acesso aos dados pessoais tratados;",
      "correção de dados incompletos, inexatos ou desatualizados;",
      "anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a LGPD;",
      "portabilidade dos dados, quando regulamentada e aplicável;",
      "eliminação dos dados tratados com base no consentimento, observadas as exceções legais;",
      "informação sobre entidades públicas e privadas com as quais houve compartilhamento;",
      "informação sobre a possibilidade de não fornecer consentimento e sobre as consequências da negativa;",
      "revogação do consentimento, quando essa for a base legal do tratamento;",
      "revisão de decisões tomadas unicamente com base em tratamento automatizado, quando houver.",
    ],
    secondaryParagraphs: [
      "As solicitações devem ser enviadas ao Encarregado de Proteção de Dados pelo e-mail lgpd@comseder.net.br. A COMSEDER poderá solicitar informações adicionais para confirmar a identidade do requerente e proteger os dados contra acessos indevidos.",
      "Alguns pedidos podem ser total ou parcialmente negados por motivo legal, regulatório, contratual ou de segurança, por exemplo quando houver obrigação de retenção, necessidade de defesa em processo ou impossibilidade de comprovação da identidade do solicitante.",
    ],
  },
  {
    title: "Atualizações desta Política",
    paragraphs: [
      "Esta Política poderá ser atualizada a qualquer tempo para refletir mudanças legais, regulatórias, tecnológicas, contratuais ou operacionais. A versão publicada no site ou disponibilizada pelos canais oficiais da COMSEDER prevalecerá sobre versões anteriores.",
      "Recomenda-se que titulares e parceiros consultem esta Política periodicamente para acompanhar esclarecimentos e informações atualizadas.",
    ],
  },
  {
    title: "Legislação e Foro",
    paragraphs: [
      "Esta Política será regida, interpretada e executada de acordo com as leis da República Federativa do Brasil, especialmente a Lei nº 13.709/2018 (LGPD), observadas as normas setoriais aplicáveis à saúde suplementar.",
      "Fica competente o foro do domicílio do titular para dirimir controvérsias decorrentes deste documento, quando a legislação assim determinar.",
    ],
  },
];

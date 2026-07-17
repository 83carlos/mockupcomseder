import {
  ContactSection,
  HeroBanner,
  QuickLinks,
  SiteLink,
  WhatsAppCta,
} from "./components.jsx";
import {
  DIRECTORS,
  HOW_IT_WORKS,
  IDSS_DIMENSIONS,
  PLANS,
  PRIVACY_DEFINITIONS,
  PRIVACY_SECTIONS,
  PRIVACY_SUMMARY,
  SCHEDULES,
  VALUES,
} from "./siteData.js";
import { assetPath } from "./paths.js";

function AboutSplit() {
  return (
    <section className="about-split content-width">
      <img src={assetPath("assets/pdf/1-planos-14.png")} alt="Colaboradora da COMSEDER em frente à sede" />
      <div>
        <h2>Somos a<br />COMSEDER</h2>
        <p>Uma cooperativa de <strong>assistência<br />em saúde e bem estar</strong> dos<br />nossos sócios/usuários.</p>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="how-it-works content-narrow">
      <h2>Como funciona</h2>
      <ul>
        {HOW_IT_WORKS.map((text) => <li key={text}>{text}</li>)}
      </ul>
    </section>
  );
}

export function HomePage() {
  return (
    <>
      <div className="page-stack home-page">
        <HeroBanner
          photo={assetPath("assets/pdf/5-home-02.jpg")}
          photoAlt="Senhora usando um notebook"
          title={<>Se você trabalha no estado<br />a COMSEDER é para você!</>}
          className="home-hero"
        >
          <SiteLink href="/planos" className="yellow-button">Saiba Mais</SiteLink>
        </HeroBanner>

        <QuickLinks />

        <section className="unidas-section content-width">
          <video
            className="unidas-video"
            controls
            playsInline
            preload="metadata"
            poster={assetPath("assets/pdf/5-home-07.png")}
            aria-label="Vídeo institucional da UNIDAS"
          >
            <source src={assetPath("assets/video-unidas.mp4")} type="video/mp4" />
            Seu navegador não consegue reproduzir este vídeo. <a href={assetPath("assets/video-unidas.mp4")}>Baixe o vídeo da UNIDAS.</a>
          </video>
          <h2>COMSEDER É FILIADA A UNIDAS<br /><span>Juntos somos mais fortes</span></h2>
        </section>

        <AboutSplit />
        <HowItWorks />

        <section className="family-section content-narrow" aria-label="Seus familiares também importam">
          <img
            src={assetPath("assets/crops/familia-card.png")}
            alt="Seus familiares também importam! Na COMSEDER, seus familiares também fazem parte do plano, por sangue, até o 4º grau. Porque cuidar de um é cuidar de todos. Isso inclui: cônjuge, filhos, pais, avós, sogros, cunhados e mais."
          />
        </section>
        <ContactSection />
      </div>
    </>
  );
}

export function PlanosPage() {
  return (
    <div className="page-stack planos-page">
      <HeroBanner
        photo={assetPath("assets/pdf/1-planos-03.jpg")}
        photoAlt="Pai abraçando uma criança"
        title={<>Conheça os nossos planos e<br />transforme sua qualidade de vida!</>}
        theme="green"
      >
        <p className="hero-description">Como cooperativa, oferecemos serviços personalizados e acessíveis, focados nas suas necessidades. Junte-se a nós e experimente o cuidado que você merece!</p>
      </HeroBanner>

      <section className="plans-section content-width">
        <h2>Descubra nossos planos e melhore<br />sua qualidade de vida!</h2>
        <div className="plans-grid">
          {PLANS.map((plan) => (
            <article className="plan-card" key={plan.name}>
              <img src={assetPath("assets/crops/brand-mark.png")} alt="" aria-hidden="true" />
              <h3>{plan.name}</h3>
              <p>{plan.copy}</p>
              <p>Padrão de Acomodação:<br /><strong>{plan.accommodation}</strong></p>
              <p>{plan.moderator}</p>
            </article>
          ))}
        </div>
        <WhatsAppCta />
        <QuickLinks includePlans={false} />
      </section>

      <AboutSplit />
      <HowItWorks />
      <ContactSection />
    </div>
  );
}

export function AtendimentosPage() {
  return (
    <div className="page-stack atendimentos-page">
      <HeroBanner
        photo={assetPath("assets/pdf/7-atendimentos-02.jpg")}
        photoAlt="Profissional de saúde atendendo uma senhora"
        title={<>Faça já o seus<br />agendamentos nos contatos</>}
      >
        <div className="phone-pair">
          <a href="tel:+558332162910">(83) 3216-2910</a>
          <a href="tel:+558332162908">(83) 3216-2908</a>
        </div>
      </HeroBanner>

      <section className="schedule-grid content-width" id="ambulatorios">
        {SCHEDULES.map((schedule) => (
          <article className={`schedule-card schedule-${schedule.title.toLowerCase().replace(/\W+/g, "-")}`} key={schedule.title}>
            <h2>{schedule.title}</h2>
            <div className="schedule-body">
              {schedule.slots.map((slot) => (
                <div key={slot.join("-")}>
                  <h3>{slot[0]}</h3>
                  {slot.slice(1).map((line) => <p key={line}>• {line}</p>)}
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>
      <div className="content-width stacked-access">
        <WhatsAppCta />
        <QuickLinks />
      </div>
      <ContactSection />
    </div>
  );
}

export function InstitucionalPage() {
  return (
    <div className="page-stack institucional-page">
      <section className="institution-intro content-width">
        <h1>Somos a COMSEDER</h1>
        <p>Uma cooperativa de <strong>assistência em saúde e bem estar</strong><br />dos nossos sócios/usuários.</p>

        <article className="story-card image-left">
          <img src={assetPath("assets/pdf/8-institucional-03.png")} alt="Sede da COMSEDER em João Pessoa" />
          <p>A Cooperativa de Assistência em Saúde e Bem-Estar nasceu do desejo de proporcionar cuidados de saúde de qualidade e promover o bem-estar integral de seus sócios e usuários. Fundada por um grupo de profissionais dedicados e apaixonados pela saúde, a cooperativa tem como missão oferecer serviços personalizados que vão além do atendimento médico convencional.</p>
        </article>

        <article className="story-card image-right">
          <p>Ao longo dos anos, a cooperativa se destacou por sua abordagem inovadora e humanizada, sempre colocando as necessidades dos pacientes em primeiro lugar. Acreditamos que a saúde é um direito de todos e trabalhamos incansavelmente para garantir que nossos membros tenham acesso ao melhor cuidado possível.<br /><br />Junte-se a nós e experimente uma nova maneira de cuidar da sua saúde!</p>
          <img src={assetPath("assets/pdf/8-institucional-01.png")} alt="Colaboradora da COMSEDER na entrada da sede" />
        </article>
      </section>

      <section className="mission-values">
        <div className="mission-grid content-width">
          <article>
            <h2>Missão</h2>
            <p>A missão da COMSEDER reflete o compromisso com a saúde e o bem-estar de seus cooperados/beneficiários ela destaca a importância de oferecer serviços de alta qualidade, ao mesmo tempo em que promove uma gestão cooperativa eficiente e sustentável.</p>
          </article>
          <article>
            <h2>Visão</h2>
            <p>A visão da COMSEDER define o seu objetivo a longo prazo de ser uma referência no setor de assistência médica cooperativa. Ela destaca a busca pela inovação e pela excelência nos serviços, ao mesmo tempo em que reafirma o compromisso com a sustentabilidade e a colaboração entre os cooperados/beneficiários.</p>
          </article>
        </div>
        <div className="values content-width">
          <h2>Valores</h2>
          <div className="values-grid">
            {VALUES.map(([title, copy]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="directors content-width">
        <h2>Nossa Diretoria</h2>
        <div className="director-list">
          {DIRECTORS.map((director) => (
            <article className={`director-card ${director.side}`} key={director.name}>
              <img src={assetPath(director.image)} alt={`${director.name}, ${director.role}`} />
              <div>
                <h3>{director.name}</h3>
                <p>{director.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <ContactSection />
    </div>
  );
}

export function PrestadorPage() {
  const emailHref = "mailto:centraldocredenciado@comseder.com.br?subject=Solicitação%20de%20ficha%20cadastral";
  return (
    <div className="page-stack prestador-page">
      <HeroBanner
        photo={assetPath("assets/pdf/6-prestador-01.jpg")}
        photoAlt="Médica apontando para a chamada de credenciamento"
        title={<>Torne-se um credenciado<br />da COMSEDER</>}
        subtitle="Junte-se a nós e faça parte de uma comunidade dedicada ao cuidado e bem-estar"
        theme="green"
      />

      <section className="provider-content content-width">
        <h2>Para tornar-se um credenciado<br />da COMSEDER é necessário que:</h2>
        <div className="attention-box">
          <strong>ATENÇÃO</strong>
          <p>- Os responsáveis técnicos tenham título de especialista emitido pelo conselho correspondente ou residência aprovada pelo Ministério da Educação.</p>
          <p>- Os hospitais, clínicas e laboratórios preencham a proposta disponível no site.</p>
        </div>
        <div className="provider-downloads">
          <a href={`${emailHref}%20PJ`} aria-label="Solicitar Ficha Cadastral PJ por e-mail">
            <img src={assetPath("assets/crops/prestador-pj.png")} alt="Ficha Cadastral PJ - Baixe aqui o PDF" />
          </a>
          <a href={`${emailHref}%20PF`} aria-label="Solicitar Ficha Cadastral PF por e-mail">
            <img src={assetPath("assets/crops/prestador-pf.png")} alt="Ficha Cadastral PF - Baixe aqui o PDF" />
          </a>
        </div>
        <p className="provider-note">O formulário com a proposta de adesão deve ser preenchido e enviado para COMSEDER, com a documentação necessária, entregue em uma das unidades da COMSEDER ou eletronicamente através do endereço centraldocredenciado@comseder.com.br. Caso sejam aprovados, a Cooperativa fará comunicado ao proponente do credenciamento.<br />Ligue: 83 3216-2907</p>
      </section>
      <ContactSection />
    </div>
  );
}

const ANS_CARDS = [
  ["Site ANS", "/assets/crops/ans-site.png", "https://www.gov.br/ans/pt-br"],
  ["Rol de Atendimentos", "/assets/crops/ans-rol.png", "/atendimentos"],
  ["Portal do Beneficiário", "/assets/crops/ans-beneficiario.png", "http://portal.comseder.net.br/"],
  ["Tipos de Contratação", "/assets/crops/ans-contratacao.png", "/planos"],
  ["Políticas de Privacidade", "/assets/crops/ans-privacidade.png", "/politicas-de-privacidade"],
  ["IDSS", "/assets/crops/ans-idss.png", "/idss"],
];

export function AnsPage() {
  return (
    <div className="page-stack ans-page">
      <section className="ans-hero content-width">
        <img src={assetPath("assets/crops/brand-mark.png")} alt="" aria-hidden="true" />
        <h1>Espaço ANS</h1>
        <p>Em nosso compromisso com a transparência e o cuidado,<br />reunimos neste espaço todas as informações relevantes e<br />links úteis fornecidos pela Agência Nacional de Saúde<br />Suplementar (ANS).</p>
      </section>
      <nav className="ans-cards content-width" aria-label="Links úteis da ANS">
        {ANS_CARDS.map(([label, image, href]) => (
          <SiteLink key={label} href={href} external={href.startsWith("http")} aria-label={label}>
            <img src={assetPath(image)} alt={label} />
          </SiteLink>
        ))}
      </nav>
      <p className="ans-more content-width">Para mais informações ou para entrar em contato com a<br />ANS, <a href="https://www.gov.br/ans/pt-br" target="_blank" rel="noreferrer">acesse aqui o portal.</a></p>
      <ContactSection showHeading={false} />
    </div>
  );
}

export function IdssPage() {
  return (
    <div className="page-stack idss-page">
      <HeroBanner
        photo={assetPath("assets/pdf/2-idss-01.jpg")}
        photoAlt="Profissional analisando gráficos de desempenho"
        title={<>Índice de Desempenho<br />da Saúde Suplementar<br />(IDSS)</>}
        theme="green"
      />

      <section className="idss-intro content-narrow">
        <h1>Índice de Desempenho da Saúde Suplementar<br />(IDSS)</h1>
        <p>O Programa de Qualificação de Operadoras (PQO) é uma iniciativa criada pela Agência Nacional de Saúde Suplementar (ANS) para a avaliação anual do desempenho das operadoras de planos de saúde. Seus principais objetivos são:</p>
        <ul>
          <li>Estimular a qualidade no setor</li>
          <li>Reduzir a assimetria de informações, proporcionando maior poder de escolha para os beneficiários</li>
          <li>Oferecer subsídios para a melhoria da gestão das operadoras e das ações regulatórias da ANS</li>
        </ul>
        <h2>Resultado IDSS</h2>
        <p>Os resultados dessa avaliação são representados pelo Índice de Desempenho da Saúde Suplementar (IDSS). Este índice é composto por um conjunto de indicadores organizados em quatro dimensões, calculado a partir de dados extraídos dos sistemas de informações da Agência ou coletados em sistemas nacionais de informação em saúde.</p>
        <p>O IDSS possibilita a comparação entre as operadoras, promovendo a transparência na disseminação de informações e reduzindo a assimetria de informações, uma falha de mercado que afeta a capacidade dos consumidores em fazer escolhas ao contratar ou trocar um plano de saúde. Além disso, busca ampliar a concorrência baseada em valor no setor para fomentar a melhoria contínua do programa. Em 2016, houve uma reestruturação das dimensões do IDSS, visando torná-las integradas e alinhadas com as novas regras e práticas do setor, assim como com os novos eixos direcionais da Agência e a mais recente Agenda Regulatória, além da literatura sobre Qualidade em Saúde.</p>
        <h3>Confira as novas dimensões:</h3>
        <ol>
          <li><strong>Qualidade em Atenção à Saúde:</strong> Avaliação das ações em saúde que atendem às necessidades dos beneficiários, com ênfase em promoção, prevenção e assistência.</li>
          <li><strong>Garantia de Acesso:</strong> Condições relacionadas à rede assistencial que asseguram o acesso, englobando a oferta de prestadores de serviços.</li>
          <li><strong>Sustentabilidade no Mercado:</strong> Monitoramento da sustentabilidade da operadora, considerando o equilíbrio econômico-financeiro, a satisfação do beneficiário e os compromissos com os prestadores.</li>
          <li><strong>Gestão de Processos e Regulação:</strong> Avaliação do cumprimento das obrigações técnicas e cadastrais das operadoras junto à ANS.</li>
        </ol>
        <h2>Resultado IDSS</h2>
        <p>A Agência Nacional de Saúde Suplementar (ANS) divulgou o resultado do Programa de Qualificação das Operadoras 2025 (ano-base 2024) que apresenta o Índice de Desempenho da Saúde Suplementar (IDSS) das operadoras de saúde..</p>
      </section>

      <section className="idss-results">
        <div className="content-narrow">
          <h2>Confira os resultados<br />obtidos pela COMSEDER</h2>
          <div className="idss-main-scores">
            <figure>
              <figcaption>IDSS da operadora 2025 (Ano-base 2024)</figcaption>
              <img src={assetPath("assets/pdf/2-idss-04.png")} alt="IDSS da operadora: 0,4592" />
            </figure>
            <figure>
              <figcaption>Pontuação para operadora acreditada:<br />Operadora não bonificada</figcaption>
              <img src={assetPath("assets/pdf/2-idss-05.png")} alt="Operadora não bonificada: 0,0000" />
            </figure>
          </div>
          <div className="dimension-list">
            {IDSS_DIMENSIONS.map(([title, copy, image]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
                <img src={assetPath(image)} alt={`${title} - gráfico de pontuação`} />
              </article>
            ))}
          </div>
          <img className="idss-legend" src={assetPath("assets/pdf/2-idss-10.png")} alt="Faixas de notas da avaliação, de pior a melhor" />
        </div>
      </section>

      <section className="idss-evolution content-narrow">
        <h2>Gráfico de evolução do IDSS - TISS</h2>
        <p>A ANS iniciou, a partir do IDSS ano-base 2017, uma nova etapa do Programa de Qualificação, que usa o Sistema de Informação do Padrão TISS (Troca de Informações na Saúde Suplementar) como fonte de dados para o processamento dos indicadores. A metodologia foi totalmente modificada, com os indicadores calculados sobre uma base de dados nova, gerando resultados que não são totalmente comparáveis com os anos anteriores.</p>
        <img src={assetPath("assets/pdf/2-idss-11.png")} alt="Gráfico de evolução do IDSS de 2017 a 2024" />
      </section>
      <ContactSection showHeading={false} />
    </div>
  );
}

export function PrivacyPage() {
  return (
    <div className="page-stack privacy-page">
      <section className="privacy-hero content-width">
        <img src={assetPath("assets/crops/brand-mark.png")} alt="" aria-hidden="true" />
        <h1>Políticas de Privacidade</h1>
      </section>

      <article className="privacy-content content-narrow">
        <header>
          <h1>Aviso Geral de Privacidade e<br />Proteção de Dados – COMSEDER</h1>
          <p>Cooperativa Médica dos Servidores da Suplan e do DER Ltda. CNPJ 70.094.578/0001-30 Av. Maximiano de Figueiredo, nº 311 - Centro - João Pessoa/PB - CEP 58.013-470 Documento estruturado para comunicação pública, em linguagem simples e objetiva, sobre a forma como a COMSEDER trata dados pessoais em seus serviços, contratos, formulários, canais digitais e rede de atendimento.</p>
        </header>

        <section>
          <h2>Nosso Respeito a Quem Confia seus Dados à COMSEDER</h2>
          <p>A COMSEDER reconhece a importância da privacidade e da proteção de dados pessoais. Esta Política explica, de forma simples e transparente, quais dados podem ser tratados, para quais finalidades, com quem podem ser compartilhados, por quanto tempo podem ser mantidos e como os titulares podem exercer seus direitos previstos na Lei Geral de Proteção de Dados Pessoais - Lei nº 13.709/2018 (LGPD).</p>
          <p>A Política se aplica aos dados tratados em formulários físicos ou digitais, contratos, atendimentos presenciais, canais de contato, website, portais de serviços, aplicativos ou sistemas utilizados pela COMSEDER, bem como às relações com beneficiários, cooperados, dependentes, representantes legais, prestadores, parceiros e público em geral. Colaboradores, candidatos, fornecedores e participantes de projetos específicos podem receber avisos de privacidade, contratos ou termos próprios, conforme a natureza da atividade e o nível de acesso aos dados.</p>
          <p><strong>Encarregado de Proteção de Dados:</strong> Fabiano Fagundes da Silva. Canal para dúvidas e requisições de titulares: <a href="mailto:lgpd@comseder.net.br">lgpd@comseder.net.br</a></p>
        </section>

        <PolicyTable title="Quadro Resumo" rows={PRIVACY_SUMMARY} />
        <PolicyTable title="Definições" rows={PRIVACY_DEFINITIONS} />

        {PRIVACY_SECTIONS.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {section.subheading && <h3>{section.subheading}</h3>}
            {section.bullets && (
              <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
            )}
            {section.secondaryHeading && <h3>{section.secondaryHeading}</h3>}
            {section.secondaryParagraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </section>
        ))}
      </article>
      <ContactSection showHeading={false} />
    </div>
  );
}

function PolicyTable({ title, rows }) {
  return (
    <section className="policy-table-section">
      <h2>{title}</h2>
      <div className="policy-table" role="table" aria-label={title}>
        {rows.map(([label, content]) => (
          <div className="policy-row" role="row" key={label}>
            <strong role="rowheader">{label}</strong>
            <span role="cell">{content}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ContatoPage() {
  return (
    <div className="page-stack contato-page">
      <HeroBanner
        photo={assetPath("assets/pdf/9-contato-02.jpg")}
        photoAlt="Pessoa falando ao telefone enquanto usa um notebook"
        title={<>Entre em contato<br />conosco</>}
      />
      <ContactSection showHeading={false} />
    </div>
  );
}

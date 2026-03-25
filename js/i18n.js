/* ==========================================================================
   I18N.JS — English / Portuguese Language Switcher
   ========================================================================== */

const I18n = (() => {
  let currentLang = 'en';

  const translations = {
    en: {
      // Nav
      'nav.about': 'About',
      'nav.skills': 'Skills',
      'nav.experience': 'Experience',
      'nav.education': 'Education',
      'nav.awards': 'Awards',
      'nav.projects': 'Projects',
      'nav.contact': 'Contact',

      // Hero
      'hero.greeting': "Hi, I'm",
      'hero.cta.resume': '↓ Download Resume',
      'hero.cta.contact': '✉ Get in Touch',
      'hero.scroll': 'Scroll Down',

      // About
      'about.title': 'About Me',
      'about.subtitle': 'A glimpse into who I am and what drives me',
      'about.p1': 'I work in the field of Computing, focusing on Software Architecture, Distributed Systems, and Architectural Description Languages. My research centers on modeling, analysis, and execution of complex system architectures.',
      'about.p2': 'I have experience in experimental software engineering, executable architectures, and the evolution of modeling languages, including SysML, ADLs, and tools supporting architectural execution.',
      'about.p3': 'Beyond software, my background in astrophysics research and Neuroscience gives me a unique interdisciplinary perspective that I bring to every project.',
      'stat.years': 'Years of\nExperience',
      'stat.projects': 'Projects\nCompleted',
      'stat.publications': 'Research\nAreas',

      // Skills
      'skills.title': 'Skills & Technologies',
      'skills.subtitle': 'Technologies and tools I work with',
      'skills.languages': '💻 Programming Languages',
      'skills.frameworks': '🚀 Frameworks & Libraries',
      'skills.devops': '☁️ DevOps & Infrastructure',
      'skills.databases': '🗄️ Databases',
      'skills.other': '🔬 Specialized',

      // Experience
      'experience.title': 'Experience',
      'experience.subtitle': 'My professional journey and research contributions',
      'exp1.title': 'Astrophysics Research Fellow',
      'exp1.org': 'UFRN — Federal University of Rio Grande do Norte',
      'exp1.date': '2022 — 2024',
      'exp1.desc': 'Conducted research on exoplanet detection in compact binary systems. Discovered evidence of a potential exoplanet and pursued confirmation of another. Developed the TITAN astrophysics team platform (titan.ect.ufrn.br) and an automated exoplanet candidate detection tool (titan.ect.ufrn.br/extrassolar/) using Django, APIs, and specialized astrophysics libraries.',
      'exp2.title': 'Scientific Initiation Fellow (ICjr)',
      'exp2.org': 'OBA/MOBFOG — Brazilian Astronomy & Rocket Olympiad',
      'exp2.date': '2022 — 2023',
      'exp2.desc': 'Focused on the scientific method applied to aerospace engineering. Carried out experimental and theoretical work in rocket construction. Also developed a multi-stage rocket speed calculator using Python with Tkinter interface.',

      // Education
      'education.title': 'Education',
      'education.subtitle': 'Academic path and qualifications',
      'edu1.title': "Master's in Systems and Computing",
      'edu1.org': 'UFRN — Federal University of Rio Grande do Norte',
      'edu1.date': '2026 — Present',
      'edu1.desc': 'Research focus on Software Architecture, Distributed Systems, and Architectural Description Languages. Working on executable architecture modeling, SysADL, and architectural evolution.',
      'edu2.title': 'Systems Analysis and Development',
      'edu2.org': 'UniBf — Brazilian Union of Colleges',
      'edu2.date': '2024 — 2025',
      'edu2.desc': 'Undergraduate degree covering full-stack development, software engineering, databases, and information systems. Completed with distinction.',

      // Awards
      'awards.title': 'Awards & Honors',
      'awards.subtitle': 'Recognitions and achievements',
      'award1.title': '2nd Place — Scientific Highlight',
      'award1.org': 'UFRN IC & Technology',
      'award2.title': 'Gold Medal',
      'award2.org': 'MOBFOG — Brazilian Rocket Olympiad',
      'award3.title': 'Honor Award',
      'award3.org': 'ONC — National Science Olympiad',
      'award4.title': 'Honorable Mention',
      'award4.org': 'ONHB — National History Olympiad',

      // Projects
      'projects.title': 'Featured Projects',
      'projects.subtitle': 'Some of my notable work',
      'proj1.title': 'TITAN Platform',
      'proj1.desc': 'Web platform for the UFRN astrophysics team. Serves as a hub for research data, team collaboration, and publication of findings in exoplanet detection.',
      'proj2.title': 'Extrasolar — Exoplanet Detector',
      'proj2.desc': 'Automated exoplanet candidate detection tool. Processes astronomical data to identify potential exoplanets in compact binary star systems.',
      'proj3.title': 'Multi-Stage Rocket Calculator',
      'proj3.desc': 'Python application with Tkinter GUI for calculating the velocity of multi-stage rockets. Used as part of the OBA/MOBFOG scientific research.',

      // Contact
      'contact.title': 'Get in Touch',
      'contact.subtitle': "Have a project in mind? Let's talk!",
      'contact.label.email': 'Email',
      'contact.label.location': 'Location',
      'contact.label.github': 'GitHub',
      'contact.label.linkedin': 'LinkedIn',
      'contact.location.value': 'Natal/RN — Brazil',

      // Footer
      'footer.text': '© 2026 Éder Xavier. Crafted with passion and code.',
    },

    pt: {
      // Nav
      'nav.about': 'Sobre',
      'nav.skills': 'Habilidades',
      'nav.experience': 'Experiência',
      'nav.education': 'Formação',
      'nav.awards': 'Prêmios',
      'nav.projects': 'Projetos',
      'nav.contact': 'Contato',

      // Hero
      'hero.greeting': 'Olá, eu sou',
      'hero.cta.resume': '↓ Baixar Currículo',
      'hero.cta.contact': '✉ Entre em Contato',
      'hero.scroll': 'Role para Baixo',

      // About
      'about.title': 'Sobre Mim',
      'about.subtitle': 'Um pouco sobre quem eu sou e o que me motiva',
      'about.p1': 'Atuo na área de Computação, com ênfase em Arquitetura de Software, Sistemas Distribuídos e Linguagens de Descrição Arquitetural. Minha pesquisa se concentra na modelagem, análise e execução de arquiteturas de sistemas complexos.',
      'about.p2': 'Possuo experiência em engenharia de software experimental, arquiteturas executáveis e evolução de linguagens de modelagem, incluindo o uso de SysML, ADLs e ferramentas de apoio à execução arquitetural.',
      'about.p3': 'Além do software, minha experiência em pesquisa em astrofísica e Neurociência me dá uma perspectiva interdisciplinar única que trago para cada projeto.',
      'stat.years': 'Anos de\nExperiência',
      'stat.projects': 'Projetos\nRealizados',
      'stat.publications': 'Áreas de\nPesquisa',

      // Skills
      'skills.title': 'Habilidades & Tecnologias',
      'skills.subtitle': 'Tecnologias e ferramentas com as quais trabalho',
      'skills.languages': '💻 Linguagens de Programação',
      'skills.frameworks': '🚀 Frameworks & Bibliotecas',
      'skills.devops': '☁️ DevOps & Infraestrutura',
      'skills.databases': '🗄️ Bancos de Dados',
      'skills.other': '🔬 Especializadas',

      // Experience
      'experience.title': 'Experiência',
      'experience.subtitle': 'Minha trajetória profissional e contribuições em pesquisa',
      'exp1.title': 'Bolsista em Astrofísica Estelar',
      'exp1.org': 'UFRN — Universidade Federal do Rio Grande do Norte',
      'exp1.date': '2022 — 2024',
      'exp1.desc': 'Pesquisa sobre detecção de exoplanetas em sistemas binários compactos. Descobriu evidências de um possível exoplaneta e buscou confirmação de outro. Desenvolveu a plataforma do time de astrofísica TITAN (titan.ect.ufrn.br) e uma ferramenta de detecção automática de candidatos a exoplanetas (titan.ect.ufrn.br/extrassolar/) utilizando Django, APIs e bibliotecas específicas da área.',
      'exp2.title': 'Bolsista de Iniciação Científica Júnior (ICjr)',
      'exp2.org': 'OBA/MOBFOG — Olimpíada Brasileira de Astronomia e Foguetes',
      'exp2.date': '2022 — 2023',
      'exp2.desc': 'IC focada no método científico voltado para a engenharia aeroespacial. Realizou trabalhos experimentais e teóricos na construção de foguetes. Também desenvolveu um software para calcular a velocidade de foguetes de múltiplos estágios utilizando Python com interface Tkinter.',

      // Education
      'education.title': 'Formação',
      'education.subtitle': 'Trajetória acadêmica e qualificações',
      'edu1.title': 'Mestrado em Sistemas e Computação',
      'edu1.org': 'UFRN — Universidade Federal do Rio Grande do Norte',
      'edu1.date': '2026 — Presente',
      'edu1.desc': 'Pesquisa focada em Arquitetura de Software, Sistemas Distribuídos e Linguagens de Descrição Arquitetural. Trabalho em modelagem de arquiteturas executáveis, SysADL e evolução arquitetural.',
      'edu2.title': 'Análise e Desenvolvimento de Sistemas',
      'edu2.org': 'UniBf — União Brasileira de Faculdades',
      'edu2.date': '2024 — 2025',
      'edu2.desc': 'Graduação cobrindo desenvolvimento full-stack, engenharia de software, bancos de dados e sistemas de informação. Concluída com distinção.',

      // Awards
      'awards.title': 'Prêmios & Honrarias',
      'awards.subtitle': 'Reconhecimentos e conquistas',
      'award1.title': '2° Lugar — Trabalho Destaque',
      'award1.org': 'UFRN IC & Tecnologia',
      'award2.title': 'Medalha de Ouro',
      'award2.org': 'MOBFOG — Mostra Brasileira de Foguetes',
      'award3.title': 'Honra ao Mérito',
      'award3.org': 'ONC — Olimpíada Nacional de Ciências',
      'award4.title': 'Menção Honrosa',
      'award4.org': 'ONHB — Olimpíada Nacional de História do Brasil',

      // Projects
      'projects.title': 'Projetos em Destaque',
      'projects.subtitle': 'Alguns dos meus trabalhos notáveis',
      'proj1.title': 'Plataforma TITAN',
      'proj1.desc': 'Plataforma web para o time de astrofísica da UFRN. Serve como hub para dados de pesquisa, colaboração e publicação de descobertas na detecção de exoplanetas.',
      'proj2.title': 'Extrasolar — Detector de Exoplanetas',
      'proj2.desc': 'Ferramenta de detecção automática de candidatos a exoplanetas. Processa dados astronômicos para identificar potenciais exoplanetas em sistemas binários compactos.',
      'proj3.title': 'Calculadora de Foguetes Multi-Estágio',
      'proj3.desc': 'Aplicação Python com interface Tkinter para cálculo da velocidade de foguetes de múltiplos estágios. Usada como parte da pesquisa científica OBA/MOBFOG.',

      // Contact
      'contact.title': 'Entre em Contato',
      'contact.subtitle': 'Tem um projeto em mente? Vamos conversar!',
      'contact.label.email': 'Email',
      'contact.label.location': 'Localização',
      'contact.label.github': 'GitHub',
      'contact.label.linkedin': 'LinkedIn',
      'contact.location.value': 'Natal/RN — Brasil',

      // Footer
      'footer.text': '© 2026 Éder Xavier. Feito com paixão e código.',
    }
  };

  function init() {
    currentLang = localStorage.getItem('portfolio-lang') || 'en';
    apply(currentLang);
    updateToggleButton();
  }

  function toggle() {
    currentLang = currentLang === 'en' ? 'pt' : 'en';
    localStorage.setItem('portfolio-lang', currentLang);
    apply(currentLang);
    updateToggleButton();

    // Update typewriter
    if (typeof Typewriter !== 'undefined') {
      Typewriter.updateTitles(currentLang);
    }
  }

  function apply(lang) {
    const dict = translations[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (dict[key] !== undefined) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = dict[key];
        } else {
          // Preserve inner HTML elements if any, only replace text nodes
          el.textContent = dict[key];
        }
      }
    });

    // Update html lang
    document.documentElement.lang = lang;
  }

  function updateToggleButton() {
    const btn = document.getElementById('lang-toggle');
    if (!btn) return;

    const flag = btn.querySelector('.lang-toggle__flag');
    const text = btn.querySelector('.lang-toggle__text');

    if (currentLang === 'en') {
      if (flag) flag.textContent = '🇧🇷';
      if (text) text.textContent = 'PT';
    } else {
      if (flag) flag.textContent = '🇺🇸';
      if (text) text.textContent = 'EN';
    }
  }

  function getLang() {
    return currentLang;
  }

  return { init, toggle, getLang };
})();

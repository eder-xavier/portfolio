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
      'nav.publications': 'Publications',
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
      'exp1.title': 'Software Architecture Researcher',
      'exp1.org': 'UFRN — Federal University of Rio Grande do Norte',
      'exp1.date': '2024 — 2026',
      'exp1.desc': 'Developed tools for the simulation and execution of architectures based on the SysADL architectural description language. Modeled complex systems in engineering and automation. Published research articles in international conferences, including the Best Paper Award at MODELSWARD 2026.',
      'exp2.title': 'Computational Neuroscience Researcher',
      'exp2.org': 'UFRN — Federal University of Rio Grande do Norte',
      'exp2.date': '2024 — 2025',
      'exp2.desc': 'Developed machine learning algorithms for EEG analysis to automate sleep staging. Created a specialized research platform for the study of lucid dreaming (neuro.ufrn.br/sonhoslucidos).',
      'exp3.title': 'Co-founder & Mobile Developer',
      'exp3.org': 'Devaneios App',
      'exp3.date': '2024 — 2025',
      'exp3.desc': 'Developed a mobile app for monitoring spontaneous thought levels in patients before and after medication, implementing the complete front-end infrastructure with React Native.',
      'exp4.title': 'Founder & Lead Developer',
      'exp4.org': 'Indie Platform',
      'exp4.date': '2023 — 2024',
      'exp4.desc': 'Built a scientific collaboration platform integrating a collaborative text editor, document repository, and scientific article search. Architected with Django, microservices, and REST APIs, deployed on AWS and Raspberry Pi. Validated in the Startup NE program and registered at INPI.',
      'exp5.title': 'Astrophysics Research Fellow',
      'exp5.org': 'UFRN — Federal University of Rio Grande do Norte',
      'exp5.date': '2022 — 2024',
      'exp5.desc': 'Developed an automated exoplanet candidate detection tool and the collaborative astrophysics team platform (Titan Lab) using Django and ML libraries. Conducted data processing of astronomical data and classification algorithms. Awarded 2nd Place as a Scientific Highlight (UFRN, 2022).',

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
      'award_bestpaper.title': 'Best Paper Award',
      'award_bestpaper.org': 'MODELSWARD',
      'award1.title': '2nd Place — Scientific Highlight',
      'award1.org': 'UFRN IC & Technology',
      'award2.title': 'Gold Medal',
      'award2.org': 'MOBFOG — Brazilian Rocket Olympiad',
      'award3.title': 'Honor Award',
      'award3.org': 'ONC — National Science Olympiad',
      'award4.title': 'Honorable Mention',
      'award4.org': 'ONHB — National History Olympiad',

      'publications.title': 'Publications',
      'publications.subtitle': 'Published and awarded academic articles',
      'pub.cited': 'Cited by',
      'pub.bestpaper': 'Best Paper Award',
      'pub1.title': 'Search and characterization of third-body candidates around short-period binaries using Kepler and TESS data',
      'pub1.desc': 'Astrophysics research paper focused on detecting exoplanet candidates orbiting binary star systems.',
      'pub2.title': 'Environment and Scenario Viewpoints to Execute SysML-based Architectural Models',
      'pub2.desc': 'Software architecture research paper exploring executable architectural models using SysML.',

      // Projects
      'projects.title': 'Featured Projects',
      'projects.subtitle': 'Some of my notable work',
      'proj1.title': 'TITAN Platform',
      'proj1.desc': 'Web platform for the UFRN astrophysics team. Serves as a hub for research data, team collaboration, and publication of findings in exoplanet detection.',
      'proj2.title': 'Extrasolar — Exoplanet Detector',
      'proj2.desc': 'Automated exoplanet candidate detection tool. Processes astronomical data to identify potential exoplanets in compact binary star systems.',
      'proj3.title': 'Multi-Stage Rocket Calculator',
      'proj3.desc': 'Python application with Tkinter GUI for calculating the velocity of multi-stage rockets. Used as part of the OBA/MOBFOG scientific research.',
      'proj4.title': 'LucidD — Sleep Health & Dream Platform',
      'proj4.desc': 'Django platform for collecting data on sleep, dreams, and lucid dreaming experiences. Features Google OAuth authentication, multi-step questionnaires, and a dream journal with audio upload.',
      'proj5.title': 'Evxf Sounds — Music Player',
      'proj5.desc': 'React Native mobile application for local music playback. Features a mini-player with swipe gestures, custom playlists creation, real-time search, interactive seekbar, and dynamic themes.',
      'proj6.title': 'Indie — Scientific Collaboration',
      'proj6.desc': 'Registered Web software for scientific collaboration. Integrates a collaborative text editor, document repository, routine management system, and article search engine using a scalable microservices architecture.',

      // Contact
      'contact.title': 'Get in Touch',
      'contact.subtitle': "Have a project in mind? Let's talk!",
      'contact.label.email': 'Email',
      'contact.label.location': 'Location',
      'contact.label.lattes': 'Lattes CV',
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
      'nav.publications': 'Publicações',
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
      'exp1.title': 'Pesquisador em Arquitetura de Software',
      'exp1.org': 'UFRN — Universidade Federal do Rio Grande do Norte',
      'exp1.date': '2024 — 2026',
      'exp1.desc': 'Desenvolvimento de ferramentas para simulação e execução de arquiteturas com base na linguagem de descrição arquitetural SysADL. Modelagem de sistemas complexos em engenharia e automação. Publicações de artigos em conferências internacionais, incluindo o prêmio de Best Paper Award na conferência MODELSWARD (2026).',
      'exp2.title': 'Pesquisador em Neurociência Computacional',
      'exp2.org': 'UFRN — Universidade Federal do Rio Grande do Norte',
      'exp2.date': '2024 — 2025',
      'exp2.desc': 'Desenvolvimento de algoritmos de aprendizado de máquina para análise de EEG, automatizando o estagiamento do sono. Criação da plataforma de pesquisa para sonhos lúcidos (neuro.ufrn.br/sonhoslucidos).',
      'exp3.title': 'Cofundador & Desenvolvedor Mobile',
      'exp3.org': 'Aplicativo Devaneios',
      'exp3.date': '2024 — 2025',
      'exp3.desc': 'Criação de um aplicativo para monitoramento de níveis de pensamento espontâneo de pacientes antes e depois do uso de medicamentos. Toda a infraestrutura do app foi desenvolvida utilizando React Native.',
      'exp4.title': 'Fundador & Desenvolvedor Líder',
      'exp4.org': 'Plataforma Indie',
      'exp4.date': '2023 — 2024',
      'exp4.desc': 'Criação de uma plataforma de colaboração científica integrando editor colaborativo, repositório de documentos e busca de artigos. Desenvolvida com Django, microsserviços e APIs REST, com implantação na AWS e Raspberry Pi. Validada no programa Startup NE e registrada no INPI.',
      'exp5.title': 'Bolsista em Astrofísica Estelar',
      'exp5.org': 'UFRN — Universidade Federal do Rio Grande do Norte',
      'exp5.date': '2022 — 2024',
      'exp5.desc': 'Desenvolvimento de ferramenta de detecção automática de exoplanetas com Python, Django e bibliotecas de Machine Learning. Criação da plataforma colaborativa do time de astrofísica (Titan Lab). Uso de APIs, processamento de dados astronômicos e algoritmos de classificação. Premiação: 2º Lugar na categoria Trabalho Destaque de Iniciação Científica (UFRN, 2022).',

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
      'award_bestpaper.title': 'Melhor Artigo (Best Paper Award)',
      'award_bestpaper.org': 'MODELSWARD',
      'award1.title': '2° Lugar — Trabalho Destaque',
      'award1.org': 'UFRN IC & Tecnologia',
      'award2.title': 'Medalha de Ouro',
      'award2.org': 'MOBFOG — Mostra Brasileira de Foguetes',
      'award3.title': 'Honra ao Mérito',
      'award3.org': 'ONC — Olimpíada Nacional de Ciências',
      'award4.title': 'Menção Honrosa',
      'award4.org': 'ONHB — Olimpíada Nacional de História do Brasil',

      'publications.title': 'Publicações',
      'publications.subtitle': 'Artigos acadêmicos publicados e premiados',
      'pub.cited': 'Citado por',
      'pub.bestpaper': 'Prêmio de Melhor Artigo',
      'pub1.title': 'Search and characterization of third-body candidates around short-period binaries using Kepler and TESS data',
      'pub1.desc': 'Artigo de pesquisa em astrofísica focado na detecção de candidatos a exoplanetas orbitando sistemas estelares binários.',
      'pub2.title': 'Environment and Scenario Viewpoints to Execute SysML-based Architectural Models',
      'pub2.desc': 'Artigo de pesquisa em arquitetura de software explorando modelos arquiteturais executáveis usando SysML.',

      // Projects
      'projects.title': 'Projetos em Destaque',
      'projects.subtitle': 'Alguns dos meus trabalhos notáveis',
      'proj1.title': 'Plataforma TITAN',
      'proj1.desc': 'Plataforma web para o time de astrofísica da UFRN. Serve como hub para dados de pesquisa, colaboração e publicação de descobertas na detecção de exoplanetas.',
      'proj2.title': 'Extrasolar — Detector de Exoplanetas',
      'proj2.desc': 'Ferramenta de detecção automática de candidatos a exoplanetas. Processa dados astronômicos para identificar potenciais exoplanetas em sistemas binários compactos.',
      'proj3.title': 'Calculadora de Foguetes Multi-Estágio',
      'proj3.desc': 'Aplicação Python com interface Tkinter para cálculo da velocidade de foguetes de múltiplos estágios. Usada como parte da pesquisa científica OBA/MOBFOG.',
      'proj4.title': 'LucidD — Saúde do Sono e Sonhos',
      'proj4.desc': 'Plataforma Django para coleta de dados sobre sono, sonhos e sonhos lúcidos. Inclui autenticação via Google, questionários multi-etapas e um diário de sonhos com upload de áudio.',
      'proj5.title': 'Evxf Sounds — Player de Música',
      'proj5.desc': 'Aplicativo mobile em React Native para reprodução de música local. Inclui mini-player com gestos, criação de playlists conectadas, busca em tempo real, seekbar interativa e temas dinâmicos.',
      'proj6.title': 'Indie — Colaboração Científica',
      'proj6.desc': 'Software Web registrado (Patente BR512024001656-2) para colaboração científica. Integra editor de textos, repositório de documentos, gerenciamento de rotina e busca de artigos usando arquitetura de microsserviços.',

      // Contact
      'contact.title': 'Entre em Contato',
      'contact.subtitle': 'Tem um projeto em mente? Vamos conversar!',
      'contact.label.email': 'Email',
      'contact.label.location': 'Localização',
      'contact.label.lattes': 'Currículo Lattes',
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

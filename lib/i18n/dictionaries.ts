import type { Locale } from "./config";

export type Dictionary = {
  tagline: string;
  nav: {
    howItWorks: string;
    allPolls: string;
    language: string;
  };
  home: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    subtitle: string;
    recentEyebrow: string;
    recentTitle: string;
    howEyebrow: string;
    step1Title: string;
    step1Body: string;
    step2Title: string;
    step2Body: string;
    step3Title: string;
    step3Body: string;
    footerMade: string;
  };
  create: {
    newPoll: string;
    questionLabel: string;
    questionPlaceholder: string;
    optionPlaceholder: string;
    addOption: string;
    addOptionMax: string;
    removeOption: string;
    removeOptionMin: string;
    closesAfter: string;
    duration1h: string;
    duration24h: string;
    duration7d: string;
    duration30d: string;
    creating: string;
    create: string;
    somethingWrong: string;
    failedCreate: string;
  };
  recent: {
    dbNotConnectedTitle: string;
    dbNotConnectedBody: string;
    empty: string;
    voteSingular: string;
    votePlural: string;
    optionsSuffix: string;
  };
  voter: {
    voteSingular: string;
    votePlural: string;
    yourVote: string;
    yourPick: string;
    vote: string;
    voting: string;
    notFound: string;
    ended: string;
    badOption: string;
    somethingWrong: string;
  };
  share: {
    shareLink: string;
    qrCode: string;
    hideQr: string;
    copyLink: string;
    copied: string;
  };
  time: {
    closed: string;
    live: string;
    endsInS: (n: number) => string;
    endsInM: (n: number) => string;
    endsInH: (n: number) => string;
    endsInD: (n: number) => string;
  };
  notFoundPage: {
    code: string;
    title: string;
    body: string;
    cta: string;
  };
  meta: {
    title: string;
    description: string;
  };
};

const en: Dictionary = {
  tagline: "quick polls, shared instantly",
  nav: {
    howItWorks: "How it works",
    allPolls: "All polls",
    language: "Language",
  },
  home: {
    eyebrow: "A poll in 10 seconds",
    titleA: "Ask the room.",
    titleB: "Get an answer.",
    subtitle:
      "Type a question, list a few options, hit create. Share the link. Watch the votes pour in, live. No accounts, no fluff — just polls that actually work.",
    recentEyebrow: "Recent",
    recentTitle: "All polls",
    howEyebrow: "How it works",
    step1Title: "Write your question",
    step1Body: "Up to 240 characters. Two to eight options. Pick how long it stays open.",
    step2Title: "Share the link",
    step2Body: "Each poll gets its own URL and QR code. Drop it in chat, on a slide, anywhere.",
    step3Title: "Watch live results",
    step3Body: "One vote per browser. Results update in real-time, with a clear running leader.",
    footerMade: "made simple",
  },
  create: {
    newPoll: "New poll",
    questionLabel: "Question",
    questionPlaceholder: "What should we name the project?",
    optionPlaceholder: "Option",
    addOption: "+ Add option",
    addOptionMax: "+ Add option (max 8)",
    removeOption: "Remove option",
    removeOptionMin: "At least 2 options required",
    closesAfter: "Closes after",
    duration1h: "1 hour",
    duration24h: "24 hours",
    duration7d: "7 days",
    duration30d: "30 days",
    creating: "Creating…",
    create: "Create poll →",
    somethingWrong: "Something went wrong",
    failedCreate: "Failed to create poll",
  },
  recent: {
    dbNotConnectedTitle: "Database not connected",
    dbNotConnectedBody:
      "Set DATABASE_URL in your environment. Once a Postgres is attached the app will auto-create its tables.",
    empty: "No polls yet — create the first one above.",
    voteSingular: "vote",
    votePlural: "votes",
    optionsSuffix: "options",
  },
  voter: {
    voteSingular: "vote",
    votePlural: "votes",
    yourVote: "your vote",
    yourPick: "your pick",
    vote: "Vote →",
    voting: "Voting…",
    notFound: "This poll no longer exists.",
    ended: "This poll has ended.",
    badOption: "That option is not valid.",
    somethingWrong: "Something went wrong",
  },
  share: {
    shareLink: "Share link",
    qrCode: "QR code",
    hideQr: "Hide QR",
    copyLink: "Copy link",
    copied: "Copied ✓",
  },
  time: {
    closed: "closed",
    live: "live",
    endsInS: (n) => `ends in ${n}s`,
    endsInM: (n) => `ends in ${n}m`,
    endsInH: (n) => `ends in ${n}h`,
    endsInD: (n) => `ends in ${n}d`,
  },
  notFoundPage: {
    code: "404",
    title: "That poll isn't here.",
    body: "It may have been deleted, or the link is mistyped.",
    cta: "Create a new poll →",
  },
  meta: {
    title: "Plebi — quick polls, shared instantly",
    description: "Create a poll in seconds. Share a link. Watch results come in live.",
  },
};

const es: Dictionary = {
  tagline: "encuestas rápidas, compartidas al instante",
  nav: { howItWorks: "Cómo funciona", allPolls: "Todas las encuestas", language: "Idioma" },
  home: {
    eyebrow: "Una encuesta en 10 segundos",
    titleA: "Pregunta a la sala.",
    titleB: "Obtén una respuesta.",
    subtitle:
      "Escribe una pregunta, añade unas opciones y pulsa crear. Comparte el enlace. Mira llegar los votos en vivo. Sin cuentas ni relleno, solo encuestas que funcionan.",
    recentEyebrow: "Recientes",
    recentTitle: "Todas las encuestas",
    howEyebrow: "Cómo funciona",
    step1Title: "Escribe tu pregunta",
    step1Body: "Hasta 240 caracteres. De dos a ocho opciones. Elige cuánto tiempo está abierta.",
    step2Title: "Comparte el enlace",
    step2Body: "Cada encuesta tiene su URL y código QR. Compártela donde quieras.",
    step3Title: "Resultados en vivo",
    step3Body: "Un voto por navegador. Los resultados se actualizan en tiempo real con el líder visible.",
    footerMade: "hecho simple",
  },
  create: {
    newPoll: "Nueva encuesta",
    questionLabel: "Pregunta",
    questionPlaceholder: "¿Cómo deberíamos llamar al proyecto?",
    optionPlaceholder: "Opción",
    addOption: "+ Añadir opción",
    addOptionMax: "+ Añadir opción (máx. 8)",
    removeOption: "Quitar opción",
    removeOptionMin: "Se requieren al menos 2 opciones",
    closesAfter: "Cierra en",
    duration1h: "1 hora",
    duration24h: "24 horas",
    duration7d: "7 días",
    duration30d: "30 días",
    creating: "Creando…",
    create: "Crear encuesta →",
    somethingWrong: "Algo salió mal",
    failedCreate: "No se pudo crear la encuesta",
  },
  recent: {
    dbNotConnectedTitle: "Base de datos no conectada",
    dbNotConnectedBody:
      "Configura DATABASE_URL en tu entorno. Cuando se conecte Postgres, la app creará las tablas automáticamente.",
    empty: "Aún no hay encuestas — crea la primera arriba.",
    voteSingular: "voto",
    votePlural: "votos",
    optionsSuffix: "opciones",
  },
  voter: {
    voteSingular: "voto",
    votePlural: "votos",
    yourVote: "tu voto",
    yourPick: "tu elección",
    vote: "Votar →",
    voting: "Votando…",
    notFound: "Esta encuesta ya no existe.",
    ended: "Esta encuesta ha terminado.",
    badOption: "Esa opción no es válida.",
    somethingWrong: "Algo salió mal",
  },
  share: { shareLink: "Compartir enlace", qrCode: "Código QR", hideQr: "Ocultar QR", copyLink: "Copiar enlace", copied: "Copiado ✓" },
  time: {
    closed: "cerrada",
    live: "en vivo",
    endsInS: (n) => `termina en ${n}s`,
    endsInM: (n) => `termina en ${n}m`,
    endsInH: (n) => `termina en ${n}h`,
    endsInD: (n) => `termina en ${n}d`,
  },
  notFoundPage: {
    code: "404",
    title: "Esa encuesta no está aquí.",
    body: "Puede que se haya borrado o el enlace esté mal escrito.",
    cta: "Crear una nueva encuesta →",
  },
  meta: {
    title: "Plebi — encuestas rápidas, compartidas al instante",
    description: "Crea una encuesta en segundos. Comparte un enlace. Mira los resultados en vivo.",
  },
};

const fr: Dictionary = {
  tagline: "sondages rapides, partagés instantanément",
  nav: { howItWorks: "Comment ça marche", allPolls: "Tous les sondages", language: "Langue" },
  home: {
    eyebrow: "Un sondage en 10 secondes",
    titleA: "Demande à la salle.",
    titleB: "Obtiens une réponse.",
    subtitle:
      "Tape une question, ajoute quelques options, crée. Partage le lien. Regarde les votes arriver en direct. Pas de compte, pas de fioritures — juste des sondages qui marchent.",
    recentEyebrow: "Récents",
    recentTitle: "Tous les sondages",
    howEyebrow: "Comment ça marche",
    step1Title: "Écris ta question",
    step1Body: "Jusqu'à 240 caractères. De deux à huit options. Choisis la durée d'ouverture.",
    step2Title: "Partage le lien",
    step2Body: "Chaque sondage a son URL et son QR code. Mets-le où tu veux.",
    step3Title: "Résultats en direct",
    step3Body: "Un vote par navigateur. Mise à jour en temps réel avec un leader clair.",
    footerMade: "fait simple",
  },
  create: {
    newPoll: "Nouveau sondage",
    questionLabel: "Question",
    questionPlaceholder: "Comment devrait-on nommer le projet ?",
    optionPlaceholder: "Option",
    addOption: "+ Ajouter une option",
    addOptionMax: "+ Ajouter une option (max 8)",
    removeOption: "Retirer l'option",
    removeOptionMin: "Au moins 2 options requises",
    closesAfter: "Ferme dans",
    duration1h: "1 heure",
    duration24h: "24 heures",
    duration7d: "7 jours",
    duration30d: "30 jours",
    creating: "Création…",
    create: "Créer le sondage →",
    somethingWrong: "Quelque chose a mal tourné",
    failedCreate: "Échec de la création du sondage",
  },
  recent: {
    dbNotConnectedTitle: "Base de données non connectée",
    dbNotConnectedBody:
      "Configure DATABASE_URL dans ton environnement. Une fois Postgres branché, l'app créera les tables automatiquement.",
    empty: "Aucun sondage pour l'instant — crée le premier ci-dessus.",
    voteSingular: "vote",
    votePlural: "votes",
    optionsSuffix: "options",
  },
  voter: {
    voteSingular: "vote",
    votePlural: "votes",
    yourVote: "ton vote",
    yourPick: "ton choix",
    vote: "Voter →",
    voting: "Vote…",
    notFound: "Ce sondage n'existe plus.",
    ended: "Ce sondage est terminé.",
    badOption: "Cette option n'est pas valide.",
    somethingWrong: "Quelque chose a mal tourné",
  },
  share: { shareLink: "Partager le lien", qrCode: "QR code", hideQr: "Masquer le QR", copyLink: "Copier le lien", copied: "Copié ✓" },
  time: {
    closed: "fermé",
    live: "en direct",
    endsInS: (n) => `finit dans ${n}s`,
    endsInM: (n) => `finit dans ${n}min`,
    endsInH: (n) => `finit dans ${n}h`,
    endsInD: (n) => `finit dans ${n}j`,
  },
  notFoundPage: {
    code: "404",
    title: "Ce sondage n'est pas là.",
    body: "Il a peut-être été supprimé ou le lien est mal écrit.",
    cta: "Créer un nouveau sondage →",
  },
  meta: {
    title: "Plebi — sondages rapides, partagés instantanément",
    description: "Crée un sondage en quelques secondes. Partage un lien. Regarde les résultats en direct.",
  },
};

const de: Dictionary = {
  tagline: "schnelle Umfragen, sofort geteilt",
  nav: { howItWorks: "So funktioniert's", allPolls: "Alle Umfragen", language: "Sprache" },
  home: {
    eyebrow: "Eine Umfrage in 10 Sekunden",
    titleA: "Frag den Raum.",
    titleB: "Hol dir die Antwort.",
    subtitle:
      "Schreib eine Frage, liste ein paar Optionen auf, klick erstellen. Teile den Link. Sieh die Stimmen live eintreffen. Keine Konten, kein Schnickschnack — einfach funktionierende Umfragen.",
    recentEyebrow: "Aktuell",
    recentTitle: "Alle Umfragen",
    howEyebrow: "So funktioniert's",
    step1Title: "Schreib deine Frage",
    step1Body: "Bis zu 240 Zeichen. Zwei bis acht Optionen. Wähle die Laufzeit.",
    step2Title: "Teile den Link",
    step2Body: "Jede Umfrage hat ihre eigene URL und QR-Code. Teile sie überall.",
    step3Title: "Ergebnisse live ansehen",
    step3Body: "Eine Stimme pro Browser. Ergebnisse in Echtzeit mit klarem Spitzenreiter.",
    footerMade: "einfach gemacht",
  },
  create: {
    newPoll: "Neue Umfrage",
    questionLabel: "Frage",
    questionPlaceholder: "Wie sollen wir das Projekt nennen?",
    optionPlaceholder: "Option",
    addOption: "+ Option hinzufügen",
    addOptionMax: "+ Option hinzufügen (max. 8)",
    removeOption: "Option entfernen",
    removeOptionMin: "Mindestens 2 Optionen erforderlich",
    closesAfter: "Schließt nach",
    duration1h: "1 Stunde",
    duration24h: "24 Stunden",
    duration7d: "7 Tage",
    duration30d: "30 Tage",
    creating: "Erstelle…",
    create: "Umfrage erstellen →",
    somethingWrong: "Etwas ist schiefgelaufen",
    failedCreate: "Umfrage konnte nicht erstellt werden",
  },
  recent: {
    dbNotConnectedTitle: "Datenbank nicht verbunden",
    dbNotConnectedBody:
      "Setze DATABASE_URL in deiner Umgebung. Sobald Postgres verbunden ist, erstellt die App die Tabellen automatisch.",
    empty: "Noch keine Umfragen — erstelle oben die erste.",
    voteSingular: "Stimme",
    votePlural: "Stimmen",
    optionsSuffix: "Optionen",
  },
  voter: {
    voteSingular: "Stimme",
    votePlural: "Stimmen",
    yourVote: "deine Stimme",
    yourPick: "deine Wahl",
    vote: "Abstimmen →",
    voting: "Stimme ab…",
    notFound: "Diese Umfrage existiert nicht mehr.",
    ended: "Diese Umfrage ist beendet.",
    badOption: "Diese Option ist ungültig.",
    somethingWrong: "Etwas ist schiefgelaufen",
  },
  share: { shareLink: "Link teilen", qrCode: "QR-Code", hideQr: "QR ausblenden", copyLink: "Link kopieren", copied: "Kopiert ✓" },
  time: {
    closed: "geschlossen",
    live: "live",
    endsInS: (n) => `endet in ${n}s`,
    endsInM: (n) => `endet in ${n}min`,
    endsInH: (n) => `endet in ${n}h`,
    endsInD: (n) => `endet in ${n}T`,
  },
  notFoundPage: {
    code: "404",
    title: "Diese Umfrage ist nicht hier.",
    body: "Sie wurde vielleicht gelöscht oder der Link ist falsch geschrieben.",
    cta: "Neue Umfrage erstellen →",
  },
  meta: {
    title: "Plebi — schnelle Umfragen, sofort geteilt",
    description: "Erstelle eine Umfrage in Sekunden. Teile einen Link. Sieh die Ergebnisse live.",
  },
};

const it: Dictionary = {
  tagline: "sondaggi veloci, condivisi all'istante",
  nav: { howItWorks: "Come funziona", allPolls: "Tutti i sondaggi", language: "Lingua" },
  home: {
    eyebrow: "Un sondaggio in 10 secondi",
    titleA: "Chiedi alla sala.",
    titleB: "Ottieni una risposta.",
    subtitle:
      "Scrivi una domanda, elenca alcune opzioni, clicca crea. Condividi il link. Guarda i voti arrivare in diretta. Niente account, niente fronzoli — solo sondaggi che funzionano.",
    recentEyebrow: "Recenti",
    recentTitle: "Tutti i sondaggi",
    howEyebrow: "Come funziona",
    step1Title: "Scrivi la tua domanda",
    step1Body: "Fino a 240 caratteri. Da due a otto opzioni. Scegli quanto resta aperto.",
    step2Title: "Condividi il link",
    step2Body: "Ogni sondaggio ha il suo URL e QR code. Mettilo dove vuoi.",
    step3Title: "Risultati in diretta",
    step3Body: "Un voto per browser. Aggiornamenti in tempo reale con un leader chiaro.",
    footerMade: "fatto semplice",
  },
  create: {
    newPoll: "Nuovo sondaggio",
    questionLabel: "Domanda",
    questionPlaceholder: "Come dovremmo chiamare il progetto?",
    optionPlaceholder: "Opzione",
    addOption: "+ Aggiungi opzione",
    addOptionMax: "+ Aggiungi opzione (max 8)",
    removeOption: "Rimuovi opzione",
    removeOptionMin: "Servono almeno 2 opzioni",
    closesAfter: "Chiude tra",
    duration1h: "1 ora",
    duration24h: "24 ore",
    duration7d: "7 giorni",
    duration30d: "30 giorni",
    creating: "Creazione…",
    create: "Crea sondaggio →",
    somethingWrong: "Qualcosa è andato storto",
    failedCreate: "Impossibile creare il sondaggio",
  },
  recent: {
    dbNotConnectedTitle: "Database non connesso",
    dbNotConnectedBody:
      "Imposta DATABASE_URL nell'ambiente. Quando Postgres è collegato, l'app creerà le tabelle automaticamente.",
    empty: "Nessun sondaggio ancora — crea il primo sopra.",
    voteSingular: "voto",
    votePlural: "voti",
    optionsSuffix: "opzioni",
  },
  voter: {
    voteSingular: "voto",
    votePlural: "voti",
    yourVote: "il tuo voto",
    yourPick: "la tua scelta",
    vote: "Vota →",
    voting: "In voto…",
    notFound: "Questo sondaggio non esiste più.",
    ended: "Questo sondaggio è terminato.",
    badOption: "Questa opzione non è valida.",
    somethingWrong: "Qualcosa è andato storto",
  },
  share: { shareLink: "Condividi link", qrCode: "Codice QR", hideQr: "Nascondi QR", copyLink: "Copia link", copied: "Copiato ✓" },
  time: {
    closed: "chiuso",
    live: "in diretta",
    endsInS: (n) => `finisce tra ${n}s`,
    endsInM: (n) => `finisce tra ${n}min`,
    endsInH: (n) => `finisce tra ${n}h`,
    endsInD: (n) => `finisce tra ${n}g`,
  },
  notFoundPage: {
    code: "404",
    title: "Questo sondaggio non è qui.",
    body: "Potrebbe essere stato cancellato o il link è digitato male.",
    cta: "Crea un nuovo sondaggio →",
  },
  meta: {
    title: "Plebi — sondaggi veloci, condivisi all'istante",
    description: "Crea un sondaggio in pochi secondi. Condividi un link. Guarda i risultati in diretta.",
  },
};

const pt: Dictionary = {
  tagline: "enquetes rápidas, compartilhadas na hora",
  nav: { howItWorks: "Como funciona", allPolls: "Todas as enquetes", language: "Idioma" },
  home: {
    eyebrow: "Uma enquete em 10 segundos",
    titleA: "Pergunte à sala.",
    titleB: "Receba uma resposta.",
    subtitle:
      "Escreva uma pergunta, liste algumas opções, clique em criar. Compartilhe o link. Veja os votos chegarem ao vivo. Sem contas, sem enrolação — só enquetes que funcionam.",
    recentEyebrow: "Recentes",
    recentTitle: "Todas as enquetes",
    howEyebrow: "Como funciona",
    step1Title: "Escreva sua pergunta",
    step1Body: "Até 240 caracteres. De duas a oito opções. Escolha por quanto tempo fica aberta.",
    step2Title: "Compartilhe o link",
    step2Body: "Cada enquete tem sua URL e código QR. Coloque onde quiser.",
    step3Title: "Resultados ao vivo",
    step3Body: "Um voto por navegador. Resultados em tempo real com líder claro.",
    footerMade: "feito simples",
  },
  create: {
    newPoll: "Nova enquete",
    questionLabel: "Pergunta",
    questionPlaceholder: "Como devemos chamar o projeto?",
    optionPlaceholder: "Opção",
    addOption: "+ Adicionar opção",
    addOptionMax: "+ Adicionar opção (máx. 8)",
    removeOption: "Remover opção",
    removeOptionMin: "Pelo menos 2 opções são necessárias",
    closesAfter: "Fecha em",
    duration1h: "1 hora",
    duration24h: "24 horas",
    duration7d: "7 dias",
    duration30d: "30 dias",
    creating: "Criando…",
    create: "Criar enquete →",
    somethingWrong: "Algo deu errado",
    failedCreate: "Falha ao criar enquete",
  },
  recent: {
    dbNotConnectedTitle: "Banco de dados não conectado",
    dbNotConnectedBody:
      "Defina DATABASE_URL no seu ambiente. Quando o Postgres estiver conectado, o app criará as tabelas automaticamente.",
    empty: "Ainda sem enquetes — crie a primeira acima.",
    voteSingular: "voto",
    votePlural: "votos",
    optionsSuffix: "opções",
  },
  voter: {
    voteSingular: "voto",
    votePlural: "votos",
    yourVote: "seu voto",
    yourPick: "sua escolha",
    vote: "Votar →",
    voting: "Votando…",
    notFound: "Esta enquete não existe mais.",
    ended: "Esta enquete terminou.",
    badOption: "Essa opção não é válida.",
    somethingWrong: "Algo deu errado",
  },
  share: { shareLink: "Compartilhar link", qrCode: "Código QR", hideQr: "Ocultar QR", copyLink: "Copiar link", copied: "Copiado ✓" },
  time: {
    closed: "encerrada",
    live: "ao vivo",
    endsInS: (n) => `termina em ${n}s`,
    endsInM: (n) => `termina em ${n}min`,
    endsInH: (n) => `termina em ${n}h`,
    endsInD: (n) => `termina em ${n}d`,
  },
  notFoundPage: {
    code: "404",
    title: "Essa enquete não está aqui.",
    body: "Pode ter sido excluída ou o link está errado.",
    cta: "Criar uma nova enquete →",
  },
  meta: {
    title: "Plebi — enquetes rápidas, compartilhadas na hora",
    description: "Crie uma enquete em segundos. Compartilhe um link. Veja os resultados ao vivo.",
  },
};

const ja: Dictionary = {
  tagline: "すぐ作って、すぐ共有",
  nav: { howItWorks: "使い方", allPolls: "投票一覧", language: "言語" },
  home: {
    eyebrow: "10秒で投票作成",
    titleA: "みんなに聞こう。",
    titleB: "答えがすぐ届く。",
    subtitle:
      "質問を書いて、選択肢を並べて、作成を押す。リンクを共有。リアルタイムで票が集まる。アカウント不要、余計なものなし — ちゃんと動く投票です。",
    recentEyebrow: "最近",
    recentTitle: "投票一覧",
    howEyebrow: "使い方",
    step1Title: "質問を書く",
    step1Body: "240文字まで。選択肢は2〜8個。公開期間を選択。",
    step2Title: "リンクを共有",
    step2Body: "各投票に固有URLとQRコード。チャット、スライド、どこにでも貼れます。",
    step3Title: "結果をライブで",
    step3Body: "ブラウザ1台につき1票。リアルタイムで集計、リーダー表示。",
    footerMade: "シンプルに",
  },
  create: {
    newPoll: "新しい投票",
    questionLabel: "質問",
    questionPlaceholder: "プロジェクト名はどうしますか?",
    optionPlaceholder: "選択肢",
    addOption: "+ 選択肢を追加",
    addOptionMax: "+ 選択肢を追加 (最大8)",
    removeOption: "選択肢を削除",
    removeOptionMin: "最低2つの選択肢が必要",
    closesAfter: "締切",
    duration1h: "1時間",
    duration24h: "24時間",
    duration7d: "7日",
    duration30d: "30日",
    creating: "作成中…",
    create: "投票を作成 →",
    somethingWrong: "問題が発生しました",
    failedCreate: "投票の作成に失敗しました",
  },
  recent: {
    dbNotConnectedTitle: "データベース未接続",
    dbNotConnectedBody:
      "環境変数にDATABASE_URLを設定してください。Postgres接続後、アプリが自動でテーブルを作成します。",
    empty: "まだ投票がありません — 上から最初の投票を作成してください。",
    voteSingular: "票",
    votePlural: "票",
    optionsSuffix: "選択肢",
  },
  voter: {
    voteSingular: "票",
    votePlural: "票",
    yourVote: "あなたの票",
    yourPick: "あなたの選択",
    vote: "投票 →",
    voting: "投票中…",
    notFound: "この投票は存在しません。",
    ended: "この投票は終了しました。",
    badOption: "その選択肢は無効です。",
    somethingWrong: "問題が発生しました",
  },
  share: { shareLink: "共有リンク", qrCode: "QRコード", hideQr: "QRを隠す", copyLink: "リンクをコピー", copied: "コピー済 ✓" },
  time: {
    closed: "終了",
    live: "公開中",
    endsInS: (n) => `あと${n}秒`,
    endsInM: (n) => `あと${n}分`,
    endsInH: (n) => `あと${n}時間`,
    endsInD: (n) => `あと${n}日`,
  },
  notFoundPage: {
    code: "404",
    title: "その投票は見つかりません。",
    body: "削除されたか、リンクが間違っている可能性があります。",
    cta: "新しい投票を作成 →",
  },
  meta: {
    title: "Plebi — すぐ作って、すぐ共有",
    description: "数秒で投票を作成。リンクを共有。結果をライブで確認。",
  },
};

const zh: Dictionary = {
  tagline: "快速投票，即时分享",
  nav: { howItWorks: "使用方法", allPolls: "所有投票", language: "语言" },
  home: {
    eyebrow: "10秒创建投票",
    titleA: "问问大家。",
    titleB: "立刻得到答案。",
    subtitle:
      "输入问题，列出几个选项,点击创建。分享链接。实时查看投票结果。无需账号,无废话——只是真正能用的投票。",
    recentEyebrow: "最近",
    recentTitle: "所有投票",
    howEyebrow: "使用方法",
    step1Title: "写下你的问题",
    step1Body: "最多240字符。2到8个选项。选择开放时长。",
    step2Title: "分享链接",
    step2Body: "每个投票有独立URL和二维码。可分享到任何地方。",
    step3Title: "实时查看结果",
    step3Body: "每个浏览器一票。实时更新,清晰显示领先者。",
    footerMade: "简单至上",
  },
  create: {
    newPoll: "新建投票",
    questionLabel: "问题",
    questionPlaceholder: "我们应该如何命名这个项目?",
    optionPlaceholder: "选项",
    addOption: "+ 添加选项",
    addOptionMax: "+ 添加选项 (最多8个)",
    removeOption: "删除选项",
    removeOptionMin: "至少需要2个选项",
    closesAfter: "关闭时间",
    duration1h: "1小时",
    duration24h: "24小时",
    duration7d: "7天",
    duration30d: "30天",
    creating: "创建中…",
    create: "创建投票 →",
    somethingWrong: "出现问题",
    failedCreate: "创建投票失败",
  },
  recent: {
    dbNotConnectedTitle: "数据库未连接",
    dbNotConnectedBody:
      "请在环境中设置DATABASE_URL。连接Postgres后,应用将自动创建表。",
    empty: "暂无投票——在上方创建第一个。",
    voteSingular: "票",
    votePlural: "票",
    optionsSuffix: "选项",
  },
  voter: {
    voteSingular: "票",
    votePlural: "票",
    yourVote: "你的投票",
    yourPick: "你的选择",
    vote: "投票 →",
    voting: "投票中…",
    notFound: "此投票已不存在。",
    ended: "此投票已结束。",
    badOption: "该选项无效。",
    somethingWrong: "出现问题",
  },
  share: { shareLink: "分享链接", qrCode: "二维码", hideQr: "隐藏二维码", copyLink: "复制链接", copied: "已复制 ✓" },
  time: {
    closed: "已关闭",
    live: "进行中",
    endsInS: (n) => `还剩${n}秒`,
    endsInM: (n) => `还剩${n}分`,
    endsInH: (n) => `还剩${n}时`,
    endsInD: (n) => `还剩${n}天`,
  },
  notFoundPage: {
    code: "404",
    title: "找不到该投票。",
    body: "可能已被删除,或链接输入错误。",
    cta: "创建新投票 →",
  },
  meta: {
    title: "Plebi — 快速投票,即时分享",
    description: "几秒钟创建投票。分享链接。实时查看结果。",
  },
};

const ko: Dictionary = {
  tagline: "빠른 투표, 즉시 공유",
  nav: { howItWorks: "사용 방법", allPolls: "전체 투표", language: "언어" },
  home: {
    eyebrow: "10초 만에 투표 만들기",
    titleA: "모두에게 물어보세요.",
    titleB: "답을 얻으세요.",
    subtitle:
      "질문을 쓰고, 선택지를 나열하고, 만들기 클릭. 링크 공유. 실시간으로 표가 들어오는 걸 보세요. 계정도, 군더더기도 없이 — 그냥 잘 작동하는 투표.",
    recentEyebrow: "최근",
    recentTitle: "전체 투표",
    howEyebrow: "사용 방법",
    step1Title: "질문 작성",
    step1Body: "최대 240자. 2~8개 선택지. 공개 기간 선택.",
    step2Title: "링크 공유",
    step2Body: "각 투표마다 고유 URL과 QR 코드. 어디든 공유 가능.",
    step3Title: "실시간 결과",
    step3Body: "브라우저당 한 표. 실시간 업데이트, 1위 명확 표시.",
    footerMade: "간단하게",
  },
  create: {
    newPoll: "새 투표",
    questionLabel: "질문",
    questionPlaceholder: "프로젝트 이름을 뭐라고 할까요?",
    optionPlaceholder: "선택지",
    addOption: "+ 선택지 추가",
    addOptionMax: "+ 선택지 추가 (최대 8)",
    removeOption: "선택지 삭제",
    removeOptionMin: "최소 2개의 선택지가 필요합니다",
    closesAfter: "마감",
    duration1h: "1시간",
    duration24h: "24시간",
    duration7d: "7일",
    duration30d: "30일",
    creating: "생성 중…",
    create: "투표 만들기 →",
    somethingWrong: "문제가 발생했습니다",
    failedCreate: "투표 생성 실패",
  },
  recent: {
    dbNotConnectedTitle: "데이터베이스 미연결",
    dbNotConnectedBody:
      "환경에 DATABASE_URL을 설정하세요. Postgres가 연결되면 앱이 자동으로 테이블을 생성합니다.",
    empty: "아직 투표가 없습니다 — 위에서 첫 투표를 만드세요.",
    voteSingular: "표",
    votePlural: "표",
    optionsSuffix: "선택지",
  },
  voter: {
    voteSingular: "표",
    votePlural: "표",
    yourVote: "당신의 표",
    yourPick: "당신의 선택",
    vote: "투표 →",
    voting: "투표 중…",
    notFound: "이 투표는 더 이상 존재하지 않습니다.",
    ended: "이 투표는 종료되었습니다.",
    badOption: "유효하지 않은 선택지입니다.",
    somethingWrong: "문제가 발생했습니다",
  },
  share: { shareLink: "링크 공유", qrCode: "QR 코드", hideQr: "QR 숨기기", copyLink: "링크 복사", copied: "복사됨 ✓" },
  time: {
    closed: "마감",
    live: "진행 중",
    endsInS: (n) => `${n}초 후 마감`,
    endsInM: (n) => `${n}분 후 마감`,
    endsInH: (n) => `${n}시간 후 마감`,
    endsInD: (n) => `${n}일 후 마감`,
  },
  notFoundPage: {
    code: "404",
    title: "해당 투표가 없습니다.",
    body: "삭제되었거나 링크가 잘못되었을 수 있습니다.",
    cta: "새 투표 만들기 →",
  },
  meta: {
    title: "Plebi — 빠른 투표, 즉시 공유",
    description: "몇 초 만에 투표 생성. 링크 공유. 실시간 결과.",
  },
};

const ar: Dictionary = {
  tagline: "استطلاعات سريعة، تشارك فوراً",
  nav: { howItWorks: "كيف يعمل", allPolls: "كل الاستطلاعات", language: "اللغة" },
  home: {
    eyebrow: "استطلاع في 10 ثوانٍ",
    titleA: "اسأل الحضور.",
    titleB: "احصل على الإجابة.",
    subtitle:
      "اكتب سؤالاً، أضف بعض الخيارات، اضغط إنشاء. شارك الرابط. شاهد الأصوات تتدفق مباشرة. بدون حسابات، بدون تعقيدات — مجرد استطلاعات تعمل.",
    recentEyebrow: "الأحدث",
    recentTitle: "كل الاستطلاعات",
    howEyebrow: "كيف يعمل",
    step1Title: "اكتب سؤالك",
    step1Body: "حتى 240 حرفاً. من خيارين إلى ثمانية. اختر المدة.",
    step2Title: "شارك الرابط",
    step2Body: "كل استطلاع له رابط ورمز QR خاص. شاركه أينما تريد.",
    step3Title: "نتائج مباشرة",
    step3Body: "صوت واحد لكل متصفح. تحديث فوري مع المتصدر بوضوح.",
    footerMade: "بساطة مدروسة",
  },
  create: {
    newPoll: "استطلاع جديد",
    questionLabel: "السؤال",
    questionPlaceholder: "ماذا نسمي المشروع؟",
    optionPlaceholder: "خيار",
    addOption: "+ إضافة خيار",
    addOptionMax: "+ إضافة خيار (الحد 8)",
    removeOption: "حذف الخيار",
    removeOptionMin: "خياران على الأقل مطلوبان",
    closesAfter: "يُغلق بعد",
    duration1h: "ساعة",
    duration24h: "24 ساعة",
    duration7d: "7 أيام",
    duration30d: "30 يوم",
    creating: "جاري الإنشاء…",
    create: "إنشاء الاستطلاع ←",
    somethingWrong: "حدث خطأ ما",
    failedCreate: "فشل إنشاء الاستطلاع",
  },
  recent: {
    dbNotConnectedTitle: "قاعدة البيانات غير متصلة",
    dbNotConnectedBody:
      "اضبط DATABASE_URL في بيئتك. بمجرد ربط Postgres ستنشئ التطبيق الجداول تلقائياً.",
    empty: "لا استطلاعات بعد — أنشئ الأول بالأعلى.",
    voteSingular: "صوت",
    votePlural: "أصوات",
    optionsSuffix: "خيارات",
  },
  voter: {
    voteSingular: "صوت",
    votePlural: "أصوات",
    yourVote: "صوتك",
    yourPick: "اختيارك",
    vote: "صوّت ←",
    voting: "جاري التصويت…",
    notFound: "هذا الاستطلاع لم يعد موجوداً.",
    ended: "انتهى هذا الاستطلاع.",
    badOption: "هذا الخيار غير صالح.",
    somethingWrong: "حدث خطأ ما",
  },
  share: { shareLink: "مشاركة الرابط", qrCode: "رمز QR", hideQr: "إخفاء QR", copyLink: "نسخ الرابط", copied: "تم النسخ ✓" },
  time: {
    closed: "مُغلق",
    live: "مباشر",
    endsInS: (n) => `ينتهي خلال ${n}ث`,
    endsInM: (n) => `ينتهي خلال ${n}د`,
    endsInH: (n) => `ينتهي خلال ${n}س`,
    endsInD: (n) => `ينتهي خلال ${n}ي`,
  },
  notFoundPage: {
    code: "404",
    title: "هذا الاستطلاع غير موجود.",
    body: "ربما تم حذفه أو الرابط مكتوب بشكل خاطئ.",
    cta: "إنشاء استطلاع جديد ←",
  },
  meta: {
    title: "Plebi — استطلاعات سريعة، تشارك فوراً",
    description: "أنشئ استطلاعاً في ثوانٍ. شارك رابطاً. شاهد النتائج مباشرة.",
  },
};

const ru: Dictionary = {
  tagline: "быстрые опросы, мгновенный обмен",
  nav: { howItWorks: "Как это работает", allPolls: "Все опросы", language: "Язык" },
  home: {
    eyebrow: "Опрос за 10 секунд",
    titleA: "Спроси у всех.",
    titleB: "Получи ответ.",
    subtitle:
      "Напиши вопрос, добавь варианты, создай. Поделись ссылкой. Смотри, как приходят голоса в реальном времени. Без аккаунтов и лишнего — просто работающие опросы.",
    recentEyebrow: "Недавние",
    recentTitle: "Все опросы",
    howEyebrow: "Как это работает",
    step1Title: "Напиши свой вопрос",
    step1Body: "До 240 символов. От двух до восьми вариантов. Выбери длительность.",
    step2Title: "Поделись ссылкой",
    step2Body: "У каждого опроса свой URL и QR-код. Размещай где угодно.",
    step3Title: "Результаты в реальном времени",
    step3Body: "Один голос на браузер. Обновления в реальном времени с явным лидером.",
    footerMade: "сделано просто",
  },
  create: {
    newPoll: "Новый опрос",
    questionLabel: "Вопрос",
    questionPlaceholder: "Как назвать проект?",
    optionPlaceholder: "Вариант",
    addOption: "+ Добавить вариант",
    addOptionMax: "+ Добавить вариант (макс. 8)",
    removeOption: "Удалить вариант",
    removeOptionMin: "Нужно минимум 2 варианта",
    closesAfter: "Закроется через",
    duration1h: "1 час",
    duration24h: "24 часа",
    duration7d: "7 дней",
    duration30d: "30 дней",
    creating: "Создание…",
    create: "Создать опрос →",
    somethingWrong: "Что-то пошло не так",
    failedCreate: "Не удалось создать опрос",
  },
  recent: {
    dbNotConnectedTitle: "База данных не подключена",
    dbNotConnectedBody:
      "Установи DATABASE_URL в окружении. После подключения Postgres приложение создаст таблицы автоматически.",
    empty: "Опросов пока нет — создай первый выше.",
    voteSingular: "голос",
    votePlural: "голосов",
    optionsSuffix: "вариантов",
  },
  voter: {
    voteSingular: "голос",
    votePlural: "голосов",
    yourVote: "твой голос",
    yourPick: "твой выбор",
    vote: "Голосовать →",
    voting: "Голосование…",
    notFound: "Этот опрос больше не существует.",
    ended: "Этот опрос завершён.",
    badOption: "Этот вариант недопустим.",
    somethingWrong: "Что-то пошло не так",
  },
  share: { shareLink: "Поделиться ссылкой", qrCode: "QR-код", hideQr: "Скрыть QR", copyLink: "Копировать ссылку", copied: "Скопировано ✓" },
  time: {
    closed: "закрыт",
    live: "в эфире",
    endsInS: (n) => `завершится через ${n}с`,
    endsInM: (n) => `завершится через ${n}мин`,
    endsInH: (n) => `завершится через ${n}ч`,
    endsInD: (n) => `завершится через ${n}д`,
  },
  notFoundPage: {
    code: "404",
    title: "Такого опроса здесь нет.",
    body: "Возможно, он удалён, или ссылка указана с ошибкой.",
    cta: "Создать новый опрос →",
  },
  meta: {
    title: "Plebi — быстрые опросы, мгновенный обмен",
    description: "Создай опрос за секунды. Поделись ссылкой. Смотри результаты в реальном времени.",
  },
};

const hi: Dictionary = {
  tagline: "तेज़ पोल, तुरंत साझा",
  nav: { howItWorks: "यह कैसे काम करता है", allPolls: "सभी पोल", language: "भाषा" },
  home: {
    eyebrow: "10 सेकंड में एक पोल",
    titleA: "सबसे पूछो।",
    titleB: "जवाब पाओ।",
    subtitle:
      "एक प्रश्न लिखो, कुछ विकल्प जोड़ो, बनाओ दबाओ। लिंक साझा करो। लाइव वोट देखो। कोई खाता नहीं, कोई फालतू चीज़ नहीं — बस काम करने वाले पोल।",
    recentEyebrow: "हाल के",
    recentTitle: "सभी पोल",
    howEyebrow: "यह कैसे काम करता है",
    step1Title: "अपना प्रश्न लिखो",
    step1Body: "240 अक्षरों तक। दो से आठ विकल्प। अवधि चुनो।",
    step2Title: "लिंक साझा करो",
    step2Body: "हर पोल का अपना URL और QR कोड। कहीं भी डालो।",
    step3Title: "लाइव परिणाम देखो",
    step3Body: "प्रति ब्राउज़र एक वोट। रियल-टाइम अपडेट, स्पष्ट लीडर।",
    footerMade: "सरल बनाया",
  },
  create: {
    newPoll: "नया पोल",
    questionLabel: "प्रश्न",
    questionPlaceholder: "प्रोजेक्ट का नाम क्या रखें?",
    optionPlaceholder: "विकल्प",
    addOption: "+ विकल्प जोड़ें",
    addOptionMax: "+ विकल्प जोड़ें (अधिकतम 8)",
    removeOption: "विकल्प हटाएं",
    removeOptionMin: "कम से कम 2 विकल्प चाहिए",
    closesAfter: "इसके बाद बंद",
    duration1h: "1 घंटा",
    duration24h: "24 घंटे",
    duration7d: "7 दिन",
    duration30d: "30 दिन",
    creating: "बना रहे हैं…",
    create: "पोल बनाएं →",
    somethingWrong: "कुछ गलत हुआ",
    failedCreate: "पोल बनाने में विफल",
  },
  recent: {
    dbNotConnectedTitle: "डेटाबेस कनेक्ट नहीं",
    dbNotConnectedBody:
      "अपने एनवायरनमेंट में DATABASE_URL सेट करें। Postgres कनेक्ट होते ही ऐप टेबल बना देगा।",
    empty: "अभी कोई पोल नहीं — ऊपर पहला बनाएं।",
    voteSingular: "वोट",
    votePlural: "वोट",
    optionsSuffix: "विकल्प",
  },
  voter: {
    voteSingular: "वोट",
    votePlural: "वोट",
    yourVote: "आपका वोट",
    yourPick: "आपकी पसंद",
    vote: "वोट करें →",
    voting: "वोट कर रहे हैं…",
    notFound: "यह पोल अब मौजूद नहीं है।",
    ended: "यह पोल समाप्त हो गया है।",
    badOption: "वह विकल्प मान्य नहीं है।",
    somethingWrong: "कुछ गलत हुआ",
  },
  share: { shareLink: "लिंक साझा करें", qrCode: "QR कोड", hideQr: "QR छिपाएं", copyLink: "लिंक कॉपी करें", copied: "कॉपी हुआ ✓" },
  time: {
    closed: "बंद",
    live: "लाइव",
    endsInS: (n) => `${n}से में समाप्त`,
    endsInM: (n) => `${n}मि में समाप्त`,
    endsInH: (n) => `${n}घं में समाप्त`,
    endsInD: (n) => `${n}दि में समाप्त`,
  },
  notFoundPage: {
    code: "404",
    title: "वह पोल यहाँ नहीं है।",
    body: "हो सकता है हटा दिया गया हो, या लिंक गलत हो।",
    cta: "नया पोल बनाएं →",
  },
  meta: {
    title: "Plebi — तेज़ पोल, तुरंत साझा",
    description: "सेकंडों में पोल बनाएं। लिंक साझा करें। लाइव परिणाम देखें।",
  },
};

const tr: Dictionary = {
  tagline: "hızlı anketler, anında paylaşılır",
  nav: { howItWorks: "Nasıl çalışır", allPolls: "Tüm anketler", language: "Dil" },
  home: {
    eyebrow: "10 saniyede bir anket",
    titleA: "Salona sor.",
    titleB: "Cevabı al.",
    subtitle:
      "Bir soru yaz, birkaç seçenek ekle, oluştura bas. Linki paylaş. Oyların canlı geldiğini izle. Hesap yok, fazlalık yok — sadece çalışan anketler.",
    recentEyebrow: "Son",
    recentTitle: "Tüm anketler",
    howEyebrow: "Nasıl çalışır",
    step1Title: "Sorunu yaz",
    step1Body: "240 karaktere kadar. İki ila sekiz seçenek. Süreyi sen seç.",
    step2Title: "Linki paylaş",
    step2Body: "Her anketin kendi URL'i ve QR kodu var. İstediğin yere koy.",
    step3Title: "Sonuçları canlı izle",
    step3Body: "Tarayıcı başına bir oy. Anlık güncellenir, lider net görünür.",
    footerMade: "sade tutuldu",
  },
  create: {
    newPoll: "Yeni anket",
    questionLabel: "Soru",
    questionPlaceholder: "Projenin adı ne olsun?",
    optionPlaceholder: "Seçenek",
    addOption: "+ Seçenek ekle",
    addOptionMax: "+ Seçenek ekle (en fazla 8)",
    removeOption: "Seçeneği sil",
    removeOptionMin: "En az 2 seçenek gerekli",
    closesAfter: "Kapanış",
    duration1h: "1 saat",
    duration24h: "24 saat",
    duration7d: "7 gün",
    duration30d: "30 gün",
    creating: "Oluşturuluyor…",
    create: "Anket oluştur →",
    somethingWrong: "Bir şeyler ters gitti",
    failedCreate: "Anket oluşturulamadı",
  },
  recent: {
    dbNotConnectedTitle: "Veritabanı bağlı değil",
    dbNotConnectedBody:
      "Ortamına DATABASE_URL ayarla. Postgres bağlanınca uygulama tabloları otomatik oluşturur.",
    empty: "Henüz anket yok — yukarıdan ilkini oluştur.",
    voteSingular: "oy",
    votePlural: "oy",
    optionsSuffix: "seçenek",
  },
  voter: {
    voteSingular: "oy",
    votePlural: "oy",
    yourVote: "senin oyun",
    yourPick: "senin seçimin",
    vote: "Oy ver →",
    voting: "Oy veriliyor…",
    notFound: "Bu anket artık yok.",
    ended: "Bu anket bitti.",
    badOption: "O seçenek geçerli değil.",
    somethingWrong: "Bir şeyler ters gitti",
  },
  share: { shareLink: "Linki paylaş", qrCode: "QR kod", hideQr: "QR'ı gizle", copyLink: "Linki kopyala", copied: "Kopyalandı ✓" },
  time: {
    closed: "kapandı",
    live: "canlı",
    endsInS: (n) => `${n}sn sonra biter`,
    endsInM: (n) => `${n}dk sonra biter`,
    endsInH: (n) => `${n}sa sonra biter`,
    endsInD: (n) => `${n}g sonra biter`,
  },
  notFoundPage: {
    code: "404",
    title: "O anket burada değil.",
    body: "Silinmiş olabilir veya link yanlış yazılmış olabilir.",
    cta: "Yeni anket oluştur →",
  },
  meta: {
    title: "Plebi — hızlı anketler, anında paylaşılır",
    description: "Saniyeler içinde anket oluştur. Linki paylaş. Sonuçları canlı izle.",
  },
};

const nl: Dictionary = {
  tagline: "snelle polls, direct gedeeld",
  nav: { howItWorks: "Hoe het werkt", allPolls: "Alle polls", language: "Taal" },
  home: {
    eyebrow: "Een poll in 10 seconden",
    titleA: "Vraag het de zaal.",
    titleB: "Krijg een antwoord.",
    subtitle:
      "Typ een vraag, voeg wat opties toe, klik op maken. Deel de link. Zie de stemmen live binnenkomen. Geen accounts, geen poespas — gewoon polls die werken.",
    recentEyebrow: "Recent",
    recentTitle: "Alle polls",
    howEyebrow: "Hoe het werkt",
    step1Title: "Schrijf je vraag",
    step1Body: "Tot 240 tekens. Twee tot acht opties. Kies hoelang open.",
    step2Title: "Deel de link",
    step2Body: "Elke poll heeft een eigen URL en QR-code. Plak hem overal.",
    step3Title: "Live resultaten",
    step3Body: "Eén stem per browser. Real-time updates met duidelijke koploper.",
    footerMade: "simpel gehouden",
  },
  create: {
    newPoll: "Nieuwe poll",
    questionLabel: "Vraag",
    questionPlaceholder: "Hoe noemen we het project?",
    optionPlaceholder: "Optie",
    addOption: "+ Optie toevoegen",
    addOptionMax: "+ Optie toevoegen (max 8)",
    removeOption: "Optie verwijderen",
    removeOptionMin: "Minimaal 2 opties vereist",
    closesAfter: "Sluit na",
    duration1h: "1 uur",
    duration24h: "24 uur",
    duration7d: "7 dagen",
    duration30d: "30 dagen",
    creating: "Aanmaken…",
    create: "Poll maken →",
    somethingWrong: "Er ging iets mis",
    failedCreate: "Kon poll niet aanmaken",
  },
  recent: {
    dbNotConnectedTitle: "Database niet verbonden",
    dbNotConnectedBody:
      "Zet DATABASE_URL in je omgeving. Zodra Postgres is gekoppeld, maakt de app de tabellen automatisch aan.",
    empty: "Nog geen polls — maak hierboven de eerste.",
    voteSingular: "stem",
    votePlural: "stemmen",
    optionsSuffix: "opties",
  },
  voter: {
    voteSingular: "stem",
    votePlural: "stemmen",
    yourVote: "jouw stem",
    yourPick: "jouw keuze",
    vote: "Stem →",
    voting: "Stemmen…",
    notFound: "Deze poll bestaat niet meer.",
    ended: "Deze poll is afgelopen.",
    badOption: "Die optie is niet geldig.",
    somethingWrong: "Er ging iets mis",
  },
  share: { shareLink: "Link delen", qrCode: "QR-code", hideQr: "QR verbergen", copyLink: "Link kopiëren", copied: "Gekopieerd ✓" },
  time: {
    closed: "gesloten",
    live: "live",
    endsInS: (n) => `eindigt over ${n}s`,
    endsInM: (n) => `eindigt over ${n}min`,
    endsInH: (n) => `eindigt over ${n}u`,
    endsInD: (n) => `eindigt over ${n}d`,
  },
  notFoundPage: {
    code: "404",
    title: "Die poll staat hier niet.",
    body: "Mogelijk verwijderd, of de link is verkeerd getypt.",
    cta: "Nieuwe poll maken →",
  },
  meta: {
    title: "Plebi — snelle polls, direct gedeeld",
    description: "Maak in seconden een poll. Deel een link. Bekijk live resultaten.",
  },
};

const pl: Dictionary = {
  tagline: "szybkie ankiety, dzielone natychmiast",
  nav: { howItWorks: "Jak to działa", allPolls: "Wszystkie ankiety", language: "Język" },
  home: {
    eyebrow: "Ankieta w 10 sekund",
    titleA: "Zapytaj salę.",
    titleB: "Uzyskaj odpowiedź.",
    subtitle:
      "Wpisz pytanie, dodaj kilka opcji, kliknij utwórz. Udostępnij link. Patrz, jak głosy spływają na żywo. Bez kont, bez bzdur — po prostu działające ankiety.",
    recentEyebrow: "Ostatnie",
    recentTitle: "Wszystkie ankiety",
    howEyebrow: "Jak to działa",
    step1Title: "Napisz pytanie",
    step1Body: "Do 240 znaków. Od dwóch do ośmiu opcji. Wybierz czas trwania.",
    step2Title: "Udostępnij link",
    step2Body: "Każda ankieta ma swój URL i kod QR. Wstaw gdzie chcesz.",
    step3Title: "Wyniki na żywo",
    step3Body: "Jeden głos na przeglądarkę. Aktualizacja w czasie rzeczywistym z liderem.",
    footerMade: "po prostu",
  },
  create: {
    newPoll: "Nowa ankieta",
    questionLabel: "Pytanie",
    questionPlaceholder: "Jak nazwać projekt?",
    optionPlaceholder: "Opcja",
    addOption: "+ Dodaj opcję",
    addOptionMax: "+ Dodaj opcję (maks. 8)",
    removeOption: "Usuń opcję",
    removeOptionMin: "Wymagane co najmniej 2 opcje",
    closesAfter: "Zamyka się za",
    duration1h: "1 godzina",
    duration24h: "24 godziny",
    duration7d: "7 dni",
    duration30d: "30 dni",
    creating: "Tworzenie…",
    create: "Utwórz ankietę →",
    somethingWrong: "Coś poszło nie tak",
    failedCreate: "Nie udało się utworzyć ankiety",
  },
  recent: {
    dbNotConnectedTitle: "Baza danych nie podłączona",
    dbNotConnectedBody:
      "Ustaw DATABASE_URL w swoim środowisku. Po podłączeniu Postgres aplikacja sama utworzy tabele.",
    empty: "Brak ankiet — utwórz pierwszą powyżej.",
    voteSingular: "głos",
    votePlural: "głosów",
    optionsSuffix: "opcji",
  },
  voter: {
    voteSingular: "głos",
    votePlural: "głosów",
    yourVote: "twój głos",
    yourPick: "twój wybór",
    vote: "Głosuj →",
    voting: "Głosowanie…",
    notFound: "Ta ankieta już nie istnieje.",
    ended: "Ta ankieta się zakończyła.",
    badOption: "Ta opcja jest nieprawidłowa.",
    somethingWrong: "Coś poszło nie tak",
  },
  share: { shareLink: "Udostępnij link", qrCode: "Kod QR", hideQr: "Ukryj QR", copyLink: "Kopiuj link", copied: "Skopiowano ✓" },
  time: {
    closed: "zamknięta",
    live: "na żywo",
    endsInS: (n) => `kończy się za ${n}s`,
    endsInM: (n) => `kończy się za ${n}min`,
    endsInH: (n) => `kończy się za ${n}h`,
    endsInD: (n) => `kończy się za ${n}d`,
  },
  notFoundPage: {
    code: "404",
    title: "Tej ankiety tu nie ma.",
    body: "Mogła zostać usunięta lub link jest błędny.",
    cta: "Utwórz nową ankietę →",
  },
  meta: {
    title: "Plebi — szybkie ankiety, dzielone natychmiast",
    description: "Utwórz ankietę w kilka sekund. Udostępnij link. Oglądaj wyniki na żywo.",
  },
};

export const DICTIONARIES: Record<Locale, Dictionary> = {
  en, es, fr, de, it, pt, ja, zh, ko, ar, ru, hi, tr, nl, pl,
};

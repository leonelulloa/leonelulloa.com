export type Lang = "en" | "es";
export type Category =
  | "strategy"
  | "marketing"
  | "content"
  | "automation"
  | "operations";

/* ───── Snapshot field definition ───── */
export interface SnapshotField {
  key: string;
  en: string;
  es: string;
  placeholder: { en: string; es: string };
}

/* ───── Per-prompt locale content ───── */
export interface PromptLocale {
  title: string;
  capability: string; // What AI can do here (30s read)
  example: string; // Micro example output
  prompt: string; // Copy-ready prompt with {{variables}}
  action: string; // "Do this in 15 minutes today"
}

/* ───── Prompt (book-scoped) ───── */
export interface Prompt {
  id: string;
  bookId: string;
  category: Category;
  en: PromptLocale;
  es: PromptLocale;
}

/* ───── Recommended path (day-by-day) ───── */
export interface DayPath {
  day: number;
  promptIds: string[];
}

/* ───── Book definition ───── */
export interface Book {
  id: string;
  en: { title: string; description: string };
  es: { title: string; description: string };
  ebookUrl?: { en: string; es: string };
  snapshotFields: SnapshotField[];
  categories: Category[];
  recommendedPath?: DayPath[];
}

/* ───── Constants ───── */
export const LANGS: Lang[] = ["en", "es"];

export const CATEGORY_LABELS: Record<Lang, Record<Category | "all", string>> = {
  en: {
    all: "All",
    strategy: "Strategy",
    marketing: "Marketing",
    content: "Content",
    automation: "Automation",
    operations: "Operations",
  },
  es: {
    all: "Todos",
    strategy: "Estrategia",
    marketing: "Marketing",
    content: "Contenido",
    automation: "Automatización",
    operations: "Operaciones",
  },
};

/* ═══════════════════════════════════════
   BOOK: AI for Business (Starter)
   ═══════════════════════════════════════ */

export const AI_BUSINESS_BOOK: Book = {
  id: "ai-business-starter",
  en: {
    title: "AI for Business (Starter)",
    description: "24 copy-ready prompts to grow your business with AI.",
  },
  es: {
    title: "IA para Negocios (Inicio)",
    description: "24 prompts listos para copiar y hacer crecer tu negocio con IA.",
  },
  ebookUrl: {
    en: "/ebooks/ai-business-starter/en.pdf",
    es: "/ebooks/ai-business-starter/es.pdf",
  },
  snapshotFields: [
    {
      key: "industry",
      en: "Industry",
      es: "Industria",
      placeholder: { en: "e.g. E-commerce, SaaS, Bakery", es: "ej. E-commerce, SaaS, Panadería" },
    },
    {
      key: "offer",
      en: "Main offer / product",
      es: "Oferta / producto principal",
      placeholder: { en: "e.g. Online courses for freelancers", es: "ej. Cursos online para freelancers" },
    },
    {
      key: "customers",
      en: "Target customers",
      es: "Clientes objetivo",
      placeholder: { en: "e.g. Small business owners, 30-50", es: "ej. Dueños de negocios, 30-50 años" },
    },
    {
      key: "goal",
      en: "Main goal this quarter",
      es: "Objetivo principal este trimestre",
      placeholder: { en: "e.g. Get 50 new clients", es: "ej. Conseguir 50 clientes nuevos" },
    },
    {
      key: "bottleneck",
      en: "Biggest bottleneck",
      es: "Mayor cuello de botella",
      placeholder: { en: "e.g. Not enough leads", es: "ej. No tengo suficientes leads" },
    },
    {
      key: "tools",
      en: "Tools you already use",
      es: "Herramientas que ya usas",
      placeholder: { en: "e.g. Canva, Google Sheets, Instagram", es: "ej. Canva, Google Sheets, Instagram" },
    },
    {
      key: "channels",
      en: "Main sales/marketing channels",
      es: "Canales principales de venta/marketing",
      placeholder: { en: "e.g. Instagram, email, referrals", es: "ej. Instagram, email, referidos" },
    },
  ],
  categories: ["strategy", "marketing", "content", "automation", "operations"],
  recommendedPath: [
    { day: 1, promptIds: ["01", "02", "03"] },
    { day: 2, promptIds: ["04", "05", "06"] },
    { day: 3, promptIds: ["07", "08", "09", "10"] },
    { day: 4, promptIds: ["11", "12", "13"] },
    { day: 5, promptIds: ["14", "15", "16", "17"] },
    { day: 6, promptIds: ["18", "19", "20", "21"] },
    { day: 7, promptIds: ["22", "23", "24"] },
  ],
};

/* ───── AI for Business — 24 Prompts ───── */

export const AI_BUSINESS_PROMPTS: Prompt[] = [
  // ── DAY 1: STRATEGY ──
  {
    id: "01",
    bookId: "ai-business-starter",
    category: "strategy",
    en: {
      title: "Business snapshot analysis",
      capability: "AI can analyze your entire business model in seconds and find blind spots you've been missing. It spots patterns across thousands of businesses like yours.",
      example: `If you run a bakery selling custom cakes:
→ Quick win: "Add a 'cake of the week' Instagram story — 10 min/week, builds habit"
→ Growth lever: "Your repeat customers only come for birthdays — add monthly subscriptions"
→ 7-day plan: Day 1: survey 10 customers. Day 2: price a subscription box...`,
      prompt: `Act as a senior business consultant. Be direct and specific.

Business Snapshot:
- Industry: {{industry}}
- Offer: {{offer}}
- Customers: {{customers}}
- Main goal: {{goal}}
- Biggest bottleneck: {{bottleneck}}

Tasks:
1) Identify 3 quick wins I can implement this week (under 2 hours each).
2) Find my single biggest growth lever and explain why.
3) Give me a 7-day action plan in a table format.

If any info is missing, assume reasonable defaults and note your assumptions. Ask me up to 3 questions only if critical.`,
      action: "Run this prompt, then pick the #1 quick win and do it today.",
    },
    es: {
      title: "Análisis del negocio",
      capability: "La IA puede analizar tu modelo de negocio en segundos y encontrar puntos ciegos. Detecta patrones de miles de negocios como el tuyo.",
      example: `Si tienes una panadería de pasteles personalizados:
→ Victoria rápida: "Agrega 'pastel de la semana' en Instagram stories — 10 min/semana"
→ Palanca de crecimiento: "Tus clientes solo vienen para cumpleaños — agrega suscripciones mensuales"
→ Plan 7 días: Día 1: encuesta a 10 clientes. Día 2: cotiza una caja de suscripción...`,
      prompt: `Actúa como consultor de negocios senior. Sé directo y específico.

Resumen del negocio:
- Industria: {{industry}}
- Oferta: {{offer}}
- Clientes: {{customers}}
- Objetivo principal: {{goal}}
- Mayor cuello de botella: {{bottleneck}}

Tareas:
1) Identifica 3 victorias rápidas que pueda implementar esta semana (menos de 2 horas cada una).
2) Encuentra mi mayor palanca de crecimiento y explica por qué.
3) Dame un plan de acción de 7 días en formato tabla.

Si falta información, asume valores razonables y anota tus suposiciones. Pregúntame máximo 3 cosas solo si son críticas.`,
      action: "Ejecuta el prompt, elige la victoria rápida #1 y hazla hoy.",
    },
  },
  {
    id: "02",
    bookId: "ai-business-starter",
    category: "strategy",
    en: {
      title: "What AI can and can't do for you",
      capability: "AI can map exactly which tasks in YOUR business are automatable vs which need a human. No generic advice — real analysis of your workflow.",
      example: `For a freelance designer:
→ AI CAN: generate first-draft copy, resize images, schedule posts, summarize client briefs
→ AI CAN'T: replace your creative judgment, handle angry clients, guarantee brand consistency
→ Starter plan: Day 1: Use AI for client brief summaries (save 45 min/day)`,
      prompt: `Act as an AI Business Advisor. Be honest about limitations.

Business Snapshot:
- Industry: {{industry}}
- Offer: {{offer}}
- Customers: {{customers}}
- Main goal: {{goal}}
- Biggest bottleneck: {{bottleneck}}
- Tools I use: {{tools}}

Tasks:
1) List 10 specific ways AI can help MY business in the next 30 days. Label each: Easy / Medium / Advanced.
2) List 5 things AI is NOT reliable for in my case + what to do instead.
3) Give me a 7-day starter plan (one new AI use per day).

Format as clean tables. Assume defaults if info is missing.`,
      action: "Pick the top 'Easy' item from the list and try it right now.",
    },
    es: {
      title: "Qué puede y qué no puede hacer la IA por ti",
      capability: "La IA puede mapear exactamente qué tareas de TU negocio son automatizables vs cuáles necesitan humano. Sin consejos genéricos — análisis real de tu flujo.",
      example: `Para un diseñador freelance:
→ IA PUEDE: generar borradores de copy, redimensionar imágenes, programar posts, resumir briefs
→ IA NO PUEDE: reemplazar tu juicio creativo, manejar clientes molestos, garantizar consistencia de marca
→ Plan inicio: Día 1: Usa IA para resúmenes de briefs (ahorra 45 min/día)`,
      prompt: `Actúa como asesor de negocios con IA. Sé honesto sobre las limitaciones.

Resumen del negocio:
- Industria: {{industry}}
- Oferta: {{offer}}
- Clientes: {{customers}}
- Objetivo principal: {{goal}}
- Mayor cuello de botella: {{bottleneck}}
- Herramientas que uso: {{tools}}

Tareas:
1) Lista 10 formas específicas en que la IA puede ayudar a MI negocio en 30 días. Etiqueta: Fácil / Medio / Avanzado.
2) Lista 5 cosas en que la IA NO es fiable para mi caso + qué hacer en su lugar.
3) Dame un plan de inicio de 7 días (un nuevo uso de IA por día).

Formato en tablas limpias. Asume valores si falta información.`,
      action: "Elige el ítem 'Fácil' #1 de la lista y pruébalo ahora mismo.",
    },
  },
  {
    id: "03",
    bookId: "ai-business-starter",
    category: "strategy",
    en: {
      title: "Competitor blind spot finder",
      capability: "AI can analyze your competitive landscape and find gaps nobody is filling. It sees positioning angles you'd miss because you're too close to your own business.",
      example: `For an online fitness coach:
→ Blind spot: "Your competitors all target weight loss. Nobody targets 'energy for busy parents.'"
→ Positioning: "You're the only coach who offers 15-min workouts with meal prep included"
→ Quick action: Rewrite your Instagram bio to say exactly that.`,
      prompt: `Act as a competitive strategist.

Business Snapshot:
- Industry: {{industry}}
- Offer: {{offer}}
- Customers: {{customers}}
- Main goal: {{goal}}

Tasks:
1) Identify 3 competitor blind spots in my industry (things nobody is doing well).
2) For each blind spot, suggest a specific positioning angle I could own.
3) Give me one sentence I can use as my tagline or bio today.
4) List 3 things competitors are doing that I should NOT copy (and why).

Be specific to my industry. No generic business advice.`,
      action: "Update your main social media bio with the tagline from step 3.",
    },
    es: {
      title: "Detector de puntos ciegos competitivos",
      capability: "La IA puede analizar tu panorama competitivo y encontrar huecos que nadie está llenando. Ve ángulos de posicionamiento que tú no ves porque estás muy cerca de tu propio negocio.",
      example: `Para un coach de fitness online:
→ Punto ciego: "Todos tus competidores apuntan a bajar de peso. Nadie apunta a 'energía para padres ocupados.'"
→ Posicionamiento: "Eres el único coach con rutinas de 15 min + meal prep incluido"
→ Acción: Reescribe tu bio de Instagram con eso.`,
      prompt: `Actúa como estratega competitivo.

Resumen del negocio:
- Industria: {{industry}}
- Oferta: {{offer}}
- Clientes: {{customers}}
- Objetivo principal: {{goal}}

Tareas:
1) Identifica 3 puntos ciegos de la competencia en mi industria (cosas que nadie hace bien).
2) Para cada punto ciego, sugiere un ángulo de posicionamiento que yo podría dominar.
3) Dame una frase que pueda usar como tagline o bio hoy mismo.
4) Lista 3 cosas que los competidores hacen que yo NO debería copiar (y por qué).

Sé específico para mi industria. Nada de consejos genéricos.`,
      action: "Actualiza la bio de tu red social principal con el tagline del paso 3.",
    },
  },
  {
    id: "04",
    bookId: "ai-business-starter",
    category: "strategy",
    en: {
      title: "Pricing and offer optimizer",
      capability: "AI can stress-test your pricing, find money you're leaving on the table, and suggest offer structures that increase perceived value without adding cost.",
      example: `For a web design agency charging $2,000/site:
→ Finding: "You're undercharging by 40%. Add a 'launch package' with 30 days of support."
→ New offer: $3,500 'Launch Ready' = design + copy + 30-day support + 1 revision
→ Action: Send new pricing to your next 3 leads this week.`,
      prompt: `Act as a pricing strategist and offer designer.

Business Snapshot:
- Industry: {{industry}}
- Offer: {{offer}}
- Customers: {{customers}}
- Main goal: {{goal}}
- Biggest bottleneck: {{bottleneck}}

Tasks:
1) Analyze my current offer and find 3 ways I'm leaving money on the table.
2) Design 3 pricing tiers (Good / Better / Best) with specific features for each.
3) Suggest 2 value-adds that cost me almost nothing but increase perceived value by 50%+.
4) Give me the exact email or message script to announce new pricing to existing clients.

Use a table for the tiers. Be specific to my industry.`,
      action: "Draft your 3 pricing tiers and show them to one trusted client for feedback.",
    },
    es: {
      title: "Optimizador de precios y oferta",
      capability: "La IA puede analizar tus precios, encontrar dinero que estás dejando en la mesa, y sugerir estructuras que aumenten el valor percibido sin agregar costos.",
      example: `Para una agencia de diseño web que cobra $2,000/sitio:
→ Hallazgo: "Estás cobrando 40% menos. Agrega un 'paquete de lanzamiento' con 30 días de soporte."
→ Nueva oferta: $3,500 'Launch Ready' = diseño + copy + 30 días soporte + 1 revisión
→ Acción: Envía los nuevos precios a tus próximos 3 leads esta semana.`,
      prompt: `Actúa como estratega de precios y diseñador de ofertas.

Resumen del negocio:
- Industria: {{industry}}
- Oferta: {{offer}}
- Clientes: {{customers}}
- Objetivo principal: {{goal}}
- Mayor cuello de botella: {{bottleneck}}

Tareas:
1) Analiza mi oferta actual y encuentra 3 formas en que estoy dejando dinero en la mesa.
2) Diseña 3 niveles de precio (Bueno / Mejor / Premium) con características específicas.
3) Sugiere 2 agregados de valor que no me cuesten casi nada pero aumenten el valor percibido 50%+.
4) Dame el script exacto de email o mensaje para anunciar nuevos precios a clientes actuales.

Usa tabla para los niveles. Sé específico para mi industria.`,
      action: "Arma tus 3 niveles de precio y muéstralos a un cliente de confianza.",
    },
  },

  // ── DAY 2: MARKETING ──
  {
    id: "05",
    bookId: "ai-business-starter",
    category: "marketing",
    en: {
      title: "Customer avatar deep dive",
      capability: "AI can build a detailed customer profile that reveals hidden motivations, objections, and buying triggers — things you'd normally need surveys or interviews to find.",
      example: `For a meal prep delivery service:
→ Avatar: "Maria, 34, works in tech, gym 3x/week, hates cooking but feels guilty about fast food"
→ Hidden trigger: "She buys when she's had a bad eating week — target her Sunday evening"
→ Objection: "She thinks meal prep is bland — show variety in your first 3 posts"`,
      prompt: `Act as a customer research analyst.

Business Snapshot:
- Industry: {{industry}}
- Offer: {{offer}}
- Customers: {{customers}}
- Main goal: {{goal}}

Tasks:
1) Create a detailed customer avatar (name, age, job, daily routine, frustrations, goals, media habits).
2) List their top 5 objections to buying from me and how to overcome each.
3) Identify 3 hidden emotional triggers that drive their purchase decision.
4) Tell me exactly when, where, and how to reach them (specific platforms + times).

Make it vivid and specific. I should feel like I know this person.`,
      action: "Save this avatar and re-read it before creating any content this week.",
    },
    es: {
      title: "Perfil profundo del cliente ideal",
      capability: "La IA puede crear un perfil detallado de cliente que revela motivaciones ocultas, objeciones y triggers de compra — cosas que normalmente necesitarías encuestas para descubrir.",
      example: `Para un servicio de meal prep a domicilio:
→ Avatar: "María, 34, trabaja en tech, gym 3x/semana, odia cocinar pero se siente culpable por comida rápida"
→ Trigger oculto: "Compra cuando tuvo una mala semana alimenticia — apúntale el domingo por la noche"
→ Objeción: "Piensa que el meal prep es aburrido — muestra variedad en tus primeros 3 posts"`,
      prompt: `Actúa como analista de investigación de clientes.

Resumen del negocio:
- Industria: {{industry}}
- Oferta: {{offer}}
- Clientes: {{customers}}
- Objetivo principal: {{goal}}

Tareas:
1) Crea un avatar de cliente detallado (nombre, edad, trabajo, rutina diaria, frustraciones, metas, hábitos de medios).
2) Lista sus 5 objeciones principales para comprarme y cómo superar cada una.
3) Identifica 3 triggers emocionales ocultos que impulsan su decisión de compra.
4) Dime exactamente cuándo, dónde y cómo alcanzarlos (plataformas + horarios específicos).

Hazlo vívido y específico. Debería sentir que conozco a esta persona.`,
      action: "Guarda este avatar y reléelo antes de crear cualquier contenido esta semana.",
    },
  },
  {
    id: "06",
    bookId: "ai-business-starter",
    category: "marketing",
    en: {
      title: "3 hooks that stop the scroll",
      capability: "AI can generate dozens of psychologically-tested hooks in seconds. It knows which patterns trigger curiosity, fear of missing out, and desire.",
      example: `For an accounting service for freelancers:
→ Hook 1: "You're paying $3,000/year in taxes you don't owe." (fear + specificity)
→ Hook 2: "I saved 47 freelancers $127K last quarter. Here's how." (social proof + curiosity)
→ Follow-up: "And no, you don't need to understand tax code."`,
      prompt: `Act as a direct-response copywriter who specializes in social media.

Business Snapshot:
- Industry: {{industry}}
- Offer: {{offer}}
- Customers: {{customers}}

Tasks:
1) Write 5 scroll-stopping hooks (under 15 words each).
2) For each hook, explain the psychological trigger it uses.
3) Write a follow-up line for each (the second sentence after the hook).
4) Tell me which hook to test first and on which platform.

Make them specific to my offer. No generic marketing speak.`,
      action: "Post your #1 hook as a story or tweet today. See how it performs.",
    },
    es: {
      title: "3 hooks que detienen el scroll",
      capability: "La IA puede generar docenas de hooks probados psicológicamente en segundos. Sabe qué patrones activan curiosidad, FOMO y deseo.",
      example: `Para un servicio de contabilidad para freelancers:
→ Hook 1: "Estás pagando $3,000/año en impuestos que no debes." (miedo + especificidad)
→ Hook 2: "Ahorré a 47 freelancers $127K el último trimestre." (prueba social + curiosidad)
→ Seguimiento: "Y no, no necesitas entender el código fiscal."`,
      prompt: `Actúa como copywriter de respuesta directa especializado en redes sociales.

Resumen del negocio:
- Industria: {{industry}}
- Oferta: {{offer}}
- Clientes: {{customers}}

Tareas:
1) Escribe 5 hooks que detengan el scroll (menos de 15 palabras cada uno).
2) Para cada hook, explica el trigger psicológico que usa.
3) Escribe una línea de seguimiento para cada uno (la segunda oración después del hook).
4) Dime cuál hook probar primero y en qué plataforma.

Hazlos específicos a mi oferta. Nada de marketing genérico.`,
      action: "Publica el hook #1 como story o tweet hoy. Observa cómo funciona.",
    },
  },
  {
    id: "07",
    bookId: "ai-business-starter",
    category: "marketing",
    en: {
      title: "Lead magnet idea generator",
      capability: "AI can identify the #1 thing your audience wants to learn/get/fix and turn it into a lead magnet that practically sells itself.",
      example: `For a real estate agent:
→ Lead magnet: "The 5-Minute Home Value Calculator" (interactive PDF)
→ Why it works: "Every homeowner is curious about their home's value — zero friction"
→ Distribution: "Facebook ad targeting homeowners in your zip code + Instagram story link"`,
      prompt: `Act as a lead generation strategist.

Business Snapshot:
- Industry: {{industry}}
- Offer: {{offer}}
- Customers: {{customers}}
- Main goal: {{goal}}

Tasks:
1) Suggest 5 lead magnet ideas ranked by effort vs impact.
2) For the top pick: outline the content (sections, length, format).
3) Write the landing page headline + 3 bullet points.
4) Suggest the best distribution channel and a $0-budget launch plan.

Keep it actionable. I should be able to create the lead magnet in one afternoon.`,
      action: "Pick the top lead magnet and outline it in 15 minutes.",
    },
    es: {
      title: "Generador de ideas para lead magnet",
      capability: "La IA puede identificar lo #1 que tu audiencia quiere aprender/conseguir/resolver y convertirlo en un lead magnet que prácticamente se vende solo.",
      example: `Para un agente inmobiliario:
→ Lead magnet: "Calculadora de Valor de tu Casa en 5 Minutos" (PDF interactivo)
→ Por qué funciona: "Todo dueño tiene curiosidad por el valor de su casa — fricción cero"
→ Distribución: "Anuncio en Facebook segmentado por zona + link en story de Instagram"`,
      prompt: `Actúa como estratega de generación de leads.

Resumen del negocio:
- Industria: {{industry}}
- Oferta: {{offer}}
- Clientes: {{customers}}
- Objetivo principal: {{goal}}

Tareas:
1) Sugiere 5 ideas de lead magnet rankeadas por esfuerzo vs impacto.
2) Para la mejor: esquematiza el contenido (secciones, extensión, formato).
3) Escribe el titular de la landing page + 3 bullets.
4) Sugiere el mejor canal de distribución y un plan de lanzamiento con $0.

Hazlo accionable. Debería poder crear el lead magnet en una tarde.`,
      action: "Elige el mejor lead magnet y esbózalo en 15 minutos.",
    },
  },
  {
    id: "08",
    bookId: "ai-business-starter",
    category: "marketing",
    en: {
      title: "Email sequence that sells",
      capability: "AI can write a complete welcome/nurture email sequence that builds trust and drives sales — using proven frameworks like AIDA, PAS, and storytelling.",
      example: `For a productivity app:
→ Email 1 (Welcome): "You just saved yourself 2 hours/week. Here's how to get started."
→ Email 3 (Story): "I used to work 60-hour weeks. Then I automated my Monday..."
→ Email 5 (Offer): "Upgrade to Pro — here's what 300 users said this week."`,
      prompt: `Act as an email marketing strategist.

Business Snapshot:
- Industry: {{industry}}
- Offer: {{offer}}
- Customers: {{customers}}
- Main goal: {{goal}}

Tasks:
1) Design a 5-email welcome sequence. For each email give me: subject line, purpose, key message, CTA.
2) Write Email #1 in full (under 200 words, conversational tone).
3) Suggest the best sending schedule (days + times).
4) Give me 3 subject line variations for Email #1 to A/B test.

Keep emails short, mobile-friendly, and scannable.`,
      action: "Set up Email #1 in your email tool today.",
    },
    es: {
      title: "Secuencia de emails que vende",
      capability: "La IA puede escribir una secuencia completa de bienvenida que construye confianza y genera ventas — usando frameworks probados como AIDA, PAS y storytelling.",
      example: `Para una app de productividad:
→ Email 1 (Bienvenida): "Acabas de ahorrarte 2 horas/semana. Así empezas."
→ Email 3 (Historia): "Yo trabajaba 60 horas/semana. Luego automaticé mis lunes..."
→ Email 5 (Oferta): "Upgrade a Pro — esto dijeron 300 usuarios esta semana."`,
      prompt: `Actúa como estratega de email marketing.

Resumen del negocio:
- Industria: {{industry}}
- Oferta: {{offer}}
- Clientes: {{customers}}
- Objetivo principal: {{goal}}

Tareas:
1) Diseña una secuencia de 5 emails de bienvenida. Para cada uno dame: asunto, propósito, mensaje clave, CTA.
2) Escribe el Email #1 completo (menos de 200 palabras, tono conversacional).
3) Sugiere el mejor calendario de envío (días + horarios).
4) Dame 3 variaciones de asunto para Email #1 para test A/B.

Emails cortos, mobile-friendly y escaneables.`,
      action: "Configura el Email #1 en tu herramienta de email hoy.",
    },
  },

  // ── DAY 3: CONTENT ──
  {
    id: "09",
    bookId: "ai-business-starter",
    category: "content",
    en: {
      title: "7-day content calendar",
      capability: "AI can plan a full week of content in minutes — with topics, hooks, formats, and posting times tailored to your niche and platform.",
      example: `For a personal finance coach on Instagram:
→ Monday: Carousel "5 money mistakes I made at 25" (hook: education)
→ Wednesday: Reel "How I saved $10K in 6 months" (hook: proof)
→ Friday: Story poll "What's your biggest money fear?" (hook: engagement)`,
      prompt: `Act as a content strategist.

Business Snapshot:
- Industry: {{industry}}
- Offer: {{offer}}
- Customers: {{customers}}
- Tools I use: {{tools}}

Tasks:
1) Create a 7-day content calendar in table format.
2) For each day: content type, topic, hook (under 10 words), CTA, best posting time.
3) Include a mix of: educational, entertaining, personal story, and promotional.
4) Maximum 4 posts per week (quality over quantity).

Optimize for my industry. Assume I'm a one-person team with 30 min/day for content.`,
      action: "Create tomorrow's post using the first slot from the calendar.",
    },
    es: {
      title: "Calendario de contenido 7 días",
      capability: "La IA puede planificar una semana completa de contenido en minutos — con temas, hooks, formatos y horarios adaptados a tu nicho y plataforma.",
      example: `Para un coach de finanzas personales en Instagram:
→ Lunes: Carrusel "5 errores de dinero que cometí a los 25" (hook: educación)
→ Miércoles: Reel "Cómo ahorré $10K en 6 meses" (hook: prueba)
→ Viernes: Encuesta en story "¿Cuál es tu mayor miedo financiero?" (hook: engagement)`,
      prompt: `Actúa como estratega de contenido.

Resumen del negocio:
- Industria: {{industry}}
- Oferta: {{offer}}
- Clientes: {{customers}}
- Herramientas que uso: {{tools}}

Tareas:
1) Crea un calendario de contenido de 7 días en formato tabla.
2) Para cada día: tipo de contenido, tema, hook (menos de 10 palabras), CTA, mejor hora.
3) Incluye mezcla de: educativo, entretenido, historia personal y promocional.
4) Máximo 4 posts por semana (calidad sobre cantidad).

Optimiza para mi industria. Asume que soy una persona con 30 min/día para contenido.`,
      action: "Crea el post de mañana usando el primer slot del calendario.",
    },
  },
  {
    id: "10",
    bookId: "ai-business-starter",
    category: "content",
    en: {
      title: "Turn one idea into 10 pieces of content",
      capability: "AI can take a single insight and repurpose it across formats and platforms — so you create once and distribute everywhere.",
      example: `Starting idea: "3 signs your business needs a CRM"
→ Carousel: "3 signs you're losing clients (and don't know it)"
→ Reel: 30-sec talking head + text overlay
→ Thread: Expanded version with examples
→ Email: "Are you tracking your leads? Here's a quick test."`,
      prompt: `Act as a content repurposing expert.

Business Snapshot:
- Industry: {{industry}}
- Offer: {{offer}}
- Customers: {{customers}}

Starting idea: "One key insight about {{offer}} that my customers need to know"

Tasks:
1) Take that idea and create 10 content pieces across different formats.
2) For each: format, platform, hook, estimated creation time.
3) Rank them by impact vs effort.
4) Give me a 5-day publishing schedule.

Assume I have 30 minutes per piece. Prioritize short-form and visual content.`,
      action: "Create the highest-impact piece from the list today.",
    },
    es: {
      title: "Convierte 1 idea en 10 piezas de contenido",
      capability: "La IA puede tomar un solo insight y reutilizarlo en múltiples formatos y plataformas — para que crees una vez y distribuyas en todos lados.",
      example: `Idea inicial: "3 señales de que tu negocio necesita un CRM"
→ Carrusel: "3 señales de que estás perdiendo clientes (y no lo sabes)"
→ Reel: 30 seg talking head + texto
→ Hilo: Versión expandida con ejemplos
→ Email: "¿Estás rastreando tus leads? Un test rápido."`,
      prompt: `Actúa como experto en reutilización de contenido.

Resumen del negocio:
- Industria: {{industry}}
- Oferta: {{offer}}
- Clientes: {{customers}}

Idea inicial: "Un insight clave sobre {{offer}} que mis clientes necesitan saber"

Tareas:
1) Toma esa idea y crea 10 piezas de contenido en diferentes formatos.
2) Para cada una: formato, plataforma, hook, tiempo estimado de creación.
3) Rankéalas por impacto vs esfuerzo.
4) Dame un calendario de publicación de 5 días.

Asume que tengo 30 minutos por pieza. Prioriza contenido corto y visual.`,
      action: "Crea la pieza de mayor impacto de la lista hoy.",
    },
  },
  {
    id: "11",
    bookId: "ai-business-starter",
    category: "content",
    en: {
      title: "Write a carousel post in 5 minutes",
      capability: "AI can structure a complete carousel with hooks, slides, and CTA — following the exact format that gets saves and shares.",
      example: `For a business coach:
→ Slide 1 (Hook): "I went from $0 to $10K/month. Here are 5 ugly truths nobody told me."
→ Slides 2-6: One truth per slide with a one-liner
→ Slide 7 (CTA): "Save this. Follow for more. DM 'START' for my free guide."`,
      prompt: `Act as a social media content creator.

Business Snapshot:
- Industry: {{industry}}
- Offer: {{offer}}
- Customers: {{customers}}

Tasks:
1) Write a 7-slide carousel about a key topic in my industry.
2) Slide 1: Hook that creates curiosity (under 15 words).
3) Slides 2-6: One clear point per slide (1-2 sentences max).
4) Slide 7: CTA (save, follow, DM, or link).
5) Write the caption (under 100 words) with 5 relevant hashtags.

Keep each slide scannable on a phone screen. Bold the key phrase.`,
      action: "Design this carousel in Canva and post it within 24 hours.",
    },
    es: {
      title: "Escribe un carrusel en 5 minutos",
      capability: "La IA puede estructurar un carrusel completo con hooks, slides y CTA — siguiendo el formato exacto que genera guardados y compartidos.",
      example: `Para un coach de negocios:
→ Slide 1 (Hook): "Pasé de $0 a $10K/mes. 5 verdades feas que nadie me dijo."
→ Slides 2-6: Una verdad por slide con una frase
→ Slide 7 (CTA): "Guarda esto. Sígueme. Escríbeme 'INICIO' para mi guía gratis."`,
      prompt: `Actúa como creador de contenido para redes sociales.

Resumen del negocio:
- Industria: {{industry}}
- Oferta: {{offer}}
- Clientes: {{customers}}

Tareas:
1) Escribe un carrusel de 7 slides sobre un tema clave de mi industria.
2) Slide 1: Hook que crea curiosidad (menos de 15 palabras).
3) Slides 2-6: Un punto claro por slide (1-2 oraciones máx).
4) Slide 7: CTA (guardar, seguir, DM, o link).
5) Escribe la descripción (menos de 100 palabras) con 5 hashtags relevantes.

Cada slide escaneable en celular. Resalta la frase clave en negritas.`,
      action: "Diseña este carrusel en Canva y publícalo en las próximas 24 horas.",
    },
  },

  // ── DAY 4: AUTOMATION ──
  {
    id: "12",
    bookId: "ai-business-starter",
    category: "automation",
    en: {
      title: "Automate your most repetitive task",
      capability: "AI can identify your biggest time-wasters and suggest simple automations. Most save 3-5 hours/week with zero coding.",
      example: `For a consultant who sends proposals:
→ Current: 2 hours writing each proposal from scratch
→ Automation: Template + AI fill → review → send in 20 min
→ Time saved: 6+ hours/week`,
      prompt: `Act as an automation consultant. No-code solutions preferred.

Business Snapshot:
- Industry: {{industry}}
- Offer: {{offer}}
- Biggest bottleneck: {{bottleneck}}
- Tools I use: {{tools}}

Tasks:
1) List my top 5 most time-consuming repetitive tasks (based on my industry).
2) For each: current time spent, automation approach, tools needed, estimated time saved.
3) Pick the #1 easiest automation and give me a step-by-step setup guide (under 10 steps).
4) Estimate my total time saved per week if I automate the top 3.

Keep it simple. Assume I have no technical background.`,
      action: "Set up automation #1 today. It should take under 30 minutes.",
    },
    es: {
      title: "Automatiza tu tarea más repetitiva",
      capability: "La IA puede identificar tus mayores ladrones de tiempo y sugerir automatizaciones simples. La mayoría ahorra 3-5 horas/semana sin código.",
      example: `Para un consultor que envía propuestas:
→ Actual: 2 horas escribiendo cada propuesta desde cero
→ Automatización: Template + IA rellena → revisión → envío en 20 min
→ Tiempo ahorrado: 6+ horas/semana`,
      prompt: `Actúa como consultor de automatización. Soluciones no-code preferidas.

Resumen del negocio:
- Industria: {{industry}}
- Oferta: {{offer}}
- Mayor cuello de botella: {{bottleneck}}
- Herramientas que uso: {{tools}}

Tareas:
1) Lista mis 5 tareas repetitivas más consumidoras de tiempo (basado en mi industria).
2) Para cada una: tiempo actual, enfoque de automatización, herramientas necesarias, tiempo estimado ahorrado.
3) Elige la automatización #1 más fácil y dame guía paso a paso (menos de 10 pasos).
4) Estima mi tiempo total ahorrado por semana si automatizo las top 3.

Mantenlo simple. Asume que no tengo experiencia técnica.`,
      action: "Configura la automatización #1 hoy. Debería tomar menos de 30 minutos.",
    },
  },
  {
    id: "13",
    bookId: "ai-business-starter",
    category: "automation",
    en: {
      title: "Client onboarding system",
      capability: "AI can design a complete client onboarding flow that makes you look professional and saves hours of back-and-forth emails.",
      example: `For a freelance photographer:
→ Step 1: Auto-send welcome email with questionnaire (Typeform)
→ Step 2: Auto-create project folder (Google Drive)
→ Step 3: Auto-schedule intro call (Calendly)
→ Result: Client feels premium. You save 45 min per new client.`,
      prompt: `Act as a systems designer for small businesses.

Business Snapshot:
- Industry: {{industry}}
- Offer: {{offer}}
- Customers: {{customers}}
- Tools I use: {{tools}}

Tasks:
1) Design a 5-step client onboarding system for my business.
2) For each step: what happens, who does it (me vs automation), tools needed, time.
3) Write the welcome email template (under 150 words).
4) Create a client questionnaire (5-8 questions) to gather what I need upfront.

Keep it simple enough to set up in one afternoon.`,
      action: "Write your welcome email and save it as a template.",
    },
    es: {
      title: "Sistema de onboarding de clientes",
      capability: "La IA puede diseñar un flujo de onboarding completo que te hace ver profesional y ahorra horas de emails de ida y vuelta.",
      example: `Para un fotógrafo freelance:
→ Paso 1: Auto-enviar email de bienvenida con cuestionario (Typeform)
→ Paso 2: Auto-crear carpeta del proyecto (Google Drive)
→ Paso 3: Auto-agendar llamada intro (Calendly)
→ Resultado: El cliente se siente premium. Tú ahorras 45 min por cliente nuevo.`,
      prompt: `Actúa como diseñador de sistemas para negocios pequeños.

Resumen del negocio:
- Industria: {{industry}}
- Oferta: {{offer}}
- Clientes: {{customers}}
- Herramientas que uso: {{tools}}

Tareas:
1) Diseña un sistema de onboarding de 5 pasos para mi negocio.
2) Para cada paso: qué pasa, quién lo hace (yo vs automatización), herramientas, tiempo.
3) Escribe el template del email de bienvenida (menos de 150 palabras).
4) Crea un cuestionario de cliente (5-8 preguntas) para recopilar lo que necesito al inicio.

Que sea lo suficientemente simple para configurar en una tarde.`,
      action: "Escribe tu email de bienvenida y guárdalo como template.",
    },
  },
  {
    id: "14",
    bookId: "ai-business-starter",
    category: "automation",
    en: {
      title: "AI email responder templates",
      capability: "AI can write professional email templates for every common situation — saving you from staring at blank screens and thinking 'how do I say this?'",
      example: `Templates generated:
→ "Thanks for your inquiry" (auto-reply, 3 sentences)
→ "Here's my proposal" (structured, with next steps)
→ "Following up" (friendly nudge, not pushy)
→ "Price increase notice" (value-first framing)`,
      prompt: `Act as a business communication expert.

Business Snapshot:
- Industry: {{industry}}
- Offer: {{offer}}
- Customers: {{customers}}

Tasks:
1) Write 8 email templates I'll use constantly:
   - Inquiry response
   - Proposal/quote
   - Follow-up (after no response)
   - Thank you (after purchase)
   - Testimonial request
   - Referral request
   - Price objection handler
   - Project completion/handoff
2) Each template: under 100 words, conversational but professional.
3) Include subject lines for each.

Tone: friendly, confident, not corporate. Specific to my industry.`,
      action: "Save all 8 templates in your email tool's quick replies.",
    },
    es: {
      title: "Templates de email con IA",
      capability: "La IA puede escribir templates profesionales para cada situación común — para que no te quedes mirando la pantalla en blanco pensando 'cómo digo esto?'",
      example: `Templates generados:
→ "Gracias por tu consulta" (auto-respuesta, 3 oraciones)
→ "Aquí va mi propuesta" (estructurada, con próximos pasos)
→ "Seguimiento" (recordatorio amable, no insistente)
→ "Aviso de aumento de precio" (enfoque en valor primero)`,
      prompt: `Actúa como experto en comunicación empresarial.

Resumen del negocio:
- Industria: {{industry}}
- Oferta: {{offer}}
- Clientes: {{customers}}

Tareas:
1) Escribe 8 templates de email que usaré constantemente:
   - Respuesta a consulta
   - Propuesta/cotización
   - Seguimiento (sin respuesta)
   - Agradecimiento (después de compra)
   - Solicitud de testimonio
   - Solicitud de referido
   - Manejo de objeción de precio
   - Entrega/cierre de proyecto
2) Cada template: menos de 100 palabras, conversacional pero profesional.
3) Incluye asuntos para cada uno.

Tono: amigable, seguro, no corporativo. Específico a mi industria.`,
      action: "Guarda los 8 templates en las respuestas rápidas de tu email.",
    },
  },

  // ── DAY 5: OPS ──
  {
    id: "15",
    bookId: "ai-business-starter",
    category: "operations",
    en: {
      title: "Weekly CEO dashboard",
      capability: "AI can design a simple dashboard showing only the numbers that matter for YOUR business — so you make decisions based on data, not guesses.",
      example: `For an online course creator:
→ Track: New leads/week, conversion rate, revenue, refund rate, email open rate
→ Format: Simple Google Sheet with 5 columns, updated every Monday
→ Insight: "If leads drop below 20/week, increase content output"`,
      prompt: `Act as a business operations advisor.

Business Snapshot:
- Industry: {{industry}}
- Offer: {{offer}}
- Main goal: {{goal}}
- Biggest bottleneck: {{bottleneck}}
- Tools I use: {{tools}}

Tasks:
1) Identify the 5-7 key metrics I should track weekly (specific to my business).
2) For each metric: what it means, target range, and what to do if it's off.
3) Design a simple tracking template (Google Sheets format).
4) Create a "Monday review" checklist (5 min, 5 questions I ask myself weekly).

Keep it minimal. If I can't track it in 5 minutes, it's too complex.`,
      action: "Create the Google Sheet and fill in this week's numbers.",
    },
    es: {
      title: "Dashboard semanal de CEO",
      capability: "La IA puede diseñar un dashboard simple mostrando solo los números que importan para TU negocio — para que tomes decisiones con datos, no adivinanzas.",
      example: `Para un creador de cursos online:
→ Rastrear: Nuevos leads/semana, tasa de conversión, ingresos, tasa de reembolso, tasa de apertura
→ Formato: Google Sheet simple con 5 columnas, actualizado cada lunes
→ Insight: "Si los leads bajan de 20/semana, aumenta la producción de contenido"`,
      prompt: `Actúa como asesor de operaciones empresariales.

Resumen del negocio:
- Industria: {{industry}}
- Oferta: {{offer}}
- Objetivo principal: {{goal}}
- Mayor cuello de botella: {{bottleneck}}
- Herramientas que uso: {{tools}}

Tareas:
1) Identifica las 5-7 métricas clave que debo rastrear semanalmente (específicas a mi negocio).
2) Para cada métrica: qué significa, rango objetivo, y qué hacer si está fuera de rango.
3) Diseña un template simple de rastreo (formato Google Sheets).
4) Crea un checklist de "revisión del lunes" (5 min, 5 preguntas que me hago cada semana).

Mantenlo mínimo. Si no puedo rastrearlo en 5 minutos, es demasiado complejo.`,
      action: "Crea el Google Sheet y llena los números de esta semana.",
    },
  },
  {
    id: "16",
    bookId: "ai-business-starter",
    category: "operations",
    en: {
      title: "SOPs for your top 3 processes",
      capability: "AI can document your processes into clear step-by-step guides — so you can delegate, hire, or simply never forget how you do things.",
      example: `For a social media manager:
→ SOP 1: "How to onboard a new client" (12 steps, with templates)
→ SOP 2: "How to create and schedule a week of content" (8 steps)
→ SOP 3: "How to write a monthly report" (6 steps, with metrics)`,
      prompt: `Act as an operations consultant.

Business Snapshot:
- Industry: {{industry}}
- Offer: {{offer}}
- Biggest bottleneck: {{bottleneck}}
- Tools I use: {{tools}}

Tasks:
1) Identify my top 3 processes that need SOPs (based on my industry and bottleneck).
2) Write a complete SOP for each (numbered steps, tool used at each step, time estimate).
3) For each SOP, highlight which steps could be delegated or automated.
4) Suggest a simple format to store these SOPs (Notion, Google Docs, etc.).

Each SOP should be clear enough that someone with zero context could follow it.`,
      action: "Write SOP #1 and test it by following it step by step yourself.",
    },
    es: {
      title: "SOPs para tus 3 procesos principales",
      capability: "La IA puede documentar tus procesos en guías claras paso a paso — para que puedas delegar, contratar, o simplemente nunca olvidar cómo haces las cosas.",
      example: `Para un social media manager:
→ SOP 1: "Cómo incorporar un nuevo cliente" (12 pasos, con templates)
→ SOP 2: "Cómo crear y programar una semana de contenido" (8 pasos)
→ SOP 3: "Cómo escribir un reporte mensual" (6 pasos, con métricas)`,
      prompt: `Actúa como consultor de operaciones.

Resumen del negocio:
- Industria: {{industry}}
- Oferta: {{offer}}
- Mayor cuello de botella: {{bottleneck}}
- Herramientas que uso: {{tools}}

Tareas:
1) Identifica mis 3 procesos principales que necesitan SOPs (basado en mi industria y cuello de botella).
2) Escribe un SOP completo para cada uno (pasos numerados, herramienta en cada paso, tiempo estimado).
3) Para cada SOP, resalta qué pasos se pueden delegar o automatizar.
4) Sugiere un formato simple para guardar estos SOPs (Notion, Google Docs, etc.).

Cada SOP debe ser lo suficientemente claro para que alguien sin contexto lo siga.`,
      action: "Escribe el SOP #1 y pruébalo siguiéndolo paso a paso tú mismo.",
    },
  },

  // ── DAY 6: GROWTH ──
  {
    id: "17",
    bookId: "ai-business-starter",
    category: "strategy",
    en: {
      title: "Revenue calculator and growth model",
      capability: "AI can build a simple financial model that shows exactly how many leads, conversions, and sales you need to hit your revenue goal.",
      example: `For a coach charging $500/session:
→ Goal: $10K/month → Need 20 sessions → Need 40 leads (50% conversion)
→ Lever: "Increase price to $750 + add a $2K package → only need 8 clients"
→ Action: "Launch the package this week. Here's the pitch."`,
      prompt: `Act as a growth strategist with a finance background.

Business Snapshot:
- Industry: {{industry}}
- Offer: {{offer}}
- Customers: {{customers}}
- Main goal: {{goal}}
- Biggest bottleneck: {{bottleneck}}

Tasks:
1) Build a simple revenue model: price × volume = revenue. Show the math.
2) Identify 3 levers to increase revenue (price, volume, frequency, upsells).
3) Model "what if" scenarios: What if I increase price 20%? What if I add an upsell?
4) Give me the exact number of leads I need per week to hit my goal.

Use a table. Keep the math simple enough to track in a spreadsheet.`,
      action: "Calculate your actual numbers and identify which lever to pull first.",
    },
    es: {
      title: "Calculadora de ingresos y modelo de crecimiento",
      capability: "La IA puede construir un modelo financiero simple que muestra exactamente cuántos leads, conversiones y ventas necesitas para alcanzar tu meta de ingresos.",
      example: `Para un coach que cobra $500/sesión:
→ Meta: $10K/mes → Necesita 20 sesiones → Necesita 40 leads (50% conversión)
→ Palanca: "Sube el precio a $750 + agrega paquete de $2K → solo necesitas 8 clientes"
→ Acción: "Lanza el paquete esta semana. Aquí está el pitch."`,
      prompt: `Actúa como estratega de crecimiento con experiencia financiera.

Resumen del negocio:
- Industria: {{industry}}
- Oferta: {{offer}}
- Clientes: {{customers}}
- Objetivo principal: {{goal}}
- Mayor cuello de botella: {{bottleneck}}

Tareas:
1) Construye un modelo simple de ingresos: precio × volumen = ingreso. Muestra las cuentas.
2) Identifica 3 palancas para aumentar ingresos (precio, volumen, frecuencia, upsells).
3) Modela escenarios "qué pasaría si": ¿Si subo precio 20%? ¿Si agrego un upsell?
4) Dame el número exacto de leads que necesito por semana para alcanzar mi meta.

Usa tabla. Mantén las cuentas simples para rastrear en una hoja de cálculo.`,
      action: "Calcula tus números reales e identifica cuál palanca mover primero.",
    },
  },
  {
    id: "18",
    bookId: "ai-business-starter",
    category: "marketing",
    en: {
      title: "Testimonial and social proof system",
      capability: "AI can create a complete system for collecting, formatting, and using testimonials — so your satisfied clients do your selling for you.",
      example: `For a cleaning service:
→ Request message: "Hey [Name], would you mind sharing a quick sentence about your experience? Just reply to this text!"
→ Format: Before/after photo + quote + star rating
→ Placement: Google Business, Instagram highlights, website hero section`,
      prompt: `Act as a social proof strategist.

Business Snapshot:
- Industry: {{industry}}
- Offer: {{offer}}
- Customers: {{customers}}

Tasks:
1) Write 3 testimonial request templates (email, text, in-person script).
2) Create a system for collecting and organizing testimonials (tool + process).
3) Suggest 5 places to display testimonials for maximum impact.
4) Write 3 "case study" outlines based on common customer outcomes in my industry.

Keep the request messages short and easy to reply to. Remove all friction.`,
      action: "Send a testimonial request to your 3 most recent happy clients today.",
    },
    es: {
      title: "Sistema de testimonios y prueba social",
      capability: "La IA puede crear un sistema completo para recopilar, formatear y usar testimonios — para que tus clientes satisfechos vendan por ti.",
      example: `Para un servicio de limpieza:
→ Mensaje de solicitud: "Hola [Nombre], ¿podrías compartir una frase rápida sobre tu experiencia? Solo responde a este mensaje!"
→ Formato: Foto antes/después + cita + estrellas
→ Ubicación: Google Business, highlights de Instagram, sección hero del sitio`,
      prompt: `Actúa como estratega de prueba social.

Resumen del negocio:
- Industria: {{industry}}
- Oferta: {{offer}}
- Clientes: {{customers}}

Tareas:
1) Escribe 3 templates de solicitud de testimonio (email, mensaje, script en persona).
2) Crea un sistema para recopilar y organizar testimonios (herramienta + proceso).
3) Sugiere 5 lugares para mostrar testimonios con máximo impacto.
4) Escribe 3 esquemas de "caso de estudio" basados en resultados comunes de mi industria.

Mensajes de solicitud cortos y fáciles de responder. Elimina toda fricción.`,
      action: "Envía una solicitud de testimonio a tus 3 clientes más recientes hoy.",
    },
  },
  {
    id: "19",
    bookId: "ai-business-starter",
    category: "strategy",
    en: {
      title: "Partnership and collaboration finder",
      capability: "AI can identify strategic partners who serve the same audience but aren't competitors — unlocking free growth through collaboration.",
      example: `For a wedding photographer:
→ Partners: Wedding planners, florists, venues, DJs, caterers
→ Collab idea: "Joint Instagram Live: 'How to plan your dream wedding in 30 days'"
→ Action: DM 3 local vendors with a specific collaboration pitch`,
      prompt: `Act as a business development strategist.

Business Snapshot:
- Industry: {{industry}}
- Offer: {{offer}}
- Customers: {{customers}}
- Main goal: {{goal}}

Tasks:
1) List 10 types of businesses that serve my customers but aren't competitors.
2) For the top 5, suggest a specific collaboration idea (joint content, referral deal, bundle).
3) Write a DM/email template to propose the collaboration.
4) Create a simple tracking sheet for partnership outreach.

Focus on collaborations that require $0 investment and can start this week.`,
      action: "Send the collaboration pitch to 3 potential partners today.",
    },
    es: {
      title: "Buscador de alianzas y colaboraciones",
      capability: "La IA puede identificar socios estratégicos que sirven a la misma audiencia pero no son competidores — desbloqueando crecimiento gratis a través de colaboración.",
      example: `Para un fotógrafo de bodas:
→ Socios: Wedding planners, floristas, venues, DJs, catering
→ Idea de collab: "Instagram Live conjunto: 'Cómo planear tu boda soñada en 30 días'"
→ Acción: DM a 3 proveedores locales con un pitch específico de colaboración`,
      prompt: `Actúa como estratega de desarrollo de negocios.

Resumen del negocio:
- Industria: {{industry}}
- Oferta: {{offer}}
- Clientes: {{customers}}
- Objetivo principal: {{goal}}

Tareas:
1) Lista 10 tipos de negocios que sirven a mis clientes pero no son competidores.
2) Para los top 5, sugiere una idea de colaboración específica (contenido conjunto, referidos, bundle).
3) Escribe un template de DM/email para proponer la colaboración.
4) Crea una hoja simple de seguimiento para el outreach de alianzas.

Enfócate en colaboraciones que requieran $0 de inversión y puedan empezar esta semana.`,
      action: "Envía el pitch de colaboración a 3 potenciales socios hoy.",
    },
  },

  // ── DAY 7: PUTTING IT ALL TOGETHER ──
  {
    id: "20",
    bookId: "ai-business-starter",
    category: "operations",
    en: {
      title: "Your 90-day AI business plan",
      capability: "AI can synthesize everything you've built this week into a concrete 90-day plan — with monthly milestones and weekly actions.",
      example: `Month 1: Foundation — set up automations, publish 12 posts, collect 5 testimonials
Month 2: Growth — launch lead magnet, start email sequence, 2 partnership collabs
Month 3: Scale — optimize pricing, automate onboarding, double content output`,
      prompt: `Act as my fractional COO. Help me build a 90-day plan.

Business Snapshot:
- Industry: {{industry}}
- Offer: {{offer}}
- Customers: {{customers}}
- Main goal: {{goal}}
- Biggest bottleneck: {{bottleneck}}
- Tools I use: {{tools}}

Tasks:
1) Create a 90-day plan broken into 3 monthly phases.
2) Each month: theme, 3 key objectives, 4 weekly actions.
3) Identify the single most important metric to track each month.
4) Include a "if I can only do ONE thing this week" priority for each week.
5) End with: "What success looks like in 90 days" — paint the picture.

Format as a clean table. Be specific to my business, not generic.`,
      action: "Print this plan and pin it where you can see it every morning.",
    },
    es: {
      title: "Tu plan de negocios con IA — 90 días",
      capability: "La IA puede sintetizar todo lo que construiste esta semana en un plan concreto de 90 días — con hitos mensuales y acciones semanales.",
      example: `Mes 1: Fundación — configurar automatizaciones, publicar 12 posts, recopilar 5 testimonios
Mes 2: Crecimiento — lanzar lead magnet, iniciar secuencia de emails, 2 collabs
Mes 3: Escalar — optimizar precios, automatizar onboarding, duplicar contenido`,
      prompt: `Actúa como mi COO fraccionario. Ayúdame a construir un plan de 90 días.

Resumen del negocio:
- Industria: {{industry}}
- Oferta: {{offer}}
- Clientes: {{customers}}
- Objetivo principal: {{goal}}
- Mayor cuello de botella: {{bottleneck}}
- Herramientas que uso: {{tools}}

Tareas:
1) Crea un plan de 90 días dividido en 3 fases mensuales.
2) Cada mes: tema, 3 objetivos clave, 4 acciones semanales.
3) Identifica la métrica más importante a rastrear cada mes.
4) Incluye una prioridad "si solo puedo hacer UNA cosa esta semana" para cada semana.
5) Termina con: "Cómo se ve el éxito en 90 días" — pinta la imagen.

Formato de tabla limpia. Sé específico a mi negocio, no genérico.`,
      action: "Imprime este plan y pégalo donde lo veas cada mañana.",
    },
  },
  {
    id: "21",
    bookId: "ai-business-starter",
    category: "content",
    en: {
      title: "Video script for a 60-second reel",
      capability: "AI can write scroll-stopping video scripts that follow the exact hook → story → CTA structure that performs on Reels and TikTok.",
      example: `For a tax consultant:
→ Hook (0-3s): "You're paying taxes you don't owe. Here's proof."
→ Body (3-50s): 3 quick examples with numbers
→ CTA (50-60s): "Follow for more tax tips. Link in bio for a free audit."`,
      prompt: `Act as a short-form video scriptwriter.

Business Snapshot:
- Industry: {{industry}}
- Offer: {{offer}}
- Customers: {{customers}}

Tasks:
1) Write 3 video scripts (60 seconds each) for Reels/TikTok.
2) Each script: Hook (0-3 sec), Body (3-50 sec), CTA (50-60 sec).
3) Include on-screen text suggestions for each section.
4) Suggest background music mood and visual style.
5) Tell me which script to film first and why.

Scripts should sound natural, not scripted. Write as spoken word.`,
      action: "Film script #1 today. It only takes 60 seconds.",
    },
    es: {
      title: "Guión de video para reel de 60 segundos",
      capability: "La IA puede escribir guiones de video que detienen el scroll siguiendo la estructura exacta hook → historia → CTA que funciona en Reels y TikTok.",
      example: `Para un consultor fiscal:
→ Hook (0-3s): "Estás pagando impuestos que no debes. Aquí la prueba."
→ Cuerpo (3-50s): 3 ejemplos rápidos con números
→ CTA (50-60s): "Sígueme para más tips fiscales. Link en bio para auditoría gratis."`,
      prompt: `Actúa como guionista de video corto.

Resumen del negocio:
- Industria: {{industry}}
- Oferta: {{offer}}
- Clientes: {{customers}}

Tareas:
1) Escribe 3 guiones de video (60 segundos cada uno) para Reels/TikTok.
2) Cada guión: Hook (0-3 seg), Cuerpo (3-50 seg), CTA (50-60 seg).
3) Incluye sugerencias de texto en pantalla para cada sección.
4) Sugiere mood de música de fondo y estilo visual.
5) Dime cuál guión filmar primero y por qué.

Los guiones deben sonar naturales, no leídos. Escribe como se habla.`,
      action: "Filma el guión #1 hoy. Solo toma 60 segundos.",
    },
  },
  {
    id: "22",
    bookId: "ai-business-starter",
    category: "marketing",
    en: {
      title: "Objection destroyer script",
      capability: "AI can anticipate every objection your customers have and write responses that turn 'no' into 'tell me more' — using real psychology.",
      example: `For a premium coaching service:
→ Objection: "It's too expensive"
→ Response: "I understand. Let me ask: what's it costing you NOT to solve this? My clients typically see 3x ROI in the first month."
→ Framework: Acknowledge → Reframe → Proof → Bridge to next step`,
      prompt: `Act as a sales psychology expert.

Business Snapshot:
- Industry: {{industry}}
- Offer: {{offer}}
- Customers: {{customers}}
- Main goal: {{goal}}

Tasks:
1) List the top 7 objections people have before buying my offer.
2) For each objection, write a response using: Acknowledge → Reframe → Proof → Next step.
3) Write 3 "pre-emptive" statements I can use in my content to handle objections BEFORE they come up.
4) Create a one-page "FAQ" I can send to leads who hesitate.

Tone: empathetic, confident, never pushy.`,
      action: "Add the top 3 objection responses to your FAQ or sales page.",
    },
    es: {
      title: "Script destructor de objeciones",
      capability: "La IA puede anticipar cada objeción de tus clientes y escribir respuestas que convierten el 'no' en 'cuéntame más' — usando psicología real.",
      example: `Para un servicio de coaching premium:
→ Objeción: "Es muy caro"
→ Respuesta: "Entiendo. Déjame preguntar: ¿cuánto te está costando NO resolver esto? Mis clientes típicamente ven 3x ROI en el primer mes."
→ Framework: Reconoce → Reenmarca → Prueba → Siguiente paso`,
      prompt: `Actúa como experto en psicología de ventas.

Resumen del negocio:
- Industria: {{industry}}
- Oferta: {{offer}}
- Clientes: {{customers}}
- Objetivo principal: {{goal}}

Tareas:
1) Lista las 7 objeciones principales que tiene la gente antes de comprar mi oferta.
2) Para cada objeción, escribe una respuesta usando: Reconoce → Reenmarca → Prueba → Siguiente paso.
3) Escribe 3 declaraciones "preventivas" que puedo usar en mi contenido para manejar objeciones ANTES de que surjan.
4) Crea un "FAQ" de una página que pueda enviar a leads que dudan.

Tono: empático, seguro, nunca insistente.`,
      action: "Agrega las 3 respuestas top a tu FAQ o página de ventas.",
    },
  },
  {
    id: "23",
    bookId: "ai-business-starter",
    category: "automation",
    en: {
      title: "AI-powered customer follow-up system",
      capability: "AI can design a follow-up system that keeps you top-of-mind without being annoying — turning cold leads into clients on autopilot.",
      example: `For a real estate agent:
→ Day 0: Thank you email (auto)
→ Day 3: "Found this property that matches what you described" (AI-generated)
→ Day 7: Market update relevant to their search
→ Day 14: "Quick question: are you still looking?" (re-engagement)`,
      prompt: `Act as a CRM and follow-up strategist.

Business Snapshot:
- Industry: {{industry}}
- Offer: {{offer}}
- Customers: {{customers}}
- Tools I use: {{tools}}

Tasks:
1) Design a 30-day follow-up sequence for new leads (6-8 touchpoints).
2) For each touchpoint: channel (email/SMS/DM), message template, timing.
3) Identify which touchpoints can be fully automated vs which need personal touch.
4) Write the first 3 messages in full.
5) Suggest the simplest tool to set this up (free or cheap).

Messages should feel personal, not automated. Short and value-first.`,
      action: "Set up the first 3 automated messages in your CRM or email tool.",
    },
    es: {
      title: "Sistema de seguimiento con IA",
      capability: "La IA puede diseñar un sistema de seguimiento que te mantiene presente sin ser molesto — convirtiendo leads fríos en clientes en piloto automático.",
      example: `Para un agente inmobiliario:
→ Día 0: Email de agradecimiento (auto)
→ Día 3: "Encontré esta propiedad que coincide con lo que describiste" (generado con IA)
→ Día 7: Actualización del mercado relevante a su búsqueda
→ Día 14: "Pregunta rápida: ¿sigues buscando?" (re-engagement)`,
      prompt: `Actúa como estratega de CRM y seguimiento.

Resumen del negocio:
- Industria: {{industry}}
- Oferta: {{offer}}
- Clientes: {{customers}}
- Herramientas que uso: {{tools}}

Tareas:
1) Diseña una secuencia de seguimiento de 30 días para leads nuevos (6-8 puntos de contacto).
2) Para cada punto: canal (email/SMS/DM), template del mensaje, timing.
3) Identifica cuáles se pueden automatizar completamente vs cuáles necesitan toque personal.
4) Escribe los primeros 3 mensajes completos.
5) Sugiere la herramienta más simple para configurar esto (gratis o barata).

Los mensajes deben sentirse personales, no automatizados. Cortos y valor primero.`,
      action: "Configura los primeros 3 mensajes automáticos en tu CRM o herramienta de email.",
    },
  },
  {
    id: "24",
    bookId: "ai-business-starter",
    category: "operations",
    en: {
      title: "Weekly AI power hour routine",
      capability: "AI can help you build a repeatable weekly routine where you use AI for 1 focused hour to plan, create, and optimize — making AI a habit, not a one-time experiment.",
      example: `Every Monday, 9:00-10:00 AM:
→ 0-15 min: Review dashboard + ask AI for insights
→ 15-30 min: Generate this week's content (3 posts)
→ 30-45 min: Draft emails/proposals using AI templates
→ 45-60 min: Review one SOP and improve it with AI`,
      prompt: `Act as a productivity coach who specializes in AI workflows.

Business Snapshot:
- Industry: {{industry}}
- Offer: {{offer}}
- Main goal: {{goal}}
- Tools I use: {{tools}}

Tasks:
1) Design a "Weekly AI Power Hour" routine (60 min, broken into 4 blocks of 15 min).
2) For each block: what to do, which AI tool to use, expected output.
3) Create a checklist I can print and use every week.
4) Suggest how to gradually expand from 1 hour to integrating AI throughout my week.
5) List 3 "AI habits" I should build this month.

Make it practical. I should be able to start next Monday.`,
      action: "Block 1 hour on your calendar for next Monday and follow this routine.",
    },
    es: {
      title: "Rutina semanal de hora de poder con IA",
      capability: "La IA puede ayudarte a construir una rutina semanal repetible donde usas IA durante 1 hora enfocada para planificar, crear y optimizar — haciendo de la IA un hábito, no un experimento único.",
      example: `Cada lunes, 9:00-10:00 AM:
→ 0-15 min: Revisar dashboard + pedir insights a la IA
→ 15-30 min: Generar el contenido de la semana (3 posts)
→ 30-45 min: Redactar emails/propuestas con templates de IA
→ 45-60 min: Revisar un SOP y mejorarlo con IA`,
      prompt: `Actúa como coach de productividad especializado en flujos con IA.

Resumen del negocio:
- Industria: {{industry}}
- Oferta: {{offer}}
- Objetivo principal: {{goal}}
- Herramientas que uso: {{tools}}

Tareas:
1) Diseña una rutina "Hora de Poder IA Semanal" (60 min, dividida en 4 bloques de 15 min).
2) Para cada bloque: qué hacer, qué herramienta IA usar, resultado esperado.
3) Crea un checklist que pueda imprimir y usar cada semana.
4) Sugiere cómo expandir gradualmente de 1 hora a integrar IA en toda mi semana.
5) Lista 3 "hábitos de IA" que debería construir este mes.

Hazlo práctico. Debería poder empezar el próximo lunes.`,
      action: "Bloquea 1 hora en tu calendario para el próximo lunes y sigue esta rutina.",
    },
  },
];

/* ═══════════════════════════════════════
   BOOK: AI Marketing Pro
   ═══════════════════════════════════════ */

export const AI_MARKETING_PRO_BOOK: Book = {
  id: "ai-marketing-pro",
  en: {
    title: "AI Marketing Pro",
    description: "24 prompts to build a real marketing system — by market, channel and budget.",
  },
  es: {
    title: "IA Marketing Pro",
    description: "24 prompts para armar un sistema de marketing real — por mercado, canal y presupuesto.",
  },
  ebookUrl: {
    en: "/ebooks/ai-marketing-pro/en.pdf",
    es: "/ebooks/ai-marketing-pro/es.pdf",
  },
  snapshotFields: [
    {
      key: "product_offer",
      en: "Product / Offer",
      es: "Producto / Oferta",
      placeholder: { en: "e.g. Handmade candles, $15–$40", es: "ej. Velas artesanales, $15–$40" },
    },
    {
      key: "target_customer",
      en: "Target customer",
      es: "Cliente objetivo",
      placeholder: { en: "e.g. Women 25-45 who love home decor", es: "ej. Mujeres 25-45 que aman la decoración" },
    },
    {
      key: "markets",
      en: "Markets (countries + languages)",
      es: "Mercados (países + idiomas)",
      placeholder: { en: "e.g. USA (EN), El Salvador (ES)", es: "ej. USA (EN), El Salvador (ES)" },
    },
    {
      key: "objective",
      en: "Objective",
      es: "Objetivo",
      placeholder: { en: "e.g. leads / sales / awareness / retention", es: "ej. leads / ventas / awareness / retención" },
    },
    {
      key: "differentiator",
      en: "Differentiator (why you)",
      es: "Diferenciador (por qué tú)",
      placeholder: { en: "e.g. 100% soy wax + hand-poured + 48h delivery", es: "ej. 100% cera de soya + artesanal + entrega 48h" },
    },
    {
      key: "channels",
      en: "Channels (current or desired)",
      es: "Canales (actuales o deseados)",
      placeholder: { en: "e.g. Instagram, TikTok, Google, Email", es: "ej. Instagram, TikTok, Google, Email" },
    },
    {
      key: "budget",
      en: "Monthly budget range",
      es: "Presupuesto mensual",
      placeholder: { en: "e.g. $200–$500/month, comfortable testing", es: "ej. $200–$500/mes, cómodo probando" },
    },
    {
      key: "delivery",
      en: "Delivery / fulfillment constraints",
      es: "Entrega / limitaciones de fulfillment",
      placeholder: { en: "e.g. Ship US only, 3-5 days, free returns >$50", es: "ej. Solo envío local, 3-5 días, devolución gratis >$50" },
    },
  ],
  categories: ["strategy", "marketing", "content", "operations", "automation"],
  recommendedPath: [
    { day: 1, promptIds: ["01", "02", "04"] },
    { day: 2, promptIds: ["05", "06", "08"] },
    { day: 3, promptIds: ["09", "10", "12"] },
    { day: 4, promptIds: ["13", "14", "16"] },
    { day: 5, promptIds: ["17", "18", "20", "24"] },
  ],
};

/* ───── AI Marketing Pro — 24 Prompts ───── */

export const AI_MARKETING_PRO_PROMPTS: Prompt[] = [
  // ── STRATEGY ──
  {
    id: "01",
    bookId: "ai-marketing-pro",
    category: "strategy",
    en: {
      title: "Marketing reality check (not magic)",
      capability: "AI can turn 'marketing' into a practical strategy tied to your product and market.",
      example: "Output: what to do, what not to do, and why.",
      prompt: `Act as a no-hype marketing strategist for small businesses.

Snapshot:
- Product/Offer: {{product_offer}}
- Customer: {{target_customer}}
- Markets: {{markets}}
- Objective: {{objective}}
- Differentiator: {{differentiator}}
- Channels: {{channels}}
- Budget: {{budget}}
- Delivery: {{delivery}}

Task:
1) Explain (in plain language) what marketing IS and IS NOT for my case.
2) Give 5 truths that will matter most in my markets (country-specific if relevant).
3) List 5 actions that will move results in 14 days.
4) List 5 actions that are likely wasted time for me.

Rules: ask max 3 questions if needed. Output as a table. End with a 15-minute first action.`,
      action: "Use this first to set expectations.",
    },
    es: {
      title: "Realidad del marketing (no es magia)",
      capability: "La IA puede convertir 'marketing' en una estrategia pr\u00e1ctica seg\u00fan tu producto y pa\u00eds.",
      example: "Salida: qu\u00e9 hacer, qu\u00e9 no hacer y por qu\u00e9.",
      prompt: `Act\u00faa como estratega de marketing sin humo para peque\u00f1os negocios.

Resumen:
- Producto/Oferta: {{product_offer}}
- Cliente: {{target_customer}}
- Mercados: {{markets}}
- Objetivo: {{objective}}
- Diferenciador: {{differentiator}}
- Canales: {{channels}}
- Presupuesto: {{budget}}
- Entrega: {{delivery}}

Tarea:
1) Explica (simple) qu\u00e9 ES y qu\u00e9 NO ES el marketing en mi caso.
2) Dame 5 verdades clave para mis mercados (seg\u00fan pa\u00eds si aplica).
3) Lista 5 acciones que muevan resultados en 14 d\u00edas.
4) Lista 5 acciones que probablemente son p\u00e9rdida de tiempo.

Reglas: m\u00e1ximo 3 preguntas si hace falta. Salida en tabla. Termina con una acci\u00f3n de 15 minutos.`,
      action: "\u00dasalo primero para alinear expectativas.",
    },
  },
  {
    id: "02",
    bookId: "ai-marketing-pro",
    category: "strategy",
    en: {
      title: "Market + customer insights (by country)",
      capability: "AI can adapt messaging and channel choices by country and culture.",
      example: "Output: what people care about + how they buy.",
      prompt: `Act as a market researcher.

Inputs:
- Customer: {{target_customer}}
- Markets: {{markets}}
- Objective: {{objective}}

Task:
For each market (country/language):
1) List the top buying triggers and top objections.
2) Suggest best channels for reaching them (with rationale).
3) Suggest the best CTA style (soft vs direct, price-first vs value-first).
4) Give 3 messaging do's and 3 don'ts per market.

Ask max 3 questions if needed. Output as a table. End with a 15-minute first action.`,
      action: "Location changes everything.",
    },
    es: {
      title: "Insights de mercado + cliente (por pa\u00eds)",
      capability: "La IA puede adaptar mensajes y canales seg\u00fan pa\u00eds y cultura.",
      example: "Salida: qu\u00e9 les importa + c\u00f3mo compran.",
      prompt: `Act\u00faa como investigador de mercado.

Datos:
- Cliente: {{target_customer}}
- Mercados: {{markets}}
- Objetivo: {{objective}}

Tarea:
Para cada mercado (pa\u00eds/idioma):
1) Triggers de compra + objeciones principales.
2) Mejores canales para llegar (y por qu\u00e9).
3) Mejor estilo de CTA (suave vs directo, precio vs valor).
4) 3 cosas que s\u00ed y 3 que no por mercado.

M\u00e1ximo 3 preguntas si hace falta. Salida en tabla. Termina con una acci\u00f3n de 15 minutos.`,
      action: "La ubicaci\u00f3n lo cambia todo.",
    },
  },
  {
    id: "03",
    bookId: "ai-marketing-pro",
    category: "strategy",
    en: {
      title: "Find your differentiator (USP) in 15 minutes",
      capability: "AI can turn vague benefits into a sharp differentiator customers remember.",
      example: "Output: 3 USP options + proof ideas.",
      prompt: `Act as a positioning expert.

Snapshot:
Offer: {{product_offer}}
Customer: {{target_customer}}
Current differentiator: {{differentiator}}

Task:
1) Propose 3 strong differentiators (USP) that are believable.
2) For each: write a one-liner positioning statement.
3) For each: list 3 proof assets needed (reviews, demo, guarantee, results, process).
4) Choose the best USP and explain why it wins.

Ask max 3 questions if needed. End with a 15-minute first action.`,
      action: "No USP = price war.",
    },
    es: {
      title: "Encuentra tu diferenciador (USP) en 15 minutos",
      capability: "La IA convierte beneficios vagos en un diferenciador claro y memorable.",
      example: "Salida: 3 USP + pruebas recomendadas.",
      prompt: `Act\u00faa como experto en posicionamiento.

Resumen:
Oferta: {{product_offer}}
Cliente: {{target_customer}}
Diferenciador actual: {{differentiator}}

Tarea:
1) Prop\u00f3n 3 diferenciadores (USP) fuertes y cre\u00edbles.
2) Para cada uno: 1 frase de posicionamiento.
3) Para cada uno: 3 pruebas necesarias (rese\u00f1as, demo, garant\u00eda, resultados, proceso).
4) Elige el mejor USP y explica por qu\u00e9.

M\u00e1ximo 3 preguntas si hace falta. Termina con una acci\u00f3n de 15 minutos.`,
      action: "Sin USP = guerra de precios.",
    },
  },

  // ── MARKETING ──
  {
    id: "04",
    bookId: "ai-marketing-pro",
    category: "marketing",
    en: {
      title: "Marketing funnel that matches your product",
      capability: "AI can choose the right funnel type (not one-size-fits-all).",
      example: "Output: funnel steps + what to publish at each step.",
      prompt: `Act as a funnel strategist.

Snapshot:
Offer: {{product_offer}}
Customer: {{target_customer}}
Objective: {{objective}}
Channels: {{channels}}

Task:
1) Choose the best funnel for my case (lead gen, direct purchase, booking, etc.).
2) Define steps: Awareness \u2192 Consideration \u2192 Conversion \u2192 Retention.
3) For each step: what content/ad/CTA to use.
4) Identify the #1 bottleneck I'll face and how to fix it.

Ask max 3 questions if needed. End with a 15-minute first action.`,
      action: "Wrong funnel = wasted spend.",
    },
    es: {
      title: "Embudo de marketing seg\u00fan tu producto",
      capability: "La IA elige el embudo correcto (no es igual para todos).",
      example: "Salida: pasos del embudo + qu\u00e9 publicar en cada uno.",
      prompt: `Act\u00faa como estratega de embudos.

Resumen:
Oferta: {{product_offer}}
Cliente: {{target_customer}}
Objetivo: {{objective}}
Canales: {{channels}}

Tarea:
1) Elige el mejor embudo (leads, compra directa, reservas, etc.).
2) Define pasos: Awareness \u2192 Consideraci\u00f3n \u2192 Conversi\u00f3n \u2192 Retenci\u00f3n.
3) Para cada paso: contenido/anuncio/CTA recomendado.
4) Identifica el mayor cuello de botella y c\u00f3mo resolverlo.

M\u00e1ximo 3 preguntas si hace falta. Termina con una acci\u00f3n de 15 minutos.`,
      action: "Embudo incorrecto = gasto perdido.",
    },
  },
  {
    id: "05",
    bookId: "ai-marketing-pro",
    category: "marketing",
    en: {
      title: "CTA playbook by country + platform",
      capability: "AI can tailor CTAs to local buying habits and language style.",
      example: "Output: 10 CTAs per market + when to use each.",
      prompt: `Act as a conversion copywriter with cross-country nuance.

Snapshot:
Offer: {{product_offer}}
Customer: {{target_customer}}
Markets: {{markets}}
Differentiator: {{differentiator}}

Task:
For each market:
1) Give 10 high-performing CTA options (short).
2) Tag each CTA: soft / direct / urgency / trust / low-risk.
3) Recommend the best 3 CTAs for: social post, ad, landing page, WhatsApp/DM.
4) Warn me about CTAs that may backfire culturally.

Ask max 3 questions if needed. End with a 15-minute first action.`,
      action: "CTAs are not universal.",
    },
    es: {
      title: "Gu\u00eda de CTA por pa\u00eds + plataforma",
      capability: "La IA adapta CTAs a h\u00e1bitos de compra y estilo de idioma por pa\u00eds.",
      example: "Salida: 10 CTAs por mercado + cu\u00e1ndo usar cada uno.",
      prompt: `Act\u00faa como copywriter de conversi\u00f3n con enfoque por pa\u00edses.

Resumen:
Oferta: {{product_offer}}
Cliente: {{target_customer}}
Mercados: {{markets}}
Diferenciador: {{differentiator}}

Tarea:
Para cada mercado:
1) Dame 10 CTAs que funcionen (cortos).
2) Etiqueta: suave / directo / urgencia / confianza / bajo riesgo.
3) Recomienda los 3 mejores para: post, anuncio, landing, WhatsApp/DM.
4) Advierte CTAs que podr\u00edan fallar culturalmente.

M\u00e1ximo 3 preguntas si hace falta. Termina con una acci\u00f3n de 15 minutos.`,
      action: "Los CTAs no son universales.",
    },
  },
  {
    id: "06",
    bookId: "ai-marketing-pro",
    category: "marketing",
    en: {
      title: "Messaging: headlines + benefits that feel local",
      capability: "AI can rewrite messages to sound natural for each target market.",
      example: "Output: 5 headline sets per market.",
      prompt: `Act as a market-local copywriter.

Snapshot:
Offer: {{product_offer}}
Customer: {{target_customer}}
Differentiator: {{differentiator}}
Markets: {{markets}}

Task:
For each market:
1) Write 5 headline + subheadline pairs.
2) Write 5 benefit bullets in customer language.
3) Write 3 trust lines (proof, guarantee, process).
4) Suggest the best "first sentence" for ads in that market.

Ask max 3 questions if needed. End with a 15-minute first action.`,
      action: "Sound native, not translated.",
    },
    es: {
      title: "Mensajes: titulares + beneficios que suenan locales",
      capability: "La IA reescribe mensajes para que suenen naturales por mercado.",
      example: "Salida: 5 sets de titulares por mercado.",
      prompt: `Act\u00faa como copywriter local por mercado.

Resumen:
Oferta: {{product_offer}}
Cliente: {{target_customer}}
Diferenciador: {{differentiator}}
Mercados: {{markets}}

Tarea:
Para cada mercado:
1) 5 titulares + subtitulares.
2) 5 beneficios en lenguaje del cliente.
3) 3 l\u00edneas de confianza (prueba, garant\u00eda, proceso).
4) Mejor primera frase para anuncios en ese mercado.

M\u00e1ximo 3 preguntas si hace falta. Termina con una acci\u00f3n de 15 minutos.`,
      action: "Que suene nativo, no traducido.",
    },
  },
  {
    id: "08",
    bookId: "ai-marketing-pro",
    category: "marketing",
    en: {
      title: "Social profiles that convert (by market)",
      capability: "AI can rewrite bios and profile structure for trust and action.",
      example: "Output: bio + pinned posts plan + highlights.",
      prompt: `Act as a social profile conversion expert.

Snapshot:
Channels: {{channels}}
Customer: {{target_customer}}
Markets: {{markets}}

Task:
For each main channel:
1) Rewrite a high-converting bio (market-appropriate tone).
2) Suggest 3 pinned post topics + why.
3) Suggest highlight categories / link strategy.
4) Give a "trust checklist" for the profile.

Ask max 3 questions if needed. End with a 15-minute first action.`,
      action: "Profile = landing page.",
    },
    es: {
      title: "Perfiles sociales que convierten (por mercado)",
      capability: "La IA optimiza bio y estructura para confianza y acci\u00f3n.",
      example: "Salida: bio + fijados + destacados.",
      prompt: `Act\u00faa como experto en conversi\u00f3n de perfiles sociales.

Resumen:
Canales: {{channels}}
Cliente: {{target_customer}}
Mercados: {{markets}}

Tarea:
Para cada canal principal:
1) Reescribe una bio que convierta (tono seg\u00fan mercado).
2) 3 temas para posts fijados + por qu\u00e9.
3) Categor\u00edas de destacados / estrategia de link.
4) Checklist de confianza del perfil.

M\u00e1ximo 3 preguntas si hace falta. Termina con una acci\u00f3n de 15 minutos.`,
      action: "El perfil es tu landing.",
    },
  },
  {
    id: "11",
    bookId: "ai-marketing-pro",
    category: "marketing",
    en: {
      title: "Hooks that stop the scroll (by market)",
      capability: "AI can write hooks that sound native, not generic or translated.",
      example: "Output: 30 hooks per market category.",
      prompt: `Act as a direct-response copywriter specialized in localization.

Snapshot:
Offer: {{product_offer}}
Customer: {{target_customer}}
Markets: {{markets}}
Channels: {{channels}}

Task:
For each market, create 30 hooks:
- 10 curiosity
- 10 problem-aware
- 10 result/benefit

Rules:
- 1 sentence each
- Adapt style to the market (tone, directness)
- Avoid hype and clich\u00e9s
End with the top 5 hooks per market.`,
      action: "Hooks drive CTR.",
    },
    es: {
      title: "Hooks que detienen el scroll (por mercado)",
      capability: "La IA escribe hooks que suenan nativos, no gen\u00e9ricos.",
      example: "Salida: 30 hooks por mercado.",
      prompt: `Act\u00faa como copywriter de respuesta directa especializado en localizaci\u00f3n.

Resumen:
Oferta: {{product_offer}}
Cliente: {{target_customer}}
Mercados: {{markets}}
Canales: {{channels}}

Tarea:
Para cada mercado, crea 30 hooks:
- 10 curiosidad
- 10 problema
- 10 resultado/beneficio

Reglas:
- 1 frase cada uno
- Ajusta estilo seg\u00fan mercado (tono, qu\u00e9 tan directo)
- Evita exageraci\u00f3n y clich\u00e9s
Termina con los 5 mejores hooks por mercado.`,
      action: "Los hooks suben el CTR.",
    },
  },
  {
    id: "12",
    bookId: "ai-marketing-pro",
    category: "marketing",
    en: {
      title: "Ad angles + creatives (6 angles \u00d7 2 markets)",
      capability: "AI can create testable ad angles and match them to each market.",
      example: "Output: 6 angles + copy + CTA + format.",
      prompt: `Act as a performance marketing strategist.

Snapshot:
Offer: {{product_offer}}
Customer: {{target_customer}}
Objective: {{objective}}
Channels: {{channels}}
Markets: {{markets}}
Differentiator: {{differentiator}}

Task:
Choose the top 2 markets to start (based on likely ROI).
For EACH of those 2 markets:
1) Generate 6 ad angles.
2) For each angle: headline + primary text (3 lines) + CTA.
3) Recommend best format (image/video/carousel) + why.
4) Suggest 1 visual concept per angle (no brand logos).

Ask max 3 questions if needed. End with a 15-minute first action.`,
      action: "Testing beats guessing.",
    },
    es: {
      title: "\u00c1ngulos de anuncios + creativos (6 \u00d7 2 mercados)",
      capability: "La IA crea \u00e1ngulos testeables y los adapta por mercado.",
      example: "Salida: 6 \u00e1ngulos + copy + CTA + formato.",
      prompt: `Act\u00faa como estratega de marketing de performance.

Resumen:
Oferta: {{product_offer}}
Cliente: {{target_customer}}
Objetivo: {{objective}}
Canales: {{channels}}
Mercados: {{markets}}
Diferenciador: {{differentiator}}

Tarea:
Elige los 2 mejores mercados para iniciar (seg\u00fan ROI probable).
Para CADA uno:
1) Genera 6 \u00e1ngulos de anuncio.
2) Por \u00e1ngulo: headline + texto (3 l\u00edneas) + CTA.
3) Recomienda formato (imagen/video/carrusel) + por qu\u00e9.
4) Sugiere 1 concepto visual por \u00e1ngulo (sin logos).

M\u00e1ximo 3 preguntas si hace falta. Termina con una acci\u00f3n de 15 minutos.`,
      action: "Probar > adivinar.",
    },
  },
  {
    id: "13",
    bookId: "ai-marketing-pro",
    category: "marketing",
    en: {
      title: "Landing page copy (market-specific)",
      capability: "AI can write landing copy that matches local trust triggers and objections.",
      example: "Output: hero + benefits + proof + FAQ + CTA per market.",
      prompt: `Act as a conversion copywriter specialized in localization.

Snapshot:
Offer: {{product_offer}}
Customer: {{target_customer}}
Markets: {{markets}}
Objective: {{objective}}
Differentiator: {{differentiator}}
Delivery: {{delivery}}

Task:
For the top 2 markets:
Write a mobile-first landing page with:
1) Hero (headline + subhead + CTA)
2) Benefits (5 bullets)
3) How it works (3 steps)
4) Proof section (what to include + 3 example lines)
5) FAQ (5 Q&As with local objections)
6) Final CTA

Ask max 3 questions if needed. End with a 15-minute first action.`,
      action: "Landing pages are where ads win/lose.",
    },
    es: {
      title: "Copy de landing (por mercado)",
      capability: "La IA escribe copy seg\u00fan confianza y objeciones locales.",
      example: "Salida: hero + beneficios + prueba + FAQ + CTA por mercado.",
      prompt: `Act\u00faa como copywriter de conversi\u00f3n especializado en localizaci\u00f3n.

Resumen:
Oferta: {{product_offer}}
Cliente: {{target_customer}}
Mercados: {{markets}}
Objetivo: {{objective}}
Diferenciador: {{differentiator}}
Entrega: {{delivery}}

Tarea:
Para los 2 mejores mercados:
Escribe una landing mobile-first con:
1) Hero (headline + subheadline + CTA)
2) Beneficios (5 bullets)
3) C\u00f3mo funciona (3 pasos)
4) Prueba (qu\u00e9 incluir + 3 l\u00edneas ejemplo)
5) FAQ (5 preguntas con objeciones locales)
6) CTA final

M\u00e1ximo 3 preguntas si hace falta. Termina con una acci\u00f3n de 15 minutos.`,
      action: "La landing decide el resultado.",
    },
  },
  {
    id: "16",
    bookId: "ai-marketing-pro",
    category: "marketing",
    en: {
      title: "Budget reality: how much to invest (safe model)",
      capability: "AI can propose a realistic test budget and scaling rules based on your objective.",
      example: "Output: test budget + KPI targets + scale/stop rules.",
      prompt: `Act as a practical marketing finance planner.

Snapshot:
Budget: {{budget}}
Objective: {{objective}}
Channels: {{channels}}
Markets: {{markets}}
Offer: {{product_offer}}

Task:
1) Propose a SAFE testing budget plan for 14 days (assume small business).
2) Define KPIs to track by objective (CPC/CTR/CPA/ROAS/etc).
3) Give scale rules and stop rules (what signals mean continue vs pause).
4) Provide 3 budget tiers: low / medium / aggressive (still realistic).
5) Include a simple note on how market (country) affects costs.

Ask max 3 questions if needed. End with a 15-minute first action.`,
      action: "Budget without rules becomes gambling.",
    },
    es: {
      title: "Presupuesto real: cu\u00e1nto invertir (modelo seguro)",
      capability: "La IA propone un presupuesto de prueba realista y reglas para escalar.",
      example: "Salida: presupuesto de prueba + KPIs + reglas de escala/stop.",
      prompt: `Act\u00faa como planificador financiero de marketing (pr\u00e1ctico).

Resumen:
Presupuesto: {{budget}}
Objetivo: {{objective}}
Canales: {{channels}}
Mercados: {{markets}}
Oferta: {{product_offer}}

Tarea:
1) Prop\u00f3n un plan SEGURO de presupuesto de prueba por 14 d\u00edas.
2) Define KPIs seg\u00fan objetivo (CPC/CTR/CPA/ROAS/etc).
3) Reglas para escalar y para parar (se\u00f1ales de seguir vs pausar).
4) 3 niveles de presupuesto: bajo / medio / agresivo (realista).
5) Nota simple de c\u00f3mo el pa\u00eds afecta los costos.

M\u00e1ximo 3 preguntas si hace falta. Termina con una acci\u00f3n de 15 minutos.`,
      action: "Presupuesto sin reglas = apuesta.",
    },
  },
  {
    id: "17",
    bookId: "ai-marketing-pro",
    category: "marketing",
    en: {
      title: "Channel strategy: where to focus first (by market)",
      capability: "AI can pick the best channels per country instead of spreading you thin.",
      example: "Output: top 2 channels per market + why.",
      prompt: `Act as a channel strategy advisor.

Snapshot:
Channels available: {{channels}}
Markets: {{markets}}
Objective: {{objective}}
Offer: {{product_offer}}
Customer: {{target_customer}}

Task:
For each market:
1) Recommend the top 2 channels to focus on first.
2) Explain why (buying behavior, intent, trust, speed).
3) Provide a simple weekly schedule per channel (what to post/run).
4) List the "do not focus on yet" channels and why.

Ask max 3 questions if needed. End with a 15-minute first action.`,
      action: "Focus wins.",
    },
    es: {
      title: "Estrategia de canales: en qu\u00e9 enfocarte (por mercado)",
      capability: "La IA elige canales por pa\u00eds para que no te disperses.",
      example: "Salida: top 2 canales por mercado + por qu\u00e9.",
      prompt: `Act\u00faa como asesor de estrategia de canales.

Resumen:
Canales disponibles: {{channels}}
Mercados: {{markets}}
Objetivo: {{objective}}
Oferta: {{product_offer}}
Cliente: {{target_customer}}

Tarea:
Para cada mercado:
1) Recomienda los 2 canales principales para empezar.
2) Explica por qu\u00e9 (comportamiento, intenci\u00f3n, confianza, velocidad).
3) Da un horario semanal simple por canal (qu\u00e9 publicar/correr).
4) Lista canales "todav\u00eda no" y por qu\u00e9.

M\u00e1ximo 3 preguntas si hace falta. Termina con una acci\u00f3n de 15 minutos.`,
      action: "Enfoque gana.",
    },
  },
  {
    id: "19",
    bookId: "ai-marketing-pro",
    category: "marketing",
    en: {
      title: "Retargeting plan (simple + effective)",
      capability: "AI can build a retargeting plan that turns 'interested' into buyers.",
      example: "Output: audiences + messages + timeline.",
      prompt: `Create a simple retargeting plan.

Snapshot:
Objective: {{objective}}
Channels: {{channels}}
Markets: {{markets}}
Offer: {{product_offer}}

Task:
1) Define 3 retargeting audiences (warm groups).
2) For each audience: message angle + CTA + format.
3) Set a 14-day timeline (days 1\u201314).
4) Add a "proof sequence" (reviews, results, delivery assurance).

Ask max 3 questions if needed. End with a 15-minute first action.`,
      action: "Retargeting is where ROAS happens.",
    },
    es: {
      title: "Plan de retargeting (simple y efectivo)",
      capability: "La IA crea un plan para convertir interesados en compradores.",
      example: "Salida: audiencias + mensajes + calendario.",
      prompt: `Crea un plan simple de retargeting.

Resumen:
Objetivo: {{objective}}
Canales: {{channels}}
Mercados: {{markets}}
Oferta: {{product_offer}}

Tarea:
1) Define 3 audiencias de retargeting (grupos tibios).
2) Por audiencia: \u00e1ngulo + CTA + formato.
3) Calendario de 14 d\u00edas (d\u00edas 1\u201314).
4) Secuencia de prueba (rese\u00f1as, resultados, entrega).

M\u00e1ximo 3 preguntas si hace falta. Termina con una acci\u00f3n de 15 minutos.`,
      action: "El retargeting sube el ROAS.",
    },
  },

  // ── CONTENT ──
  {
    id: "09",
    bookId: "ai-marketing-pro",
    category: "content",
    en: {
      title: "Content pillars by market (5 pillars)",
      capability: "AI can build content pillars that match local motivations in each country.",
      example: "Output: 5 pillars + what to post in each market.",
      prompt: `Act as a multi-market content strategist.

Snapshot:
Offer: {{product_offer}}
Customer: {{target_customer}}
Markets: {{markets}}
Objective: {{objective}}
Channels: {{channels}}
Differentiator: {{differentiator}}

Task:
For each market:
1) Create 5 content pillars (what themes to repeat weekly).
2) For each pillar: 3 post ideas (15 ideas per market).
3) For each idea: hook + CTA + best channel.

Rules: ask max 3 questions if needed. Output in tables. End with a 15-minute first action.`,
      action: "Build a repeatable system.",
    },
    es: {
      title: "Pilares de contenido por mercado (5 pilares)",
      capability: "La IA crea pilares que encajan con motivaciones locales por pa\u00eds.",
      example: "Salida: 5 pilares + qu\u00e9 publicar por mercado.",
      prompt: `Act\u00faa como estratega de contenido multi-mercado.

Resumen:
Oferta: {{product_offer}}
Cliente: {{target_customer}}
Mercados: {{markets}}
Objetivo: {{objective}}
Canales: {{channels}}
Diferenciador: {{differentiator}}

Tarea:
Para cada mercado:
1) Crea 5 pilares de contenido (temas repetibles semanalmente).
2) Por pilar: 3 ideas de posts (15 ideas por mercado).
3) Por idea: hook + CTA + mejor canal.

Reglas: m\u00e1ximo 3 preguntas si hace falta. Entrega en tablas. Termina con una acci\u00f3n de 15 minutos.`,
      action: "Sistema repetible.",
    },
  },
  {
    id: "10",
    bookId: "ai-marketing-pro",
    category: "content",
    en: {
      title: "30-day content calendar (market-aware)",
      capability: "AI can map a month of content aligned to your objective and platform mix.",
      example: "Output: 4 weeks plan + daily topics + CTA.",
      prompt: `Create a 30-day content calendar.

Snapshot:
Channels: {{channels}}
Markets: {{markets}}
Objective: {{objective}}
Budget: {{budget}}

Requirements:
- 4 weeks plan
- 4 posts/week + 2 short videos/week (per main channel)
- Include CTA type (soft/direct/trust/urgency) suitable per market
- Include repurpose notes (turn 1 piece into 3)

Ask max 3 questions if needed. End with a 15-minute first action.`,
      action: "Consistency beats intensity.",
    },
    es: {
      title: "Calendario de 30 d\u00edas (seg\u00fan mercado)",
      capability: "La IA crea un mes de contenido seg\u00fan objetivo y plataformas.",
      example: "Salida: 4 semanas + temas + CTA.",
      prompt: `Crea un calendario de contenido de 30 d\u00edas.

Resumen:
Canales: {{channels}}
Mercados: {{markets}}
Objetivo: {{objective}}
Presupuesto: {{budget}}

Requisitos:
- Plan de 4 semanas
- 4 posts/semana + 2 videos cortos/semana (por canal principal)
- Incluye tipo de CTA (suave/directo/confianza/urgencia) seg\u00fan mercado
- Incluye nota de reutilizaci\u00f3n (1 pieza \u2192 3 formatos)

M\u00e1ximo 3 preguntas si hace falta. Termina con una acci\u00f3n de 15 minutos.`,
      action: "Constancia > intensidad.",
    },
  },

  // ── OPERATIONS ──
  {
    id: "07",
    bookId: "ai-marketing-pro",
    category: "operations",
    en: {
      title: "Fulfillment & delivery upgrades that increase sales",
      capability: "AI can spot friction in delivery that kills conversions.",
      example: "Output: 10 improvements + which to do first.",
      prompt: `Act as a conversion + operations advisor.

Snapshot:
Delivery/constraints: {{delivery}}
Offer: {{product_offer}}
Customer: {{target_customer}}

Task:
1) List 10 delivery/fulfillment improvements that increase trust and conversion.
2) Suggest the best promise you can realistically make (timelines/returns/support).
3) Write a "delivery & returns" section for a website (simple, confidence-building).
4) Create a 3-step plan to improve delivery experience in 14 days.

Ask max 3 questions if needed. End with a 15-minute first action.`,
      action: "Delivery is marketing.",
    },
    es: {
      title: "Mejoras de entrega que aumentan ventas",
      capability: "La IA detecta fricci\u00f3n en la entrega que baja conversiones.",
      example: "Salida: 10 mejoras + prioridades.",
      prompt: `Act\u00faa como asesor de conversi\u00f3n + operaciones.

Resumen:
Entrega/limitaciones: {{delivery}}
Oferta: {{product_offer}}
Cliente: {{target_customer}}

Tarea:
1) Lista 10 mejoras de entrega/fulfillment que aumentan confianza y conversi\u00f3n.
2) Recomienda la mejor promesa realista (tiempos/devoluciones/soporte).
3) Escribe secci\u00f3n "entrega y devoluciones" para web (simple y clara).
4) Plan de 3 pasos para mejorar la experiencia en 14 d\u00edas.

M\u00e1ximo 3 preguntas si hace falta. Termina con una acci\u00f3n de 15 minutos.`,
      action: "La entrega tambi\u00e9n es marketing.",
    },
  },
  {
    id: "14",
    bookId: "ai-marketing-pro",
    category: "operations",
    en: {
      title: "Follow-up system (DM/WhatsApp/Email)",
      capability: "AI can write follow-ups that feel human and increase replies by market.",
      example: "Output: 7-message sequence + tone per market.",
      prompt: `Write a 7-message follow-up system for leads who didn't buy.

Snapshot:
Offer: {{product_offer}}
Customer: {{target_customer}}
Channels: {{channels}}
Markets: {{markets}}

Task:
For the top 2 markets:
1) Create a 7-message sequence (DM/WhatsApp/Email style).
2) Each message: goal + text + CTA.
3) Include market-appropriate tone (direct vs soft).
4) Add one "proof" message and one "risk reducer" message.

End with a 15-minute first action.`,
      action: "Most revenue is in follow-up.",
    },
    es: {
      title: "Sistema de seguimiento (DM/WhatsApp/Email)",
      capability: "La IA escribe seguimientos humanos y adaptados por mercado.",
      example: "Salida: secuencia de 7 mensajes + tono por mercado.",
      prompt: `Crea un sistema de 7 mensajes para leads que no compraron.

Resumen:
Oferta: {{product_offer}}
Cliente: {{target_customer}}
Canales: {{channels}}
Mercados: {{markets}}

Tarea:
Para los 2 mejores mercados:
1) Crea una secuencia de 7 mensajes (estilo DM/WhatsApp/Email).
2) Cada mensaje: objetivo + texto + CTA.
3) Ajusta el tono por mercado (directo vs suave).
4) Incluye 1 mensaje de prueba y 1 de reducci\u00f3n de riesgo.

Termina con una acci\u00f3n de 15 minutos.`,
      action: "Mucho ingreso est\u00e1 en el seguimiento.",
    },
  },
  {
    id: "15",
    bookId: "ai-marketing-pro",
    category: "operations",
    en: {
      title: "Reduce friction: trust checklist (market-friendly)",
      capability: "AI can identify trust gaps that block conversion in each market.",
      example: "Output: checklist + what to add to website/profile.",
      prompt: `Act as a conversion auditor.

Snapshot:
Channels: {{channels}}
Delivery: {{delivery}}
Offer: {{product_offer}}

Task:
1) Create a trust checklist for my marketing assets:
   - website/landing
   - social profiles
   - ads
2) For each: list what to add (proof, guarantees, policies, transparency).
3) Suggest the top 5 trust upgrades that fit my delivery constraints.

Ask max 3 questions if needed. End with a 15-minute first action.`,
      action: "Trust is the multiplier.",
    },
    es: {
      title: "Reduce fricci\u00f3n: checklist de confianza",
      capability: "La IA identifica vac\u00edos de confianza que bloquean conversiones.",
      example: "Salida: checklist + qu\u00e9 agregar a web/perfil.",
      prompt: `Act\u00faa como auditor de conversi\u00f3n.

Resumen:
Canales: {{channels}}
Entrega: {{delivery}}
Oferta: {{product_offer}}

Tarea:
1) Crea un checklist de confianza para:
   - web/landing
   - perfiles sociales
   - anuncios
2) Para cada uno: qu\u00e9 agregar (prueba, garant\u00eda, pol\u00edticas, transparencia).
3) Recomienda las 5 mejoras de confianza m\u00e1s importantes seg\u00fan mi entrega.

M\u00e1ximo 3 preguntas si hace falta. Termina con una acci\u00f3n de 15 minutos.`,
      action: "La confianza multiplica.",
    },
  },
  {
    id: "18",
    bookId: "ai-marketing-pro",
    category: "operations",
    en: {
      title: "Partnership / influencer outreach (market-aware)",
      capability: "AI can draft outreach messages that fit local etiquette and tone.",
      example: "Output: 10 outreach messages + offer structure.",
      prompt: `Act as a partnerships manager.

Snapshot:
Offer: {{product_offer}}
Customer: {{target_customer}}
Markets: {{markets}}
Channels: {{channels}}

Task:
For the top 2 markets:
1) Identify 3 partnership types that fit (influencers, local businesses, affiliates, communities).
2) Propose a simple collaboration offer (low risk).
3) Write 10 outreach messages (DM/email) with different tones.
4) Write a follow-up message after 3 days.

Ask max 3 questions if needed. End with a 15-minute first action.`,
      action: "Leverage other audiences.",
    },
    es: {
      title: "Alianzas / influencers (seg\u00fan mercado)",
      capability: "La IA redacta mensajes de outreach seg\u00fan etiqueta y tono local.",
      example: "Salida: 10 mensajes + oferta de colaboraci\u00f3n.",
      prompt: `Act\u00faa como manager de alianzas.

Resumen:
Oferta: {{product_offer}}
Cliente: {{target_customer}}
Mercados: {{markets}}
Canales: {{channels}}

Tarea:
Para los 2 mejores mercados:
1) Identifica 3 tipos de alianzas (influencers, negocios locales, afiliados, comunidades).
2) Prop\u00f3n una oferta simple de colaboraci\u00f3n (bajo riesgo).
3) Escribe 10 mensajes de outreach (DM/email) con tonos distintos.
4) Escribe un seguimiento a los 3 d\u00edas.

M\u00e1ximo 3 preguntas si hace falta. Termina con una acci\u00f3n de 15 minutos.`,
      action: "Apal\u00e1ncate en otras audiencias.",
    },
  },
  {
    id: "22",
    bookId: "ai-marketing-pro",
    category: "operations",
    en: {
      title: "KPI dashboard + weekly review (by market)",
      capability: "AI can create a simple dashboard so you know what to improve next week.",
      example: "Output: KPIs + targets + decisions based on data.",
      prompt: `Create a market-aware KPI dashboard and weekly review.

Snapshot:
Objective: {{objective}}
Channels: {{channels}}
Markets: {{markets}}
Budget: {{budget}}

Task:
For each market:
1) Choose 5 KPIs that matter for my objective.
2) Set realistic targets for a small business.
3) Create a 10-minute weekly review checklist.
4) Give decision rules: what to change if KPI is up/down.

Ask max 3 questions if needed. End with a 15-minute first action.`,
      action: "Data beats opinions.",
    },
    es: {
      title: "Dashboard de KPIs + revisi\u00f3n semanal (por mercado)",
      capability: "La IA crea un dashboard simple para saber qu\u00e9 mejorar.",
      example: "Salida: KPIs + metas + decisiones seg\u00fan datos.",
      prompt: `Crea un dashboard de KPIs y una revisi\u00f3n semanal por mercado.

Resumen:
Objetivo: {{objective}}
Canales: {{channels}}
Mercados: {{markets}}
Presupuesto: {{budget}}

Tarea:
Por cada mercado:
1) Elige 5 KPIs importantes seg\u00fan objetivo.
2) Metas realistas para peque\u00f1o negocio.
3) Checklist de revisi\u00f3n semanal (10 min).
4) Reglas de decisi\u00f3n: qu\u00e9 cambiar si un KPI sube/baja.

M\u00e1ximo 3 preguntas si hace falta. Termina con una acci\u00f3n de 15 minutos.`,
      action: "Datos > opiniones.",
    },
  },

  // ── AUTOMATION ──
  {
    id: "20",
    bookId: "ai-marketing-pro",
    category: "automation",
    en: {
      title: "Lead capture \u2192 CRM \u2192 follow-up (workflow)",
      capability: "AI can design a workflow so no lead is lost (tool-agnostic).",
      example: "Output: trigger \u2192 steps \u2192 alerts \u2192 failure handling.",
      prompt: `Design a lead workflow (tool-agnostic).

Snapshot:
Channels: {{channels}}
Markets: {{markets}}
Objective: {{objective}}
Tools: {{tools}}

Workflow must include:
- Lead capture trigger(s)
- Data fields (market, language, source, offer)
- Dedupe rule
- Auto follow-up message (localized)
- Notification to me
- Failure handling + retries

Output: Trigger \u2192 Steps \u2192 Outputs.
End with a 15-minute first action.`,
      action: "Marketing without follow-up leaks money.",
    },
    es: {
      title: "Captura \u2192 CRM \u2192 seguimiento (workflow)",
      capability: "La IA dise\u00f1a un flujo para no perder leads (sin depender de herramienta).",
      example: "Salida: trigger \u2192 pasos \u2192 alertas \u2192 fallos.",
      prompt: `Dise\u00f1a un workflow de leads (sin depender de herramienta).

Resumen:
Canales: {{channels}}
Mercados: {{markets}}
Objetivo: {{objective}}
Herramientas: {{tools}}

Debe incluir:
- Triggers de captura
- Campos (mercado, idioma, fuente, oferta)
- Regla anti-duplicados
- Seguimiento autom\u00e1tico (localizado)
- Notificaci\u00f3n para m\u00ed
- Manejo de fallos + reintentos

Entrega: Trigger \u2192 Pasos \u2192 Salidas.
Termina con una acci\u00f3n de 15 minutos.`,
      action: "Marketing sin seguimiento = fuga de dinero.",
    },
  },
  {
    id: "21",
    bookId: "ai-marketing-pro",
    category: "automation",
    en: {
      title: "Content factory workflow (localized)",
      capability: "AI can automate a weekly pipeline: ideas \u2192 drafts \u2192 approval \u2192 schedule \u2192 report.",
      example: "Output: weekly routine + approvals + report.",
      prompt: `Design a localized content factory workflow.

Snapshot:
Channels: {{channels}}
Markets: {{markets}}
Objective: {{objective}}
Tools: {{tools}}

Workflow must include:
- Weekly idea generation per market
- Draft creation per channel
- Human approval step
- Scheduling
- Weekly performance report by market
- Failure handling

Output: Trigger \u2192 Steps \u2192 Outputs.
End with a 15-minute first action.`,
      action: "One system, multiple markets.",
    },
    es: {
      title: "F\u00e1brica de contenido (localizada)",
      capability: "La IA automatiza: ideas \u2192 borradores \u2192 aprobaci\u00f3n \u2192 programaci\u00f3n \u2192 reporte.",
      example: "Salida: rutina semanal + aprobaciones + reporte.",
      prompt: `Dise\u00f1a un workflow de f\u00e1brica de contenido localizada.

Resumen:
Canales: {{channels}}
Mercados: {{markets}}
Objetivo: {{objective}}
Herramientas: {{tools}}

Debe incluir:
- Ideas semanales por mercado
- Borradores por canal
- Paso de aprobaci\u00f3n humana
- Programaci\u00f3n
- Reporte semanal por mercado
- Manejo de fallos

Entrega: Trigger \u2192 Pasos \u2192 Salidas.
Termina con una acci\u00f3n de 15 minutos.`,
      action: "Un sistema, varios mercados.",
    },
  },

  // ── STRATEGY (continued) ──
  {
    id: "23",
    bookId: "ai-marketing-pro",
    category: "strategy",
    en: {
      title: "Should I sell to other countries? (feasibility)",
      capability: "AI can assess international expansion with realistic constraints.",
      example: "Output: best markets + risks + first steps.",
      prompt: `Act as an international expansion advisor.

Snapshot:
Offer: {{product_offer}}
Delivery constraints: {{delivery}}
Markets I'm considering: {{markets}}
Budget: {{budget}}

Task:
1) Evaluate if cross-border selling is realistic for my offer.
2) Identify the best 2\u20133 markets to test first and why.
3) List top risks (shipping, returns, payment, trust, language).
4) Give a 30-day plan to test a new market with minimal risk.

Ask max 3 questions if needed. End with a 15-minute first action.`,
      action: "Expand smart, not wide.",
    },
    es: {
      title: "\u00bfPuedo vender a otros pa\u00edses? (viabilidad)",
      capability: "La IA eval\u00faa expansi\u00f3n internacional con limitaciones reales.",
      example: "Salida: mejores mercados + riesgos + pasos.",
      prompt: `Act\u00faa como asesor de expansi\u00f3n internacional.

Resumen:
Oferta: {{product_offer}}
Limitaciones de entrega: {{delivery}}
Mercados que considero: {{markets}}
Presupuesto: {{budget}}

Tarea:
1) Eval\u00faa si vender a otros pa\u00edses es realista para mi oferta.
2) Elige 2\u20133 mercados para probar primero y por qu\u00e9.
3) Lista riesgos (env\u00edo, devoluciones, pago, confianza, idioma).
4) Plan de 30 d\u00edas para probar un nuevo mercado con bajo riesgo.

M\u00e1ximo 3 preguntas si hace falta. Termina con una acci\u00f3n de 15 minutos.`,
      action: "Expande con inteligencia.",
    },
  },
  {
    id: "24",
    bookId: "ai-marketing-pro",
    category: "strategy",
    en: {
      title: "30-day marketing roadmap (by market)",
      capability: "AI can combine messaging, content, ads, and ops into one month plan.",
      example: "Output: Week 1\u20134 milestones + KPIs + budget rules.",
      prompt: `Create a 30-day marketing roadmap (market-aware).

Snapshot:
Offer: {{product_offer}}
Customer: {{target_customer}}
Markets: {{markets}}
Objective: {{objective}}
Differentiator: {{differentiator}}
Channels: {{channels}}
Budget: {{budget}}
Delivery: {{delivery}}

Requirements:
- Week 1: positioning + profile/landing trust
- Week 2: content engine + hooks + CTA testing
- Week 3: ads/testing + retargeting + follow-up
- Week 4: optimize + expand to 2nd market + reporting
For each week: tasks, time estimate, KPIs, and budget rules.

Ask max 3 questions if needed. End with a 15-minute first action.`,
      action: "This is your full plan.",
    },
    es: {
      title: "Roadmap de marketing 30 d\u00edas (por mercado)",
      capability: "La IA une mensajes, contenido, ads y operaciones en un plan mensual.",
      example: "Salida: semanas 1\u20134 + KPIs + reglas de presupuesto.",
      prompt: `Crea un roadmap de marketing de 30 d\u00edas (seg\u00fan mercado).

Resumen:
Oferta: {{product_offer}}
Cliente: {{target_customer}}
Mercados: {{markets}}
Objetivo: {{objective}}
Diferenciador: {{differentiator}}
Canales: {{channels}}
Presupuesto: {{budget}}
Entrega: {{delivery}}

Requisitos:
- Semana 1: posicionamiento + confianza (perfil/landing)
- Semana 2: motor de contenido + hooks + test de CTA
- Semana 3: ads/pruebas + retargeting + seguimiento
- Semana 4: optimizar + expandir a 2do mercado + reportes
Por semana: tareas, tiempo, KPIs y reglas de presupuesto.

M\u00e1ximo 3 preguntas si hace falta. Termina con una acci\u00f3n de 15 minutos.`,
      action: "Este es tu plan completo.",
    },
  },
];

/* ═══════════════════════════════════════
   BOOK: AI Automation Starter
   ═══════════════════════════════════════ */

export const AI_AUTOMATION_STARTER_BOOK: Book = {
  id: "ai-automation-starter",
  en: {
    title: "AI Automation Starter",
    description: "24 prompts to build beginner workflows with n8n — Cloud-first.",
  },
  es: {
    title: "Automatización con IA",
    description: "24 prompts para crear workflows para principiantes con n8n — Cloud primero.",
  },
  ebookUrl: {
    en: "/ebooks/ai-automation-starter/en.pdf",
    es: "/ebooks/ai-automation-starter/es.pdf",
  },
  snapshotFields: [
    {
      key: "business_context",
      en: "Business context (what you do)",
      es: "Contexto del negocio (qué haces)",
      placeholder: { en: "e.g. Online store selling handmade jewelry", es: "ej. Tienda online de joyería artesanal" },
    },
    {
      key: "top_use_case",
      en: "Top use case (what to automate first)",
      es: "Caso principal (qué automatizar primero)",
      placeholder: { en: "e.g. Organize incoming bills automatically", es: "ej. Organizar facturas automáticamente" },
    },
    {
      key: "tech_level",
      en: "Tech level",
      es: "Nivel técnico",
      placeholder: { en: "e.g. non-tech / medium / technical", es: "ej. no-tech / medio / técnico" },
    },
    {
      key: "time_budget",
      en: "Time budget (hours/week)",
      es: "Tiempo disponible (horas/semana)",
      placeholder: { en: "e.g. 3-5 hours/week", es: "ej. 3-5 horas/semana" },
    },
    {
      key: "tools",
      en: "Tools you use",
      es: "Herramientas que usas",
      placeholder: { en: "e.g. Google Sheets, Notion, Slack, Shopify", es: "ej. Google Sheets, Notion, Slack, Shopify" },
    },
    {
      key: "trigger_channel",
      en: "Trigger channel",
      es: "Canal trigger",
      placeholder: { en: "e.g. Email / Telegram / WhatsApp / Form", es: "ej. Email / Telegram / WhatsApp / Form" },
    },
    {
      key: "volume",
      en: "Volume (items per week)",
      es: "Volumen (items por semana)",
      placeholder: { en: "e.g. 20-30 invoices/week", es: "ej. 20-30 facturas/semana" },
    },
    {
      key: "constraints",
      en: "Constraints",
      es: "Restricciones",
      placeholder: { en: "e.g. $0 budget, data must stay in Google, no coding", es: "ej. $0 presupuesto, data en Google, sin código" },
    },
  ],
  categories: ["strategy", "automation", "operations", "content", "marketing"],
  recommendedPath: [
    { day: 1, promptIds: ["01", "02", "05"] },
    { day: 2, promptIds: ["06", "08", "10"] },
    { day: 3, promptIds: ["11", "12", "19"] },
    { day: 4, promptIds: ["16", "17", "22"] },
    { day: 5, promptIds: ["23", "24"] },
  ],
};

/* ───── AI Automation Starter — 24 Prompts ───── */

export const AI_AUTOMATION_STARTER_PROMPTS: Prompt[] = [
  // ── DAY 1: STRATEGY + QUICKSTART ──
  {
    id: "01",
    bookId: "ai-automation-starter",
    category: "strategy",
    en: {
      title: "Choose the right path (Cloud vs self-host)",
      capability: "AI can recommend the simplest setup based on skill, time, and risk.",
      example: "Output: your best setup + 7-day plan.",
      prompt: `You are an automation advisor. Help me choose the right setup.

Snapshot:
- Business: {{business_context}}
- #1 use case: {{top_use_case}}
- Tech level: {{tech_level}}
- Time budget: {{time_budget}}
- Tools: {{tools}}
- Trigger channel: {{trigger_channel}}
- Volume: {{volume}}
- Constraints: {{constraints}}

Task:
1) Compare n8n Cloud vs self-host for my situation (pros, cons, cost).
2) Recommend the safest option for a beginner.
3) Give me a 7-day setup plan in table format.
4) List 3 mistakes beginners make and how to avoid them.

If any info is missing, assume reasonable defaults and note them.`,
      action: "Run this prompt, pick the recommended setup, and sign up today.",
    },
    es: {
      title: "Elige el camino correcto (Cloud vs self-host)",
      capability: "La IA recomienda la configuración más simple y segura según tu nivel.",
      example: "Salida: setup recomendado + plan de 7 días.",
      prompt: `Eres un asesor de automatización. Ayúdame a elegir la mejor opción.

Resumen:
- Negocio: {{business_context}}
- Caso #1: {{top_use_case}}
- Nivel técnico: {{tech_level}}
- Tiempo: {{time_budget}}
- Herramientas: {{tools}}
- Canal trigger: {{trigger_channel}}
- Volumen: {{volume}}
- Restricciones: {{constraints}}

Tarea:
1) Compara n8n Cloud vs self-host para mi situación (pros, contras, costo).
2) Recomienda la opción más segura para un principiante.
3) Dame un plan de 7 días en tabla.
4) Lista 3 errores de principiantes y cómo evitarlos.

Si falta información, asume valores razonables y anótalos.`,
      action: "Ejecuta el prompt, elige la opción recomendada y regístrate hoy.",
    },
  },
  {
    id: "02",
    bookId: "ai-automation-starter",
    category: "strategy",
    en: {
      title: "Automation ROI: pick the top 3 workflows",
      capability: "AI can rank automations by time saved, impact, complexity, and risk.",
      example: "Output: top 3 + what to build this week.",
      prompt: `Act as a small-business automation strategist.

Snapshot:
- Business: {{business_context}}
- Use case idea: {{top_use_case}}
- Tools: {{tools}}
- Volume: {{volume}}
- Constraints: {{constraints}}

Task:
1) Propose 10 beginner-friendly automations (no coding).
2) Rank in a table: Time Saved / Revenue Impact / Complexity / Risk.
3) Pick the top 3 and explain why.
4) Give me a "build this week" action plan for #1.

If any info is missing, assume reasonable defaults and note them.`,
      action: "Run this prompt, pick the #1 automation, and start building it today.",
    },
    es: {
      title: "ROI de automatización: elige los 3 mejores",
      capability: "La IA ordena automatizaciones por impacto, tiempo, complejidad y riesgo.",
      example: "Salida: top 3 + qué construir esta semana.",
      prompt: `Actúa como estratega de automatización para pequeños negocios.

Resumen:
- Negocio: {{business_context}}
- Idea: {{top_use_case}}
- Herramientas: {{tools}}
- Volumen: {{volume}}
- Restricciones: {{constraints}}

Tarea:
1) Propón 10 automatizaciones para principiante (sin código).
2) Ordena en tabla: Tiempo Ahorrado / Impacto / Complejidad / Riesgo.
3) Elige las 3 mejores y explica por qué.
4) Dame un plan "construir esta semana" para la #1.

Si falta información, asume valores razonables y anótalos.`,
      action: "Ejecuta el prompt, elige la #1 y empieza a construirla hoy.",
    },
  },
  {
    id: "03",
    bookId: "ai-automation-starter",
    category: "strategy",
    en: {
      title: "Tool stack map (what connects to what)",
      capability: "AI can turn your tool list into a clean integration map.",
      example: "Output: source of truth + fields + cleanup checklist.",
      prompt: `Create an integration map for my business.

Snapshot:
- Business: {{business_context}}
- Tools: {{tools}}
- Trigger channel: {{trigger_channel}}
- Constraints: {{constraints}}

Task:
1) Identify systems of record (where data should live).
2) Identify inputs (email/DM/forms).
3) Identify outputs (notifications, docs, CRM updates).
4) Draw a simple text-based map: Source → Tool → Destination.
5) Flag any missing links or tools I should add.

If any info is missing, assume reasonable defaults and note them.`,
      action: "Run this prompt and draw your tool map on paper or a whiteboard.",
    },
    es: {
      title: "Mapa de herramientas (qué conecta con qué)",
      capability: "La IA convierte tu lista de herramientas en un mapa claro.",
      example: "Salida: fuente de verdad + campos + checklist.",
      prompt: `Crea un mapa de integraciones para mi negocio.

Resumen:
- Negocio: {{business_context}}
- Herramientas: {{tools}}
- Canal trigger: {{trigger_channel}}
- Restricciones: {{constraints}}

Tarea:
1) Define "fuentes de verdad" (dónde vive la data).
2) Entradas (email/DM/forms).
3) Salidas (notificaciones, documentos, CRM).
4) Mapa texto: Fuente → Herramienta → Destino.
5) Señala links o herramientas faltantes.

Si falta información, asume valores razonables y anótalos.`,
      action: "Ejecuta el prompt y dibuja tu mapa de herramientas en papel o pizarra.",
    },
  },
  {
    id: "04",
    bookId: "ai-automation-starter",
    category: "strategy",
    en: {
      title: "Cost planner (executions, AI calls, storage)",
      capability: "AI can estimate cost drivers and add guardrails so beginners stay safe.",
      example: "Output: safe design + monitoring checklist.",
      prompt: `Act as a cost planner for automations.

Snapshot:
- Volume: {{volume}}
- Tools: {{tools}}
- Constraints: {{constraints}}
- Use case: {{top_use_case}}

Task:
1) Estimate main cost drivers (executions, AI calls, storage, APIs).
2) Propose a SAFE design that caps cost (rate limits, batching, approval gates).
3) Weekly monitoring checklist.
4) "Red flag" thresholds that mean I should pause and review.

If any info is missing, assume reasonable defaults and note them.`,
      action: "Run this prompt, set your monthly cost cap, and add a calendar reminder to review weekly.",
    },
    es: {
      title: "Planificador de costos (ejecuciones, IA, storage)",
      capability: "La IA estima costos y pone límites para evitar sorpresas.",
      example: "Salida: diseño seguro + checklist semanal.",
      prompt: `Actúa como planificador de costos para automatizaciones.

Resumen:
- Volumen: {{volume}}
- Herramientas: {{tools}}
- Restricciones: {{constraints}}
- Caso: {{top_use_case}}

Tarea:
1) Estima costos principales (ejecuciones, IA, storage, APIs).
2) Diseño SEGURO con límites (rate limits, lotes, aprobaciones).
3) Checklist semanal de monitoreo.
4) Umbrales "bandera roja" para pausar y revisar.

Si falta información, asume valores razonables y anótalos.`,
      action: "Ejecuta el prompt, fija tu límite mensual y pon recordatorio semanal.",
    },
  },
  // ── DAY 1-2: AUTOMATION CORE ──
  {
    id: "05",
    bookId: "ai-automation-starter",
    category: "automation",
    en: {
      title: "n8n Cloud quickstart (safe beginner setup)",
      capability: "AI can generate a step-by-step setup checklist (credentials + testing).",
      example: "Output: setup checklist + first test workflow.",
      prompt: `You are a n8n onboarding coach for beginners.

Snapshot:
- Tools: {{tools}}
- Trigger channel: {{trigger_channel}}
- Tech level: {{tech_level}}

Task:
1) Beginner checklist to set up n8n Cloud safely.
2) Build a first test workflow: trigger → log → notify.
3) Explain how to test without breaking anything.
4) Explain how to store secrets safely.

Keep instructions simple. Assume zero n8n experience.`,
      action: "Run this prompt, create your n8n Cloud account, and build the test workflow.",
    },
    es: {
      title: "n8n Cloud inicio rápido (configuración segura)",
      capability: "La IA crea un checklist paso a paso (credenciales + pruebas).",
      example: "Salida: checklist + workflow de prueba.",
      prompt: `Eres un coach de n8n para principiantes.

Resumen:
- Herramientas: {{tools}}
- Canal trigger: {{trigger_channel}}
- Nivel técnico: {{tech_level}}

Tarea:
1) Checklist para configurar n8n Cloud de forma segura.
2) Workflow de prueba: trigger → log → notificar.
3) Cómo probar sin romper nada.
4) Cómo guardar secretos de forma segura.

Mantén las instrucciones simples. Asume cero experiencia con n8n.`,
      action: "Ejecuta el prompt, crea tu cuenta n8n Cloud y construye el workflow de prueba.",
    },
  },
  {
    id: "06",
    bookId: "ai-automation-starter",
    category: "automation",
    en: {
      title: "Workflow blueprint generator (nodes + data fields)",
      capability: "AI can design a node-by-node blueprint you can build in n8n.",
      example: "Output: nodes + schema + error handling + test plan.",
      prompt: `Design an n8n workflow blueprint for my use case.

Snapshot:
- Use case: {{top_use_case}}
- Tools: {{tools}}
- Trigger channel: {{trigger_channel}}
- Volume: {{volume}}
- Constraints: {{constraints}}

Output format:
1) Goal (one sentence).
2) Trigger node(s).
3) Processing nodes (step by step).
4) Output node(s) (where data lands).
5) Data schema (fields at each step).
6) Error handling (what if a node fails).
7) Test plan (5 test cases with expected results).

Keep it beginner-friendly. Use n8n node names.`,
      action: "Run this prompt and build the first 3 nodes of your blueprint in n8n.",
    },
    es: {
      title: "Generador de blueprint (nodos + campos)",
      capability: "La IA diseña un blueprint para construir nodo por nodo.",
      example: "Salida: nodos + esquema + errores + pruebas.",
      prompt: `Diseña un blueprint de workflow en n8n para mi caso.

Resumen:
- Caso: {{top_use_case}}
- Herramientas: {{tools}}
- Canal trigger: {{trigger_channel}}
- Volumen: {{volume}}
- Restricciones: {{constraints}}

Formato:
1) Meta (una oración).
2) Trigger(s).
3) Nodos de procesamiento (paso a paso).
4) Nodos de salida (dónde llega la data).
5) Esquema de datos (campos en cada paso).
6) Manejo de errores (qué pasa si un nodo falla).
7) Plan de pruebas (5 casos con resultados esperados).

Para principiantes. Usa nombres de nodos de n8n.`,
      action: "Ejecuta el prompt y construye los primeros 3 nodos en n8n.",
    },
  },
  {
    id: "07",
    bookId: "ai-automation-starter",
    category: "automation",
    en: {
      title: "Human approval step (avoid disasters)",
      capability: "AI can add approvals so automations stay safe and trustworthy.",
      example: "Output: approval UX + logs + rollback plan.",
      prompt: `Add a human approval step to my automation.

Snapshot:
- Use case: {{top_use_case}}
- Trigger channel: {{trigger_channel}}
- Tools: {{tools}}
- Constraints: {{constraints}}

Task:
1) Identify risk points where approvals are needed.
2) Propose an approval UX (Telegram/Email/Slack) with Approve/Reject/Edit.
3) Add audit fields (who approved, when, what changed).
4) Timeout rule (what happens if nobody responds in 24h).
5) Rollback plan if something goes wrong after approval.

Keep it simple and safe for beginners.`,
      action: "Run this prompt and add the approval step to your most critical workflow.",
    },
    es: {
      title: "Aprobación humana (evita desastres)",
      capability: "La IA agrega aprobaciones para mantener el flujo seguro.",
      example: "Salida: UX de aprobación + logs + rollback.",
      prompt: `Agrega un paso de aprobación humana a mi automatización.

Resumen:
- Caso: {{top_use_case}}
- Canal trigger: {{trigger_channel}}
- Herramientas: {{tools}}
- Restricciones: {{constraints}}

Tarea:
1) Puntos de riesgo donde se necesita aprobación.
2) UX (Telegram/Email/Slack) con Aprobar/Rechazar/Editar.
3) Campos de auditoría (quién aprobó, cuándo, qué cambió).
4) Regla de timeout (qué pasa si nadie responde en 24h).
5) Plan de rollback si algo sale mal después de aprobar.

Mantén simple y seguro para principiantes.`,
      action: "Ejecuta el prompt y agrega la aprobación a tu workflow más crítico.",
    },
  },
  {
    id: "08",
    bookId: "ai-automation-starter",
    category: "automation",
    en: {
      title: "Telegram intake (easy trigger for photos/PDFs)",
      capability: "AI can design a Telegram intake so you automate from documents fast.",
      example: "Output: nodes + schema + 5 tests.",
      prompt: `Design a Telegram intake workflow in n8n.

Snapshot:
- Use case: {{top_use_case}}
- Tools: {{tools}}
- Volume: {{volume}}
- Constraints: {{constraints}}

Requirements:
- Send photo/PDF/text → workflow starts.
- Extract key fields only if needed.
- Store file + metadata in organized structure.
- Notify me when processed.

Output:
1) Node-by-node blueprint.
2) Data schema (fields per step).
3) 5 test cases with expected results.
4) Error handling (what if file is too large or unreadable).`,
      action: "Run this prompt, set up the Telegram bot, and send a test photo.",
    },
    es: {
      title: "Entrada por Telegram (trigger más fácil)",
      capability: "La IA diseña un flujo por Telegram para fotos/PDFs sin complicaciones.",
      example: "Salida: nodos + esquema + 5 pruebas.",
      prompt: `Diseña un workflow de entrada por Telegram en n8n.

Resumen:
- Caso: {{top_use_case}}
- Herramientas: {{tools}}
- Volumen: {{volume}}
- Restricciones: {{constraints}}

Requisitos:
- Enviar foto/PDF/texto → inicia workflow.
- Extraer campos solo si hace falta.
- Guardar archivo + metadata organizada.
- Notificarme cuando se procese.

Salida:
1) Blueprint nodo por nodo.
2) Esquema de datos (campos por paso).
3) 5 casos de prueba con resultados esperados.
4) Manejo de errores (archivo grande o ilegible).`,
      action: "Ejecuta el prompt, configura el bot de Telegram y envía una foto de prueba.",
    },
  },
  {
    id: "09",
    bookId: "ai-automation-starter",
    category: "automation",
    en: {
      title: "WhatsApp trigger (safe beginner options)",
      capability: "AI can explain WhatsApp options without fragile hacks and propose a safe fallback.",
      example: "Output: safest approach + backup trigger + 7-day plan.",
      prompt: `I want WhatsApp as a trigger, but I'm a beginner.

Snapshot:
- Use case: {{top_use_case}}
- Tools: {{tools}}
- Tech level: {{tech_level}}
- Constraints: {{constraints}}

Task:
1) Explain WhatsApp automation options (official API, providers, limitations).
2) Recommend the safest beginner approach with lowest cost.
3) If WhatsApp is too complex, propose a backup trigger (Telegram/Email/Form).
4) Give me a 7-day plan to set up the recommended option.
5) List what NOT to do (avoid bans, fragile hacks).

Be honest about limitations.`,
      action: "Run this prompt and decide: WhatsApp, Telegram, or Email as your trigger.",
    },
    es: {
      title: "Trigger por WhatsApp (opciones seguras)",
      capability: "La IA explica opciones sin hacks frágiles y propone un plan seguro.",
      example: "Salida: mejor opción + fallback + plan 7 días.",
      prompt: `Quiero usar WhatsApp como trigger, pero soy principiante.

Resumen:
- Caso: {{top_use_case}}
- Herramientas: {{tools}}
- Nivel técnico: {{tech_level}}
- Restricciones: {{constraints}}

Tarea:
1) Explica opciones de WhatsApp (API oficial, proveedores, limitaciones).
2) Recomienda el enfoque más seguro y de bajo costo para principiante.
3) Si WhatsApp es complejo, propón trigger alternativo (Telegram/Email/Form).
4) Plan de 7 días para la opción recomendada.
5) Lista qué NO hacer (evitar bans, hacks frágiles).

Sé honesto sobre las limitaciones.`,
      action: "Ejecuta el prompt y decide: WhatsApp, Telegram o Email como trigger.",
    },
  },
  // ── DAY 2-3: OPERATIONS ──
  {
    id: "10",
    bookId: "ai-automation-starter",
    category: "operations",
    en: {
      title: "Bills organizer (photo/PDF → month/type/vendor)",
      capability: "AI can extract invoice fields and auto-file them consistently.",
      example: "Output: folder/table schema + workflow nodes + alerts.",
      prompt: `Design a "Bills Organizer" automation in n8n.

Snapshot:
- Trigger channel: {{trigger_channel}}
- Tools: {{tools}}
- Volume: {{volume}}
- Constraints: {{constraints}}

Requirements:
1) Input: photo/PDF (utilities, rent, suppliers).
2) Extract: vendor, amount, date, category, recurring? (yes/no).
3) File in folder: YYYY-MM / Category / Vendor_Date_Amount.
4) Log to a table/spreadsheet.
5) Alert if amount is unusually high.

Output: folder structure + table schema + workflow nodes + test plan.`,
      action: "Run this prompt, snap a photo of your latest bill, and test the workflow.",
    },
    es: {
      title: "Organizador de facturas (foto/PDF → mes/tipo/proveedor)",
      capability: "La IA extrae campos y archiva con consistencia.",
      example: "Salida: esquema + nodos + alertas.",
      prompt: `Diseña una automatización "Organizador de facturas" en n8n.

Resumen:
- Canal trigger: {{trigger_channel}}
- Herramientas: {{tools}}
- Volumen: {{volume}}
- Restricciones: {{constraints}}

Requisitos:
1) Entrada: foto/PDF (servicios, renta, proveedores).
2) Extraer: proveedor, monto, fecha, categoría, ¿recurrente? (sí/no).
3) Archivar: YYYY-MM / Categoría / Proveedor_Fecha_Monto.
4) Registrar en tabla/hoja de cálculo.
5) Alertar si el monto es inusualmente alto.

Salida: estructura de carpetas + esquema + nodos + plan de pruebas.`,
      action: "Ejecuta el prompt, toma foto de tu última factura y prueba el workflow.",
    },
  },
  {
    id: "11",
    bookId: "ai-automation-starter",
    category: "operations",
    en: {
      title: "Invoice reminders (timed + logged + stop when paid)",
      capability: "AI can write polite reminder sequences and stop automatically when paid.",
      example: "Output: schema + schedule + messages.",
      prompt: `Create an invoice reminder automation.

Snapshot:
- Tools: {{tools}}
- Volume: {{volume}}
- Constraints: {{constraints}}

Requirements:
- Track invoices (sent/paid/overdue).
- Remind Day 3 / Day 7 / Day 14 after sending.
- Professional tone in all messages.
- Stop reminders immediately when PAID.
- Log all actions (who, when, status change).

Output: data schema + reminder schedule + message templates + workflow nodes.`,
      action: "Run this prompt and set up reminders for your 3 most important invoices.",
    },
    es: {
      title: "Recordatorios de pago (programados + con registro)",
      capability: "La IA crea secuencias educadas y se detiene cuando está PAGADA.",
      example: "Salida: esquema + calendario + mensajes.",
      prompt: `Crea una automatización de recordatorios de pago.

Resumen:
- Herramientas: {{tools}}
- Volumen: {{volume}}
- Restricciones: {{constraints}}

Requisitos:
- Control de facturas (enviada/pagada/vencida).
- Recordar Día 3 / Día 7 / Día 14 después de enviar.
- Tono profesional en todos los mensajes.
- Detener recordatorios inmediatamente cuando está PAGADA.
- Registrar acciones (quién, cuándo, cambio de estado).

Salida: esquema de datos + calendario + plantillas de mensajes + nodos.`,
      action: "Ejecuta el prompt y configura recordatorios para tus 3 facturas más importantes.",
    },
  },
  {
    id: "12",
    bookId: "ai-automation-starter",
    category: "operations",
    en: {
      title: "Appointments + reminders (reduce no-shows)",
      capability: "AI can generate confirmations/reminders to reduce cancellations.",
      example: "Output: messages + nodes + status tracking.",
      prompt: `Design an appointments workflow (beginner-friendly).

Snapshot:
- Business: {{business_context}}
- Tools: {{tools}}
- Trigger channel: {{trigger_channel}}
- Constraints: {{constraints}}

Requirements:
- New booking intake (form/email/calendar).
- Confirmation message immediately.
- Reminders: 24h before and 2h before.
- Track status: confirmed / rescheduled / cancelled / no-show.
- Log all actions.

Output: message templates + workflow nodes + status tracking table.`,
      action: "Run this prompt and set up confirmation + reminder for your next appointment.",
    },
    es: {
      title: "Citas + recordatorios (menos ausencias)",
      capability: "La IA crea confirmaciones y recordatorios que reducen cancelaciones.",
      example: "Salida: mensajes + nodos + estados.",
      prompt: `Diseña un workflow de citas (fácil para principiantes).

Resumen:
- Negocio: {{business_context}}
- Herramientas: {{tools}}
- Canal trigger: {{trigger_channel}}
- Restricciones: {{constraints}}

Requisitos:
- Entrada de cita nueva (form/email/calendario).
- Mensaje de confirmación inmediato.
- Recordatorios: 24h antes y 2h antes.
- Estados: confirmada / reprogramada / cancelada / no-show.
- Registrar acciones.

Salida: plantillas de mensajes + nodos + tabla de estados.`,
      action: "Ejecuta el prompt y configura confirmación + recordatorio para tu próxima cita.",
    },
  },
  {
    id: "13",
    bookId: "ai-automation-starter",
    category: "operations",
    en: {
      title: "Support triage (tag + route + summarize)",
      capability: "AI can summarize messages and route them fast without auto-reply risk.",
      example: "Output: tags + summaries + routing rules.",
      prompt: `Design a support triage workflow.

Snapshot:
- Tools: {{tools}}
- Trigger channel: {{trigger_channel}}
- Volume: {{volume}}
- Constraints: {{constraints}}

Requirements:
- Intake messages (email/DM/form).
- Classify: billing / delivery / product / complaint / other.
- Summarize each message in 3 bullets.
- Route to the right person or queue.
- Do NOT auto-reply (human reviews first).

Output: classification tags + summary format + routing rules + workflow nodes.`,
      action: "Run this prompt and test with 5 real support messages from your inbox.",
    },
    es: {
      title: "Triage de soporte (etiquetar + enrutar + resumir)",
      capability: "La IA resume mensajes y los organiza rápido sin riesgos de auto-respuesta.",
      example: "Salida: etiquetas + resúmenes + reglas.",
      prompt: `Diseña un workflow de triage de soporte.

Resumen:
- Herramientas: {{tools}}
- Canal trigger: {{trigger_channel}}
- Volumen: {{volume}}
- Restricciones: {{constraints}}

Requisitos:
- Entrada de mensajes (email/DM/form).
- Clasificar: cobros / entrega / producto / queja / otro.
- Resumen en 3 bullets por mensaje.
- Enrutar a la persona o cola correcta.
- NO auto-responder (humano revisa primero).

Salida: etiquetas + formato de resumen + reglas de enrutamiento + nodos.`,
      action: "Ejecuta el prompt y prueba con 5 mensajes reales de tu bandeja.",
    },
  },
  {
    id: "14",
    bookId: "ai-automation-starter",
    category: "operations",
    en: {
      title: "Recurring bills due-date alerts (rent/utilities/suppliers)",
      capability: "AI can standardize recurring bills and notify you before deadlines.",
      example: "Output: schedule + stop-rules + simple tracking table.",
      prompt: `Design a recurring bills alert system.

Snapshot:
- Tools: {{tools}}
- Trigger channel: {{trigger_channel}}
- Volume: {{volume}}
- Constraints: {{constraints}}

Requirements:
1) Track recurring bills (rent, utilities, subscriptions, key suppliers).
2) Alert: 7 days before + 2 days before + day-of.
3) Mark as paid when confirmed.
4) Stop alerts for paid bills.
5) Monthly summary of upcoming payments.

Output: bills table schema + alert schedule + stop rules + workflow nodes.`,
      action: "Run this prompt and add your 3 biggest recurring bills to the system.",
    },
    es: {
      title: "Alertas de pagos recurrentes (renta/servicios/proveedores)",
      capability: "La IA estandariza pagos recurrentes y avisa antes de la fecha límite.",
      example: "Salida: calendario + reglas + tabla simple.",
      prompt: `Diseña un sistema de alertas de pagos recurrentes.

Resumen:
- Herramientas: {{tools}}
- Canal trigger: {{trigger_channel}}
- Volumen: {{volume}}
- Restricciones: {{constraints}}

Requisitos:
1) Control de pagos recurrentes (renta, servicios, suscripciones, proveedores).
2) Alertas: 7 días antes + 2 días antes + el día.
3) Marcar como pagado al confirmar.
4) Detener alertas cuando está pagado.
5) Resumen mensual de pagos próximos.

Salida: tabla + calendario de alertas + reglas + nodos.`,
      action: "Ejecuta el prompt y agrega tus 3 pagos recurrentes más grandes.",
    },
  },
  {
    id: "15",
    bookId: "ai-automation-starter",
    category: "operations",
    en: {
      title: "Monthly accountant pack (auto-export + summary)",
      capability: "AI can create a clean monthly pack (files + summary + totals) ready to send.",
      example: "Output: folder pack + summary + checklist for missing docs.",
      prompt: `Create a monthly "accountant pack" automation.

Snapshot:
- Tools: {{tools}}
- Volume: {{volume}}
- Constraints: {{constraints}}

Requirements:
1) Collect bills/invoices/receipts for the month.
2) Ensure naming consistency (Vendor_Date_Amount).
3) Generate a summary table: totals by category + vendor.
4) Flag missing items (expected recurring bills not received).
5) Package into a single folder or zip ready to send.

Output: folder structure + summary template + checklist + workflow nodes.`,
      action: "Run this prompt and gather last month's bills to test the pack.",
    },
    es: {
      title: "Paquete mensual para contabilidad (export + resumen)",
      capability: "La IA crea un paquete limpio mensual (archivos + resumen + totales) listo para enviar.",
      example: "Salida: carpeta + resumen + checklist de faltantes.",
      prompt: `Crea una automatización de "paquete mensual para contabilidad".

Resumen:
- Herramientas: {{tools}}
- Volumen: {{volume}}
- Restricciones: {{constraints}}

Requisitos:
1) Reunir facturas/recibos del mes.
2) Nombres consistentes (Proveedor_Fecha_Monto).
3) Resumen: totales por categoría + proveedor.
4) Señalar faltantes (recurrentes esperados).
5) Empaquetar en carpeta o zip listo para enviar.

Salida: estructura de carpetas + resumen + checklist + nodos.`,
      action: "Ejecuta el prompt y reúne las facturas del mes pasado para probar.",
    },
  },
  // ── DAY 3-4: CONTENT + MARKETING ──
  {
    id: "16",
    bookId: "ai-automation-starter",
    category: "content",
    en: {
      title: "Content ideas factory (weekly, lightweight)",
      capability: "AI can generate repeatable content ideas from your real business context.",
      example: "Output: 20 ideas + a 5-post weekly plan.",
      prompt: `Create a weekly content-ideas workflow plan (no heavy tech).

Snapshot:
- Business: {{business_context}}
- Tools: {{tools}}
- Time budget: {{time_budget}}
- Constraints: {{constraints}}

Task:
1) Simple workflow: ideas → draft → approval → schedule.
2) Generate 20 post ideas based on my business (with suggested platform).
3) Create a 5-post weekly plan.
4) Include a repeatable template I can use every week.

Keep it lightweight — this should take under 1 hour/week total.`,
      action: "Run this prompt and schedule your first 5 posts for next week.",
    },
    es: {
      title: "Fábrica de ideas (semanal, simple)",
      capability: "La IA genera ideas repetibles basadas en tu negocio real.",
      example: "Salida: 20 ideas + plan semanal de 5 posts.",
      prompt: `Crea un plan de workflow semanal de ideas (sin tech pesado).

Resumen:
- Negocio: {{business_context}}
- Herramientas: {{tools}}
- Tiempo: {{time_budget}}
- Restricciones: {{constraints}}

Tarea:
1) Workflow: ideas → borrador → aprobación → programación.
2) Genera 20 ideas de posts basadas en mi negocio (con plataforma sugerida).
3) Plan semanal de 5 posts.
4) Plantilla repetible para cada semana.

Mantenlo ligero — debería tomar menos de 1 hora/semana en total.`,
      action: "Ejecuta el prompt y programa tus primeros 5 posts para la próxima semana.",
    },
  },
  {
    id: "17",
    bookId: "ai-automation-starter",
    category: "content",
    en: {
      title: "Repurpose pipeline (1 idea → 5 formats)",
      capability: "AI can repurpose one message into multiple formats consistently.",
      example: "Output: 5 formats + a storage workflow plan.",
      prompt: `Repurpose one core message into multiple formats.

Snapshot:
- Business: {{business_context}}
- Tools: {{tools}}
- Constraints: {{constraints}}

Input message (paste): [YOUR MESSAGE]

Task:
Create:
1) IG short post (caption + hashtags).
2) Twitter/X thread (3-5 tweets).
3) Email newsletter paragraph.
4) LinkedIn post.
5) Short video script (30-60 seconds).

Keep my brand voice consistent across all formats. Suggest a simple workflow to repeat this weekly.`,
      action: "Run this prompt with your latest post and create all 5 formats.",
    },
    es: {
      title: "Pipeline de reutilización (1 idea → 5 formatos)",
      capability: "La IA reutiliza un mensaje en múltiples formatos con consistencia.",
      example: "Salida: 5 formatos + plan de workflow.",
      prompt: `Reutiliza un mensaje central en varios formatos.

Resumen:
- Negocio: {{business_context}}
- Herramientas: {{tools}}
- Restricciones: {{constraints}}

Mensaje base (pega): [TU MENSAJE]

Tarea:
Crea:
1) Post corto IG (caption + hashtags).
2) Hilo Twitter/X (3-5 tweets).
3) Párrafo para newsletter email.
4) Post LinkedIn.
5) Guion de video corto (30-60 seg).

Mantén la voz de marca consistente. Sugiere un workflow semanal simple para repetir.`,
      action: "Ejecuta el prompt con tu último post y crea los 5 formatos.",
    },
  },
  {
    id: "18",
    bookId: "ai-automation-starter",
    category: "operations",
    en: {
      title: "Client onboarding pack (welcome + checklist + folder)",
      capability: "AI can generate a clean onboarding flow so every new client gets the same experience.",
      example: "Output: onboarding steps + templates + where to store everything.",
      prompt: `Design a client onboarding automation.

Snapshot:
- Business: {{business_context}}
- Tools: {{tools}}
- Trigger channel: {{trigger_channel}}
- Constraints: {{constraints}}

Requirements:
- Trigger when a new client pays/books/signs up.
- Create a client folder with a standard structure.
- Send a welcome message + next steps.
- Create a checklist of deliverables.
- Remind me if any step is incomplete after 48h.

Output: onboarding steps + message templates + folder structure + workflow nodes.`,
      action: "Run this prompt and onboard your next client with the new system.",
    },
    es: {
      title: "Onboarding de clientes (bienvenida + checklist + carpeta)",
      capability: "La IA crea un flujo de onboarding consistente para cada nuevo cliente.",
      example: "Salida: pasos + plantillas + dónde guardar todo.",
      prompt: `Diseña una automatización de onboarding de clientes.

Resumen:
- Negocio: {{business_context}}
- Herramientas: {{tools}}
- Canal trigger: {{trigger_channel}}
- Restricciones: {{constraints}}

Requisitos:
- Trigger cuando un cliente paga/reserva/se registra.
- Crear carpeta del cliente con estructura estándar.
- Enviar bienvenida + próximos pasos.
- Crear checklist de entregables.
- Recordarme si algún paso está incompleto después de 48h.

Salida: pasos + plantillas + estructura de carpetas + nodos.`,
      action: "Ejecuta el prompt y haz onboarding de tu próximo cliente con el nuevo sistema.",
    },
  },
  {
    id: "19",
    bookId: "ai-automation-starter",
    category: "marketing",
    en: {
      title: "Lead capture → follow-up (beginner system)",
      capability: "AI can design a lead system so you never forget to reply and close.",
      example: "Output: capture + reminders + 3 follow-ups (approved).",
      prompt: `Design a beginner lead system.

Snapshot:
- Business: {{business_context}}
- Trigger channel: {{trigger_channel}}
- Tools: {{tools}}
- Volume: {{volume}}
- Constraints: {{constraints}}

Requirements:
- Capture lead (form/email/DM).
- Save lead to a simple table (name, source, date, status).
- Auto-remind me to follow up (Day 1, Day 3, Day 7).
- 3 follow-up message templates (human-approved before sending).
- Mark as converted or lost.

Output: lead table schema + follow-up schedule + message templates + workflow nodes.`,
      action: "Run this prompt and add your last 5 leads to the new tracking table.",
    },
    es: {
      title: "Leads → seguimiento (para principiantes)",
      capability: "La IA diseña un sistema para no olvidar responder y cerrar.",
      example: "Salida: captura + recordatorios + 3 seguimientos.",
      prompt: `Diseña un sistema de leads para principiantes.

Resumen:
- Negocio: {{business_context}}
- Canal trigger: {{trigger_channel}}
- Herramientas: {{tools}}
- Volumen: {{volume}}
- Restricciones: {{constraints}}

Requisitos:
- Capturar lead (form/email/DM).
- Guardar en tabla simple (nombre, fuente, fecha, estado).
- Recordarme hacer follow-up (Día 1, Día 3, Día 7).
- 3 plantillas de seguimiento (aprobadas antes de enviar).
- Marcar como convertido o perdido.

Salida: tabla de leads + calendario + plantillas + nodos.`,
      action: "Ejecuta el prompt y agrega tus últimos 5 leads a la nueva tabla.",
    },
  },
  {
    id: "20",
    bookId: "ai-automation-starter",
    category: "automation",
    en: {
      title: "Lead qualification + routing (simple score)",
      capability: "AI can summarize and score leads so you focus on the best opportunities first.",
      example: "Output: score rules + routing + a safe human review option.",
      prompt: `Create a lead qualification + routing workflow.

Snapshot:
- Business: {{business_context}}
- Trigger channel: {{trigger_channel}}
- Tools: {{tools}}
- Volume: {{volume}}
- Constraints: {{constraints}}

Requirements:
1) Intake lead message + key details.
2) Summarize in 3 bullets.
3) Score (1-10) based on fit, urgency, budget signals.
4) Route: Hot (≥7) → notify immediately. Warm (4-6) → queue. Cold (<4) → archive.
5) Human reviews all before any outreach.

Output: scoring rules + routing logic + notification format + workflow nodes.`,
      action: "Run this prompt and score your current open leads.",
    },
    es: {
      title: "Calificación de leads + enrutamiento (score simple)",
      capability: "La IA resume y puntúa leads para enfocarte en los mejores primero.",
      example: "Salida: reglas + enrutamiento + revisión humana.",
      prompt: `Crea un workflow de calificación y enrutamiento de leads.

Resumen:
- Negocio: {{business_context}}
- Canal trigger: {{trigger_channel}}
- Herramientas: {{tools}}
- Volumen: {{volume}}
- Restricciones: {{constraints}}

Requisitos:
1) Capturar lead + detalles clave.
2) Resumir en 3 bullets.
3) Puntuar (1-10) según fit, urgencia, señales de presupuesto.
4) Enrutar: Caliente (≥7) → notificar. Tibio (4-6) → cola. Frío (<4) → archivo.
5) Humano revisa todo antes de contactar.

Salida: reglas de scoring + lógica + formato de notificación + nodos.`,
      action: "Ejecuta el prompt y puntúa tus leads abiertos actuales.",
    },
  },
  {
    id: "21",
    bookId: "ai-automation-starter",
    category: "marketing",
    en: {
      title: "Review request + testimonials (after delivery)",
      capability: "AI can write friendly review requests and organize testimonials automatically.",
      example: "Output: messages + storage + a simple follow-up system.",
      prompt: `Design a review + testimonial automation.

Snapshot:
- Business: {{business_context}}
- Tools: {{tools}}
- Trigger channel: {{trigger_channel}}
- Volume: {{volume}}
- Constraints: {{constraints}}

Requirements:
- Trigger after delivery/completion (or X days after purchase).
- Send a friendly review request (human-approved tone).
- If positive, ask permission to use as testimonial.
- Store testimonials in an organized table (name, text, rating, date, permission).
- Follow up once if no response after 5 days.

Output: message templates + storage schema + follow-up logic + workflow nodes.`,
      action: "Run this prompt and send a review request to your last 3 clients.",
    },
    es: {
      title: "Solicitar reseñas + testimonios (después de entrega)",
      capability: "La IA crea mensajes y organiza testimonios automáticamente.",
      example: "Salida: mensajes + storage + seguimiento simple.",
      prompt: `Diseña una automatización de reseñas y testimonios.

Resumen:
- Negocio: {{business_context}}
- Herramientas: {{tools}}
- Canal trigger: {{trigger_channel}}
- Volumen: {{volume}}
- Restricciones: {{constraints}}

Requisitos:
- Trigger tras entrega/servicio (o X días después de compra).
- Enviar solicitud de reseña (tono humano).
- Si es positiva, pedir permiso para usarla como testimonio.
- Guardar testimonios organizados (nombre, texto, rating, fecha, permiso).
- Seguimiento si no responde en 5 días.

Salida: plantillas + esquema + lógica de seguimiento + nodos.`,
      action: "Ejecuta el prompt y envía solicitud de reseña a tus últimos 3 clientes.",
    },
  },
  // ── DAY 4-5: REPORTING + RELIABILITY ──
  {
    id: "22",
    bookId: "ai-automation-starter",
    category: "operations",
    en: {
      title: "Daily summary + weekly report (what happened, what failed)",
      capability: "AI can summarize runs, spot errors, and suggest fixes weekly.",
      example: "Output: daily digest + weekly improvements + links to failed items.",
      prompt: `Create a daily + weekly reporting workflow for my automations.

Snapshot:
- Tools: {{tools}}
- Volume: {{volume}}
- Constraints: {{constraints}}

Requirements:
- Daily: runs, successes, failures, top errors.
- Weekly: time saved estimate + improvements to make.
- Include links to logs and failed items.
- Notify me in my preferred channel.

Output: daily digest template + weekly report template + workflow nodes + alert rules.`,
      action: "Run this prompt and set up the daily digest for your active workflows.",
    },
    es: {
      title: "Resumen diario + reporte semanal (qué pasó, qué falló)",
      capability: "La IA resume ejecuciones, detecta errores y propone mejoras.",
      example: "Salida: resumen diario + mejoras + links.",
      prompt: `Crea un workflow de reportes diario + semanal.

Resumen:
- Herramientas: {{tools}}
- Volumen: {{volume}}
- Restricciones: {{constraints}}

Requisitos:
- Diario: ejecuciones, éxitos, fallos y errores frecuentes.
- Semanal: tiempo ahorrado + mejoras sugeridas.
- Links a logs y elementos fallidos.
- Notificar en mi canal preferido.

Salida: plantilla diaria + plantilla semanal + nodos + reglas de alerta.`,
      action: "Ejecuta el prompt y configura el resumen diario de tus workflows activos.",
    },
  },
  {
    id: "23",
    bookId: "ai-automation-starter",
    category: "automation",
    en: {
      title: "Error handling standard (retries, dead-letter, alerts)",
      capability: "AI can add reliability patterns so beginner workflows don't silently fail.",
      example: "Output: retry rules + dead-letter schema + alert checklist.",
      prompt: `Create a standard error-handling pattern for my n8n workflows.

Snapshot:
- Tech level: {{tech_level}}
- Tools: {{tools}}
- Constraints: {{constraints}}

Task:
1) Retry rules (when to retry vs stop).
2) Dead-letter folder/table for failed items.
3) Alert rules (what triggers immediate notification).
4) Recovery steps (how to reprocess failed items).
5) A checklist I can apply to every new workflow.

Keep it beginner-friendly. Explain why each rule matters.`,
      action: "Run this prompt and add error handling to your most-used workflow.",
    },
    es: {
      title: "Estándar de errores (reintentos, dead-letter, alertas)",
      capability: "La IA agrega patrones para que no fallen en silencio.",
      example: "Salida: reglas + dead-letter + checklist.",
      prompt: `Crea un patrón estándar de manejo de errores para workflows en n8n.

Resumen:
- Nivel técnico: {{tech_level}}
- Herramientas: {{tools}}
- Restricciones: {{constraints}}

Tarea:
1) Reglas de reintento (cuándo reintentar vs detener).
2) Carpeta/tabla "dead-letter" para items fallidos.
3) Reglas de alertas (qué activa notificación inmediata).
4) Pasos de recuperación (cómo reprocesar items fallidos).
5) Checklist para aplicar a cada workflow nuevo.

Para principiantes. Explica por qué importa cada regla.`,
      action: "Ejecuta el prompt y agrega manejo de errores a tu workflow más usado.",
    },
  },
  {
    id: "24",
    bookId: "ai-automation-starter",
    category: "strategy",
    en: {
      title: "Privacy & safety checklist (beginner friendly)",
      capability: "AI can help you avoid risky data handling and build trust-safe automations.",
      example: "Output: what to store, what not to store, retention, and a transparency note.",
      prompt: `Create a privacy & safety checklist for my automations.

Snapshot:
- Business: {{business_context}}
- Tools: {{tools}}
- Constraints: {{constraints}}

Task:
1) Identify sensitive data I might handle.
2) Recommend what to store vs not store.
3) Recommend safe retention (how long to keep data).
4) Provide a simple consent/transparency note I can use.
5) List 3 common privacy mistakes beginners make.

Be practical — keep it actionable for a small business.`,
      action: "Run this prompt and complete the privacy checklist for your current automations.",
    },
    es: {
      title: "Checklist de privacidad y seguridad (principiantes)",
      capability: "La IA ayuda a evitar riesgos con datos y crear flujos más seguros.",
      example: "Salida: qué guardar, qué no, retención y nota.",
      prompt: `Crea un checklist de privacidad y seguridad para mis automatizaciones.

Resumen:
- Negocio: {{business_context}}
- Herramientas: {{tools}}
- Restricciones: {{constraints}}

Tarea:
1) Identifica datos sensibles que podría manejar.
2) Qué guardar vs qué NO guardar.
3) Retención segura (cuánto tiempo conservar datos).
4) Nota simple de consentimiento/transparencia.
5) 3 errores comunes de privacidad para principiantes.

Sé práctico — que sea accionable para un negocio pequeño.`,
      action: "Ejecuta el prompt y completa el checklist de privacidad para tus flujos actuales.",
    },
  },
];

/* ═══════════════════════════════════════
   BOOK: AI Sales & Offers Starter
   ═══════════════════════════════════════ */

export const AI_SALES_OFFERS_STARTER_BOOK: Book = {
  id: "ai-sales-offers-starter",
  en: {
    title: "AI Sales & Offers Starter",
    description: "Sales without hype: clear offers, proof, scripts, and follow-up. Read the PDF, copy prompts on the web.",
  },
  es: {
    title: "Ventas y Ofertas con IA \u2014 Inicio",
    description: "Ventas sin humo: ofertas claras, prueba, guiones y seguimiento. Lee el PDF, copia prompts en la web.",
  },
  ebookUrl: {
    en: "/ebooks/ai-sales-offers-starter/en.pdf",
    es: "/ebooks/ai-sales-offers-starter/es.pdf",
  },
  snapshotFields: [
    {
      key: "offer",
      en: "Offer (what you sell + what's included)",
      es: "Oferta (qu\u00e9 vendes + qu\u00e9 incluye)",
      placeholder: { en: "e.g. Custom logo design, 3 concepts + 2 revisions", es: "ej. Dise\u00f1o de logo, 3 conceptos + 2 revisiones" },
    },
    {
      key: "price_range",
      en: "Price range + payment options",
      es: "Rango de precio + formas de pago",
      placeholder: { en: "e.g. $200\u2013$500, 50% deposit + 50% on delivery", es: "ej. $200\u2013$500, 50% anticipo + 50% al entregar" },
    },
    {
      key: "target_customer",
      en: "Target customer (who + main pain)",
      es: "Cliente objetivo (qui\u00e9n + dolor principal)",
      placeholder: { en: "e.g. Small business owners who need a professional brand fast", es: "ej. Due\u00f1os de negocio que necesitan marca profesional r\u00e1pido" },
    },
    {
      key: "markets",
      en: "Markets (countries + languages)",
      es: "Mercados (pa\u00edses + idiomas)",
      placeholder: { en: "e.g. USA (EN), Mexico (ES), Colombia (ES)", es: "ej. USA (EN), M\u00e9xico (ES), Colombia (ES)" },
    },
    {
      key: "differentiator",
      en: "Differentiator (why you vs alternatives)",
      es: "Diferenciador (por qu\u00e9 t\u00fa vs alternativas)",
      placeholder: { en: "e.g. 48h turnaround + unlimited revisions + bilingual", es: "ej. Entrega en 48h + revisiones ilimitadas + biling\u00fce" },
    },
    {
      key: "sales_channel",
      en: "Sales channel (DM/WhatsApp/calls/website/marketplace)",
      es: "Canal de venta (DM/WhatsApp/llamadas/web/marketplace)",
      placeholder: { en: "e.g. Instagram DM + WhatsApp + Calendly calls", es: "ej. DM Instagram + WhatsApp + llamadas por Calendly" },
    },
    {
      key: "capacity",
      en: "Capacity (orders/clients you can handle weekly)",
      es: "Capacidad (\u00f3rdenes/clientes por semana)",
      placeholder: { en: "e.g. 5 clients/week max", es: "ej. M\u00e1x 5 clientes/semana" },
    },
    {
      key: "constraints",
      en: "Constraints (delivery, refunds, compliance, budget)",
      es: "Restricciones (entrega, reembolsos, reglas, presupuesto)",
      placeholder: { en: "e.g. No refunds after draft approval, US + LATAM shipping only", es: "ej. Sin reembolso tras aprobar borrador, env\u00edo solo US + LATAM" },
    },
  ],
  categories: ["strategy", "marketing", "operations", "automation"],
  recommendedPath: [
    { day: 1, promptIds: ["01", "02", "03"] },
    { day: 2, promptIds: ["05", "06", "21"] },
    { day: 3, promptIds: ["07", "09", "10"] },
    { day: 4, promptIds: ["11", "12", "13"] },
    { day: 5, promptIds: ["23", "24", "16"] },
  ],
};

/* ───── AI Sales & Offers Starter — 24 Prompts ───── */

export const AI_SALES_OFFERS_STARTER_PROMPTS: Prompt[] = [
  { id: "01", bookId: "ai-sales-offers-starter", category: "strategy", en: { title: "Offer clarity audit (what you REALLY sell)", capability: "AI can turn a vague offer into a clear, buyer-friendly promise with deliverables and boundaries.", example: "Output: 1-sentence offer + what's included/excluded + who it's for/not for.", prompt: "Act as a practical sales strategist (no hype).\n\nSnapshot:\n- Offer: {{offer}}\n- Price range: {{price_range}}\n- Target customer: {{target_customer}}\n- Markets: {{markets}}\n- Differentiator: {{differentiator}}\n- Sales channel: {{sales_channel}}\n- Capacity: {{capacity}}\n- Constraints: {{constraints}}\n\nTask:\n1) Rewrite my offer into a clear 1-sentence promise (outcome + timeframe if relevant).\n2) List: Included (5 bullets) and Not included (5 bullets).\n3) Define ideal customer vs NOT a fit (3 bullets each).\n4) Write a \"how it works\" 3-step version.\n5) Identify the #1 confusing part of my offer and fix it.\n\nRules: ask max 3 questions if needed. Keep language simple for non-experts.", action: "Do this first. Clear offer = easier marketing + easier sales." }, es: { title: "Auditor\u00eda de oferta (lo que REALMENTE vendes)", capability: "La IA convierte una oferta vaga en una promesa clara con entregables y l\u00edmites.", example: "Salida: oferta en 1 frase + qu\u00e9 incluye/excluye + para qui\u00e9n s\u00ed/no.", prompt: "Act\u00faa como estratega pr\u00e1ctico de ventas (sin humo).\n\nResumen:\n- Oferta: {{offer}}\n- Rango de precio: {{price_range}}\n- Cliente objetivo: {{target_customer}}\n- Mercados: {{markets}}\n- Diferenciador: {{differentiator}}\n- Canal de venta: {{sales_channel}}\n- Capacidad: {{capacity}}\n- Restricciones: {{constraints}}\n\nTarea:\n1) Reescribe mi oferta en 1 frase clara (resultado + tiempo si aplica).\n2) Lista: Incluye (5 bullets) y No incluye (5 bullets).\n3) Cliente ideal vs NO encaja (3 bullets cada uno).\n4) \"C\u00f3mo funciona\" en 3 pasos.\n5) Identifica la parte m\u00e1s confusa de mi oferta y arr\u00e9glala.\n\nReglas: m\u00e1ximo 3 preguntas si hace falta. Lenguaje simple.", action: "Haz esto primero. Oferta clara = marketing y ventas m\u00e1s f\u00e1ciles." } },
  { id: "02", bookId: "ai-sales-offers-starter", category: "strategy", en: { title: "Package & tiers (Basic / Pro / VIP)", capability: "AI can create tiered packages that increase conversion and protect your time/capacity.", example: "Output: 3 tiers + who each is for + upgrade path.", prompt: "Act as an offer architect.\n\nSnapshot:\n- Offer: {{offer}}\n- Price range: {{price_range}}\n- Capacity: {{capacity}}\n- Markets: {{markets}}\n- Constraints: {{constraints}}\n\nTask:\n1) Create 3 tiers (Basic/Pro/VIP) that fit my capacity.\n2) For each tier: deliverables, timeframe, what makes it valuable.\n3) Add 2 \"risk reducers\" (ex: clear timeline, revisions, guarantee, support).\n4) Recommend how to present pricing (range vs fixed vs starting at) depending on my sales channel.\n5) Write a short \"Which plan is for you?\" chooser.\n\nRules: ask max 3 questions if needed. Keep it realistic for small businesses.", action: "Avoid custom quotes at the start \u2014 use tiers." }, es: { title: "Paquetes por niveles (B\u00e1sico / Pro / VIP)", capability: "La IA crea paquetes por niveles que suben conversiones y protegen tu tiempo/capacidad.", example: "Salida: 3 niveles + para qui\u00e9n es cada uno + camino de upgrade.", prompt: "Act\u00faa como arquitecto de ofertas.\n\nResumen:\n- Oferta: {{offer}}\n- Rango de precio: {{price_range}}\n- Capacidad: {{capacity}}\n- Mercados: {{markets}}\n- Restricciones: {{constraints}}\n\nTarea:\n1) Crea 3 niveles (B\u00e1sico/Pro/VIP) que encajen con mi capacidad.\n2) Por nivel: entregables, tiempo, por qu\u00e9 vale.\n3) Agrega 2 \"reduce-riesgo\" (ej: tiempos claros, revisiones, garant\u00eda, soporte).\n4) Recomienda c\u00f3mo mostrar precios (rango/fijo/desde) seg\u00fan mi canal de venta.\n5) Texto corto \"\u00bfQu\u00e9 plan es para ti?\" (selector).\n\nReglas: m\u00e1ximo 3 preguntas si hace falta. Realista para peque\u00f1o negocio.", action: "Evita cotizaciones personalizadas al inicio \u2014 usa niveles." } },
  { id: "03", bookId: "ai-sales-offers-starter", category: "strategy", en: { title: "Pricing logic (beginner-safe)", capability: "AI can propose pricing that matches value, market reality, and your capacity (without guessing blindly).", example: "Output: price anchors + payment options + when to raise prices.", prompt: "Act as a pricing advisor for small businesses.\n\nSnapshot:\n- Offer: {{offer}}\n- Price range: {{price_range}}\n- Target customer: {{target_customer}}\n- Markets: {{markets}}\n- Differentiator: {{differentiator}}\n- Capacity: {{capacity}}\n- Constraints: {{constraints}}\n\nTask:\n1) Recommend a pricing structure: fixed / packages / subscription / pay-per-result (choose best for my offer).\n2) Give 3 price points (low/standard/premium) and what must be included at each.\n3) Propose 2 payment options (deposit, split payments, monthly).\n4) Provide a \"raise prices\" rule based on capacity and demand.\n5) Write a simple explanation I can say when someone asks \"why is it this price?\"\n\nRules: ask max 3 questions if needed. No hype.", action: "Pick one price you can defend with proof + process." }, es: { title: "L\u00f3gica de precios (segura para principiantes)", capability: "La IA propone precios seg\u00fan valor, realidad del mercado y tu capacidad (sin adivinar).", example: "Salida: anclas de precio + pagos + cu\u00e1ndo subir precios.", prompt: "Act\u00faa como asesor de precios para peque\u00f1os negocios.\n\nResumen:\n- Oferta: {{offer}}\n- Rango de precio: {{price_range}}\n- Cliente objetivo: {{target_customer}}\n- Mercados: {{markets}}\n- Diferenciador: {{differentiator}}\n- Capacidad: {{capacity}}\n- Restricciones: {{constraints}}\n\nTarea:\n1) Recomienda estructura: fijo / paquetes / suscripci\u00f3n / por resultado (la mejor para mi caso).\n2) 3 precios (bajo/est\u00e1ndar/premium) y qu\u00e9 debe incluir cada uno.\n3) 2 opciones de pago (dep\u00f3sito, pagos divididos, mensual).\n4) Regla para \"subir precios\" seg\u00fan capacidad y demanda.\n5) Explicaci\u00f3n simple para \"\u00bfpor qu\u00e9 cuesta eso?\"\n\nReglas: m\u00e1ximo 3 preguntas si hace falta. Sin humo.", action: "Elige un precio que puedas defender con prueba + proceso." } },
  { id: "04", bookId: "ai-sales-offers-starter", category: "strategy", en: { title: "Guarantee + risk reducers (country-aware)", capability: "AI can create believable risk reducers that increase trust without promising impossible results.", example: "Output: 3 guarantee options + 5 trust lines.", prompt: "Act as a trust and conversion strategist.\n\nSnapshot:\n- Offer: {{offer}}\n- Markets: {{markets}}\n- Sales channel: {{sales_channel}}\n- Constraints (refunds/returns/compliance): {{constraints}}\n\nTask:\n1) Propose 3 guarantee options that are realistic (not risky for me).\n2) Propose 5 \"risk reducers\" (process transparency, timeline, proof, trial, revisions).\n3) Recommend which one fits my markets best and why.\n4) Write a short \"guarantee + policy\" section for a mobile page.\n5) Warn me about guarantees that could backfire legally or culturally.\n\nRules: ask max 3 questions if needed.", action: "Pick a guarantee you can honor every time." }, es: { title: "Garant\u00eda + reduce-riesgo (seg\u00fan pa\u00eds)", capability: "La IA crea reduce-riesgo cre\u00edbles que aumentan confianza sin prometer imposibles.", example: "Salida: 3 garant\u00edas + 5 l\u00edneas de confianza.", prompt: "Act\u00faa como estratega de confianza y conversi\u00f3n.\n\nResumen:\n- Oferta: {{offer}}\n- Mercados: {{markets}}\n- Canal de venta: {{sales_channel}}\n- Restricciones (reembolsos/devoluciones/reglas): {{constraints}}\n\nTarea:\n1) Prop\u00f3n 3 opciones de garant\u00eda realistas (sin riesgo para m\u00ed).\n2) 5 \"reduce-riesgo\" (proceso claro, tiempos, prueba, prueba/ensayo, revisiones).\n3) Recomienda cu\u00e1l encaja mejor con mis mercados y por qu\u00e9.\n4) Escribe secci\u00f3n corta \"garant\u00eda + pol\u00edtica\" (mobile).\n5) Advierte garant\u00edas que puedan fallar legal o culturalmente.\n\nReglas: m\u00e1ximo 3 preguntas si hace falta.", action: "Elige una garant\u00eda que puedas cumplir siempre." } },
  { id: "05", bookId: "ai-sales-offers-starter", category: "strategy", en: { title: "Positioning vs competitors (simple)", capability: "AI can clarify what you should be known for and how to say it without attacking competitors.", example: "Output: 1 positioning statement + 3 comparisons + proof ideas.", prompt: "Act as a positioning expert.\n\nSnapshot:\n- Offer: {{offer}}\n- Target customer: {{target_customer}}\n- Markets: {{markets}}\n- Differentiator: {{differentiator}}\n- Sales channel: {{sales_channel}}\n\nTask:\n1) Identify my top 3 competitor alternatives (generic types, not brand names).\n2) Create a 1-sentence positioning statement (who + outcome + why me).\n3) Create 3 \"comparison lines\" (me vs alternatives) using benefits and proof.\n4) List 5 proof assets I should collect to support the positioning.\n5) Suggest the best tone for each market (direct vs soft, formal vs casual).\n\nRules: ask max 3 questions if needed.", action: "Use this to stop competing on price." }, es: { title: "Posicionamiento vs competidores (simple)", capability: "La IA aclara por qu\u00e9 ser conocido y c\u00f3mo decirlo sin atacar a otros.", example: "Salida: 1 frase de posicionamiento + 3 comparaciones + pruebas.", prompt: "Act\u00faa como experto en posicionamiento.\n\nResumen:\n- Oferta: {{offer}}\n- Cliente objetivo: {{target_customer}}\n- Mercados: {{markets}}\n- Diferenciador: {{differentiator}}\n- Canal de venta: {{sales_channel}}\n\nTarea:\n1) Identifica 3 alternativas competidoras (tipos gen\u00e9ricos, sin marcas).\n2) Crea 1 frase de posicionamiento (qui\u00e9n + resultado + por qu\u00e9 t\u00fa).\n3) 3 l\u00edneas de comparaci\u00f3n (yo vs alternativas) con beneficios y prueba.\n4) 5 pruebas que debo recolectar para sostener el posicionamiento.\n5) Recomienda tono por mercado (directo/suave, formal/casual).\n\nReglas: m\u00e1ximo 3 preguntas si hace falta.", action: "\u00dasalo para dejar de competir por precio." } },
  { id: "06", bookId: "ai-sales-offers-starter", category: "strategy", en: { title: "Proof plan (what proof to collect first)", capability: "AI can design a proof roadmap so people trust you faster (reviews, before/after, process, guarantees).", example: "Output: 10 proof assets + how to collect them.", prompt: "Act as a proof and trust strategist.\n\nSnapshot:\n- Offer: {{offer}}\n- Markets: {{markets}}\n- Sales channel: {{sales_channel}}\n- Constraints: {{constraints}}\n\nTask:\n1) List 10 proof assets that fit my offer (reviews, screenshots, case studies, demos, process, guarantees).\n2) For each: how to collect it ethically + where to use it (DM, landing page, ads).\n3) Create a 2-week \"proof sprint\" plan (what to do each day).\n4) Write 3 short proof lines (for DM/WhatsApp) in market-appropriate tone.\n\nRules: ask max 3 questions if needed.", action: "Proof beats persuasion. Build proof weekly." }, es: { title: "Plan de prueba (qu\u00e9 prueba recolectar primero)", capability: "La IA dise\u00f1a un plan de prueba para que te crean m\u00e1s r\u00e1pido (rese\u00f1as, antes/despu\u00e9s, proceso).", example: "Salida: 10 pruebas + c\u00f3mo conseguirlas.", prompt: "Act\u00faa como estratega de prueba y confianza.\n\nResumen:\n- Oferta: {{offer}}\n- Mercados: {{markets}}\n- Canal de venta: {{sales_channel}}\n- Restricciones: {{constraints}}\n\nTarea:\n1) Lista 10 pruebas que encajen con mi oferta (rese\u00f1as, capturas, casos, demo, proceso, garant\u00eda).\n2) Por cada una: c\u00f3mo conseguirla de forma \u00e9tica + d\u00f3nde usarla (DM, landing, ads).\n3) Plan de 2 semanas \"sprint de prueba\" (qu\u00e9 hacer cada d\u00eda).\n4) 3 l\u00edneas cortas de prueba (para DM/WhatsApp) con tono por mercado.\n\nReglas: m\u00e1ximo 3 preguntas si hace falta.", action: "La prueba vence la persuasi\u00f3n. Crea prueba cada semana." } },
  { id: "07", bookId: "ai-sales-offers-starter", category: "marketing", en: { title: "Discovery questions script (DM or call)", capability: "AI can generate a short, natural discovery script that qualifies leads without sounding salesy.", example: "Output: 8 questions + branching + next step CTA.", prompt: "Act as a consultative salesperson.\n\nSnapshot:\n- Offer: {{offer}}\n- Target customer: {{target_customer}}\n- Markets: {{markets}}\n- Sales channel: {{sales_channel}}\n- Constraints: {{constraints}}\n\nTask:\n1) Write a discovery script (DM/WhatsApp or call) with 6\u20138 questions.\n2) Include branching: if they have budget / if they don't; if urgent / if not.\n3) Define \"qualification signals\" (green/yellow/red flags).\n4) End with 2 next steps: book a call / send proposal / send checkout link (based on channel).\n5) Make tone fit the market (direct vs soft).\n\nRules: ask max 3 questions if needed.", action: "Use 6\u20138 questions max. Don't interrogate." }, es: { title: "Guion de descubrimiento (DM o llamada)", capability: "La IA crea un guion corto y natural para calificar sin sonar vendedor.", example: "Salida: 8 preguntas + ramificaciones + CTA final.", prompt: "Act\u00faa como vendedor consultivo.\n\nResumen:\n- Oferta: {{offer}}\n- Cliente objetivo: {{target_customer}}\n- Mercados: {{markets}}\n- Canal de venta: {{sales_channel}}\n- Restricciones: {{constraints}}\n\nTarea:\n1) Guion de descubrimiento (DM/WhatsApp o llamada) con 6\u20138 preguntas.\n2) Ramificaciones: con presupuesto/sin; urgente/no urgente.\n3) Se\u00f1ales de calificaci\u00f3n (verde/amarillo/rojo).\n4) Termina con 2 pr\u00f3ximos pasos seg\u00fan canal (llamada/propuesta/link de pago).\n5) Ajusta el tono por mercado (directo vs suave).\n\nReglas: m\u00e1ximo 3 preguntas si hace falta.", action: "Usa 6\u20138 preguntas m\u00e1ximo. Sin interrogatorio." } },
  { id: "08", bookId: "ai-sales-offers-starter", category: "marketing", en: { title: "Qualification filter (who NOT to sell to)", capability: "AI can create a clear qualification filter that saves time and avoids bad clients.", example: "Output: red flags + polite rejection scripts.", prompt: "Act as a sales qualification expert.\n\nSnapshot:\n- Offer: {{offer}}\n- Capacity: {{capacity}}\n- Sales channel: {{sales_channel}}\n- Constraints: {{constraints}}\n\nTask:\n1) Define my ideal buyer profile (5 bullets).\n2) Define 8 red flags (people I should NOT sell to).\n3) Write 3 polite rejection messages (DM/WhatsApp/email), market-appropriate.\n4) Write 2 \"redirect\" options (smaller package, waitlist, free resource).\n5) Create a simple decision flow: accept / redirect / decline.\n\nRules: ask max 3 questions if needed.", action: "Saying no protects your brand and capacity." }, es: { title: "Filtro de calificaci\u00f3n (a qui\u00e9n NO vender)", capability: "La IA crea un filtro claro para ahorrar tiempo y evitar malos clientes.", example: "Salida: red flags + mensajes de rechazo educados.", prompt: "Act\u00faa como experto en calificaci\u00f3n de ventas.\n\nResumen:\n- Oferta: {{offer}}\n- Capacidad: {{capacity}}\n- Canal de venta: {{sales_channel}}\n- Restricciones: {{constraints}}\n\nTarea:\n1) Perfil ideal de comprador (5 bullets).\n2) 8 red flags (a qui\u00e9n NO vender).\n3) 3 mensajes de rechazo educados (DM/WhatsApp/email) con tono por mercado.\n4) 2 opciones de redirecci\u00f3n (paquete peque\u00f1o, lista de espera, recurso gratis).\n5) Flujo simple: aceptar / redirigir / declinar.\n\nReglas: m\u00e1ximo 3 preguntas si hace falta.", action: "Decir que no protege tu marca y capacidad." } },
  { id: "09", bookId: "ai-sales-offers-starter", category: "marketing", en: { title: "DM / WhatsApp opener (non-pushy)", capability: "AI can write openers that start conversations without sounding spammy.", example: "Output: 10 openers + 3 follow-ups + tone per market.", prompt: "Act as a non-pushy DM/WhatsApp salesperson.\n\nSnapshot:\n- Offer: {{offer}}\n- Target customer: {{target_customer}}\n- Markets: {{markets}}\n- Sales channel: {{sales_channel}}\n- Differentiator: {{differentiator}}\n\nTask:\n1) Write 10 opener messages (short) that fit my markets and channel.\n2) Write 3 follow-ups (Day 1 / Day 3 / Day 7) that feel human.\n3) Provide 3 \"conversation bridges\" from chat \u2192 booking/payment.\n4) Add a \"do not say\" list (phrases that kill trust).\n\nRules: ask max 3 questions if needed.", action: "Ask a question. Don't pitch in message #1." }, es: { title: "Inicio por DM / WhatsApp (sin presi\u00f3n)", capability: "La IA escribe mensajes de inicio que no suenan a spam.", example: "Salida: 10 inicios + 3 seguimientos + tono por mercado.", prompt: "Act\u00faa como vendedor por DM/WhatsApp sin presi\u00f3n.\n\nResumen:\n- Oferta: {{offer}}\n- Cliente objetivo: {{target_customer}}\n- Mercados: {{markets}}\n- Canal: {{sales_channel}}\n- Diferenciador: {{differentiator}}\n\nTarea:\n1) 10 mensajes de inicio (cortos) seg\u00fan mercado y canal.\n2) 3 seguimientos (D\u00eda 1 / D\u00eda 3 / D\u00eda 7) que suenen humanos.\n3) 3 puentes de conversaci\u00f3n: chat \u2192 cita/pago.\n4) Lista \"no decir\" (frases que matan confianza).\n\nReglas: m\u00e1ximo 3 preguntas si hace falta.", action: "Haz una pregunta. No vendas en el mensaje #1." } },
  { id: "10", bookId: "ai-sales-offers-starter", category: "marketing", en: { title: "Objection handler (price / trust / timing / logistics)", capability: "AI can generate calm, ethical objection responses matched to your market culture and channel.", example: "Output: 4 objection scripts + short versions for chat.", prompt: "Act as an objection-handling coach.\n\nSnapshot:\n- Offer: {{offer}}\n- Price range: {{price_range}}\n- Markets: {{markets}}\n- Sales channel: {{sales_channel}}\n- Differentiator: {{differentiator}}\n- Constraints (delivery/refunds): {{constraints}}\n\nTask:\nFor each objection below, write:\nA) A short chat reply (1\u20132 lines)\nB) A longer consultative reply (4\u20136 lines)\nC) The best next-step CTA\n\nObjections:\n1) \"It's too expensive\"\n2) \"I need to think about it\"\n3) \"I don't trust / I'm not sure\"\n4) \"Delivery/logistics won't work for me\"\n\nRules: market-aware tone. Ask max 3 questions if needed.", action: "Answer objection \u2192 proof \u2192 next step." }, es: { title: "Manejo de objeciones (precio / confianza / tiempo / log\u00edstica)", capability: "La IA crea respuestas \u00e9ticas y calmadas seg\u00fan cultura del mercado y canal.", example: "Salida: 4 guiones + versiones cortas para chat.", prompt: "Act\u00faa como coach de manejo de objeciones.\n\nResumen:\n- Oferta: {{offer}}\n- Rango de precio: {{price_range}}\n- Mercados: {{markets}}\n- Canal: {{sales_channel}}\n- Diferenciador: {{differentiator}}\n- Restricciones (entrega/reembolsos): {{constraints}}\n\nTarea:\nPara cada objeci\u00f3n, escribe:\nA) Respuesta corta (1\u20132 l\u00edneas)\nB) Respuesta consultiva (4\u20136 l\u00edneas)\nC) Mejor CTA siguiente\n\nObjeciones:\n1) \"Est\u00e1 muy caro\"\n2) \"Lo voy a pensar\"\n3) \"No conf\u00edo / no estoy seguro\"\n4) \"La entrega/log\u00edstica no me sirve\"\n\nReglas: tono por mercado. M\u00e1ximo 3 preguntas si hace falta.", action: "Responde objeci\u00f3n \u2192 prueba \u2192 pr\u00f3ximo paso." } },
  { id: "11", bookId: "ai-sales-offers-starter", category: "marketing", en: { title: "Follow-up sequence (7 touches, not annoying)", capability: "AI can build a follow-up system that increases replies while keeping trust.", example: "Output: 7-message sequence + timing + goal of each.", prompt: "Create a 7-touch follow-up sequence.\n\nSnapshot:\n- Offer: {{offer}}\n- Sales channel: {{sales_channel}}\n- Markets: {{markets}}\n- Differentiator: {{differentiator}}\n- Constraints: {{constraints}}\n\nRequirements:\n- 7 messages total\n- Each message: goal + text + CTA\n- Include: proof message, risk reducer message, \"close the loop\" message\n- Tone must match market (direct vs soft)\n\nRules: no manipulation. Ask max 3 questions if needed.", action: "Most sales happen after follow-up #2\u2013#5." }, es: { title: "Secuencia de seguimiento (7 toques, sin molestar)", capability: "La IA crea un sistema de seguimiento que aumenta respuestas sin perder confianza.", example: "Salida: 7 mensajes + timing + objetivo de cada uno.", prompt: "Crea una secuencia de seguimiento de 7 toques.\n\nResumen:\n- Oferta: {{offer}}\n- Canal: {{sales_channel}}\n- Mercados: {{markets}}\n- Diferenciador: {{differentiator}}\n- Restricciones: {{constraints}}\n\nRequisitos:\n- 7 mensajes\n- Cada mensaje: objetivo + texto + CTA\n- Incluir: prueba, reduce-riesgo, \"cerrar el ciclo\"\n- Tono seg\u00fan mercado (directo vs suave)\n\nReglas: sin manipulaci\u00f3n. M\u00e1ximo 3 preguntas si hace falta.", action: "Muchas ventas ocurren entre el seguimiento #2\u2013#5." } },
  { id: "12", bookId: "ai-sales-offers-starter", category: "marketing", en: { title: "Closing script (3 styles)", capability: "AI can generate closing scripts that feel natural across cultures and channels.", example: "Output: soft close + direct close + consultative close.", prompt: "Write 3 closing scripts for my offer.\n\nSnapshot:\n- Offer: {{offer}}\n- Price range: {{price_range}}\n- Markets: {{markets}}\n- Sales channel: {{sales_channel}}\n- Constraints: {{constraints}}\n\nClosings to write:\n1) Soft close (low pressure)\n2) Direct close (clear ask)\n3) Consultative close (decision + next step)\n\nFor each: a chat version (1\u20132 lines) + a longer version (4\u20136 lines) + CTA.\n\nRules: market-aware tone. Ask max 3 questions if needed.", action: "Always end with a clear next step." }, es: { title: "Cierre de venta (3 estilos)", capability: "La IA crea cierres naturales seg\u00fan cultura y canal.", example: "Salida: cierre suave + directo + consultivo.", prompt: "Escribe 3 guiones de cierre para mi oferta.\n\nResumen:\n- Oferta: {{offer}}\n- Rango de precio: {{price_range}}\n- Mercados: {{markets}}\n- Canal: {{sales_channel}}\n- Restricciones: {{constraints}}\n\nCierres:\n1) Suave (sin presi\u00f3n)\n2) Directo (pregunta clara)\n3) Consultivo (decisi\u00f3n + siguiente paso)\n\nPara cada uno: versi\u00f3n chat (1\u20132 l\u00edneas) + versi\u00f3n larga (4\u20136 l\u00edneas) + CTA.\n\nReglas: tono por mercado. M\u00e1ximo 3 preguntas si hace falta.", action: "Siempre termina con un pr\u00f3ximo paso claro." } },
  { id: "13", bookId: "ai-sales-offers-starter", category: "operations", en: { title: "1-page proposal generator (fast)", capability: "AI can create a clean 1-page proposal that increases close rate and reduces back-and-forth.", example: "Output: scope, timeline, price, next steps, terms.", prompt: "Create a 1-page proposal (mobile-friendly).\n\nSnapshot:\n- Offer: {{offer}}\n- Price range: {{price_range}}\n- Target customer: {{target_customer}}\n- Markets: {{markets}}\n- Differentiator: {{differentiator}}\n- Capacity: {{capacity}}\n- Constraints: {{constraints}}\n\nProposal must include:\n1) Summary (2\u20133 lines)\n2) Scope / deliverables (bullets)\n3) Timeline (simple)\n4) Pricing + payment terms\n5) What you need from the client\n6) Risks/assumptions (short)\n7) Next step CTA (pay / book / reply \"yes\")\n8) Mini policy (refunds/changes) aligned with constraints\n\nRules: ask max 3 questions if needed.", action: "Use 1 page. Clarity closes deals." }, es: { title: "Generador de propuesta 1 p\u00e1gina (r\u00e1pido)", capability: "La IA crea una propuesta clara en 1 p\u00e1gina para cerrar m\u00e1s y reducir mensajes.", example: "Salida: alcance, tiempos, precio, pr\u00f3ximos pasos, t\u00e9rminos.", prompt: "Crea una propuesta de 1 p\u00e1gina (mobile-friendly).\n\nResumen:\n- Oferta: {{offer}}\n- Rango de precio: {{price_range}}\n- Cliente objetivo: {{target_customer}}\n- Mercados: {{markets}}\n- Diferenciador: {{differentiator}}\n- Capacidad: {{capacity}}\n- Restricciones: {{constraints}}\n\nDebe incluir:\n1) Resumen (2\u20133 l\u00edneas)\n2) Alcance/entregables (bullets)\n3) Timeline simple\n4) Precio + t\u00e9rminos de pago\n5) Qu\u00e9 necesitas del cliente\n6) Riesgos/supuestos (corto)\n7) CTA siguiente (pagar / agendar / responder \"s\u00ed\")\n8) Mini pol\u00edtica (reembolsos/cambios) alineada a restricciones\n\nReglas: m\u00e1ximo 3 preguntas si hace falta.", action: "1 p\u00e1gina. Claridad cierra ventas." } },
  { id: "14", bookId: "ai-sales-offers-starter", category: "operations", en: { title: "Negotiation guardrails (don't discount wrong)", capability: "AI can help you protect margin by offering alternatives instead of discounts.", example: "Output: 6 alternatives to discounting + scripts.", prompt: "Act as a negotiation coach for small businesses.\n\nSnapshot:\n- Offer: {{offer}}\n- Price range: {{price_range}}\n- Capacity: {{capacity}}\n- Markets: {{markets}}\n- Sales channel: {{sales_channel}}\n\nTask:\n1) Create 6 alternatives to discounting (reduce scope, payment terms, bonus, deadline, bundle, tier shift).\n2) Write scripts for each alternative (chat + longer).\n3) Create a simple discount policy: when discount is allowed vs not allowed.\n4) Provide a \"final offer\" script that keeps dignity and clarity.\n\nRules: market-aware tone. Ask max 3 questions if needed.", action: "Discount last. Reduce scope first." }, es: { title: "Reglas de negociaci\u00f3n (no descontar mal)", capability: "La IA protege tu margen con alternativas al descuento.", example: "Salida: 6 alternativas al descuento + guiones.", prompt: "Act\u00faa como coach de negociaci\u00f3n para peque\u00f1os negocios.\n\nResumen:\n- Oferta: {{offer}}\n- Rango de precio: {{price_range}}\n- Capacidad: {{capacity}}\n- Mercados: {{markets}}\n- Canal: {{sales_channel}}\n\nTarea:\n1) 6 alternativas al descuento (reducir alcance, t\u00e9rminos de pago, bono, deadline, bundle, cambiar de nivel).\n2) Guiones para cada alternativa (chat + largo).\n3) Pol\u00edtica simple de descuentos: cu\u00e1ndo s\u00ed vs cu\u00e1ndo no.\n4) Guion de \"oferta final\" con dignidad y claridad.\n\nReglas: tono por mercado. M\u00e1ximo 3 preguntas si hace falta.", action: "Descuento al final. Primero reduce alcance." } },
  { id: "15", bookId: "ai-sales-offers-starter", category: "strategy", en: { title: "Upsell / cross-sell (ethical)", capability: "AI can design upsells that genuinely help the customer and increase revenue without pressure.", example: "Output: 3 upsells + 3 cross-sells + timing.", prompt: "Design ethical upsells and cross-sells.\n\nSnapshot:\n- Offer: {{offer}}\n- Price range: {{price_range}}\n- Target customer: {{target_customer}}\n- Markets: {{markets}}\n- Sales channel: {{sales_channel}}\n- Constraints: {{constraints}}\n\nTask:\n1) Propose 3 upsells (bigger result / faster / premium support) that fit my offer.\n2) Propose 3 cross-sells (complementary add-ons).\n3) For each: when to offer it (before purchase / after purchase / after delivery).\n4) Write a short script for each (chat version).\n5) Add a \"do not upsell\" rule list (to protect trust).\n\nRules: ask max 3 questions if needed.", action: "Upsell after value is delivered or clearly perceived." }, es: { title: "Upsell / cross-sell (\u00e9tico)", capability: "La IA dise\u00f1a upsells que ayudan al cliente y aumentan ingresos sin presi\u00f3n.", example: "Salida: 3 upsells + 3 cross-sells + timing.", prompt: "Dise\u00f1a upsells y cross-sells \u00e9ticos.\n\nResumen:\n- Oferta: {{offer}}\n- Rango de precio: {{price_range}}\n- Cliente objetivo: {{target_customer}}\n- Mercados: {{markets}}\n- Canal: {{sales_channel}}\n- Restricciones: {{constraints}}\n\nTarea:\n1) 3 upsells (m\u00e1s resultado / m\u00e1s r\u00e1pido / soporte premium) que encajen con mi oferta.\n2) 3 cross-sells (complementos).\n3) Por cada uno: cu\u00e1ndo ofrecerlo (antes/despu\u00e9s/tras entrega).\n4) Guion corto para cada uno (versi\u00f3n chat).\n5) Lista de reglas \"no hacer upsell\" (para proteger confianza).\n\nReglas: m\u00e1ximo 3 preguntas si hace falta.", action: "Upsell despu\u00e9s de que se percibe el valor o se entrega." } },
  { id: "16", bookId: "ai-sales-offers-starter", category: "marketing", en: { title: "Win-back script (lost leads)", capability: "AI can write win-back messages that reopen conversations politely.", example: "Output: 4 win-back messages + 1 offer adjustment.", prompt: "Create a win-back sequence for lost leads.\n\nSnapshot:\n- Offer: {{offer}}\n- Markets: {{markets}}\n- Sales channel: {{sales_channel}}\n- Differentiator: {{differentiator}}\n- Constraints: {{constraints}}\n\nTask:\n1) Write 4 win-back messages spaced over 14 days (short, human).\n2) Include one \"new proof\" message and one \"risk reducer\" message.\n3) Provide one optional offer adjustment that doesn't destroy margin (scope shift, tier, payment plan).\n4) Provide a final \"close the loop\" message.\n\nRules: market-aware tone. Ask max 3 questions if needed.", action: "Win-back is about clarity + timing, not pressure." }, es: { title: "Guion de recuperaci\u00f3n (leads perdidos)", capability: "La IA escribe mensajes para reabrir conversaciones con educaci\u00f3n.", example: "Salida: 4 mensajes + 1 ajuste de oferta.", prompt: "Crea una secuencia para recuperar leads perdidos.\n\nResumen:\n- Oferta: {{offer}}\n- Mercados: {{markets}}\n- Canal: {{sales_channel}}\n- Diferenciador: {{differentiator}}\n- Restricciones: {{constraints}}\n\nTarea:\n1) 4 mensajes en 14 d\u00edas (cortos y humanos).\n2) Incluir 1 mensaje de prueba nueva y 1 de reduce-riesgo.\n3) 1 ajuste opcional sin destruir margen (cambiar alcance, nivel, plan de pago).\n4) Mensaje final \"cerrar el ciclo\".\n\nReglas: tono por mercado. M\u00e1ximo 3 preguntas si hace falta.", action: "Recuperar no es presionar: es claridad + timing." } },
  { id: "17", bookId: "ai-sales-offers-starter", category: "operations", en: { title: "Delivery promise + expectations script", capability: "AI can create clear delivery expectations that reduce refunds, stress, and angry customers.", example: "Output: delivery promise + timeline + what happens if delays occur.", prompt: "Create a delivery promise + expectations script.\n\nSnapshot:\n- Offer: {{offer}}\n- Markets: {{markets}}\n- Capacity: {{capacity}}\n- Constraints (delivery, refunds): {{constraints}}\n\nTask:\n1) Write a clear delivery promise (what you will do, by when, under what conditions).\n2) Define client responsibilities (what they must provide).\n3) Write a \"what if delayed\" message (calm, trust-building).\n4) Create a 3-step delivery update rhythm (when to message clients).\n5) Provide a short version for DM and a longer version for a website.\n\nRules: ask max 3 questions if needed.", action: "Underpromise, overdeliver \u2014 especially across borders." }, es: { title: "Promesa de entrega + expectativas", capability: "La IA crea expectativas claras para reducir reembolsos, estr\u00e9s y conflictos.", example: "Salida: promesa + tiempos + qu\u00e9 pasa si hay retraso.", prompt: "Crea una promesa de entrega + expectativas.\n\nResumen:\n- Oferta: {{offer}}\n- Mercados: {{markets}}\n- Capacidad: {{capacity}}\n- Restricciones (entrega, reembolsos): {{constraints}}\n\nTarea:\n1) Promesa de entrega clara (qu\u00e9 har\u00e1s, cu\u00e1ndo, condiciones).\n2) Responsabilidades del cliente (qu\u00e9 debe entregar).\n3) Mensaje \"si hay retraso\" (calmo y confiable).\n4) Ritmo de updates en 3 pasos (cu\u00e1ndo avisar).\n5) Versi\u00f3n corta para DM y versi\u00f3n larga para web.\n\nReglas: m\u00e1ximo 3 preguntas si hace falta.", action: "Promete menos y entrega m\u00e1s \u2014 especialmente internacional." } },
  { id: "18", bookId: "ai-sales-offers-starter", category: "operations", en: { title: "Onboarding flow (after payment)", capability: "AI can standardize onboarding so every customer gets the same smooth experience.", example: "Output: welcome message + checklist + timeline + file request.", prompt: "Design a post-payment onboarding flow.\n\nSnapshot:\n- Offer: {{offer}}\n- Sales channel: {{sales_channel}}\n- Markets: {{markets}}\n- Constraints: {{constraints}}\n\nTask:\n1) Write a welcome message (short + human).\n2) Create a client checklist (what you need from them).\n3) Create a simple timeline with milestones.\n4) Write a \"what happens next\" FAQ (5 Q&As).\n5) Provide a version suitable for WhatsApp/DM and a version for email.\n\nRules: ask max 3 questions if needed.", action: "Great onboarding reduces refunds and increases referrals." }, es: { title: "Onboarding (despu\u00e9s del pago)", capability: "La IA estandariza el onboarding para una experiencia suave y consistente.", example: "Salida: bienvenida + checklist + timeline + solicitud de info.", prompt: "Dise\u00f1a un flujo de onboarding despu\u00e9s del pago.\n\nResumen:\n- Oferta: {{offer}}\n- Canal: {{sales_channel}}\n- Mercados: {{markets}}\n- Restricciones: {{constraints}}\n\nTarea:\n1) Mensaje de bienvenida (corto y humano).\n2) Checklist del cliente (qu\u00e9 necesitas).\n3) Timeline simple con hitos.\n4) FAQ \"qu\u00e9 sigue\" (5 preguntas).\n5) Versi\u00f3n para WhatsApp/DM y versi\u00f3n para email.\n\nReglas: m\u00e1ximo 3 preguntas si hace falta.", action: "Buen onboarding reduce reembolsos y sube referidos." } },
  { id: "19", bookId: "ai-sales-offers-starter", category: "operations", en: { title: "Refund / returns policy (trust-focused)", capability: "AI can write a simple policy that reduces conflict and increases trust (market-aware).", example: "Output: clear policy + edge cases + short version for DM.", prompt: "Write a refund/returns policy for my offer (market-aware).\n\nSnapshot:\n- Offer: {{offer}}\n- Markets: {{markets}}\n- Sales channel: {{sales_channel}}\n- Constraints (what I can/can't refund): {{constraints}}\n\nPolicy must include:\n1) Eligibility (what qualifies / what doesn't)\n2) Time windows\n3) How to request\n4) What happens next (timeline, communication)\n5) 5 edge cases (and how you'll handle them)\n6) A short \"policy summary\" version for DM/WhatsApp\n\nRules: ask max 3 questions if needed. Keep it simple and fair.", action: "A good policy sells. Confusion kills trust." }, es: { title: "Pol\u00edtica de reembolsos/devoluciones (enfocada en confianza)", capability: "La IA escribe una pol\u00edtica simple que reduce conflictos y aumenta confianza (seg\u00fan mercado).", example: "Salida: pol\u00edtica clara + casos l\u00edmite + versi\u00f3n corta para DM.", prompt: "Escribe una pol\u00edtica de reembolsos/devoluciones (seg\u00fan mercado).\n\nResumen:\n- Oferta: {{offer}}\n- Mercados: {{markets}}\n- Canal: {{sales_channel}}\n- Restricciones (qu\u00e9 s\u00ed/no puedes reembolsar): {{constraints}}\n\nDebe incluir:\n1) Elegibilidad (qu\u00e9 aplica / qu\u00e9 no)\n2) Ventanas de tiempo\n3) C\u00f3mo solicitar\n4) Qu\u00e9 pasa despu\u00e9s (tiempos, comunicaci\u00f3n)\n5) 5 casos l\u00edmite (y c\u00f3mo los manejar\u00e1s)\n6) Resumen corto para DM/WhatsApp\n\nReglas: m\u00e1ximo 3 preguntas si hace falta. Simple y justa.", action: "Una buena pol\u00edtica vende. Confusi\u00f3n mata confianza." } },
  { id: "20", bookId: "ai-sales-offers-starter", category: "operations", en: { title: "Customer success checklist (reduce churn)", capability: "AI can create a simple success plan so customers get results and stay happy.", example: "Output: 7-day + 30-day checklist + proactive messages.", prompt: "Create a customer success plan for my offer.\n\nSnapshot:\n- Offer: {{offer}}\n- Markets: {{markets}}\n- Constraints: {{constraints}}\n- Capacity: {{capacity}}\n\nTask:\n1) Define what \"success\" means for the customer (measurable).\n2) Create a 7-day checklist and a 30-day checklist.\n3) Write 3 proactive check-in messages (before problems happen).\n4) Identify the top 5 reasons customers fail and how to prevent each.\n5) Suggest one referral moment (when to ask for referral/review).\n\nRules: ask max 3 questions if needed.", action: "Retention is cheaper than acquisition." }, es: { title: "Checklist de \u00e9xito del cliente (menos churn)", capability: "La IA crea un plan simple para que el cliente logre resultados y est\u00e9 feliz.", example: "Salida: checklist 7 d\u00edas + 30 d\u00edas + mensajes proactivos.", prompt: "Crea un plan de \u00e9xito del cliente para mi oferta.\n\nResumen:\n- Oferta: {{offer}}\n- Mercados: {{markets}}\n- Restricciones: {{constraints}}\n- Capacidad: {{capacity}}\n\nTarea:\n1) Define \"\u00e9xito\" para el cliente (medible).\n2) Checklist de 7 d\u00edas y de 30 d\u00edas.\n3) 3 mensajes proactivos (antes de que haya problemas).\n4) 5 razones por las que fallan y c\u00f3mo prevenir cada una.\n5) Un momento ideal para pedir referido/rese\u00f1a.\n\nReglas: m\u00e1ximo 3 preguntas si hace falta.", action: "Retener cuesta menos que adquirir." } },
  { id: "21", bookId: "ai-sales-offers-starter", category: "marketing", en: { title: "Mobile-first sales page (copy)", capability: "AI can write a complete mobile sales page that matches your market and objections.", example: "Output: hero + benefits + proof + FAQ + CTA.", prompt: "Write a mobile-first sales page for my offer.\n\nSnapshot:\n- Offer: {{offer}}\n- Price range: {{price_range}}\n- Target customer: {{target_customer}}\n- Markets: {{markets}}\n- Differentiator: {{differentiator}}\n- Constraints: {{constraints}}\n\nPage must include:\n1) Hero: headline + subheadline + CTA\n2) Benefits: 5 bullets (customer language)\n3) How it works: 3 steps\n4) Proof: what to show + 3 example lines\n5) Risk reducers: 3 bullets\n6) FAQ: 7 questions (market objections)\n7) Final CTA\n\nRules: ask max 3 questions if needed. Keep it scannable.", action: "Use one CTA. Remove distractions." }, es: { title: "P\u00e1gina de ventas mobile-first (copy)", capability: "La IA escribe una p\u00e1gina completa adaptada al mercado y objeciones.", example: "Salida: hero + beneficios + prueba + FAQ + CTA.", prompt: "Escribe una p\u00e1gina de ventas mobile-first para mi oferta.\n\nResumen:\n- Oferta: {{offer}}\n- Rango de precio: {{price_range}}\n- Cliente objetivo: {{target_customer}}\n- Mercados: {{markets}}\n- Diferenciador: {{differentiator}}\n- Restricciones: {{constraints}}\n\nDebe incluir:\n1) Hero: titular + subtitular + CTA\n2) Beneficios: 5 bullets (lenguaje del cliente)\n3) C\u00f3mo funciona: 3 pasos\n4) Prueba: qu\u00e9 mostrar + 3 l\u00edneas ejemplo\n5) Reduce-riesgo: 3 bullets\n6) FAQ: 7 preguntas (objeciones del mercado)\n7) CTA final\n\nReglas: m\u00e1ximo 3 preguntas si hace falta. Escaneable.", action: "Un CTA. Quita distracciones." } },
  { id: "22", bookId: "ai-sales-offers-starter", category: "marketing", en: { title: "Testimonials + case study extractor", capability: "AI can turn messy customer feedback into clean testimonials and mini case studies.", example: "Output: 5 testimonials + 1 case study template + permission message.", prompt: "Act as a testimonials and case study editor.\n\nSnapshot:\n- Offer: {{offer}}\n- Markets: {{markets}}\n- Sales channel: {{sales_channel}}\n\nInput: Paste customer feedback/messages here:\n[PASTE FEEDBACK]\n\nTask:\n1) Extract 5 strong testimonials (short) and 2 longer versions.\n2) Create 1 mini case study: problem \u2192 process \u2192 result \u2192 quote.\n3) Write a permission request message (DM/email) to use their words publicly.\n4) Suggest where to place each testimonial (landing, ads, DM).\n\nRules: ask max 3 questions if needed. Keep tone market-appropriate.", action: "Collect proof weekly. Store it like an asset." }, es: { title: "Extractor de testimonios + caso de estudio", capability: "La IA convierte feedback desordenado en testimonios limpios y mini casos de estudio.", example: "Salida: 5 testimonios + 1 caso de estudio + mensaje de permiso.", prompt: "Act\u00faa como editor de testimonios y casos de estudio.\n\nResumen:\n- Oferta: {{offer}}\n- Mercados: {{markets}}\n- Canal: {{sales_channel}}\n\nEntrada: Pega aqu\u00ed feedback/mensajes de clientes:\n[PEGA FEEDBACK]\n\nTarea:\n1) Extrae 5 testimonios fuertes (cortos) y 2 versiones largas.\n2) 1 mini caso: problema \u2192 proceso \u2192 resultado \u2192 cita.\n3) Mensaje para pedir permiso (DM/email) para usar p\u00fablicamente.\n4) D\u00f3nde usar cada testimonio (landing, ads, DM).\n\nReglas: m\u00e1ximo 3 preguntas si hace falta. Tono por mercado.", action: "Recolecta prueba semanalmente. Gu\u00e1rdala como activo." } },
  { id: "23", bookId: "ai-sales-offers-starter", category: "automation", en: { title: "Simple CRM pipeline (n8n-friendly)", capability: "AI can design a simple CRM pipeline so leads don't get lost (no heavy tools required).", example: "Output: stages + fields + reminders + reporting.", prompt: "Design a beginner CRM pipeline (tool-agnostic; n8n-friendly).\n\nSnapshot:\n- Sales channel: {{sales_channel}}\n- Markets: {{markets}}\n- Offer: {{offer}}\n- Capacity: {{capacity}}\n- Constraints: {{constraints}}\n\nRequirements:\n1) Define pipeline stages (New \u2192 Qualified \u2192 Proposal \u2192 Won/Lost).\n2) Define the exact fields to store (market, source, last_contact, next_step, value, notes).\n3) Define reminders: if no follow-up in 24h/72h.\n4) Define a weekly report: leads in/out + close rate + bottlenecks.\n5) Output an n8n workflow blueprint to automate:\n   - capture lead \u2192 store \u2192 notify \u2192 follow-up reminders \u2192 weekly report\n\nRules: ask max 3 questions if needed.", action: "Start with a sheet + reminders before fancy CRMs." }, es: { title: "CRM simple (compatible con n8n)", capability: "La IA dise\u00f1a un CRM simple para no perder leads (sin herramientas pesadas).", example: "Salida: etapas + campos + recordatorios + reportes.", prompt: "Dise\u00f1a un pipeline CRM para principiantes (agn\u00f3stico a herramienta; compatible con n8n).\n\nResumen:\n- Canal de venta: {{sales_channel}}\n- Mercados: {{markets}}\n- Oferta: {{offer}}\n- Capacidad: {{capacity}}\n- Restricciones: {{constraints}}\n\nRequisitos:\n1) Etapas (Nuevo \u2192 Calificado \u2192 Propuesta \u2192 Ganado/Perdido).\n2) Campos exactos (mercado, fuente, \u00faltimo_contacto, pr\u00f3ximo_paso, valor, notas).\n3) Recordatorios: si no hay seguimiento en 24h/72h.\n4) Reporte semanal: entradas/salidas + tasa de cierre + cuellos de botella.\n5) Blueprint n8n:\n   - capturar lead \u2192 guardar \u2192 notificar \u2192 recordatorios \u2192 reporte semanal\n\nReglas: m\u00e1ximo 3 preguntas si hace falta.", action: "Empieza con una hoja + recordatorios antes de un CRM complejo." } },
  { id: "24", bookId: "ai-sales-offers-starter", category: "automation", en: { title: "Follow-up automation with approval (safe mode)", capability: "AI can automate follow-ups safely using approval so you never send the wrong message.", example: "Output: approval flow + message drafts + stop rules.", prompt: "Design a SAFE follow-up automation (approval required).\n\nSnapshot:\n- Sales channel: {{sales_channel}}\n- Markets: {{markets}}\n- Offer: {{offer}}\n- Constraints: {{constraints}}\n\nRequirements:\n1) Trigger: new lead captured or proposal sent.\n2) Draft follow-up messages (Day 1 / Day 3 / Day 7).\n3) Approval step: Approve / Reject / Edit before sending.\n4) Stop rules: if lead replies, if status becomes Won/Lost, if opt-out.\n5) Logging: what was sent + timestamp + who approved.\n6) Weekly report: follow-ups sent + replies + wins.\n\nOutput: node-by-node blueprint + message templates + test plan.\nAsk max 3 questions if needed.", action: "Never auto-send money/messages without approval." }, es: { title: "Automatizaci\u00f3n de seguimiento con aprobaci\u00f3n (modo seguro)", capability: "La IA automatiza seguimientos con aprobaci\u00f3n para no enviar mensajes incorrectos.", example: "Salida: flujo de aprobaci\u00f3n + borradores + reglas de paro.", prompt: "Dise\u00f1a una automatizaci\u00f3n de seguimiento SEGURA (requiere aprobaci\u00f3n).\n\nResumen:\n- Canal de venta: {{sales_channel}}\n- Mercados: {{markets}}\n- Oferta: {{offer}}\n- Restricciones: {{constraints}}\n\nRequisitos:\n1) Trigger: lead nuevo o propuesta enviada.\n2) Borradores de seguimiento (D\u00eda 1 / D\u00eda 3 / D\u00eda 7).\n3) Aprobaci\u00f3n: Aprobar / Rechazar / Editar antes de enviar.\n4) Reglas de paro: si responde, si cambia a Ganado/Perdido, si se da de baja.\n5) Registro: qu\u00e9 se envi\u00f3 + fecha + qui\u00e9n aprob\u00f3.\n6) Reporte semanal: seguimientos + respuestas + ventas.\n\nEntrega: blueprint nodo por nodo + plantillas + pruebas.\nM\u00e1ximo 3 preguntas si hace falta.", action: "Nunca env\u00edes mensajes/dinero sin aprobaci\u00f3n." } },
];

/* ═══════════════════════════════════════
   BOOKS REGISTRY
   ═══════════════════════════════════════ */

const ALL_PROMPTS: Prompt[] = [...AI_BUSINESS_PROMPTS, ...AI_MARKETING_PRO_PROMPTS, ...AI_AUTOMATION_STARTER_PROMPTS, ...AI_SALES_OFFERS_STARTER_PROMPTS];

export const BOOKS: Book[] = [AI_BUSINESS_BOOK, AI_MARKETING_PRO_BOOK, AI_AUTOMATION_STARTER_BOOK, AI_SALES_OFFERS_STARTER_BOOK];

export function getBook(bookId: string): Book | undefined {
  return BOOKS.find((b) => b.id === bookId);
}

export function getBookPrompts(bookId: string): Prompt[] {
  return ALL_PROMPTS.filter((p) => p.bookId === bookId);
}

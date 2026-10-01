export const projects = [
  // ==========================================
  // 🌟 TOP PROJECTS (Destacados - isTop: true)
  // ==========================================
  {
    id: 1,
    title: "Biomanage",
    description:
      "Plataforma SaaS Full Stack orientada al sector salud para la gestión integral de equipos biomédicos. Automatiza el control de inventarios, programación de mantenimientos y análisis de métricas operativas en tiempo real.",
    techTags: [
      "React",
      "Node.js",
      "TypeScript",
      "Express",
      "Postgresql",
      "Docker",
    ],
    image:
      "https://res.cloudinary.com/dwdyg6evh/image/upload/v1790370602/bio-manage_skv8vq.webp",
    url: "",
    github: "",
    isTop: true,
    alt: "Dashboard de Biomanage mostrando panel de analíticas con métricas de equipos biomédicos, mantenimientos y estado operativo",
  },
  {
    id: 2,
    title: "Enlace Azul",
    description:
      "Dashboard interactivo de IoT para el monitoreo de activos en tiempo real mediante tecnología BLE (Bluetooth Low Energy). Arquitectura frontend enfocada en la visualización de datos complejos y alto rendimiento.",
    techTags: ["React", "Typescript"],
    image:
      "https://res.cloudinary.com/dwdyg6evh/image/upload/v1790887945/enlace-azul-bit-beacons-iot-technologies_vzuedo.webp",
    url: "https://iotenlaceazul.com/",
    github: "",
    isTop: true,
    alt: "Dashboard de Enlace Azul mostrando el escaneo de un dispositivo BLE ubicado en la cocina, con distancia, temperatura y humedad en tiempo real",
  },
  {
    id: 3,
    title: "Turkano: El Show Debe Continuar",
    description:
      "Plataforma interactiva y campaña promocional para lanzamiento musical. Arquitectura dividida en una landing page estática de alto rendimiento y una web-app gamificada con sistema de autenticación basado en criptografía de pistas y desbloqueo progresivo de historia.",
    techTags: ["Astro", "JavaScript", "Tailwind CSS", "AWS Amplify"],
    image:
      "https://res.cloudinary.com/dwdyg6evh/image/upload/v1790372682/el-show-debe-continuar_pgipjc.webp",
    url: "https://showdebecontinuar.com/",
    github: "https://github.com/carlos-daniel07/el-show-debe-continuar",
    isTop: true,
    alt: "Página de bienvenida de El Show Debe Continuar, web-app gamificada de Turkano con reproductor de video y sistema de desbloqueo de historia",
  },
  {
    id: 4,
    title: "BIT",
    description:
      "Landing page dinámica construida con React para la comercialización de soluciones y servicios de IoT. Plataforma actualmente en proceso de refactorización activa (v2.0) para escalar su arquitectura.",
    techTags: ["React"],
    image:
      "https://res.cloudinary.com/dwdyg6evh/image/upload/v1790370603/bit-beacons-iot-technologies_xxj3rh.webp",
    url: "https://www.beaconsiottechnologies.com/",
    github: "",
    isTop: true,
    alt: "Landing page de Beacons IoT Technologies con ilustración isométrica de casa inteligente conectada a dispositivos IoT",
  },
  {
    id: 5,
    title: "The Master SAS",
    description:
      "Sitio web corporativo de alto rendimiento desarrollado con Astro. Arquitectura orientada al SEO, optimización de velocidad de carga (Core Web Vitals) y diseño interactivo para maximizar la conversión.",
    techTags: ["Astro", "Javascript", "Tailwind CSS"],
    image:
      "https://res.cloudinary.com/dwdyg6evh/image/upload/v1790370598/the-master-sas_mt3ws8.webp",
    url: "https://landing-page-themasters-sas-v1.netlify.app",
    github: "https://github.com/carlos-daniel07/landing-the-master-sas.git",
    isTop: true,
    alt: "Landing page corporativa de The Master SAS mostrando el carrusel de plataformas destacadas MelAppido y JustGo",
  },

  // ==========================================
  // 🗃️ ARCHIVE (Lógica Avanzada & Arquitectura Front-End)
  // ==========================================
  {
    id: 6,
    title: "Plantilla de Portfolio con React",
    description:
      "Plantilla reutilizable de portfolio para desarrolladores, construida con React y Vite. El contenido (habilidades, experiencia laboral y proyectos) vive en archivos JSON separados de la lógica. Arquitectura por componentes con CSS Modules.",
    techTags: ["React", "Vite", "JavaScript", "CSS Modules", "JSON"],
    image:
      "https://res.cloudinary.com/dwdyg6evh/image/upload/v1790370592/react-portfolio-template_xzcrcm.webp",
    url: "https://reactjsportfoliotemplate.netlify.app/",
    github: "https://github.com/carlos-daniel07/react-portfolio-template",
    isTop: false,
    alt: "Sección hero de plantilla de portfolio en React mostrando saludo personalizado e ilustración de desarrollador",
  },
  {
    id: 7,
    title: "Weather App MUI",
    description:
      "Buscador meteorológico en tiempo real. Integración de API REST externa con Vite, arquitectura visual basada en Material UI (MUI) y control de estados de carga asíncronos.",
    techTags: ["React", "Material UI", "REST API", "Vite"],
    image:
      "https://res.cloudinary.com/dwdyg6evh/image/upload/v1790373167/weather-app-react-js_wcezk9.webp",
    url: "https://weather-app-react-js-course.netlify.app/",
    github: "https://github.com/carlos-daniel07/weather-app-rjs",
    isTop: false,
    alt: "Aplicación de clima construida con React y Material UI mostrando el resultado del clima para Contadero, Colombia",
  },
  {
    id: 8,
    title: "Flappy Kiro: Juego Canvas",
    description:
      "Juego estilo Flappy Bird sobre HTML5 Canvas, desarrollado con spec-driven development. Incluye física con gravedad, animación squash & stretch, colisiones AABB optimizadas y renderizado por capas.",
    techTags: ["HTML5", "CSS3", "JavaScript", "Canvas API", "Kiro (AI)"],
    image:
      "https://res.cloudinary.com/dwdyg6evh/image/upload/v1790370610/flappy-kiro-canvas-game_wgmuph.webp",
    url: "https://flappykirocanvasgame.netlify.app/",
    github: "https://github.com/carlos-daniel07/flappy-kiro-canvas-game",
    isTop: false,
    alt: "Pantalla de inicio del juego Flappy Kiro hecho con Canvas, mostrando instrucciones para comenzar",
  },
  {
    id: 9,
    title: "Swipe Cards: Interfaz de App de Citas",
    description:
      "Interfaz de tarjetas deslizables con arrastre fluido por mouse y touch, rotación proporcional a la distancia arrastrada, feedback visual de LIKE/NOPE con opacidad dinámica y animación de retorno o salida.",
    techTags: ["HTML5", "CSS3", "JavaScript"],
    image:
      "https://res.cloudinary.com/dwdyg6evh/image/upload/v1790370597/swipe-cards-match-app_xhjljt.webp",
    url: "https://swipecardmatch.netlify.app/",
    github: "https://github.com/carlos-daniel07/swipe-cards-match-app",
    isTop: false,
    alt: "Interfaz de tarjetas deslizables estilo app de citas en mockup de celular, con botones de like y nope",
  },
  {
    id: 10,
    title: "JS Playground: Editor de Código",
    description:
      "Editor y ejecutor de JavaScript en el navegador. Captura las llamadas a la consola en un panel de salida propio, muestra numeración de líneas y posición del cursor en tiempo real, e incluye una biblioteca de snippets.",
    techTags: ["HTML5", "CSS3", "JavaScript"],
    image:
      "https://res.cloudinary.com/dwdyg6evh/image/upload/v1790370612/js-playground-code-editor_juh9w1.webp",
    url: "https://codeeditorjs.netlify.app/",
    github: "https://github.com/carlos-daniel07/js-playground-code-editor",
    isTop: false,
    alt: "Editor de código JavaScript en el navegador con panel de consola y biblioteca de snippets predefinidos",
  },
  {
    id: 11,
    title: "Reproductor de Audio Local",
    description:
      "Reproductor de música minimalista que permite subir un archivo de audio desde el computador y reproducirlo al instante usando el elemento nativo de audio y File API. Procesamiento directo en el navegador.",
    techTags: ["HTML5", "CSS3", "JavaScript", "File API"],
    image:
      "https://res.cloudinary.com/dwdyg6evh/image/upload/v1790370613/local-audio-player_ur8qry.webp",
    url: "https://audioplayerlocal.netlify.app/",
    github: "https://github.com/carlos-daniel07/local-audio-player",
    isTop: false,
    alt: "Reproductor de audio local con botón para subir archivos y controles de reproducción nativos",
  },
  {
    id: 12,
    title: "Generador de Códigos QR con Descarga",
    description:
      "Herramienta que convierte URLs o textos en un código QR descargable, con validación de entrada, normalización automática de protocolos y descarga directa de la imagen generada mediante una API externa.",
    techTags: ["HTML5", "CSS3", "JavaScript", "Fetch API", "QR Server API"],
    image:
      "https://res.cloudinary.com/dwdyg6evh/image/upload/v1790370591/qr-code-generator_ytzg2q.webp",
    url: "https://qrcodegeneratorca.netlify.app/",
    github: "https://github.com/carlos-daniel07/qr-code-generator",
    isTop: false,
    alt: "Generador de códigos QR con campo para ingresar una URL y botón para generar el código",
  },
  {
    id: 13,
    title: "TMDb Movie Explorer",
    description:
      "Motor de búsqueda cinematográfico. Integración con API REST externa (TMDb) manejando peticiones asíncronas y renderizado dinámico seguro de nodos con Vanilla JavaScript sin inyección masiva HTML.",
    techTags: ["JavaScript", "REST API", "HTML/CSS"],
    image:
      "https://res.cloudinary.com/dwdyg6evh/image/upload/v1790374971/movie-search_ltfmpo.webp",
    url: "https://movies-searchh.netlify.app/",
    github: "https://github.com/carlos-daniel07/movie-search",
    isTop: false,
    alt: "Buscador de películas TMDb mostrando resultados de búsqueda con póster, fecha de lanzamiento y sinopsis",
  },
  {
    id: 14,
    title: "Weather App API",
    description:
      "Buscador meteorológico. Integración de API REST externa (OpenWeatherMap) y manejo de asincronismo mediante peticiones HTTP. Conversión manual de datos numéricos e inyección en el DOM.",
    techTags: ["JavaScript", "REST API", "HTML/CSS"],
    image:
      "https://res.cloudinary.com/dwdyg6evh/image/upload/v1790372666/app-climate-js_rr4wpo.webp",
    url: "https://appclimatejs.netlify.app/",
    github: "https://github.com/carlos-daniel07/App-Climate-JavaScript",
    isTop: false,
    alt: "Aplicación de clima mostrando temperatura, humedad y condición meteorológica de Contadero, Colombia, consumiendo una API REST",
  },
  {
    id: 15,
    title: "The Master SAS Corporativo (v1.0)",
    description:
      "Plataforma corporativa modular desarrollada con Astro. Incorpora carrusel interactivo personalizado en JavaScript nativo, modales con la API nativa de diálogo y arquitectura orientada a la conversión.",
    techTags: ["Astro", "JavaScript", "HTML/CSS", "Responsive Design"],
    image:
      "https://res.cloudinary.com/dwdyg6evh/image/upload/v1790370598/the-master-sas_mt3ws8.webp",
    url: "https://landing-page-themasters-sas-v1.netlify.app/",
    github: "https://github.com/carlos-daniel07/landing-the-master-sas",
    isTop: false,
    alt: "Landing page corporativa de The Master SAS mostrando el carrusel de plataformas destacadas MelAppido y JustGo",
  },

  // ==========================================
  // 💾 ARCHIVE (Almacenamiento Local, Arrays & Matemáticas)
  // ==========================================
  {
    id: 16,
    title: "Todo List con Tarjetas de Colores",
    description:
      "Lista de tareas con tarjetas de color rotativo, fecha, contador de progreso y opciones CRUD. Saluda al usuario, persiste toda la información usando localStorage y sanitiza el texto ingresado para seguridad.",
    techTags: ["HTML5", "CSS3", "JavaScript", "LocalStorage API"],
    image:
      "https://res.cloudinary.com/dwdyg6evh/image/upload/v1790370599/todo-list-personalized-cards_uupxp2.webp",
    url: "https://todolistpersonalizedcards.netlify.app/",
    github: "https://github.com/carlos-daniel07/todo-list-personalized-cards",
    isTop: false,
    alt: "Lista de tareas personalizada con saludo al usuario y campo para agregar nueva tarea",
  },
  {
    id: 17,
    title: "Agenda de Contactos con Persistencia Local",
    description:
      "Agenda de contactos interactiva que permite agregar nombre y teléfono, buscar en tiempo real y eliminar contactos individualmente. Lógica de persistencia desarrollada con la API de LocalStorage.",
    techTags: ["HTML5", "CSS3", "JavaScript", "LocalStorage API"],
    image:
      "https://res.cloudinary.com/dwdyg6evh/image/upload/v1790370606/contacts-agenda-localstorage_zek9wc.webp",
    url: "https://contactsagenda.netlify.app/",
    github: "https://github.com/carlos-daniel07/contacts-agenda-localstorage",
    isTop: false,
    alt: "Agenda de contactos con formulario para agregar nombre y teléfono, y campo de búsqueda",
  },
  {
    id: 18,
    title: "Generador de Gradientes CSS",
    description:
      "Herramienta para crear gradientes CSS con vista previa en tiempo real y código listo para copiar. Permite guardar los gradientes favoritos persistentes en el navegador (localStorage) para reutilizarlos.",
    techTags: ["HTML5", "CSS3", "JavaScript", "LocalStorage API"],
    image:
      "https://res.cloudinary.com/dwdyg6evh/image/upload/v1790370607/css-gradient-generator_fp1wpk.webp",
    url: "https://cssgradientgeneratorr.netlify.app/",
    github: "https://github.com/carlos-daniel07/css-gradient-generator",
    isTop: false,
    alt: "Generador de gradientes CSS mostrando vista previa de degradado azul y código listo para copiar",
  },
  {
    id: 19,
    title: "Calculadora Tema Claro/Oscuro",
    description:
      "Calculadora interactiva con soporte nativo para Modo Oscuro. Desarrollo centrado en la manipulación dinámica del DOM y estructuración de estilos modulares mediante el preprocesador SCSS.",
    techTags: ["JavaScript", "SCSS", "HTML"],
    image:
      "https://res.cloudinary.com/dwdyg6evh/image/upload/v1790375121/calculator-themeable-js_pu84rj.webp",
    url: "https://calculator-themeable-js.netlify.app/",
    github: "https://github.com/carlos-daniel07/calculator-themeable-js",
    isTop: false,
    alt: "Calculadora interactiva con soporte para modo oscuro, botones circulares de colores y estructura de estilos con SCSS",
  },
  {
    id: 20,
    title: "Drum Kit: Batería Interactiva",
    description:
      "Batería virtual que reproduce archivos sonoros mapeados a clics o pulsaciones de teclado, manipulando el HTMLAudioElement. Sincronización de eventos de escucha (event listeners) con animaciones de presionado.",
    techTags: ["HTML5", "CSS3", "JavaScript", "Web Audio API"],
    image:
      "https://res.cloudinary.com/dwdyg6evh/image/upload/v1790370608/drum-kit-keyboard-sounds_teuleq.webp",
    url: "https://drum-kit-keyboard-sounds.netlify.app/",
    github: "https://github.com/carlos-daniel07/drum-kit-keyboard-sounds",
    isTop: false,
    alt: "Batería virtual con 7 botones circulares de tambor mapeados a teclas de teclado sobre fondo oscuro",
  },
  {
    id: 21,
    title: "Juego de Adivinanzas con Marcador",
    description:
      "Juego lógico donde se responden acertijos en orden aleatorio, con un marcador en vivo de aciertos y errores, soporte de eventos de teclado (Enter), y un sistema de control de estado de partida finalizada.",
    techTags: ["HTML5", "CSS3", "JavaScript"],
    image:
      "https://res.cloudinary.com/dwdyg6evh/image/upload/v1790370594/riddles-guessing-game_dtf28h.webp",
    url: "https://juegodeadivinanzasjs.netlify.app/",
    github: "https://github.com/carlos-daniel07/riddles-guessing-game",
    isTop: false,
    alt: "Juego de adivinanzas mostrando una pregunta, campo de respuesta y marcador de aciertos y errores",
  },
  {
    id: 22,
    title: "Adivina el Número con Contador de Intentos",
    description:
      "Juego clásico de adivinar un número aleatorio entre 1 y 100, con retroalimentación en vivo, contador de intentos estricto y validación condicional de entradas (fuera de rango o no numéricas).",
    techTags: ["HTML5", "CSS3", "JavaScript"],
    image:
      "https://res.cloudinary.com/dwdyg6evh/image/upload/v1790370594/riddle-number_hr044z.webp",
    url: "https://number-riddle.netlify.app/",
    github: "https://github.com/carlos-daniel07/guess-number",
    isTop: false,
    alt: "Interfaz del juego Adivina el Número con tema oscuro, contador de intentos y campo de entrada",
  },
  {
    id: 23,
    title: "Random Picker: Selector al Azar",
    description:
      "Herramienta que toma una lista de nombres de un textarea y selecciona uno al azar a partir de un arreglo generado en ejecución. Muestra una ventana modal con spinner de carga simulada antes de revelar el resultado.",
    techTags: ["HTML5", "CSS3", "JavaScript"],
    image:
      "https://res.cloudinary.com/dwdyg6evh/image/upload/v1790370591/random-name-picker_j4mpuy.webp",
    url: "https://randompickername.netlify.app/",
    github: "https://github.com/carlos-daniel07/random-name-picker",
    isTop: false,
    alt: "Aplicación selectora de nombres al azar con área de texto para ingresar la lista y botón para obtener resultado",
  },
  {
    id: 24,
    title: "Calculadora de IVA en Tiempo Real",
    description:
      "Herramienta de utilidad que calcula tasas impositivas al instante. Lógica apoyada en eventos `oninput` para actualizar montos parciales y totales mientras el usuario escribe, sin botones de sumisión.",
    techTags: ["HTML5", "CSS3", "JavaScript"],
    image:
      "https://res.cloudinary.com/dwdyg6evh/image/upload/v1790370612/iva-calculator_md0zjd.webp",
    url: "https://ivacalculator.netlify.app/",
    github: "https://github.com/carlos-daniel07/iva-calculator",
    isTop: false,
    alt: "Calculadora de IVA en tiempo real con campos para precio sin IVA y tasa de impuesto",
  },
  {
    id: 25,
    title: "Calculadora de BMI con Clasificación",
    description:
      "Procesador de índice de masa corporal. Valida campos numéricos y ejecuta fórmulas de conversión para mostrar el resultado junto a su categoría correspondiente usando sentencias condicionales estrictas.",
    techTags: ["HTML5", "CSS3", "JavaScript"],
    image:
      "https://res.cloudinary.com/dwdyg6evh/image/upload/v1790370603/bmi-calculator-vanilla-js_j5sdu6.webp",
    url: "https://bmicalculatorjsvanilla.netlify.app/",
    github: "https://github.com/carlos-daniel07/bmi-calculator-vanilla-js",
    isTop: false,
    alt: "Calculadora de índice de masa corporal con campos para peso en kilogramos y altura en centímetros",
  },
  {
    id: 26,
    title: "Generador de Paletas de Colores",
    description:
      "Generador dinámico de 5 colores aleatorios generados matemáticamente a partir de códigos HEX. Incluye efecto de expansión CSS y manejo del portapapeles nativo de JS con confirmación de usuario.",
    techTags: ["HTML5", "CSS3", "JavaScript"],
    image:
      "https://res.cloudinary.com/dwdyg6evh/image/upload/v1790370606/color-palette-generator_ydr8i7.webp",
    url: "https://colorpalettegeneratorjs.netlify.app/",
    github: "https://github.com/carlos-daniel07/color-palette-generator",
    isTop: false,
    alt: "Generador de paletas de colores mostrando 5 franjas de color con sus códigos HEX",
  },
  {
    id: 27,
    title: "Generador de Color RGB",
    description:
      "Utilidad para generar colores RGB leyendo en tiempo real el valor de múltiples inputs tipo rango. Actualiza una vista previa circular de forma inmediata y permite copiar el valor sintáctico al portapapeles.",
    techTags: ["HTML5", "CSS3", "JavaScript"],
    image:
      "https://res.cloudinary.com/dwdyg6evh/image/upload/v1790370593/rgb-color-generator_d80w5c.webp",
    url: "https://rgbcolorgeneratorjs.netlify.app/",
    github: "https://github.com/carlos-daniel07/rgb-color-generator",
    isTop: false,
    alt: "Generador de colores RGB con vista previa circular y sliders para ajustar rojo, verde y azul",
  },

  // ==========================================
  // 🎨 ARCHIVE (UI/UX, Manipulación del DOM y Animaciones Visuales)
  // ==========================================
  {
    id: 28,
    title: "Oso Curioso: Ilustración SVG Dinámica",
    description:
      "Ilustración interactiva vectorial interactuando con las coordenadas del evento `mousemove`. El algoritmo calcula la posición del cursor en tiempo real para modificar atributos de los nodos del SVG, logrando que el personaje 'mire' al puntero.",
    techTags: ["HTML5", "CSS3", "JavaScript", "SVG"],
    image:
      "https://res.cloudinary.com/dwdyg6evh/image/upload/v1790370609/favicon-cursor-follow-svg-bear_glabwn.webp",
    url: "https://cursor-follow-svg-bear.netlify.app/",
    github: "https://github.com/carlos-daniel07/cursor-follow-svg-bear",
    isTop: false,
    alt: "Ilustración SVG de un oso que sigue el movimiento del cursor sobre fondo amarillo",
  },
  {
    id: 29,
    title: "Entrenador de Mecanografía",
    description:
      "Juego de mecanografía con teclado virtual. Vincula los eventos de tipo `keydown` y `keyup` para validar entradas de usuario contra letras objetivo, aplicando animaciones de feedback visual instantáneo en el DOM.",
    techTags: ["HTML5", "CSS3", "JavaScript"],
    image:
      "https://res.cloudinary.com/dwdyg6evh/image/upload/v1790370609/favicon-touch-typing-keyboard-trainer_gxtjgq.webp",
    url: "https://touch-typing-keyboard-trainer.netlify.app/",
    github: "https://github.com/carlos-daniel07/touch-typing-keyboard-trainer",
    isTop: false,
    alt: "Teclado virtual con teclas coloreadas por dedo para practicar mecanografía al tacto",
  },
  {
    id: 30,
    title: "Banner Hero Parallax",
    description:
      "Sección hero interactiva de múltiples capas. Renderiza siete elementos flotantes que reaccionan de manera desacoplada a la posición del cursor gracias a la integración de Parallax.js y CSS en capas.",
    techTags: ["HTML5", "CSS3", "JavaScript", "Parallax.js"],
    image:
      "https://res.cloudinary.com/dwdyg6evh/image/upload/v1790370588/mouse-parallax-hero-banner_f7fbxu.webp",
    url: "https://mouse-parallax-hero-banner.netlify.app/",
    github: "https://github.com/carlos-daniel07/mouse-parallax-hero-banner",
    isTop: false,
    alt: "Banner hero con efecto parallax mostrando el nombre Carlos D. rodeado de íconos flotantes",
  },
  {
    id: 31,
    title: "Tarjeta de Perfil Dinámica",
    description:
      "Business card digital con datos inyectados dinámicamente desde un objeto JavaScript para desacoplar el contenido de la estructura HTML. Texturas CSS y manipulación semántica nativa del modelo de caja.",
    techTags: ["HTML5", "CSS3", "JavaScript", "Font Awesome"],
    image:
      "https://res.cloudinary.com/dwdyg6evh/image/upload/v1790370590/profile-card-dynamic-data_hwcoyd.webp",
    url: "https://profilecardtemplat.netlify.app/",
    github: "https://github.com/carlos-daniel07/profile-card-dynamic-data",
    isTop: false,
    alt: "Tarjeta de perfil digital inyectada por JavaScript con foto circular, nombre y redes sociales",
  },
  {
    id: 32,
    title: "Hero Slider Multimedial",
    description:
      "Sección hero con slider de elementos `` superpuestos. El sistema de JavaScript sincroniza bloques de texto flotante transparentes usando técnicas de backdrop-filter para garantizar legibilidad.",
    techTags: ["HTML5", "CSS3", "JavaScript"],
    image:
      "https://res.cloudinary.com/dwdyg6evh/image/upload/v1790370601/video-hero-slider-with-text_acprwc.webp",
    url: "https://video-hero-slider-with-text.netlify.app/",
    github: "https://github.com/carlos-daniel07/video-hero-slider-with-text",
    isTop: false,
    alt: "Hero slider con video de fondo de Tokio y texto descriptivo sincronizado",
  },
  {
    id: 33,
    title: "Venta de Viajes",
    description:
      "Landing page interactiva estructurada dinámicamente. Manipulación intensiva del DOM para iterar y renderizar datos estructurados simulando flujos y tarjetas de una base de datos.",
    techTags: ["JavaScript", "HTML/CSS"],
    image:
      "https://res.cloudinary.com/dwdyg6evh/image/upload/v1790372666/venta-de-viajes-curso-js_qsj5r0.webp",
    url: "https://venta-de-viajes-curso.netlify.app/",
    github: "https://github.com/carlos-daniel07/venta-viajes-curso-js",
    isTop: false,
    alt: "Landing page de venta de viajes mostrando el destino Barcelona, con contenido renderizado dinámicamente en JavaScript",
  },
  {
    id: 34,
    title: "Loader con Animación de Pulso",
    description:
      "Overlay de carga con spinner implementado íntegramente en animaciones @keyframes (escala y desvanecimiento en bucle). El DOM es purgado de la capa superior mediante limpieza setTimeout programada.",
    techTags: ["HTML5", "CSS3", "JavaScript"],
    image:
      "https://res.cloudinary.com/dwdyg6evh/image/upload/v1790370589/page-loader-pulse-spinner_etxyyf.webp",
    url: "https://page-loader-pulse-spinner.netlify.app/",
    github: "https://github.com/carlos-daniel07/page-loader-pulse-spinner",
    isTop: false,
    alt: "Pantalla de carga oscura con spinner animado tipo pulso y texto de carga",
  },
  {
    id: 35,
    title: "Menú Fullscreen con Interacciones",
    description:
      "Menú overlay de pantalla completa. La lógica altera las propiedades de los nodos (`src` y variables de color CSS) en respuesta a eventos `onmouseover`, combinando pseudo-elementos con manipulación pura.",
    techTags: ["HTML5", "CSS3", "JavaScript"],
    image:
      "https://res.cloudinary.com/dwdyg6evh/image/upload/v1790370600/ullscreen-menu-color-hover-2_duotno.webp",
    url: "https://fullscreen-menu-color-hover.netlify.app/",
    github: "https://github.com/carlos-daniel07/fullscreen-menu-color-hover",
    isTop: false,
    alt: "Menú de navegación a pantalla completa con ítem resaltado en color e imagen dinámica lateral",
  },
  {
    id: 36,
    title: "Galería de Producto Interactiva",
    description:
      "Módulo de producto (e-commerce). Control de eventos onmouseover para actualizar visualizaciones primarias con técnicas de glassmorphism gestionadas únicamente desde las hojas de cascada base.",
    techTags: ["HTML5", "CSS3", "JavaScript"],
    image:
      "https://res.cloudinary.com/dwdyg6evh/image/upload/v1790370589/on-mouse-over_mmxm05.webp",
    url: "https://hover-thumbnail-image-switcher.netlify.app/",
    github: "https://github.com/carlos-daniel07/hover-thumbnail-image-switcher",
    isTop: false,
    alt: "Galería de producto interactiva con miniaturas y cambio de imagen al hacer hover",
  },
  {
    id: 37,
    title: "Sidebar Animado con Navegación Interactiva",
    description:
      "Menú lateral totalmente responsive que se expande mediante animaciones CSS fluidas. Iconografía personalizada y transición de color por estado, eliminando dependencias pesadas por JavaScript nativo.",
    techTags: ["HTML5", "CSS3", "JavaScript", "Ionicons"],
    image:
      "https://res.cloudinary.com/dwdyg6evh/image/upload/v1790375303/animated-sidebar-navigation-menu_wrltn3.webp",
    url: "https://animated-sidebar-navigation-menu.netlify.app/",
    github:
      "https://github.com/carlos-daniel07/animated-sidebar-navigation-menu",
    isTop: false,
    alt: "Menú lateral animado con iconos de navegación y resaltado de color en el ítem activo",
  },
  {
    id: 38,
    title: "Sidebar Deslizante con Transición Suave",
    description:
      "Menú de navegación lateral fuera del canvas activado a través de cambios de clases maestras en el DOM. Transformaciones con transición constante e inyección de eventos por scroll global.",
    techTags: ["HTML5", "CSS3", "JavaScript"],
    image:
      "https://res.cloudinary.com/dwdyg6evh/image/upload/v1790370597/smooth-sliding-sidebar-menu_oujldf.webp",
    url: "https://smoothslidingsidebarmenu.netlify.app/",
    github: "https://github.com/carlos-daniel07/smooth-sliding-sidebar-menu",
    isTop: false,
    alt: "Sidebar deslizante abierto sobre landing page de diseño de interiores, mostrando enlaces de navegación",
  },
  {
    id: 39,
    title: "Menú Hamburguesa Responsive",
    description:
      "Recreación de un módulo de navegación colapsable clásico transformado por pseudo-elementos (CSS puro). El conmutador dispara overlays a pantalla completa con lógicas booleanas sencillas de JavaScript.",
    techTags: ["HTML5", "CSS3", "JavaScript"],
    image:
      "https://res.cloudinary.com/dwdyg6evh/image/upload/v1790370605/burger-menu-2_izibwr.webp",
    url: "https://responsive-hamburgermenu.netlify.app/",
    github: "https://github.com/carlos-daniel07/responsive-hamburger-menu",
    isTop: false,
    alt: "Menú hamburguesa responsive abierto en vista móvil mostrando opciones sobre fondo de color",
  },
  {
    id: 40,
    title: "Toggle Card Interactiva",
    description:
      "Componente flotante y modular. Altera su rotación (135°) y expone cajas adyacentes estructuradas mediante transformaciones escalares encadenadas con latencias CSS programadas (`transition-delay`).",
    techTags: ["HTML5", "CSS3", "JavaScript"],
    image:
      "https://res.cloudinary.com/dwdyg6evh/image/upload/v1790375785/expandable-toggle-card_ywumpc.webp",
    url: "https://expandable-toggle-card.netlify.app/",
    github: "https://github.com/carlos-daniel07/expandable-toggle-card",
    isTop: false,
    alt: "Tarjeta expandible tipo burbuja de diálogo activada por un botón flotante circular",
  },
  {
    id: 41,
    title: "Dark Mode Toggle Switch",
    description:
      "Interruptor físico deslizable implementado como componente stand-alone (Plug & Play). Lógica de manipulación unificada en una sola clase maestra que inyecta esquemas de sombras internas y persistencia de memoria local.",
    techTags: ["HTML5", "CSS3", "JavaScript"],
    image:
      "https://res.cloudinary.com/dwdyg6evh/image/upload/v1790375496/dark-light-mode-toggle-switch_kyfqma.webp",
    url: "https://dark-light-mode-toggle-switch.netlify.app/",
    github: "https://github.com/carlos-daniel07/dark-light-mode-toggle-switch",
    isTop: false,
    alt: "Switch de tema claro/oscuro tipo interruptor físico sobre fondo oscuro",
  },
  {
    id: 42,
    title: "UI de Autenticación Deslizante",
    description:
      "Interfaces cruzadas de Login/Signup en un solo contenedor físico. Curvatura de máscaras por SVG o border-radius encadenado junto a un efecto de transición horizontal para revelar formularios independientes.",
    techTags: ["HTML5", "CSS3", "JavaScript", "Font Awesome"],
    image:
      "https://res.cloudinary.com/dwdyg6evh/image/upload/v1790370595/sliding-panel-login-signup-ui_clx719.webp",
    url: "https://sliding-panel-login-signup-ui.netlify.app/",
    github: "https://github.com/carlos-daniel07/sliding-panel-login-signup-ui",
    isTop: false,
    alt: "Interfaz de login y registro con panel curvo deslizante e ilustración visual",
  },

  // ==========================================
  // 📐 ARCHIVE (Maquetación Estática HTML/CSS & SSG Básicos)
  // ==========================================
  {
    id: 43,
    title: "Turkano Promo Page",
    description:
      "Sitio web promocional estático centrado en rendimiento estricto y Core Web Vitals. Diseño basado íntegramente en Tailwind CSS para el manejo de espaciados, tipografías y animaciones utility-first.",
    techTags: ["Astro", "Tailwind CSS"],
    image:
      "https://res.cloudinary.com/dwdyg6evh/image/upload/v1790372686/landing-page-turkano_nt2nqr.webp",
    url: "https://turkano-el-show-debe-continuar.netlify.app/",
    github: "https://github.com/carlos-daniel07/landing-turkano",
    isTop: false,
    alt: "Landing page promocional del artista Turkano con biografía, construida con Astro y Tailwind CSS",
  },
  {
    id: 44,
    title: "Corporate UI Responsive",
    description:
      "Desarrollo de maquetación corporativa educativa sin usar frameworks externos. Adaptabilidad multiplataforma construida mediante Media Queries Vanilla e iframes integrados de forma flexible.",
    techTags: ["HTML", "CSS", "Responsive Design"],
    image:
      "https://res.cloudinary.com/dwdyg6evh/image/upload/v1790372678/corporate-ui-responsive_v03hps.webp",
    url: "https://corporate-ui-responsive.netlify.app/",
    github: "https://github.com/carlos-daniel07/corporate-ui-responsive",
    isTop: false,
    alt: "Plataforma educativa corporativa OTTO con tarjetas de categorías y diseño responsive en CSS",
  },
  {
    id: 45,
    title: "Blog UI Layout",
    description:
      "Maquetación semántica web centrada en una lectura accesible. Ejercicio orientado a jerarquía tipográfica, el uso del modelo de caja flex y tags nativos para navegadores asistidos.",
    techTags: ["HTML", "CSS"],
    image:
      "https://res.cloudinary.com/dwdyg6evh/image/upload/v1790372674/blog-ui-layout_aehmde.webp",
    url: "https://blog-ui-layout.netlify.app/",
    github: "https://github.com/carlos-daniel07/blog-ui-layout",
    isTop: false,
    alt: "Interfaz de blog educativo con menú de navegación y listado de noticias de front-end maquetada con CSS puro",
  },
];

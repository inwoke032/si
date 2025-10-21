// Calendar and Schedule Data - Preserved from original HTML
import type { ScheduleItem, RoadmapItem, MonthlyFocus } from "@shared/schema";

export const START_DATE = new Date('2025-10-20T00:00:00');
export const END_DATE = new Date('2026-10-19T23:59:59');

// Task Details with descriptions
export const taskDetails: Record<string, any> = {
  "Estudio Python": {
    "Fundamentos: Variables, Tipos de Datos": "Concéntrate en entender qué es una variable y los tipos de datos básicos como strings, integers y floats. Realiza ejercicios prácticos en Codecademy.",
    "Fundamentos: Listas, Diccionarios, Tuplas": "Aprende a manejar colecciones de datos. Practica cómo añadir, eliminar y acceder a elementos en listas y diccionarios.",
    "Fundamentos: Bucles (for, while) y Condicionales": "Domina la lógica de control. Escribe pequeños scripts que usen bucles para iterar sobre listas y condicionales (if/else) para tomar decisiones.",
    "Fundamentos: Funciones y Práctica": "Aprende a escribir tus propias funciones para reutilizar código. Recurso recomendado: Tutorial Interactivo de Codecademy 'Learn Python 3'.",
    "Pandas: Series, DataFrames y Lectura de CSV": "Entiende las dos estructuras de datos principales de Pandas. Practica cargar un archivo CSV en un DataFrame con `pd.read_csv`.",
    "Pandas: Selección de Datos con .loc[] e .iloc[]": "¡Crucial! Practica seleccionar filas y columnas específicas. `.loc` es para etiquetas, `.iloc` es para posiciones numéricas.",
    "Pandas: Filtrado de Datos y Condiciones": "Aplica filtros para encontrar datos que cumplan criterios. Ejemplo: `df[df['ventas'] > 1000]`.",
    "Pandas: Manejo de Datos Faltantes": "Aprende a identificar y manejar datos nulos usando `.isnull()`, `.dropna()` y `.fillna()`.",
    "Pandas: Agrupación de Datos con .groupby()": "Una de las herramientas más poderosas. Agrupa datos por categorías para realizar cálculos agregados como suma o media.",
    "Pandas: Combinar DataFrames (merge, concat)": "Aprende a unir diferentes tablas de datos. `merge` es similar a los JOINs de SQL.",
    "NumPy: Creación y Operaciones con Arrays": "Practica la creación de arrays con `np.array()`, `np.arange()`, y `np.zeros()`. Realiza operaciones matemáticas básicas.",
    "Matplotlib: Gráficos de Líneas y Barras": "Crea tus primeras visualizaciones. Aprende la estructura de `figure` y `axes` para personalizar tus gráficos.",
    "Seaborn: Histogramas y Boxplots": "Usa Seaborn para crear gráficos estadísticos más atractivos y con menos código.",
    "Seaborn: Heatmaps y Pairplots": "Visualiza correlaciones con mapas de calor y relaciones entre múltiples variables con `pairplot`.",
    "SQL: SELECT, FROM, WHERE y Agregaciones": "Practica los comandos básicos para extraer datos. Usa `COUNT()`, `SUM()`, `AVG()` para resumir información. Recurso: SQLBolt.",
    "SQL: GROUP BY, HAVING y JOINS": "Domina `GROUP BY` para agrupar datos y `JOIN` (especialmente INNER y LEFT) para combinar tablas.",
    "ML Clásico: Aprendizaje Supervisado vs No Supervisado": "Entiende la diferencia conceptual: datos etiquetados vs. no etiquetados. Recurso: Videos de StatQuest en YouTube.",
    "ML Clásico: Regresión vs Clasificación": "Diferencia entre predecir un número (regresión) y predecir una categoría (clasificación).",
    "ML Clásico: Regresión Lineal/Logística": "Comprende la idea básica detrás de estos dos algoritmos fundamentales con Scikit-Learn.",
    "ML Clásico: Árboles de Decisión y Random Forest": "Visualiza cómo un árbol de decisión toma decisiones y cómo Random Forest mejora su rendimiento.",
    "ML Clásico: Support Vector Machines (SVM)": "Entiende conceptualmente cómo las SVM encuentran el hiperplano óptimo para separar datos.",
    "ML Clásico: K-Nearest Neighbors (KNN)": "Aprende este sencillo pero potente algoritmo basado en la 'vecindad' de los datos.",
    "ML Clásico: Evaluación de Modelos": "Domina métricas como Accuracy, Precision, Recall, F1-Score y la matriz de confusión.",
    "Cloud: APIs de GCP (Vision, Natural Language)": "Explora para qué sirven las APIs pre-entrenadas de Google. Mira videos cortos que expliquen sus casos de uso.",
    "Deep Learning: ¿Qué es una Red Neuronal?": "Comprende los conceptos básicos: neurona, capa, función de activación.",
    "Deep Learning: TensorFlow/PyTorch (Setup)": "Elige un framework (TensorFlow con Keras es recomendado para empezar) e instala el entorno.",
    "Deep Learning: Construyendo tu Primera Red Neuronal": "Crea una red neuronal simple para un problema de clasificación con datos tabulares (ej. dataset Iris).",
    "Deep Learning: Redes Neuronales Convolucionales (CNN)": "Entiende la arquitectura básica de las CNNs, ideales para el análisis de imágenes.",
    "Deep Learning: Proyecto Clasificador de Imágenes": "Desarrolla un proyecto práctico como un clasificador de 'perros vs. gatos'.",
    "Deep Learning: Redes Neuronales Recurrentes (RNN)": "Comprende la base de las RNNs para procesar datos secuenciales como texto.",
    "Deep Learning: Proyecto Análisis de Sentimiento": "Aplica una RNN o LSTM para clasificar el sentimiento de reseñas de texto.",
    "Repaso y Aplicación en Proyectos": "Aplica todo lo aprendido en tus proyectos de GitHub. La práctica es la clave para consolidar el conocimiento."
  },
  "Estudio Anki": "Dedica este tiempo a repasar tus tarjetas de Anki. Concéntrate en conceptos de Python, SQL y Machine Learning para fortalecer tu memoria a largo plazo.",
  "Contenido en Inglés (YouTube)": "Mira al menos 3 horas de contenido técnico en inglés. Canales recomendados: freeCodeCamp, Corey Schafer, StatQuest with Josh Starmer. Activa los subtítulos en inglés si es necesario.",
  "Proyecto Python": "Trabaja en uno de tus 3 proyectos de portafolio en GitHub. Enfócate en la limpieza de datos, análisis exploratorio (EDA) o la implementación de un modelo.",
  "Estudio Curso IA": "Dedica este bloque a tu curso de TalentoDigital.do. Revisa las clases, haz los ejercicios y prepara preguntas para la próxima sesión."
};

// Python Study Plan (48 weeks)
export const pythonStudyPlan: string[] = [
  // Mes 1-3: Fundamentos
  "Fundamentos: Variables, Tipos de Datos", "Fundamentos: Listas, Diccionarios, Tuplas", "Fundamentos: Bucles (for, while) y Condicionales", "Fundamentos: Funciones y Práctica",
  "Pandas: Series, DataFrames y Lectura de CSV", "Pandas: Selección de Datos con .loc[] e .iloc[]", "Pandas: Filtrado de Datos y Condiciones", "Pandas: Manejo de Datos Faltantes",
  "Pandas: Agrupación de Datos con .groupby()", "Pandas: Combinar DataFrames (merge, concat)", "NumPy: Creación y Operaciones con Arrays", "Repaso y Aplicación en Proyectos",
  // Mes 4-6: ML Clásico
  "Matplotlib: Gráficos de Líneas y Barras", "Seaborn: Histogramas y Boxplots", "Seaborn: Heatmaps y Pairplots", "SQL: SELECT, FROM, WHERE y Agregaciones",
  "SQL: GROUP BY, HAVING y JOINS", "ML Clásico: Aprendizaje Supervisado vs No Supervisado", "ML Clásico: Regresión vs Clasificación", "ML Clásico: Regresión Lineal/Logística",
  "ML Clásico: Árboles de Decisión y Random Forest", "ML Clásico: Support Vector Machines (SVM)", "ML Clásico: K-Nearest Neighbors (KNN)", "ML Clásico: Evaluación de Modelos",
  // Mes 7-9: Profundización
  "Cloud: APIs de GCP (Vision, Natural Language)", "Repaso y Aplicación en Proyectos", "Deep Learning: ¿Qué es una Red Neuronal?", "Deep Learning: TensorFlow/PyTorch (Setup)",
  "Deep Learning: Construyendo tu Primera Red Neuronal", "Repaso y Aplicación en Proyectos", "Deep Learning: Redes Neuronales Convolucionales (CNN)", "Repaso y Aplicación en Proyectos",
  "Deep Learning: Proyecto Clasificador de Imágenes", "Repaso y Aplicación en Proyectos", "Deep Learning: Redes Neuronales Recurrentes (RNN)", "Repaso y Aplicación en Proyectos",
  // Mes 10-12: Preparación
  "Deep Learning: Proyecto Análisis de Sentimiento", "Repaso y Aplicación en Proyectos", "Repaso y Aplicación en Proyectos", "Repaso y Aplicación en Proyectos",
  "Repaso y Aplicación en Proyectos", "Repaso y Aplicación en Proyectos", "Repaso y Aplicación en Proyectos", "Repaso y Aplicación en Proyectos",
  "Repaso y Aplicación en Proyectos", "Repaso y Aplicación en Proyectos", "Repaso y Aplicación en Proyectos", "Repaso y Aplicación en Proyectos",
  "Repaso y Aplicación en Proyectos", "Repaso y Aplicación en Proyectos", "Repaso y Aplicación en Proyectos", "Repaso y Aplicación en Proyectos",
];

// Weekly Schedule
export const weeklySchedule: Record<number, ScheduleItem[]> = {
  0: [ // Domingo
    { time: '2:00 PM - 2:30 PM', task: 'Almuerzo / Empezar el día' },
    { time: '2:30 PM - 3:00 PM', task: 'Estudio Anki', focus: true },
    { time: '3:00 PM - 6:00 PM', task: 'Contenido en Inglés (YouTube)', focus: true },
    { time: '6:00 PM - 7:00 PM', task: 'Ver Series en Inglés' },
    { time: '7:00 PM - 9:30 PM', task: 'Tiempo Libre / Cena' },
    { time: '9:30 PM - 9:50 PM', task: 'Hablar con Amiga de Filipinas' },
    { time: '9:50 PM onwards', task: 'Tiempo Libre' }
  ],
  1: [ // Lunes
    { time: '6:00 AM - 6:40 AM', task: 'Música en Inglés (Estudio)' },
    { time: '6:40 AM - 7:20 AM', task: 'Traslado al Trabajo' },
    { time: '8:00 AM - 8:05 AM', task: 'Abrir Labs y Aires' },
    { time: '8:05 AM - 8:25 AM', task: 'Hablar con Amiga de Filipinas' },
    { time: '8:25 AM - 9:25 AM', task: 'Contenido en Inglés (YouTube)' },
    { time: '9:25 AM - 11:00 AM', task: 'Estudio Python', focus: true },
    { time: '11:00 AM - 12:00 PM', task: 'Contenido en Inglés (YouTube)' },
    { time: '12:00 PM - 1:00 PM', task: 'Almuerzo' },
    { time: '1:00 PM - 3:00 PM', task: 'Trabajo' },
    { time: '3:00 PM - 3:40 PM', task: 'Traslado a Casa' },
    { time: '3:40 PM - 4:40 PM', task: 'Contenido en Inglés (YouTube)' },
    { time: '4:40 PM - 5:10 PM', task: 'Estudio Anki', focus: true },
    { time: '5:10 PM - 6:10 PM', task: 'Ver Series en Inglés' },
    { time: '6:10 PM - 7:10 PM', task: 'Proyecto Python', focus: true },
    { time: '7:10 PM - 10:00 PM', task: 'Tiempo Libre' },
    { time: '10:00 PM - 11:00 PM', task: 'Prepararse para Dormir' }
  ],
  2: [ // Martes
    { time: '6:00 AM - 6:40 AM', task: 'Música en Inglés (Estudio)' },
    { time: '6:40 AM - 7:20 AM', task: 'Traslado al Trabajo' },
    { time: '8:00 AM - 8:05 AM', task: 'Abrir Labs y Aires' },
    { time: '8:05 AM - 8:25 AM', task: 'Hablar con Amiga de Filipinas' },
    { time: '8:25 AM - 9:25 AM', task: 'Contenido en Inglés (YouTube)' },
    { time: '9:25 AM - 11:00 AM', task: 'Estudio Python', focus: true },
    { time: '11:00 AM - 12:00 PM', task: 'Contenido en Inglés (YouTube)' },
    { time: '12:00 PM - 1:00 PM', task: 'Almuerzo' },
    { time: '1:00 PM - 3:00 PM', task: 'Trabajo' },
    { time: '3:00 PM - 3:40 PM', task: 'Traslado a Casa' },
    { time: '3:40 PM - 4:40 PM', task: 'Contenido en Inglés (YouTube)' },
    { time: '4:40 PM - 5:10 PM', task: 'Estudio Anki', focus: true },
    { time: '5:10 PM - 6:10 PM', task: 'Ver Series en Inglés' },
    { time: '6:10 PM - 7:40 PM', task: 'Programar Servidor Haxball' },
    { time: '7:40 PM - 8:00 PM', task: 'Hablar con Amiga de Filipinas' },
    { time: '8:00 PM - 10:00 PM', task: 'Programar Servidor Haxball', focus: true },
    { time: '10:00 PM - 11:00 PM', task: 'Prepararse para Dormir' }
  ],
  3: [ // Miércoles
    { time: '6:00 AM - 6:40 AM', task: 'Música en Inglés (Estudio)' },
    { time: '6:40 AM - 7:20 AM', task: 'Traslado al Trabajo' },
    { time: '8:00 AM - 8:05 AM', task: 'Abrir Labs y Aires' },
    { time: '8:05 AM - 8:25 AM', task: 'Hablar con Amiga de Filipinas' },
    { time: '8:25 AM - 9:25 AM', task: 'Contenido en Inglés (YouTube)' },
    { time: '9:25 AM - 11:00 AM', task: 'Estudio Python', focus: true },
    { time: '11:00 AM - 12:00 PM', task: 'Contenido en Inglés (YouTube)' },
    { time: '12:00 PM - 1:00 PM', task: 'Almuerzo' },
    { time: '1:00 PM - 3:00 PM', task: 'Trabajo' },
    { time: '3:00 PM - 3:40 PM', task: 'Traslado a Casa' },
    { time: '3:40 PM - 4:40 PM', task: 'Contenido en Inglés (YouTube)' },
    { time: '4:40 PM - 5:10 PM', task: 'Estudio Anki', focus: true },
    { time: '5:10 PM - 6:10 PM', task: 'Ver Series en Inglés' },
    { time: '6:10 PM - 7:10 PM', task: 'Proyecto Python', focus: true },
    { time: '7:10 PM - 10:00 PM', task: 'Tiempo Libre' },
    { time: '10:00 PM - 11:00 PM', task: 'Prepararse para Dormir' }
  ],
  4: [ // Jueves
    { time: '6:00 AM - 6:40 AM', task: 'Música en Inglés (Estudio)' },
    { time: '6:40 AM - 7:20 AM', task: 'Traslado al Trabajo' },
    { time: '8:00 AM - 8:05 AM', task: 'Abrir Labs y Aires' },
    { time: '8:05 AM - 8:25 AM', task: 'Hablar con Amiga de Filipinas' },
    { time: '8:25 AM - 9:25 AM', task: 'Contenido en Inglés (YouTube)' },
    { time: '9:25 AM - 11:00 AM', task: 'Estudio Python', focus: true },
    { time: '11:00 AM - 12:00 PM', task: 'Contenido en Inglés (YouTube)' },
    { time: '12:00 PM - 1:00 PM', task: 'Almuerzo' },
    { time: '1:00 PM - 3:00 PM', task: 'Trabajo' },
    { time: '3:00 PM - 3:40 PM', task: 'Traslado a Casa' },
    { time: '3:40 PM - 4:40 PM', task: 'Contenido en Inglés (YouTube)' },
    { time: '4:40 PM - 5:10 PM', task: 'Estudio Anki', focus: true },
    { time: '5:10 PM - 6:10 PM', task: 'Ver Series en Español' },
    { time: '6:10 PM - 10:00 PM', task: 'Tiempo Libre' },
    { time: '10:00 PM - 11:00 PM', task: 'Prepararse para Dormir' }
  ],
  5: [ // Viernes
    { time: '6:00 AM - 6:40 AM', task: 'Música en Inglés (Estudio)' },
    { time: '6:40 AM - 7:20 AM', task: 'Traslado al Trabajo' },
    { time: '8:00 AM - 8:05 AM', task: 'Abrir Labs y Aires' },
    { time: '8:05 AM - 8:25 AM', task: 'Hablar con Amiga de Filipinas' },
    { time: '8:25 AM - 9:25 AM', task: 'Contenido en Inglés (YouTube)' },
    { time: '9:25 AM - 11:00 AM', task: 'Estudio Python', focus: true },
    { time: '11:00 AM - 12:00 PM', task: 'Contenido en Inglés (YouTube)' },
    { time: '12:00 PM - 1:00 PM', task: 'Almuerzo' },
    { time: '1:00 PM - 3:00 PM', task: 'Trabajo' },
    { time: '3:00 PM - 3:40 PM', task: 'Traslado a Casa' },
    { time: '3:40 PM - 4:40 PM', task: 'Contenido en Inglés (YouTube)' },
    { time: '4:40 PM - 5:10 PM', task: 'Estudio Anki', focus: true },
    { time: '5:10 PM - 6:10 PM', task: 'Ver Series en Inglés' },
    { time: '6:10 PM - 8:00 PM', task: 'Tiempo Libre' },
    { time: '8:00 PM - 10:00 PM', task: 'Liga de Haxball', focus: true },
    { time: '10:00 PM onwards', task: 'Tiempo Libre' }
  ],
  6: [ // Sábado
    { time: '2:00 PM - 2:30 PM', task: 'Almuerzo / Empezar el día' },
    { time: '2:30 PM - 4:30 PM', task: 'Estudio Curso IA', focus: true },
    { time: '4:30 PM - 5:30 PM', task: 'Proyecto Python', focus: true },
    { time: '5:30 PM - 7:30 PM', task: 'Contenido en Inglés (YouTube)' },
    { time: '7:30 PM - 8:30 PM', task: 'Ver Series en Inglés' },
    { time: '8:30 PM - 9:30 PM', task: 'Tiempo Libre / Cena' },
    { time: '9:30 PM - 9:50 PM', task: 'Hablar con Amiga de Filipinas' },
    { time: '9:50 PM - 11:50 PM', task: 'Canal de YouTube', focus: true },
    { time: '11:50 PM onwards', task: 'Tiempo Libre' }
  ],
};

// Time Allocation for Weekly Chart
export const timeAllocationData = {
  labels: ['Estudio Python', 'Proyectos', 'Inmersión Inglés', 'Haxball', 'YouTube', 'Estudio IA', 'Anki'],
  datasets: [{
    label: 'Horas por Semana',
    data: [7.5, 3, 20, 5, 2, 2, 3.5],
    backgroundColor: ['#E8A87C', '#C38D9E', '#41B3A3', '#85DCB0', '#F38181', '#FCE38A', '#A2D5F2'],
    borderColor: '#FDFBF8',
    borderWidth: 4,
    hoverOffset: 10
  }]
};

// Roadmap Data
export const roadmapData: RoadmapItem[] = [
  {
    id: '1',
    title: "Pilar 1: Las Matemáticas (La Base de Todo)",
    content: `No necesitas un doctorado, pero sí una comprensión intuitiva y práctica de estos conceptos, ya que son el lenguaje en el que se construyen los modelos de IA.

**Álgebra Lineal:** Es fundamental. La IA trata con datos que se representan como vectores y matrices (Vectores, matrices, producto punto, transformaciones).

**Cálculo:** Especialmente el cálculo diferencial (Derivadas, reglas de la cadena, gradientes). Es clave para entender cómo los modelos "aprenden".

**Probabilidad y Estadística:** Es el lenguaje de la incertidumbre (Probabilidad condicional, teorema de Bayes, distribuciones, media, varianza).`,
    completed: false
  },
  {
    id: '2',
    title: "Pilar 2: La Programación (La Herramienta Principal)",
    content: `Aquí es donde las ideas matemáticas se convierten en realidad. Python es el rey indiscutible en IA y Machine Learning.

**Python y Librerías Esenciales:**
- **NumPy:** Para operaciones matemáticas eficientes.
- **Pandas:** Para manipulación y análisis de datos.
- **Matplotlib / Seaborn:** Para visualización de datos.
- **Scikit-Learn:** La librería más importante para empezar, con algoritmos de ML listos para usar.

**SQL (Structured Query Language):** Vital en el mundo real. Los datos residen en bases de datos y necesitas saber cómo extraerlos.`,
    completed: false
  },
  {
    id: '3',
    title: "Pilar 3: Teoría de IA y Machine Learning (Los Conceptos)",
    content: `Una vez que tienes las bases, debes entender los conceptos y algoritmos.

**Tipos de Aprendizaje Automático:**
- **Supervisado:** Enseñar con datos etiquetados (Regresión para predecir números, Clasificación para predecir categorías).
- **No Supervisado:** Encontrar patrones en datos no etiquetados (Clustering para agrupar datos similares).

**Modelos Fundamentales (con Scikit-Learn):** Regresión Lineal/Logística, Árboles de Decisión, Random Forest, SVM.

**Introducción a Redes Neuronales:** Entender qué es una neurona, una capa y cómo se conectan. Empezar con TensorFlow o PyTorch después de dominar Scikit-Learn.`,
    completed: false
  },
  {
    id: '4',
    title: "Ruta de Estudio Sugerida (6-12 meses)",
    content: `**Meses 1-3: Fundamentos Sólidos**
Aprende Python, domina NumPy y Pandas, y repasa conceptos de Álgebra Lineal y Estadística.

**Meses 4-6: Machine Learning Clásico**
Sumérgete en Scikit-Learn, aplica los modelos fundamentales y completa tu primer proyecto de portafolio.

**Meses 7-9: Profundización**
Aprende SQL básico, empieza con Deep Learning (TensorFlow o PyTorch) y completa un segundo proyecto.

**Meses 10-12: Preparación para el Empleo**
Pule tu portafolio en GitHub, optimiza tu LinkedIn y practica para entrevistas técnicas.`,
    completed: false
  },
];

// Monthly Focus Data
export const monthlyFocusData: Record<string, MonthlyFocus> = {
  '2025-9': { 
    month: '2025-9',
    title: 'Octubre: Inicio de la Cimentación', 
    description: 'Enfócate en dominar los fundamentos de Python y Pandas. El objetivo es construir una base sólida para el análisis de datos. Comienza tu primer proyecto de portafolio para aplicar lo aprendido.',
    color: 'bg-orange-100', 
    textColor: 'text-orange-800' 
  },
  '2025-10': { 
    month: '2025-10',
    title: 'Noviembre: Profundización Técnica', 
    description: 'Amplía tu arsenal técnico con NumPy, Matplotlib, Seaborn y SQL. La meta es poder manipular y visualizar datos desde cualquier fuente. Avanza en tus proyectos.',
    color: 'bg-orange-100', 
    textColor: 'text-orange-800' 
  },
  '2025-11': { 
    month: '2025-11',
    title: 'Diciembre: Consolidación y Proyectos', 
    description: 'Sumérgete en los conceptos de Machine Learning y Cloud (GCP). El objetivo es entender el ciclo de vida de un modelo de IA. Finaliza tus proyectos clave.',
    color: 'bg-orange-100', 
    textColor: 'text-orange-800' 
  },
  '2026-0': { 
    month: '2026-0',
    title: 'Enero: Tu Marca Profesional', 
    description: 'Es hora de mostrar tu valor. Optimiza tu perfil de LinkedIn, crea un CV de impacto y publica tus proyectos en GitHub. Tu presencia online es tu nuevo currículum.',
    color: 'bg-amber-100', 
    textColor: 'text-amber-800' 
  },
  '2026-1': { 
    month: '2026-1',
    title: 'Febrero: Búsqueda Activa', 
    description: 'Comienza la búsqueda estratégica de pasantías. La meta no es aplicar a todo, sino enviar aplicaciones personalizadas y de alta calidad a empresas que te interesen.',
    color: 'bg-amber-100', 
    textColor: 'text-amber-800' 
  },
  '2026-2': { 
    month: '2026-2',
    title: 'Marzo: Intensificación y Networking', 
    description: 'Aumenta el ritmo de aplicaciones y comienza a conectar con reclutadores en LinkedIn. Prepárate para las entrevistas: practica explicando tus proyectos con confianza.',
    color: 'bg-amber-100', 
    textColor: 'text-amber-800' 
  },
  '2026-3': { 
    month: '2026-3',
    title: 'Abril: Entrevistas y Seguimiento', 
    description: 'Enfócate en brillar en las entrevistas. Investiga a las empresas, prepara tus respuestas y haz preguntas inteligentes. La perseverancia es clave en esta fase final.',
    color: 'bg-yellow-100', 
    textColor: 'text-yellow-800' 
  },
  '2026-4': { 
    month: '2026-4',
    title: 'Mayo: Profundización en Deep Learning', 
    description: 'Comienza a estudiar los fundamentos de las redes neuronales. Elige un framework como TensorFlow o PyTorch y configura tu entorno.',
    color: 'bg-yellow-100', 
    textColor: 'text-yellow-800' 
  },
  '2026-5': { 
    month: '2026-5',
    title: 'Junio: Proyectos de Deep Learning', 
    description: 'Aplica lo aprendido construyendo tus primeros modelos de Deep Learning, como un clasificador de imágenes (CNNs).',
    color: 'bg-yellow-100', 
    textColor: 'text-yellow-800' 
  },
  '2026-6': { 
    month: '2026-6',
    title: 'Julio: NLP y Modelos Secuenciales', 
    description: 'Explora el Procesamiento del Lenguaje Natural (NLP) y las Redes Neuronales Recurrentes (RNNs) para analizar texto y secuencias.',
    color: 'bg-lime-100', 
    textColor: 'text-lime-800' 
  },
  '2026-7': { 
    month: '2026-7',
    title: 'Agosto: Pule tu Portafolio', 
    description: 'Refina tus proyectos existentes, asegúrate de que la documentación sea excelente y añade tus nuevos proyectos de Deep Learning.',
    color: 'bg-lime-100', 
    textColor: 'text-lime-800' 
  },
  '2026-8': { 
    month: '2026-8',
    title: 'Septiembre: Práctica de Entrevistas y Búsqueda Avanzada', 
    description: 'Practica activamente problemas de código (LeetCode) y preguntas conceptuales de IA. Expande tu búsqueda a roles más especializados.',
    color: 'bg-lime-100', 
    textColor: 'text-lime-800' 
  },
  '2026-9': { 
    month: '2026-9',
    title: 'Octubre: Networking y Aplicaciones Finales', 
    description: 'Intensifica tu networking en eventos online y LinkedIn. Envía tus aplicaciones finales con un portafolio robusto y confianza en tus habilidades.',
    color: 'bg-lime-100', 
    textColor: 'text-lime-800' 
  },
};

// Helper function to get Python topic for a specific date
export function getPythonTopicForDate(date: Date): string {
  const diffTime = Math.abs(date.getTime() - START_DATE.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const weekNumber = Math.floor(diffDays / 7);
  return pythonStudyPlan[weekNumber] || "Fase Final: Práctica Intensiva y Búsqueda Activa";
}

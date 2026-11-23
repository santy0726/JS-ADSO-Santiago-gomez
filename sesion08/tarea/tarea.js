
const textoPeliculas = `[
    {"titulo": "Encanto", "anio": 2021, "genero": "Animación", "calificacion": 4.4},
    {"titulo": "El abrazo de la serpiente", "anio": 2015, "genero": "Drama", "calificacion": 4.6},
    {"titulo": "Coco", "anio": 2017, "genero": "Animación", "calificacion": 4.8},
    {"titulo": "Pájaros de verano", "anio": 2018, "genero": "Drama", "calificacion": 4.3},
    {"titulo": "Intensamente 2", "anio": 2024, "genero": "Animación", "calificacion": 4.2},
    {"titulo": "Interestelar", "anio": 2014, "genero": "Ciencia ficción", "calificacion": 4.7},
    {"titulo": "Dune", "anio": 2021, "genero": "Ciencia ficción", "calificacion": 4.1},
    {"titulo": "La estrategia del caracol", "anio": 1993, "genero": "Comedia", "calificacion": 4.5}
]`;

const peliculas = JSON.parse(textoPeliculas);

const animacion = peliculas.filter((p) => p.genero === "Animación");

console.table(animacion);

const recientes = peliculas.filter((p) => p.anio >= 2018);

console.table(recientes);

const titulos = peliculas.map((p) => p.titulo.toUpperCase());

console.log(titulos);

const suma = peliculas.reduce((total, p) => total + p.calificacion, 0);

const promedio = suma / peliculas.length;

console.log("Calificación promedio:", promedio.toFixed(2));

const mejores = peliculas.toSorted((a, b) => b.calificacion - a.calificacion).slice(0, 3);

const resultado = JSON.stringify(mejores, null, 2);

console.log(resultado);

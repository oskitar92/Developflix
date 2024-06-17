import peliculas from './peliculas.js'

const accionMovies = peliculas.filter(pelicula => pelicula.genre_ids.includes(28));
const thrillerMovies = peliculas.filter(pelicula => pelicula.genre_ids.includes(53));
const aventuraMovies = peliculas.filter(pelicula => pelicula.genre_ids.includes(12));


function generarHTMLPelicula(pelicula) {
  return `
    <div class="pelicula">
      <img src="https://image.tmdb.org/t/p/w200${pelicula.poster_path}" alt="${pelicula.title}">
      <p>${pelicula.title}</p>
    </div>
  `;
}


function mostrarPeliculas(contenedorId, peliculas) {
  const contenedor = document.getElementById(contenedorId);
  if (contenedor) {
    contenedor.innerHTML = peliculas.map(pelicula => generarHTMLPelicula(pelicula)).join('');
  }
}


document.addEventListener('DOMContentLoaded', function() {
  mostrarPeliculas("genero-28", accionMovies);    
  mostrarPeliculas("genero-53", thrillerMovies);  
  mostrarPeliculas("genero-12", aventuraMovies); 
});


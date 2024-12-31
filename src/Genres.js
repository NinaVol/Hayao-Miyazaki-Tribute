import { movies } from "./MoviesData";

function Genres({setFilms}) {

    const filteredGenre = (genre) => {
        const newFilmsArray = movies.filter(movie => movie.genre.includes(genre))
        setFilms(newFilmsArray)
        }
    return(
        <div className="genres">
            <button className="btn-genre" onClick={() => setFilms(movies)}>All</button>
            <button className="btn-genre" onClick={() => filteredGenre('Adventure')}>Adventure</button>
            <button className="btn-genre" onClick={() => filteredGenre('Fantasy')}>Fantasy</button>
            <button className="btn-genre" onClick={() => filteredGenre('Coming-of-Age')}>Coming-of-Age</button>
            <button className="btn-genre" onClick={() => filteredGenre('Drama')}>Drama</button>
            <button className="btn-genre" onClick={() => filteredGenre('Romance')}>Romance</button>
            <button className="btn-genre" onClick={() => filteredGenre('Historical')}>Historical</button>
        </div>
    )
}
export default Genres;
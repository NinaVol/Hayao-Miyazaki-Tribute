import Movies from './moviesPosters/Movies-Watch.jpg';
import { useState } from 'react';
import { fetchMovie } from "./api";
import Swal from "sweetalert2";
import movieLinks from "./movieLinks.json";

function Watch() {
    const [query, setQuery] = useState("");
    const [movie, setMovie] = useState(null);

    const handleSearch = async (e) => {
        e.preventDefault();
        setMovie(null);

        if (!query.trim()) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please enter a movie title!",
                customClass: {
                    title: "swal-title"
                }
            });
            return;
        }

        const data = await fetchMovie(query);

        if (data && data.Response === "True") {
            const link = movieLinks.find((link) => link.id === data.imdbID);
            setMovie({ ...data, watchLink: link ? link.watch_link : null });
        } else {
            Swal.fire({
                icon: "error",
                title: "Movie not found",
                text: "Try another title!",
                customClass: {
                    title: "swal-title"
                }
            });
        }
    };

    return (
        <div>
            <div className='api-container'>
                <img src={Movies} className='watchPoster' alt='poster' />
                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="Enter a movie title"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button type="submit" className='btn-search'>Search</button>
                </form>

                {movie && (
                    <div className='api-container'>
                        <h2>{movie.Title}</h2>
                        <img src={movie.Poster} alt={movie.Title} />
                        <p className='summary'>{movie.Plot}</p>
                        {movie.watchLink ? (
                            <a
                                href={movie.watchLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Watch this movie
                            </a>
                        ) : (
                            <p>No streaming link available.</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Watch;

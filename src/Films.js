import React, { useState } from "react";
import { movies } from './MoviesData'
import Genres from "./Genres";
function Films() {
    
    const [films, setFilms] = useState(movies);
    const [showText, setShowText] = useState(false);

    const showTextClick = (movie) => {
      movie.showMore = !movie.showMore
      setShowText(!showText)
    }

   
    return (
        <div>
          <Genres setFilms ={setFilms}/>
        <div className="films">
           {films.map((movie => {
            const {id, title, image, year, description, showMore} = movie;
            return (
                <div key={id} className="film-card">
                    
                    <img className="poster" src={image} width='360px' height='480px' alt="poster"/>
                      <div className="film-info">
                       <h2>{title}</h2>
                       <p>{year}</p>
                       <p className="description">
                        {showMore ? description : description.substring(0,100) + '...'}
                        <button onClick={() => showTextClick(movie)} className="btn-show">{showMore ? 'Show less' : 'Show more'}</button>
                        </p>
                     </div>
                </div>
            )
           }))}
        </div>
        </div>
    )
}

export default Films;
import React, { useState } from "react";
import Miyazaki from './images/HayaoMiyazaki.jpg';
import { data } from './data';

function HomePage() {

    const [work,setWork] = useState(0);
    const {name,image,year} = data[work];
    
    const previousWork = () => {
       setWork((work => {
        work --;
        if (work < 0) {
            return data.length - 1;
        }
        return work;
       }))
    }

    const nextWork = () => {
        setWork((work => {
            work ++;
            if (work > data.length - 1) {
                work = 0;
            }
            return work;
        }))
    }


    return (

      <div className="container">
      
      <header className="header" data-aos="fade-down">
        <h1>Hayao Miyazaki</h1>
      </header>
      
      <section className="content">
        <div className="text-box" data-aos="fade-down-right">
          <p >Hayao Miyazaki, born on January 5, 1941, is a highly celebrated Japanese animator, director, and manga artist. As one of the co-founders of Studio Ghibli, he holds the position of honorary chairman within the studio. Known for his unparalleled storytelling and imaginative vision, </p>
        </div>
        <div className="image-box" data-aos="fade-down">
          <img className="profile-img" src={Miyazaki} alt="Hayao Miyazaki" />
        </div>
        <div className="text-box" data-aos="fade-down-left">
          <p>Miyazaki has gained worldwide recognition for his contributions to Japanese animated films. Over his remarkable career, he has become widely acknowledged as one of the most influential and accomplished creators in the history of animation.</p>
        </div>
      </section>
      
      <section className="slider">
        <h2 data-aos="fade-down-right">Works of Miyazaki</h2>
        <div className="slider-container" data-aos="zoom-in">
          <button className="slider-button previous" onClick={previousWork}>◀</button>
          <div className="slider-content">
            <img className="slide-img" src={image} alt="movie"/>
            <h3>{name}</h3>
            <p>{year}</p>
          </div>
          <button className="slider-button next" onClick={nextWork}>▶</button>
        </div>
      </section>
    </div>    
        
    )
}
export default HomePage;
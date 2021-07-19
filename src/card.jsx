
import React from "react";

import './index.css';


const Img_url = 'https://image.tmdb.org/t/p/w500';
const detail_url = 'https://www.themoviedb.org/movie/';
const vidiourl = 'https://content.jwplatform.com/manifests/yp34SRmf.m3u8';

const Card = (props) =>{
   
 
    return(
      
    <>
     
    {props.movies.map((movie, index)=> (
    
    <div className="cards">
          <div className="card">
          <div className="imageContainer">   
            <img src = {Img_url + movie.poster_path} alt="mypic" className="card__img"/> 
            </div>
            <div className="card__info">
              <span className="card__category"></span>
               <h3 className="card__title"> Title : {movie.title} </h3>
               <p className="card__title"> Release Date : {movie.release_date} </p>
            
                
                 <div onClick = {() => props.previewfun(vidiourl)}>
                 <b><button id = "button1">preview>></button></b>
                 </div>
            
            
                 <div onClick = {() => props.handleFavcomp(movie)}>
            
                 <b> <button id="button2">{props.buttontag} </button> </b>
            
                   </div>
            
           
           
                    <a href={detail_url + movie.id + movie.title} target="_blank">
                     <b> <button id="button3">Watch Now>></button> </b>
                      </a>
             
          </div>
          
        </div>
       </div>
      
      
    ) )}
    
    </>
    );
    };
    
    

    export default Card;
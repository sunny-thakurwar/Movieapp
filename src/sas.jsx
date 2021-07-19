
import React, {useEffect, useState, usestate}  from "react";
import Axios from "axios";
import Card from "./card";
import Fav from "./Favourite";
import ReactHlsPlayer from "react-hls-player/dist";
import { render } from "@testing-library/react";
import './index.css';





const App = () => {
 
     const [data, setData] = useState([]);
     const [favlist,setfav] = useState([]);
     const [previewurl,setpreviewurl] = useState(null);
     
    const Moviedata = async () =>{
      try {
        const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1');
         const actualData = await res.json();
         console.log(actualData.results) 
         setData(actualData.results)

      } catch(err){
        console.log(err); 
      }  
      
    }

    useEffect(() => {

      Moviedata();    

    },[]);


    const addFavMovie = (movie) => {
      
      const newfavlist = [...favlist,movie];
      const newfavlist2 = [...new Set(newfavlist)];
        setfav(newfavlist2);
        alert("Movie added to favourite check below");
      
    };

    const removeFavMovie = (movie) => {
      const newfavlist = favlist.filter(
             
        (favlist) => favlist.id !== movie.id
        
            );
      setfav(newfavlist);
      
  };
   

  const getpreviewurl = (vidiourl) => {
    setpreviewurl(vidiourl);
    alert("preview available hit play in player");
};

     return(
      
       
        
          <>
          <h1 className='heading_style'>List of popular movies</h1>
          <ReactHlsPlayer
    src={previewurl}
    autoPlay={false}
    controls={true}
    width="100%"
    height="auto"
  />
 
           
       
          <Card 
           movies = {data}
           handleFavcomp = {addFavMovie}
           favcomp = {Fav}
           previewfun = {getpreviewurl}
           buttontag = 'Add to Fav>>'
           
          />
          
          <h1 className="Favliststyle">  Favourites Below >></h1>
           
              
          <Card 
           movies = {favlist}
           handleFavcomp = {removeFavMovie}
           favcomp = {Fav}
           previewfun = {getpreviewurl}
           buttontag = 'Remove from Fav>>'
           
          />

          
          </>
        
     
      
    
     )


}


export default App;

// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import './MovieCards.css'
import PropTypes from 'prop-types'
// import apiHeader from '../../assets/apiHeader';
import { Link } from 'react-router-dom';

const MovieCards = ({category}) => {


    const [catData, setCatData] = useState([]);


    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YWM2OWQ2ZTA5NDU5Y2NhNmQ1NzBmMGE0MWM3ZDgyMyIsIm5iZiI6MTcyNjQ3MzUxMy4zMDcyMDYsInN1YiI6IjY2ZTcxNjZlZTgyMTFlY2QyMmIwYTBjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z6KJiCdBKzGzSCj15I4ut_9eTHdnoVLx_LKjaLYb8hM'
          },
      };
    
     useEffect(() => {
        
          
          fetch(`https://api.themoviedb.org/3/trending/${category?category:"movie"}/day?language=en-US`, options)
            .then(response => response.json())
            .then(response => {
                console.log(response.results);
                setCatData(response.results);
            })
            .catch(err => console.error(err));
     // eslint-disable-next-line react-hooks/exhaustive-deps
     },[])

     const sty ={
        textDecoration: 'none',
        color: 'white'
     }

  return (
    <div className='moviecards'>
        {catData.map((card, i) => {
            return (
                <Link to={`/player/${card.id}`} style={sty} className='card' key={i}>
                    <img src={`https://image.tmdb.org/t/p/w500` + card.poster_path} alt="" />
                    <h2>{card.original_title}</h2>
                </Link>
            )
        })}

    </div>
  )
}

export default MovieCards

MovieCards.propTypes = {
    category: PropTypes.string
}
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import './TitleCards.css'
import apiHeader from '../../assets/apiHeader'
import { Link } from 'react-router-dom'
// import card_data from '../../assets/cards/Cards_data'




const TitleCards = ({title, category}) => {

  const [apiData, setApiData] = useState([])
  const cardsRef = useRef();

  
  const options = {
  method: 'GET',
  headers: apiHeader,
};

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => {
      setApiData(response.results)
      console.log(response.results)
    })
    .catch(err => console.error(err));
    cardsRef.current.addEventListener('wheel', handleWheel);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <div className='title-cards'>
      <h2>{title ? title : 'Popular on Netflix'}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return <Link to={`/player/${card.id}`} style={{color: 'white', textDecoration: 'none'}} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt='' />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

TitleCards.propTypes = {
  title: PropTypes.string,
  category: PropTypes.string
}

export default TitleCards

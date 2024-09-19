// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'
import apiHeader from '../../assets/apiHeader.js'

const Player = () => {


  const {id} = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    published_at: '',
    name: '',
    type: '',
    key: '',
  })

  const options = {
    method: 'GET',
    headers: apiHeader,
  };

  useEffect(() => {
     fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => {
      console.log(response.results[0])
      setApiData(response.results[0])
    })
    .catch(err => console.error(err));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
 
  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={() => {navigate('/')}} />
      <iframe width="90%" height="90%" src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder="0" allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player

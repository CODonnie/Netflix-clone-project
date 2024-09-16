// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'

const Player = () => {


  const [apiData, setApiData] = useState({
    published_at: '',
    name: '',
    type: '',
    key: '',
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YWM2OWQ2ZTA5NDU5Y2NhNmQ1NzBmMGE0MWM3ZDgyMyIsIm5iZiI6MTcyNjQ3MzUxMy4zMDcyMDYsInN1YiI6IjY2ZTcxNjZlZTgyMTFlY2QyMmIwYTBjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z6KJiCdBKzGzSCj15I4ut_9eTHdnoVLx_LKjaLYb8hM'
    }
  };

  useEffect(() => {
     fetch('https://api.themoviedb.org/3/movie/365177/videos?language=en-US', options)
    .then(response => response.json())
    .then(response => {
      console.log(response.results[0])
      setApiData(response.results[0])
    })
    .catch(err => console.error(err));
  }, [])
  
 
  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" />
      <iframe width="90%" height="90%" src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder="0" allowFullScreen></iframe>
      <div className="player-info">
        <p>apiData.published_at</p>
        <p>apiData.name</p>
        <p>apiData.type</p>
      </div>
    </div>
  )
}

export default Player

// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import './NavLinks.css'
import { useNavigate } from 'react-router-dom'
import MovieCards from '../../components/MovieCards/MovieCards'
import Footer from '../../components/Footer/Footer'

const NavLinks = (props) => {

    const navigate = useNavigate();
    console.log(props.category);

  return (
    <div className='navlinks'>
        <div className="backdrop">
            <img src={props.banner} alt="" />
        </div>
            <div className="title">
                <img src={props.logo} alt="" />
                <h1>{props.title}</h1>
            </div>
         <div className="go-back">
            <img src={back_arrow_icon} alt="" onClick={() => {navigate('/')}} />
        </div>
      <hr/>
      <div className="moviecards">
        <MovieCards category={props.category} />
      </div>
      <hr/>
      <Footer/>
    </div>
  )
}

export default NavLinks

NavLinks.propTypes = {
    category: PropTypes.string,
    logo: PropTypes.any,
    banner: PropTypes.any,
    title: PropTypes.string,
}
import React from 'react'
import "./card.css"
import { useNavigate } from 'react-router-dom'
import { FaFacebook ,FaInstagramSquare,FaLinkedin ,FaTwitter  } from "react-icons/fa";



const Card = ({data}) => {
    const {id,name,description,profileImage,background,profession}= data
    // console.log( cardData);
    const navigate = useNavigate()
    console.log( "data");
    console.log(useNavigate);
    
    
  return (
    <div className='mainDiv'>
      <div >
        <img className='bgImgDiv' src={background} alt="" />
      </div>
      <div className='profile-data'>
        <div >
            <img className='profile-img' src={profileImage?profileImage:"public/imgs/defaultProfile.jpg"} />
           
        </div>
        <div className="profile-text">
            <h1>{name}</h1>
            <h5>{profession}</h5>
            <p>{description}</p>
            <div className='icons'>
            <FaFacebook />
            <FaLinkedin />
            <FaInstagramSquare />
            <FaTwitter />

            </div>
            <button className='btn' onClick={()=>{navigate(`/detail/${id}`)}}>View More</button>
        </div>
      </div>
    </div>
  )
}

export default Card

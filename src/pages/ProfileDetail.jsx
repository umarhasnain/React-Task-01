import React from 'react'
import { useParams } from 'react-router-dom'
import { cardData } from '../utils/CardData/cardData'
import "./profileDetail.css"
import { FaFacebook ,FaInstagramSquare,FaLinkedin ,FaTwitter  } from "react-icons/fa";


const ProfileDetail = () => {
  const {id} = useParams();
  console.log(useParams());
  
  const singleData =cardData.find((item) => {
    return item.id == id;
  })  
  const {name,description,profileImage,background,profession}= singleData

  return (
    <div className='detail-wrapper' style={{backgroundImage:`url(${background})`}}>
      <div className='detail'>
      <div className='img-wrapper'>
        <img src={profileImage?profileImage:"/public/imgs/defaultProfile.jpg"} />
      </div>
      <div className="profileDetail-text">
            <h1>{name}</h1>
            <h5>{profession}</h5>
            <p>{description}</p>
            <div className='icons'>
            <FaFacebook />
            <FaLinkedin />
            <FaInstagramSquare />
            <FaTwitter />

            </div>
    
    <button className='btn'>Buy me </button>
        </div>
    </div>

    </div>
  )
}

export default ProfileDetail

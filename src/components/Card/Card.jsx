import React from 'react'
import "./card.css"


const Card = ({data}) => {
    const {name,description,profileImage,background,profession}= data
    // console.log( cardData);
    console.log( "data");
    
  return (
    <div className='mainDiv'>
      <div >
        <img className='bgImgDiv' src={background} alt="" />
      </div>
      <div className='profile-data'>
        <div >
            <img className='profile-img' src={profileImage} />
           
        </div>
        <div className="profile-text">
            <h1>{name}</h1>
            <h5>{profession}</h5>
            <p>{description}</p>
            <button className='btn'>View More</button>
        </div>
      </div>
    </div>
  )
}

export default Card

import React from 'react'
import "./detail.css"
import Card from '../Card/Card'
import { cardData } from '../../utils/CardData/cardData';


const Detail = ({data}) => {
  console.log({cardData});
  
  // const {name,description,profileImage,background,profession}= data
  return (
    <div className='detail-wrapper'>
      <div>
        <img src="./public/imgs/profileBg.svg" />
      </div>
      <div className="profile-text">
            <h1></h1>
            <h5>UI/UX Design</h5>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, placeat?</p>
            <button className='btn'>View More</button>
        </div>
    </div>
  )
}

export default Detail

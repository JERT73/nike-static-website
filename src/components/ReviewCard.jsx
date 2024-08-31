import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className='
        flex justify-center items-center flex-col
    '>
        <img
            src={imgURL}
            alt='customer'
            className='
                rounded-full object-cover
                w-[120px] h-[120px]
            '
        />
        <p className='
            text-center mt-6 max-w-sm info-text
        '>
            {feedback}
        </p>
        <div className='flex mt-3 justify-center'>
            {[...Array(rating)].map((_, index) => (
                    <img key={index} src={star} 
                    alt='rating' width={24} height={24}/>
            ))}
            <p className='
                font-montserrat text-xl leading-normal
                text-slate-gray ml-2 mt-2
            '>{`(${rating})`}</p>
        </div>
        <h3 className='
            mt-1 font-palanquin text-3xl
            text-center font-bold
        '>
            {customerName}
        </h3>
    </div>
  )
}

export default ReviewCard
import React from 'react'

const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    <div className='
        flex-1 sm:w-[350px]
        sm:min-w-[350px] w-full rounded-[20px]
        shadow-cus1 px-10 py-16
        hover:bg-blue-200 transition-all duration-75
    '>
        <div className='
            w-11 h-11 justify-center items-center
            bg-coral-red rounded-full flex
            hover:bg-blue-200 transition-all
            duration-75
        '>
            <img src={imgURL} alt={label}
                width={24} height={24}
            />
        </div>
        <h3 className='mt-5 font-palanquin leading-normal
            font-bold text-3xl
        '>
            {label}
        </h3>
        <p className='
            mt-3 break-words font-montserrat
            text-lg leading-normal text-slate-gray
        '>
            {subtext}
        </p>
    </div>
  )
}

export default ServiceCard
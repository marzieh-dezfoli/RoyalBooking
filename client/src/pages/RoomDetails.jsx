import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, facilityIcons, roomCommonData, roomsDummyData } from '../assets/assets'
import StarRating from '../components/StarRating'

const RoomDetails = () => {
  const { id } = useParams()
  const [room, setRoom] = useState(null)
  const [mainImage, setMainImage] = useState(null)

  useEffect(() => {
    const room = roomsDummyData.find(room => room._id === id)
    if (room) {
      setRoom(room)
      setMainImage(room.images[0])
    }
  }, [])

  return room && (
    <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
      {/* Room Details */}
      <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
        <h1 className='text-3xl md:text-4xl font-playfair'>
          {room.hotel.name} <span className='font-inter text-sm'>({room.roomType})</span>
        </h1>
        <p className='text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full'>20% OFF</p>
      </div>

      {/* Room Rating */}
      <div className='flex items-center gap-1 mt-2'>
        <StarRating />
        <p className='ml-2'>200+ reviews</p>
      </div>

      {/* Room Address */}
      <div className='flex items-center gap-1 text-gray-500 mt-2'>
        <img src={assets.locationIcon} alt='locationIcon' />
        <span>{room.hotel.address}</span>
      </div>

      {/* Room Images */}
      <div className='flex flex-col lg:flex-row mt-6 gap-6'>
        <div className='lg:w-1/2 w-full'>
          <img src={mainImage} alt="Room image" className='w-full rounded-xl shadow-lg object-cover' />
        </div>
        <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
          {room?.images.length > 1 && room.images.map((image, index) => (
            <img
              onClick={() => setMainImage(image)}
              key={index}
              src={image}
              alt="Room Image"
              className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${mainImage === image ? 'outline-3 outline-orange-500' : ''}`}
            />
          ))}
        </div>
      </div>

      {/* Room Highlight */}
      <div className='flex flex-col md:flex-row md:justify-between mt-10 items-start md:items-center'>
        <div className='flex flex-col'>
          <h1 className='text-3xl md:text-4xl font-playfair'>
            Experience Luxury Like Never Before
          </h1>

          <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>
            {room.amenities.map((item, index) => (
              <div key={index} className='flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100'>
                <img src={facilityIcons[item]} alt={item} className='w-5 h-5' />
                <p className='text-xs'>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Room price */}
        <p className='text-2xl font-semibold text-gray-800'>
          ${room.pricePerNight}
          <span className='text-sm font-normal text-gray-500'> /night</span>
        </p>
      </div>

      {/*form*/}

      <form
  className="flex flex-col md:flex-row items-center justify-between 
             bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] 
             p-6 rounded-xl mx-auto mt-10 max-w-6xl w-full gap-6"
>

  {/* فیلدها */}
  <div className="flex flex-col md:flex-row items-center gap-6 w-full">

    {/* Check-In */}
        <div className='w-px h-15 bg-gray-300/70 max-md:hidden'></div>
    <div className="flex flex-col w-full max-w-[200px]">
      <label htmlFor="checkInDate" className="font-medium mb-1">Check-In</label>
      <input
        type="date"
        id="checkInDate"
        className="w-full rounded border border-gray-300 px-3 py-2 h-[46px] outline-none"
        required
      />
    </div>

    {/* Check-Out */}
    <div className='w-px h-15 bg-gray-300/70 max-md:hidden'></div>
    <div className="flex flex-col w-full max-w-[200px]">
      <label htmlFor="checkOutDate" className="font-medium mb-1">Check-Out</label>
      <input
        type="date"
        id="checkOutDate"
        className="w-full rounded border border-gray-300 px-3 py-2 h-[46px] outline-none"
        required
      />
    </div>

    {/* Guests */}
        <div className='w-px h-15 bg-gray-300/70 max-md:hidden'></div>
    <div className="flex flex-col w-full max-w-[120px]">
      <label htmlFor="guests" className="font-medium mb-1">Guests</label>
      <input
        type="number"
        id="guests"
        min={1}
        placeholder="0"
        className="w-full rounded border border-gray-300 px-3 py-2 h-[46px] outline-none"
        required
      />
    </div>

  </div>

  {/* دکمه رزرو */}
  <button
    type="submit"
    className="bg-blue-600 hover:bg-blue-700 text-white text-base font-medium 
               rounded-md px-8 h-[46px] w-full md:w-[160px]"
  >
  Book Now
  </button>
</form>

{/* common Specifications*/}
 <div className='mt-25 space-y-4'>
{roomCommonData.map((spec, index) => (
<div key={index} className='flex items-start gap-2'> 
<img src={spec.icon} alt={`${spec.title}-icon`} className='w-6.5'/>
<div>
<p className='text-base'>{spec.title}</p>
<p className='text-gray-500'>{spec.description}</p>

</div>

</div>

))}
 </div>
<div className='max-w-3xl border-y border-gray-300 my-15 py-10 text-gray-500'>
<p>Guests will be allocted on the ground floor acording to avalibalty.
  You get a comfortabe a bedroom apartemant hat true city feeling. The price quoted is for two guests, at the guests slot please mark the ofnumber  guests to get the exact price for groups
</p>
</div>
    </div>
  )
}

export default RoomDetails

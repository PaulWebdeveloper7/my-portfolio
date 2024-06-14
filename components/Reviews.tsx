import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-card'
import testimonials from '@/utils/testimonials'
import StarIcon from '@mui/icons-material/Star';
const Reviews = () => {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased  dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden" id='testimonials'>
      <h1 className="font-extrabold text-4xl t dark:text-white pb-7"  >
        Client's Reviews
      </h1>
    <InfiniteMovingCards
      items={testimonials}
      direction="right"
      speed="slow"
    />
  </div>
  )
}

export default Reviews
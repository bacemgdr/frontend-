import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
            <img src='https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2021_22/3480449/210604-cologne-gift-ideas-fathersa-day-bd-2x1.gif' alt='/'/>
        </div>
        <div className="embla__slide">
        <img src='https://salesandshopping.co.uk/media/d/img/NaturalCollection26012021.jpg' alt=''/>
            </div>
        <div className="embla__slide">
        <img src='https://backend.dontdiewondering.com/wp-content/uploads/2020/12/Chanel.gif' alt=''/>
            </div>
      </div>
    </div>
  )
}

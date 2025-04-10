import React, { useState } from 'react'

import { useKeenSlider } from 'keen-slider/react'

import podrammnik1 from 'assets/images/podramnik-1.jpg'
import podrammnik2 from 'assets/images/podramnik-2.jpg'
import podrammnik3 from 'assets/images/podramnik-3.jpg'
import podrammnik4 from 'assets/images/podramnik-4.jpg'

import './PhotoSlider.module.css'

export const PhotoSliderComponent = () => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      '(min-width: 400px)': {
        slides: { perView: 2, spacing: 5 },
      },
      '(min-width: 1000px)': {
        slides: { perView: 3, spacing: 10 },
      },
    },
    slides: { perView: 1 },
  })
  return (
    <div ref={ref} className="keen-slider">
      <div className="keen-slider__slide number-slide1">
        <img src={podrammnik1.src} alt="" />
      </div>
      <div className="keen-slider__slide number-slide2">
        <img src={podrammnik2.src} alt="" />
      </div>
      <div className="keen-slider__slide number-slide3">
        <img src={podrammnik3.src} alt="" />
      </div>
      <div className="keen-slider__slide number-slide4">
        <img src={podrammnik4.src} alt="" />
      </div>
    </div>
  )
}

import { useState, useRef } from 'react'
import ComparisonSlider from './ComparisonSlider'

const ComparisonGallery = ({ comparison }) => {
  const imageContainer = useRef(undefined)

  return (
    <ul
      ref={imageContainer}
      role="list"
      className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
    >
      {comparison.map((beforeAfterImages) => (
        <li key={beforeAfterImages.id}>
          <ComparisonSlider key={beforeAfterImages.id} />
        </li>
      ))}
    </ul>
  )
}

export default ComparisonGallery

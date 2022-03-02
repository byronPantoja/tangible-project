import { useState } from 'react'
import Image from '@/components/Image'

const photoEditing = () => {
  const [imageRevealFraq, setImageRevealFraq] = useState(0.5)
  return (
    <div className="px-4">
      <div className="relative mx-auto mt-32 w-full max-w-lg">
        <img
          src="https://static1.squarespace.com/static/60be3f15c04ff53428559e91/t/62084f307eb94a2d215ecf41/1644711729229/Done-1.jpg"
          alt="before"
        />

        <img
          style={{
            filter: 'grayscale(100%)',
            clipPath: `polygon(0 0, ${imageRevealFraq * 100}% 0, ${
              imageRevealFraq * 100
            }% 100%, 0 100%)`,
          }}
          src="https://static1.squarespace.com/static/60be3f15c04ff53428559e91/t/62084f386f98284656405b54/1644711737168/Done-2.jpg"
          alt="after"
          className="absolute inset-0"
        />
      </div>
    </div>
  )
}

export default photoEditing

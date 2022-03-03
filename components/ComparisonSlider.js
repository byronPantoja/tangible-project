import { useState, useRef } from 'react'
import Image from '@/components/Image'

const ComparisonSlider = () => {
  const [imageRevealFraq, setImageRevealFraq] = useState(0.5)
  const imageContainer = useRef(undefined)

  const slide = (xPosition) => {
    const containerBoundingRect = imageContainer.current.getBoundingClientRect()
    setImageRevealFraq(() => {
      if (xPosition < containerBoundingRect.left) {
        return 0
      } else if (xPosition > containerBoundingRect.right) {
        return 1
      } else {
        return (xPosition - containerBoundingRect.left) / containerBoundingRect.width
      }
    })
  }

  const handleTouchMove = (e) => {
    slide(e.touches.item(0).clientX)
  }

  const handleMouseDown = () => {
    window.onmousemove = handleMouseMove
    window.onmouseup = handleMouseUp
  }
  const handleMouseMove = (e) => {
    slide(e.clientX)
  }

  const handleMouseUp = () => {
    window.onmousemove = undefined
    window.onmouseup = undefined
  }

  return (
    <div className="aspect-h-9 aspect-w-16">
      <div
        ref={imageContainer}
        className="group aspect-h-9 aspect-w-16 relative mx-auto select-none"
      >
        <Image
          src="https://static1.squarespace.com/static/60be3f15c04ff53428559e91/t/62084f386f98284656405b54/1644711737168/Done-2.jpg"
          alt="before"
          layout="fill"
          objectFit="cover"
          className="pointer-events-none"
        />
        <div
          style={{
            filter: 'transparent(100%)',
            clipPath: `polygon(0 0, ${imageRevealFraq * 100}% 0, ${
              imageRevealFraq * 100
            }% 100%, 0 100%)`,
          }}
          className="absolute inset-0 select-none "
        >
          <Image
            src="https://static1.squarespace.com/static/60be3f15c04ff53428559e91/t/62084f307eb94a2d215ecf41/1644711729229/Done-1.jpg"
            alt="after"
            layout="fill"
            objectFit="cover"
            className="pointer-events-none"
          />

          <div
            style={{ left: `${imageRevealFraq * 100}%` }}
            className="absolute inset-y-0 group-hover:opacity-100 md:opacity-0"
          >
            <div className="relative h-full opacity-50 hover:opacity-100">
              <div className="absolute inset-y-0 -ml-px w-0.5 bg-white "></div>
              <div
                style={{ touchAction: 'none' }}
                onMouseDown={handleMouseDown}
                onTouchMove={handleTouchMove}
                className="absolute top-1/2 -ml-6 -mt-6 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="tex-gray-400 w-6 rotate-90 transform cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComparisonSlider

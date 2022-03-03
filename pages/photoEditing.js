import ComparisonSlider from '@/components/ComparisonSlider'
import Navbar from '@/components/Navbar'
import Link from '@/components/Link'

const photoEditing = () => {
  return (
    <div>
      <main className="lg:relative">
        <div className="mx-auto w-full max-w-7xl pt-12 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block  xl:inline">Let us make your job </span>{' '}
              <span className="block text-indigo-600 xl:inline"> way easier </span>{' '}
              <span className="block  xl:inline">with our team of trained photo editors </span>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              Our industry professionals focus on natural, authentic, and clean looking photo edits
              that will build interest, trust, and credibility to your real estate or architectural
              brand. At $0.50 a photo, our value gives you the time and resources to focus the
              things that matter to you.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                >
                  Get started
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-indigo-600 hover:bg-gray-50 md:py-4 md:px-10 md:text-lg"
                >
                  Try for Free
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-4xl pt-40 pb-5 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
          <ComparisonSlider />
        </div>
      </main>
    </div>
  )
}

export default photoEditing

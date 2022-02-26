const HeroSectionHeader = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="font text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
              Real Estate Photo Post Processing Based in Virginia Beach, VA
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              New clients enjoy 1 Week of Free Processing as a trial before you commit!
            </p>
          </div>
          <div>
            <div className="mt-10">
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="grid place-items-center bg-slate-200">
                    <div className="mx-auto w-full p-8">
                      <div className="rounded-lg bg-white p-2 shadow-xl sm:p-4">
                        <iframe
                          className="aspect-video w-full"
                          src="https://player.vimeo.com/video/659875234?h=1980ccb4fb&autoplay=1&loop=1&title=0&byline=0&portrait=0"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="/freetrial"
                className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700"
              >
                Try for Free
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSectionHeader

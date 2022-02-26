import Image from './Image'

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

import resources from '@/data/resourcesData'
import company from '@/data/companyData'
import samples from '@/data/samplesData'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const listMap = (item) => {
  return (
    <li key={item.name} className="flow-root">
      <a
        href={item.href}
        className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-50"
      >
        <item.icon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
        <span className="ml-4">{item.name}</span>
      </a>
    </li>
  )
}

const ContactUs = () => {
  return (
    <Popover>
      {({ open }) => {
        return (
          <>
            <Popover.Button
              className={classNames(
                open ? 'text-gray-900' : 'text-gray-500',
                'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
              )}
            >
              <span>Contact Us</span>
              <ChevronDownIcon
                className={classNames(
                  open ? 'text-gray-600' : 'text-gray-400',
                  'ml-2 h-5 w-5 group-hover:text-gray-500'
                )}
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 -translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-1"
            >
              <Popover.Panel className="absolute inset-x-0 top-full z-10 hidden transform shadow-lg md:block">
                <div className="absolute inset-0 flex">
                  <div className="w-1/2 bg-white" />
                  <div className="w-1/2 bg-gray-50" />
                </div>
                <div className="relative mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                  <nav className="grid gap-y-10 bg-white px-4 py-8 sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12">
                    <div>
                      <h3 className="text-sm font-medium uppercase tracking-wide text-gray-500">
                        Company
                      </h3>
                      <ul role="list" className="mt-5 space-y-6">
                        {company.map.listMap}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium uppercase tracking-wide text-gray-500">
                        Resources
                      </h3>
                      <ul role="list" className="mt-5 space-y-6">
                        {resources.map((item) => (
                          <li key={item.name} className="flow-root">
                            <a
                              href={item.href}
                              className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-50"
                            >
                              <item.icon
                                className="h-6 w-6 flex-shrink-0 text-gray-400"
                                aria-hidden="true"
                              />
                              <span className="ml-4">{item.name}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </nav>
                  <div className="bg-gray-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
                    <div>
                      <h3 className="text-sm font-medium uppercase tracking-wide text-gray-500">
                        From our samples
                      </h3>
                      <ul role="list" className="mt-6 space-y-6">
                        {samples.map((post) => (
                          <li key={post.id} className="flow-root">
                            <a
                              href={post.href}
                              className="-m-3 flex rounded-lg p-3 hover:bg-gray-100"
                            >
                              <div className="hidden flex-shrink-0 sm:block">
                                <Image
                                  className="rounded-md object-cover"
                                  src={post.imageUrl}
                                  alt={post.title}
                                  height={post.height}
                                  width={post.width}
                                />
                              </div>
                              <div className="w-0 flex-1 sm:ml-8">
                                <h4 className="truncate text-base font-medium text-gray-900">
                                  {post.name}
                                </h4>
                                <p className="mt-1 text-sm text-gray-500">{post.preview}</p>
                              </div>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6 text-sm font-medium">
                      <a href="#" className="text-indigo-600 hover:text-indigo-500">
                        {' '}
                        View all posts <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )
      }}
    </Popover>
  )
}
export default ContactUs

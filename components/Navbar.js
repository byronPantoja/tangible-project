import Link from './Link'
import Image from './Image'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import ServicesAndPricingMenu from './ServicesAndPricing'
import Logo from '@/data/logo.svg'
import services from '@/data/servicesData'

import ContactUs from './ContactUs'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  return (
    <Popover className="relative bg-white">
      <div className="pointer-events-none absolute inset-0 z-30 shadow" aria-hidden="true" />
      <div className="relative z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 sm:py-4 md:justify-start md:space-x-10 lg:px-8">
          <Link href="/">
            <div className="mr-3 shrink">
              <Logo />
            </div>
          </Link>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
            <Popover.Group as="nav" className="flex space-x-10">
              {/* services dropdown */}
              <ServicesAndPricingMenu />
              {/* samples */}
              <Link
                href="/samples"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Samples
              </Link>
              {/* contact us dropdown */}
              <ContactUs />
            </Popover.Group>
            <div className="flex items-center md:ml-12">
              <Link href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Sign in
              </Link>
              <Link
                href="#"
                className="ml-8 inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6 sm:pb-8">
              <div className="flex items-center justify-between">
                <div>
                  <Image
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6 sm:mt-8">
                <nav>
                  <div className="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                    {services.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
                      >
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                          <item.icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <div className="ml-4 text-base font-medium text-gray-900">{item.name}</div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-8 text-base">
                    <Link href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      {' '}
                      View all products <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5">
              <div className="grid grid-cols-2 gap-4">
                <Link
                  href="#"
                  className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Pricing
                </Link>

                <Link
                  href="#"
                  className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Docs
                </Link>

                <Link
                  href="#"
                  className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Company
                </Link>

                <Link
                  href="#"
                  className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Resources
                </Link>

                <Link
                  href="#"
                  className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Blog
                </Link>

                <Link
                  href="#"
                  className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Contact Sales
                </Link>
              </div>
              <div className="mt-6">
                <Link
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                >
                  Sign up
                </Link>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{' '}
                  <Link href="#" className="text-indigo-600 hover:text-indigo-500">
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default Navbar

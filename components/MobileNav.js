import Image from './Image'
import Link from './Link'
import { Popover } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import services from '@/data/servicesData'

const MobileNav = () => {
  return (
    <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
      <div className="px-5 pt-5 pb-6 sm:pb-8">
        <div className="flex items-center justify-between">
          <div>
            <Image
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
              height="40"
              width="40"
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
  )
}

export default MobileNav
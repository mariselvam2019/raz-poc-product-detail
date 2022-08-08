import { useState } from "react"
import Link from 'next/link';


function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="relative bg-white">
      <div aria-label="Top" className="">
        <div className="border-b border-gray-200">
          <div className="h-16 flex items-center columns-3">
            
            <div className="sm:hidden relative flex-1 w-32 flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} type="button" className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                  {!mobileMenuOpen ?
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    :
                    <button type="button" className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400">
                      <span className="sr-only">Close menu</span>
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  }

                </button>

                <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Flyout menus */}
            <div className="hidden sm:block flex-1 w-32 ml-8 lg:self-stretch">
              <div className="h-full flex space-x-8">
                <div className="flex">
                  <div className="relative flex">
                    <button type="button" className="border-transparent text-gray-700 hover:text-gray-800 relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px" aria-expanded="false">Women</button>
                  </div>
                </div>

                <div className="flex">
                  <div className="relative flex">
                    <button type="button" className="border-transparent text-gray-700 hover:text-gray-800 relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px" aria-expanded="false">Men</button>
                  </div>
                </div>

                <button type="button" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Company</button>

                <div className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">
                    <Link href={`/shop/t-shirt/`}>Stores</Link>
                </div>
              </div>
            </div>

            {/* Logo */}
            <div className="ml-4 flex-none lg:ml-0 ">
              <Link href='/shop/t-shirt/french-connection-men-black-printed-slim-fit-pure-cotton-t-shirt'>
                <a>
                  <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600" alt="" />
                </a>
              </Link>
            </div>

            {/* Flyout menus */}
            <div className="flex-1 w-32 ml-4 flex lg:ml-0 mr-8">
              <div className="ml-auto flex items-center">

                <div className="hidden sm:block lg:ml-8 lg:flex mr-4">
                  <a href="#" className="text-gray-700 hover:text-gray-800 flex items-center">
                    <img src="https://tailwindui.com/img/flags/flag-canada.svg" alt="" className="w-5 h-auto block flex-shrink-0" />
                    <span className="ml-3 block text-sm font-medium"> CAD </span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>

                {/*  <!-- Search --> */}
                <div className="hidden sm:block flex lg:ml-6">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </a>
                </div>

                {/*  <!-- user --> */}
                <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">User</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </a>
                </div>

                {/*  <!-- Cart --> */}
                <div className="ml-4 flow-root lg:ml-6">
                  <a href="#" className="group -m-2 p-2 flex items-center">
                    <svg className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        {
          mobileMenuOpen &&
          <div className="sm:hidden bg-gray-900" id="mobile-menu" >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</a>

              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>

              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>

              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default Header;

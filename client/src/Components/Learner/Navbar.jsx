import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { learnerLogout } from '../../Redux/Slices/authSlice'
import toast from 'react-hot-toast'



export default function Example() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleLogout = () => {
    console.log("logging out");
    dispatch(learnerLogout());
    toast.success('Logged Out Successfully');
    navigate("/learner/login");
  }
  return (
    <div className=' w-full top-0 z-10'>

    
    <Disclosure as="nav" className="bg-white shadow-xl ">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8  ">
        <div className="relative flex h-20 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <img
                alt="Your Company"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZA1O1Sq2LvZ46ysmvsLTsc9UiF_WseKMwqQ&s"
                className="h-20 w-auto"
              />
            </div>
            <div className="hidden sm:flex sm:space-x-4 pl-5">
              
              <Link to={'/dashboard'}><p className='rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-700 hover:text-white'>Dashboard</p></Link>
              <p className='rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-700 hover:text-white'>Courses</p>
              <p className='rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-700 hover:text-white'>Programs</p>
              <p className='rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-700 hover:text-white'>Discover</p>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div>
              <h1>Help</h1>
            </div>

            {/* <span className="sr-only">View notifications</span> */}


            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3 ">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="h-8 w-8 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-black data-[focus]:bg-gray-100">
                    Personal
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-black data-[focus]:bg-gray-100">
                    Dashboard
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-black data-[focus]:bg-gray-100">
                    Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-black data-[focus]:bg-gray-100">
                    Account
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-black data-[focus]:bg-gray-100">
                    Order History
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="" onClick={handleLogout} style={{ cursor: 'pointer' }} className="block px-4 py-2 text-sm text-black data-[focus]:bg-gray-100">
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
        <Link to={'/dashboard'}><p className='rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-700 hover:text-white'>Dashboard</p></Link>
              <p className='rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-700 hover:text-white'>Courses</p>
              <p className='rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-700 hover:text-white'>Programs</p>
              <p className='rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-700 hover:text-white'>Discover</p>
        </div>
      </DisclosurePanel>
    </Disclosure>
    </div>
  )
}

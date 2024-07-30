import {useState} from 'react'
import banner from "../assets/banner.png"
import menu from "../assets/menu.svg"
import close from "../assets/close.svg"
import {navLinks} from "../constants";


const Navbar = () => {

  const [toggle, setToggle] = useState(false)


  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <div className="font-bold text-[#fff] text-[30px]">Boo<span className='text-secondary'>Bank</span></div>

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index)=>(
          <li key={nav.id} className={` font-poppins font-normal cursor-pointer ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-[16px] text-[#fff] hover:text-secondary duration-500 ease-in-out`}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={toggle ? close : menu} className='w-[28px] h-[28px] object-contain' alt="" onClick={()=> setToggle(!toggle)} />

        <div className={`${toggle ? 'flex' : 'hidden'} py-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
        <ul className='list-none flex flex-col justify-end items-center flex-1'>
        {navLinks.map((nav, index)=>(
          <li key={nav.id} className={` font-poppins font-normal cursor-pointer ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-[16px] text-[#fff]`}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
import Image from "next/image"
import {SearchIcon} from "@heroicons/react/24/solid";
 function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3
    bg-white shadow-md py-5 px-5 md:px-10
    ">
      <div className="relative flex item-center h-10 cursor-pointer">
      
        <Image src="https://links.papareact.com/qd3" layout="fill" objectFit="contain" objectPosition="left"/>
      </div>
      <div>
        <input type="text" placeholder="Start your search" />
        <SearchIcon/>
      </div>
      <div></div>
    </header>
  )
}

export default Header

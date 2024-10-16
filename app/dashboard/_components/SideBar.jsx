'use client'
import { Progress } from "@/components/ui/progress"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useContext } from "react"
import { HiOutlineHome, HiOutlinePower, HiOutlineShieldCheck, HiOutlineSquare3Stack3D } from "react-icons/hi2"

import { UserCourseListContext } from "@/app/_context/UserCourseListContext"

const SideBar = () => {

    

    const Menu = [
        { id: 1, name: "Home", icon: <HiOutlineHome />, path: '/dashboard' },
        { id: 2, name: "Explore", icon: <HiOutlineSquare3Stack3D />, path: '/dashboard/explore' },
        
        
    ];

    const path = usePathname();

    return (
        <div className="fixed h-full md:w-64 p-5 shadow-md">
            <div className="flex items-center">
                <Image 
                    src="https://firebasestorage.googleapis.com/v0/b/social-73c90.appspot.com/o/images%2Fhex-lab-black.png?alt=media&token=d29a9206-daab-47eb-aafd-5397cc154f22" 
                    width={50} 
                    height={50} 
                    alt="logo"
                /> 
                <span className="ml-2 font-bold text-primary text-2xl">AlphaWave</span>
            </div>
            <hr className="my-5"/>

            <ul>
                {Menu.map((item) => (
                    <li key={item.id}> {/* Use item.id as the key */}
                        <Link href={item.path} passHref>
                            <div className={`flex items-center gap-2 text-gray-600 p-3 cursor-pointer hover:bg-gray-100 hover:text-black rounded-lg mb-3 ${item.path === path ? 'bg-gray-100 text-black' : ''}`}>
                                <div className="text-2xl">{item.icon}</div>
                                <h2>{item.name}</h2>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
            
        </div>
    );
}

export default SideBar;
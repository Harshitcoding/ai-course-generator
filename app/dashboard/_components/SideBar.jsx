'use client'
import { Progress } from "@/components/ui/progress"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useContext } from "react"
import { HiOutlineHome, HiOutlinePower, HiOutlineShieldCheck, HiOutlineSquare3Stack3D } from "react-icons/hi2"

import { UserCourseListContext } from "@/app/_context/UserCourseListContext"

const SideBar = () => {

    const {userCourseList,setUserCourseList} = useContext(UserCourseListContext)

    const Menu = [
        { id: 1, name: "Home", icon: <HiOutlineHome />, path: '/dashboard' },
        { id: 2, name: "Explore", icon: <HiOutlineSquare3Stack3D />, path: '/dashboard/explore' },
        { id: 3, name: "Upgrade", icon: <HiOutlineShieldCheck />, path: '/dashboard/upgrade' },
        
    ];

    const path = usePathname();

    return (
        <div className="fixed h-full md:w-64 p-5 shadow-md">
            <div className="flex items-center">
                <Image 
                    src="https://firebasestorage.googleapis.com/v0/b/social-73c90.appspot.com/o/images%2Flogo.png?alt=media&token=aab0937e-2743-4def-9ff1-6b7d3ad8edb1" 
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
            <div className="absolute bottom-10 w-[80%]">
                <Progress value={(userCourseList?.length/7)*100}/>
                <h2 className="text-sm my-2">{userCourseList?.length} out of 7 course created</h2>
                <h2 className="text-xs text-gray-500">Upgrade your plan for unlimited course generate</h2>
            </div>
        </div>
    );
}

export default SideBar;
import { UserButton } from "@clerk/nextjs"
import Image from "next/image"

const Header = () => {
  return (
    <div className="flex justify-between items-center p-5 shadow-sm">
           
        <Image 
            src="https://firebasestorage.googleapis.com/v0/b/social-73c90.appspot.com/o/images%2Flogo.png?alt=media&token=aab0937e-2743-4def-9ff1-6b7d3ad8edb1" 
            width={40} 
            height={40} 
            alt="logo"
        /> 
        
   
    <UserButton/>
    </div>
  )
}
export default Header
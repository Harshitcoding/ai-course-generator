import { UserButton } from "@clerk/nextjs"
import Image from "next/image"

const Header = () => {
  return (
    <div className="flex justify-between items-center p-5 shadow-sm">
           
        <Image 
            src="https://firebasestorage.googleapis.com/v0/b/social-73c90.appspot.com/o/images%2Fhex-lab-black.png?alt=media&token=d29a9206-daab-47eb-aafd-5397cc154f22" 
            width={40} 
            height={40} 
            alt="logo"
        /> 
        
   
    <UserButton/>
    </div>
  )
}
export default Header
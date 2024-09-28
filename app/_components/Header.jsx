import { Button } from "@/components/ui/button"
import Image from "next/image"

const Header = () => {
  return (
    <div className="flex justify-between p-5 shadow-sm">
    <div className="flex items-center"> {/* Added items-center for vertical alignment */}
        <Image 
            src="https://firebasestorage.googleapis.com/v0/b/social-73c90.appspot.com/o/images%2Flogo.png?alt=media&token=aab0937e-2743-4def-9ff1-6b7d3ad8edb1" 
            width={50} 
            height={50} 
            alt="logo"
        /> 
        <span className="ml-2 font-bold text-primary">AlphaWave</span> {/* Added margin-left for spacing */}
    </div>

    <Button>Get Started</Button>
</div>
  )
}
export default Header
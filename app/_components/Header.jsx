import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (
    <div className="flex justify-between p-5 shadow-sm">
    <div className="flex items-center"> {/* Added items-center for vertical alignment */}
        <Image 
            src="https://firebasestorage.googleapis.com/v0/b/social-73c90.appspot.com/o/images%2Fhex-lab-black.png?alt=media&token=d29a9206-daab-47eb-aafd-5397cc154f22" 
            width={50} 
            height={50} 
            alt="logo"
        /> 
        <span className="ml-2 font-bold text-primary">AlphaWave</span> {/* Added margin-left for spacing */}
    </div>

    <Link href="/dashboard">
    <Button>Get Started</Button>
    </Link>
</div>
  )
}
export default Header
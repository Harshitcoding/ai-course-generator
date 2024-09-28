
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import Image from "next/image"
  

const LoadingDialog = ({loading}) => {
  return (
    <AlertDialog open={loading}>
  
  <AlertDialogContent>
    <AlertDialogHeader>
     
      <AlertDialogDescription>
        <div className="flex flex-col items-center py-10">
            <Image src="https://firebasestorage.googleapis.com/v0/b/social-73c90.appspot.com/o/images%2Fgif.gif?alt=media&token=35124368-49f6-4a7e-9d33-bb420bc8ffca" width={100} height={100} alt="loading..."/>
            <h2>Please wait... Ai is working on your course</h2>
        </div>
      </AlertDialogDescription>
    </AlertDialogHeader>
   
  </AlertDialogContent>
</AlertDialog>

  )
}
export default LoadingDialog
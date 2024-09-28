import { Button } from "@/components/ui/button"
import Image from "next/image"
import { HiOutlinePuzzlePiece } from "react-icons/hi2"
import EditCourseBasicInfo from "./EditCourseBasicInfo"
import { useEffect, useState } from "react"
import { storage } from "@/configs/firebaseConfig"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { CourseList } from "@/configs/schema"
import { eq } from "drizzle-orm"
import { db } from "@/configs/db"
import Link from "next/link"

const CourseBasicInfo = ({course,refreshData,edit=true}) => {

    const [selectedFile,setSelectedFile]=useState()

    useEffect(()=>{
        if(course)
        {
            setSelectedFile(course?.courseBanner)
        }
    },[course])


    const onFileSelected = async(e) => {
        const file = e.target.files[0]
        setSelectedFile(URL.createObjectURL(file))
        const fileName=Date.now()+'.jpg'
        const storageRef=ref(storage,'ai-course/'+fileName)
        await uploadBytes(storageRef,file).then((snapshot)=>{
            console.log('Upload File Completed')
        }).then(resp=>{
            getDownloadURL(storageRef).then(async(downloadUrl)=>{
                console.log(downloadUrl)
                await db.update(CourseList).set({
                    courseBanner:downloadUrl
                }).where(eq(CourseList.id,course?.id))
            })
        })
    }

  return (
    <div className="p-10 border rounded-xl shadow-sm mt-5 ">
        <div className="grid gird-cols-1 md:grid-cols-2 gap-5">
            <div>
                <h2 className="font-bold text-3xl">{course?.courseOutput?.course?.name}
                     {edit && <EditCourseBasicInfo course={course} 
                     refreshData={()=>refreshData(true)}
                     />}</h2>
                <p className="text-sm text-gray-400 mt-3">{course?.courseOutput?.course?.description}</p>
                <h2 className="font-medium mt-3 flex gap-2 items-center text-primary"><HiOutlinePuzzlePiece/>{course?.category}</h2>
               {!edit && <Link href={'/course/'+course?.courseId+"/start"}>
                    <Button className="w-full mt-5">Start</Button>
                    </Link>}
            </div>
            <div>
                <label htmlFor="upload-image">               
                     <Image src={selectedFile?selectedFile:"https://firebasestorage.googleapis.com/v0/b/social-73c90.appspot.com/o/images%2FScreenshot%202024-09-20%20163000.png?alt=media&token=444b9971-64b1-41a6-a49b-18d21098558f"} width={300} height={300} className="w-full rounded-xl h-[250px] object-cover cursor-pointer" alt="placeholder"/>
                </label>

                {edit && <input type="file" id="upload-image" className="opacity-0"
                onChange={onFileSelected}
                />}
            </div>
        </div>
    </div>
  )
}
export default CourseBasicInfo
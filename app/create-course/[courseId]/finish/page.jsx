'use client'

import { db } from "@/configs/db"
import { CourseList } from "@/configs/schema"
import { useUser } from "@clerk/nextjs"
import { and, eq } from "drizzle-orm"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import CourseBasicInfo from "../_components/CourseBasicInfo"
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2"

const FinishScreen = ({params}) => {
    const { user } = useUser()
    const [course, setCourse] = useState([])
    const router = useRouter()
    useEffect(() => {
        params && GetCourse()
    }, [params, user])
    const GetCourse = async () => {
        const result = await db.select().from(CourseList)
            .where(and(eq(CourseList.courseId, params?.courseId), eq(CourseList?.createdBy, user?.primaryEmailAddress.emailAddress)))

        setCourse(result[0])
        console.log(result)
    }

  return (
    <div className="px-10 md:px-20 lg:px-44 my-7">
        <h2 className="text-center font-bold text-2xl my-3 text-primary">Congrats! Your Course Is Ready</h2>


        <CourseBasicInfo course={course} refreshData={() => console.log()} edit={false}/>

    </div>
  )
}
export default FinishScreen
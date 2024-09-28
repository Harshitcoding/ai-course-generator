'use client'

import { db } from "@/configs/db"
import { Chapters, CourseList } from "@/configs/schema"
import { and, eq } from "drizzle-orm"
import { useEffect, useState } from "react"
import ChapterListCard from "./components/ChapterListCard"
import ChapterContent from "./components/ChapterContent"


const CourseStart = ({params}) => {

    const [course,setCourse] = useState();
    const [selectedChapter,setSelectedChapter]=useState();
    const [chapterContent , setChapterContent]=useState()
    useEffect(()=>{
        GetCourse()
    })

    /**
     Used to get course Info by course Id
     */

    const GetCourse = async () => {
        const result = await db.select().from(CourseList).where(eq(CourseList?.courseId,params?.courseId))
        setCourse(result[0])
    }

    const GetSelectedChapterContent = async(chapterId) => {
        const result = await db.select().from(Chapters)
        .where(and(eq(Chapters.chapterId,chapterId),
        eq(Chapters.courseId,course?.courseId)))

        setChapterContent(result[0])
        console.log(result)
    }

  return (
    <div>
    {/* Chapter list Side bar */}
    <div className="fixed top-0 left-0 md:w-72 w-0 md:block h-screen border-r shadow-sm">
        <h2 className="font-medium text-lg bg-primary p-4 text-white">
            {course?.courseOutput?.course?.name}
        </h2>

        <div>
            {course?.courseOutput?.course?.chapters.map((chapter, index) => (
                <div
                    key={index}
                    className={`cursor-pointer hover:bg-purple-50 ${
                        selectedChapter?.name === chapter?.name && 'bg-purple-100'
                    }`}
                    onClick={() => {
                        setSelectedChapter(chapter);
                        GetSelectedChapterContent(index);
                    }}
                >
                    <ChapterListCard chapter={chapter} index={index} />
                </div>
            ))}
        </div>
    </div>

    {/* Content div */}
    <div className="md:ml-72 p-4">
        <ChapterContent chapter={selectedChapter} content={chapterContent} />
    </div>
</div>

  )
}
export default CourseStart
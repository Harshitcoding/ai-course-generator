import Image from "next/image";
import { HiMiniEllipsisVertical, HiOutlineBookOpen } from "react-icons/hi2";
import DropdownOption from "./DropdownOption";
import { db } from "@/configs/db";
import { CourseList } from "@/configs/schema";
import { eq } from "drizzle-orm";
import Link from "next/link";

const CourseCard = ({ course, refreshData }) => {
    const handleOnDelete = async () => {
        const resp = await db.delete(CourseList).where(eq(CourseList.id, course?.id)).returning({ id: CourseList?.id });

        if (resp) {
            refreshData();
        }
    };

    return (
        <div className="shadow-sm rounded-lg border p-2 cursor-pointer mt-4 hover:border-primary">
            <Link href={'/course/' + course?.courseId}>
                {course?.courseBanner ? (
                    <Image src={course.courseBanner} width={300} height={200} className="w-full h-[200px] object-cover rounded-lg" alt="courseBanner"/>
                ) : (
                    <div className="w-full h-[200px] bg-gray-200 flex items-center justify-center rounded-lg">
                        No Image Available
                    </div>
                )}
            </Link>
            <div className="p-2">
                <h2 className="font-medium text-lg flex justify-between items-center">
                    {course?.courseOutput?.course?.name}
                    <DropdownOption handleOnDelete={() => handleOnDelete()}>
                        <HiMiniEllipsisVertical />
                    </DropdownOption>
                </h2>
                <p className="text-sm text-gray-400 my-1">{course?.category}</p>
                <div className="flex items-center justify-between">
                    <h2 className="flex gap-2 items-center p-1 bg-purple-50 text-primary text-sm rounded-sm">
                        <HiOutlineBookOpen />
                        {course?.courseOutput?.course?.noOfChapters} Chapters
                    </h2>
                    <h2 className="text-sm bg-purple-50 text-primary p-1 rounded-sm">
                        {course?.level}
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
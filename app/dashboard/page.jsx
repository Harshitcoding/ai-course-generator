// import { UserButton } from "@clerk/nextjs"

import AddCourse from "./_components/AddCourse"

import UserCourseList from "./_components/UserCourseList"

const Dashboard = () => {
  return (
    <div>
      <AddCourse/>
      <UserCourseList/>
      {/*Display list of course */}
      </div>
  )
}
export default Dashboard
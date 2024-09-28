'use client'

import { useState } from "react"
import { UserCourseListContext } from "../_context/UserCourseListContext"
import Header from "./_components/Header"
import SideBar from "./_components/SideBar"

const Dashboardlayout = ({ children }) => {

  const [userCourseList , setUserCourseList] = useState([])
  return (
    <UserCourseListContext.Provider value={{userCourseList , setUserCourseList}}>
    <div>
      <div className="md:w-64 hidden md:block">
        <SideBar />
      </div>
      <div className="md:ml-64 ">
        <Header />
        <div className="p-10">
          {children}
        </div>
      </div>
    </div>
    </UserCourseListContext.Provider>
  )
}
export default Dashboardlayout
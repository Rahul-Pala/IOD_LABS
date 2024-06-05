import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import React from 'react'
import HomePage from "./HomePage"
import About from "./About";
import DashboardPage from "./DashboardPage";
import DashboardMessages from "./DashboardMessages";
import DashboardTasks from "./DashboardTasks";
import PageNotFound from "./PageNotFound";

function AppRoutes(props) {
  return (
    <Routes>
    {/* index matches on default/home URL: / */}
    <Route index element={<HomePage {...props} />} />
    {/* nested routes, matches on /dash/messages etc */}
    <Route path="dash" element={<DashboardPage {...props} />}>
       <Route path="messages" element={<DashboardMessages />} />
       <Route path="tasks" element={<DashboardTasks />} />
    </Route>
    <Route path='/about' element={<About {...props} />} />        
    {/* special route to handle if none of the above match */}
    <Route path="*" element={<PageNotFound />} />            
 </Routes>
  )
}

export default AppRoutes
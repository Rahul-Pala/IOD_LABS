import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

function HomeEx4() {
    const navigate = useNavigate()
  return (
    
    <div>
       <p>HomeEx4</p> 
       <button onClick={() => navigate('/Login')}>Login Page</button>
       <button onClick={() => navigate("/Bitcoinrates")}>Show Rates</button>
       <button onClick={() => navigate(-1)}>Back</button>

        <Outlet></Outlet>
    </div>
  )
}

export default HomeEx4
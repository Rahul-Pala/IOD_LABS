import React from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import HomeEx4 from './HomeEx4'
import LoginEx4 from './LoginEx4'
import BitcoinRatesEx4 from './BitcoinRatesEx4'
import BitcoinHistory from './BitcoinHistory'
import PageNotFound from './PageNotFound'

function AppRoutesEx4(props) {
  return (
    <div>
        <Routes>
            <Route index element={<HomeEx4 {...props} />} />
            <Route path="login" element={<LoginEx4/>}></Route>

            <Route path="Bitcoinrates" element={<BitcoinRatesEx4 {...props}/>}>
                <Route path = "Bitcoinhistory" element={<BitcoinHistory/>}/>
            </Route>
  
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    </div>
  )
}

export default AppRoutesEx4
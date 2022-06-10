import React from 'react'
import Navbar from './navbar'
import Pie from "../../../footer/src/components/Pie";
export const Container = ({children}) => {
  return (
    <div>
        <Navbar/>
        <hr></hr>
       <div>{children}</div> 
       <hr></hr>
       <Pie/>
    </div>
  )
}

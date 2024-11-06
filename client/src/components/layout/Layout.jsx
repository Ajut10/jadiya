import React from 'react'
import Header from './Header'
import Footer from './Footer'
const Layout = (props) => {
  return (
    <div>
        <Header/>
        <h1>Layout</h1>
        {props.children}
        <Footer/>
    </div>
  )
}

export default Layout
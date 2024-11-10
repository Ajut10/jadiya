import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">

        <h4 className='text-center'>&copy; Jadiya 2024</h4>
        <p className='text-center mt-3'>
          <Link to="/about">About us</Link>|
          <Link to="/contact">Contact</Link>|
          <Link to="/policy">Privacy policy</Link>
        </p>
    </div>
  )
}

export default Footer
import React from 'react'
import { Background } from 'react-parallax'

export const Footers = () => {
  return (
    <div className='Footer'>
        <div className="container">
  <footer className="   ">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><a style={{background:"white"}} href="/" className="nav-link px-2 text-muted">Home</a></li>
      <li className="nav-item"><a style={{background:"white"}} href="/about" className="nav-link px-2 text-muted">About</a></li>
      <li className="nav-item"><a style={{background:"white"}} href="/feed" className="nav-link px-2 text-muted">Washer Login</a></li>
      <li className="nav-item"><a style={{background:"white"}} href="/blogs" className="nav-link px-2 text-muted">Car Blogs</a></li>
    </ul>
    <p className="text-center text-muted">© 2022 CarWash.com</p>
  </footer>
</div>
    </div>
  )
}
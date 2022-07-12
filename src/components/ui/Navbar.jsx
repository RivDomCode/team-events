import React from 'react'

export const Navbar = () => {
  return (
    <nav className='navbar'>
        <span className="navbar-user">
          <span class="material-symbols-outlined">
            face_6
          </span>
          Manolo
        </span>
        <button className="navbar-logout-container ">
        <span className="material-symbols-outlined">
            exit_to_app
        </span>
        <span> Log Out</span>
        </button>

    </nav>
  )
}

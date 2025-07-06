import React from 'react'
import './Header.css'
 function Header() {
  return (
    <div>
       <header>
            <div className='header-container'>
                <div className='logo'>
                    <h1>Store Name</h1>
                </div>
                
                <div className='search-bar'>
                    <input type="text" id="search-input" placeholder="Search shirts , Jeans, or Code"/>
                    <button></button>
                    
                </div>

                <nav id='header-nav'>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Profile</a></li>
                        <li><a href="#">Cart</a></li>
                        <li><a href="#">Orders</a></li>
                    </ul>
                </nav>
            </div>

        </header>
    </div>
  )
}

export default Header

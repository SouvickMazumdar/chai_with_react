import React from 'react'
import { Container, LogoutBtn, Logo } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
function Header() {
  const authStatus=useSelector((state)=>state.auth.status)
  const navigate=useNavigate()
  const navItems=[
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "Thoughts Gallary",
      slug: "/thought-gallary",
      active: authStatus,
  },
  {
      name: "Add Thought",
      slug: "/add-thought",
      active: authStatus,
  },
  ]
  
  return (
    <header className='py-3 shadow bg-amber-300'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
          <Link to='/'>
            <Logo width='70px'/>
          </Link>
          </div>
          <ul className='flex ml-auto text-2xl mt-1 p-4 bg-amber-400 rounded-lg'>
            {navItems.map((item)=>
              item.active?(
                <li key={item.name}>
                  <button onClick={()=>navigate(item.slug)} className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>{item.name}</button>
                </li>
              ):null
            )}

            {authStatus && (
              <li>
                <LogoutBtn/>
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header
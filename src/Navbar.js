import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {Link , useNavigate } from "react-router-dom"

const Navbar = ({authen,setAuthen}) => {
  const navigate=useNavigate()
  const menuList=['여성','남성','신생아/유아','아동','H&M Home','Sale','지속가능성']
  const search=(e)=>{
    if(e.key === "Enter"){
      let keyword = e.target.value
      navigate(`/?q=${keyword}`)
      
    }
    
  }

  const handleLog=(evt)=>{
    evt.preventDefault();
    if(evt.target.text === 'LOG OUT'){
      setAuthen(false)

    }
    
  }


  return (
    <div>
      <div className='login-btn'>
        <FontAwesomeIcon icon={faUser}/>
        
        <Link onClick={(evt)=>handleLog(evt)} style={{textDecoration:'none',color:'black'}} to="/login">{authen===true?"LOG OUT":"LOG IN"}</Link>
        
      </div>

      <Link to="/" className='nav-sec'>
        <img width={100} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png"/>
      </Link>

      <div>
        <div className='menu-area'>
          <ul className='menu-list'>
            {menuList.map((menu)=> <li>{menu}</li>)}
          </ul>
          </div>
        <div className='search-input'>
          <FontAwesomeIcon icon={faSearch}/>
          <input onKeyDown={(e)=>search(e)} className='search-type' type='text' placeholder='Search Product'/>
        </div>
      </div>

    </div>
  )
}

export default Navbar
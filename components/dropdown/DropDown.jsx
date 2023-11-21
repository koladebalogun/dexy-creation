import React from "react";
import { Dropdown } from 'react-bootstrap';
import Link from "next/link";
// import { NavLink } from "react-router-dom";

const customToggleStyle = {
  fontSize: '14px',
  textDecoration: 'none',
  color:'#000',
};

const customMenuStyle = {
  backgroundColor: '#fff',
  borderRadius: '4px',
  boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
  fontSize:'10px',
  textTransform: 'uppercase',
  textDecoration: 'none',
  color:'#000',
};

const navLinkStyle = {
  color: '#000',
  textDecoration: 'none',
  transition: '0.3s',
  fontSize:'10px',
};

const activeNavLinkStyle = {
  backgroundColor: 'blue',
  color: 'white',
};



export default function DropDown({title, link1, linkTitle1, link2, linkTitle2, link3, linkTitle3, logout, logoutText}) {

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <Link
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      style={customToggleStyle}
    >
      {children}
      &#x25bc;
    </Link>
  ));
    
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" className=''>
          {title}
        </Dropdown.Toggle>
        <Dropdown.Menu style={customMenuStyle}>
          <Dropdown.Item href={link1}>
            <Link  style={navLinkStyle} href={link1}>{linkTitle1}</Link>
          </Dropdown.Item>
          <Dropdown.Item href={link2}>
            <Link  style={navLinkStyle} href={link2}>{linkTitle2}</Link>
          </Dropdown.Item>
          <Dropdown.Item href={link3}>
            <Link  style={navLinkStyle} href={link3}>{linkTitle3}</Link>
          </Dropdown.Item>
          <Dropdown.Item onClick={logout} style={navLinkStyle}>{logoutText}</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

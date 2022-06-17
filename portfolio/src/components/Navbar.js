import React from 'react'
function CustomLink({href,children, ...props}){
	const path = window.location;
	return(
		<li className= {path === href ? 'active' : ''}>
			<a href={href} {...props}>{children}</a>
		</li>
	)
}

function Navbar() {
	  return (
		<nav className='nav'>
			<a href='/' className='site-title'>Jon Crosse</a>
			<ul className='nav-list'>
				<CustomLink href='#about'>About</CustomLink>
				<CustomLink href='#work'>Work</CustomLink>
				<CustomLink href='#contact'>Contact</CustomLink>
			</ul>
		</nav>
	  )
}

export default Navbar
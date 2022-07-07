import React from 'react'
import { SideBarData } from './SideBarData'
import { Link } from 'react-router-dom'

function Navbar() {
	return (
		<div>
			<nav className='nav-menu'>
				<ul className='nav-menu-items'>
					{SideBarData.map((item, index) => {
						return (
							<li key={index} className={item.cName}>
								<Link to={item.path}>
									<span>{item.title}</span>
								</Link>
							</li>
						)
					})}
				</ul>
			</nav>
		</div>
	)
}
export default Navbar
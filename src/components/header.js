import React from "react"
import { Link } from "gatsby"
import PropTypes from 'prop-types';

const Header = ({ siteTitle, menuLinks }) => (
	<header>
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<Link className="navbar-brand" to="/">
					<img src="https://secure.gravatar.com/avatar/5763d82a3129a853b48b2fd7a5c21abd?s=32&r=g" /> 
					TS 2020
      			</Link>

				<div className="collapse navbar-collapse" id="navbarTogglerDemo03">
					<ul className="navbar-nav mr-auto mt-3 mt-lg-0">
						{menuLinks.map(link => (
							<li
								key={link.name}
								className="nav-item">
								<Link className="nav-link" to={link.link}>{link.name}</Link>
							</li>
						))}
					</ul>
				</div>

			</div>
		</nav>



		{/* <div>
			<div>
				<h1>
					<Link to="/">{siteTitle}</Link>
				</h1>
				<div>
					<nav>
						<ul>
							{menuLinks.map(link => (
								<li key={link.name}>
									<Link to={link.link}>{link.name}</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>
		</div> */}
	</header>
)

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
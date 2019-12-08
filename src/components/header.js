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
					<img src="https://secure.gravatar.com/avatar/5763d82a3129a853b48b2fd7a5c21abd?s=32&r=g" height="32px" width="32px" />
					<span className="align-middle">{siteTitle}</span>
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
					<form className="form-inline my-2 my-lg-0">
						<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
						<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
					</form>
				</div>

			</div>
		</nav>
	</header>
)

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
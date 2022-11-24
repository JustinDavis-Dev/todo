import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
	return (
		<footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mt-auto border-top bg-light">
			<div className="container">
				<div className="row">
					<div className="col-md-4 d-flex align-items-center">
						<a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"></a>
						<span className="mb-3 mb-md-0 text-muted">© 2022 Justin Davis</span>
					</div>

					<ul className="nav col-md-4 ms-auto justify-content-end list-unstyled d-flex">
						<li className="ms-3">
							<a className="text-muted" href="#">
								<FaLinkedin />
							</a>
						</li>
						<li className="ms-3">
							<a className="text-muted" href="#">
								<FaGithub />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}

export default Footer;

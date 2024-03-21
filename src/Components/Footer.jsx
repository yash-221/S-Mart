import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
	return (
		<footer
			style={{
				backgroundColor: "#f131a1",
				height: "75px",
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				marginTop: "20px",
			}}
		>
			<div
				style={{
					color: "white",
					display: "flex",
					alignItems: "center",
					marginLeft: "15px",
				}}
			>
				Lalaji@gmail.com
				<div style={{ margin: "0 20px" }}></div>
				<span>All Company Work</span>
			</div>
			<div>
				<a
					href="https://www.facebook.com/"
					style={{ color: "white", marginRight: "15px" }}
				>
					<FaFacebook size={22} />
				</a>
				<a
					href="https://www.instagram.com/"
					style={{ color: "white", marginRight: "15px" }}
				>
					<FaInstagram size={22} />
				</a>
				<a
					href="https://twitter.com/"
					style={{ color: "white", marginRight: "15px" }}
				>
					<FaTwitter size={22} />
				</a>
				<a
					href="https://www.linkedin.com/"
					style={{ color: "white", marginRight: "25px" }}
				>
					<FaLinkedin size={22} />
				</a>
			</div>
		</footer>
	);
};

export default Footer;

// *Home component*

import React, { useEffect, useState } from "react";
import apiCall from "../api/banner-api-call";

// Banner component
const Home = () => {
	const [banners, setBanners] = useState([]);
	const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

	// Fetch the banners from banner API
	useEffect(() => {
		const fetchBanner = async () => {
			const response = await apiCall();
			setBanners(response.data);
		};

		fetchBanner();
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentBannerIndex((prevIndex) =>
				prevIndex === banners.length - 1 ? 0 : prevIndex + 1
			);
		}, 3000); // Change the interval time as needed (in milliseconds)

		return () => clearInterval(interval);
	}, [banners]);

	return (
		<div>
			{/* Include the Navbar component */}
			{banners.map((banner, index) => (
				<img
					key={banner.id}
					src={banner.image}
					style={{
						width: "1352px",
						height: "350px",
						marginTop: "10px",
						display:
							index === currentBannerIndex ? "block" : "none",
					}}
					alt={`Banner ${index}`}
				/>
			))}
		</div>
	);
};

export default Home;

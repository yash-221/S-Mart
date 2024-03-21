import React from "react";

const Category = ({ transformedData }) => {
	return (
		<div
			style={{
				display: "flex",
				flexWrap: "wrap",
				justifyContent: "center",
			}}
		>
			{transformedData.map((category, index) => (
				<div
					key={index}
					style={{
						maxWidth: "100px",
						margin: "45.9px",
						textAlign: "center",
						fontFamily: "popins",
						fontSize: "20px",
					}}
				>
					<img
						src={category.image}
						alt={category.categoryName}
						style={{
							width: "100%",
							height: "100px",
							backgroundColor: "#f131a1",
							borderRadius: "50%",
							overflow: "hidden",
						}}
					/>
					<p>{category.categoryName}</p>
				</div>
			))}
		</div>
	);
};

export default Category;

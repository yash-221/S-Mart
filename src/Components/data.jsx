// const data = 8;

// const transformedData = data.data.category.map(category => {
//   return {
//       categoryName: category.name,
//       products: category.product_details.map(product => {
//           return {
//               id: product.id,
//               name: product.name,
//               sellingPrice: product.selling_price,
//               description: product.description,
//               images: product.product_images.map(image => image.image)
//           };
//       })
//   };
// });

// const postData = async () => {
//   try {
//       const url = 'https://testapi.arbsindia.com/public/api/get-public-category-details-list';

//       const response = await fetch(url, {
//           method: 'POST',
//           headers: {
//               'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//             business_id: 105
//           })
//       });

//       if (!response.ok) {
//           throw new Error('Network response was not ok');
//       }

//       const responseData = await response.json();
//       console.log('Data sent successfully:', responseData);
//   } catch (error) {
//       console.error('Error sending data:', error);
//   }
// };

// export {postData};

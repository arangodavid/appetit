// client name r-S071dysQ6-netHhriPYg
const apikey = 'yzJt0PVlwvVnB-i_fr57E0Jd_hEIZ_H_9438AnX1D1q03-VAQ_J9Vmo648pXa6eWJsi5ExmX31xr1IV6ypOH2JeSFIm1FTBfGfovaM7RTF7W-s5s3L_fewsCK09eXHYx';

const Yelp = {
	search(term, location, sortBy) {
		return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, 
						 {
							headers: {
								Authorization: `Bearer ${apikey}`
						}
						}).then(response => {
							return response.json();
						}).then(jsonResponse => {
							if(jsonResponse.businesses) {
								return jsonResponse.businesses.map(business => {
									console.log(business);
									return {
										id: business.id,
										imageSrc: business.image_url,
										name: business.name,
										address: business.location.address1,
										city: business.location.city,
										state: business.location.state,
										zipCode: business.location.zip_code,
										category: business.categories[0].title,
										rating: business.rating,
										reviewCount: business.review_count
									};
								});
							}
						})
	}
};
export default Yelp;

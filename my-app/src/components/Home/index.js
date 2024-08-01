import React, { Component } from "react";

import NavBar from "../Navbar";
import HouseCard from "../HouseCard";
import Filter from "../Filter"


import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const PropertiesList = [

  
  {
    "id": 11,
    "imgSrc": "https://res.cloudinary.com/dwwunc51b/image/upload/v1713606005/images_9_mrqiqh.jpg",
    "statusType": "FOR_SALE",
    "price": "20L",
    "amount":2000000,
    "address": "Pune",
    "addressCityId": "Pune",
    "beds": 1,
    "baths": 1,
    "area": 880,
    "priceId":1,
    "bedId":'one'
  },
  {
    "id": 10,
    "imgSrc": "https://res.cloudinary.com/dwwunc51b/image/upload/v1713606005/images_10_yrauqg.jpg",
    "statusType": "FOR_SALE",
    "price": "30L",
    "amount":3000000,
    "address": "Diamond City, Bangalore",
    "addressCityId": "Ban",
    "beds": 1,
    "baths": 2,
    "area": 910,
    "priceId":1,
    "bedId":'one'
  },
  {
    "id": 21,
    "imgSrc": "https://res.cloudinary.com/dwwunc51b/image/upload/v1713606004/images_19_w0ct4z.jpg",
    "statusType": "FOR_SALE",
    "price": "34L",
    "amount":3400000,
    "address": "Hyderabad",
    "addressCityId": "Hyd",
    "beds": 1,
    "baths": 1,
    "area": 980,
    "priceId":1,
    "bedId":'one'
  },
  {
    "id": 12,
    "imgSrc": "https://res.cloudinary.com/dwwunc51b/image/upload/v1713606005/images_11_jqy1mm.jpg",
    "statusType": "FOR_SALE",
    "price": "40L",
    "amount":4000000,
    "address": "Delhi",
    "addressCityId": "Del",
    "beds": 1,
    "baths": 2,
    "area": 900,
    "priceId":1,
    "bedId":'one'
  },
  {
    "id": 19,
    "imgSrc": "https://res.cloudinary.com/dwwunc51b/image/upload/v1713606004/images_17_exxcst.jpg",
    "statusType": "FOR_SALE",
    "price": "45L",
    "amount":4500000,
    "address": "Delhi",
    "addressCityId": "Del",
    "beds": 2,
    "baths": 1,
    "area": 980,
    "priceId":1,
    "bedId":'two'
  },



  {
    "id": 16,
    "imgSrc": "https://res.cloudinary.com/dwwunc51b/image/upload/v1713606005/images_18_nfl7u4.jpg",
    "statusType": "FOR_SALE",
    "price": "50L",
    "amount":5000000,
    "address": "Near Cricket Stadium, Pune",
    "addressCityId": "Pune",
    "beds": 2,
    "baths": 2,
    "area": 1180,
    "priceId":2,
    "bedId":'two'
  },
  {
    "id": 4,
    "imgSrc": "https://res.cloudinary.com/dwwunc51b/image/upload/v1713606006/images_gvl713.jpg",
    "statusType": "FOR_SALE",
    "price": "60L",
    "amount":6000000,
    "address": "130 Water St APT 12D, Pune",
    "addressCityId": "Pune",
    "beds": 2,
    "baths": 2,
    "area": 1220,
    "priceId":2,
    "bedId":'two'
  },
  {
    "id": 18,
    "imgSrc": "https://res.cloudinary.com/dwwunc51b/image/upload/v1713606004/images_20_chmdsg.jpg",
    "statusType": "FOR_SALE",
    "price": "65L",
    "amount":6500000,
    "address": "Bangalore",
    "addressCityId": "Ban",
    "beds": 2,
    "baths": 2,
    "area": 1280,
    "priceId":2,
    "bedId":'two'
  },
  {
    "id": 5,
    "imgSrc": "https://res.cloudinary.com/dwwunc51b/image/upload/v1713606006/images_4_if3xrv.jpg",
    "statusType": "FOR_SALE",
    "price": "70L",
    "amount":7000000,
    "address": "Hi-Tech City, Hyderabad",
    "addressCityId": "Hyd",
    "beds": 2,
    "baths": 2,
    "area": 1300,
    "priceId":2,
    "bedId":'two'
  },
  {
    "id": 3,
    "imgSrc": "https://res.cloudinary.com/dwwunc51b/image/upload/v1713606006/images_2_qdawbd.jpg",
    "statusType": "FOR_SALE",
    "price": "80L",
    "amount":8000000,
    "address": "Delhi",
    "addressCityId": "Del",
    "beds": 2,
    "baths": 2,
    "area": 1380,
    "priceId":2,
    "bedId":'two'
  },
  {
    "id": 9,
    "imgSrc": "https://res.cloudinary.com/dwwunc51b/image/upload/v1713606006/images_8_stspp2.jpg",
    "statusType": "FOR_SALE",
    "price": "92L",
    "amount":9200000,
    "address": "Modern City, Hyderabad",
    "addressCityId": "Hyd",
    "beds": 2,
    "baths": 2,
    "area": 1480,
    "priceId":2,
    "bedId":'two'
  },
  {
    "id": 6,
    "imgSrc": "https://res.cloudinary.com/dwwunc51b/image/upload/v1713606006/images_6_lufbie.jpg",
    "statusType": "FOR_SALE",
    "price": "95L",
    "amount":9500000,
    "address": "Pune",
    "addressCityId": "Pune",
    "beds": 3,
    "baths": 2,
    "area": 1550,
    "priceId":2,
    "bedId":'three'
  },
  {
    "id": 7,
    "imgSrc": "https://res.cloudinary.com/dwwunc51b/image/upload/v1713606006/images_3_vlp8hp.jpg",
    "statusType": "FOR_SALE",
    "price": "99L",
    "amount":9900000,
    "address": "Bangalore",
    "addressCityId": "Ban",
    "beds": 3,
    "baths": 2,
    "area": 1580,
    "priceId":2,
    "bedId":'three'
  },
 
 


  {
    "id": 1,
    "imgSrc": "https://res.cloudinary.com/dwwunc51b/image/upload/v1713606006/images_5_qazu7r.jpg",
    "statusType": "FOR_SALE",
    "price": "1Cr",
    "amount":10000000,
    "address": "Hi-Tech City, Hyderabad",
    "addressCityId": "Hyd",
    "beds": 3,
    "baths": 3,
    "area": 1680,
    "priceId":3,
    "bedId":'three'
  },
  {
    "id": 8,
    "imgSrc": "https://res.cloudinary.com/dwwunc51b/image/upload/v1713606006/images_7_jffb3s.jpg",
    "statusType": "FOR_SALE",
    "price": "1Cr",
    "amount":10000000,
    "address": "Delhi",
    "addressCityId": "Del",
    "beds": 3,
    "baths": 3,
    "area": 1700,
    "priceId":3,
    "bedId":'three'
  },
  {
    "id": 15,
    "imgSrc": "https://res.cloudinary.com/dwwunc51b/image/upload/v1713606006/images_1_caxahp.jpg",
    "statusType": "FOR_SALE",
    "price": "1Cr",
    "amount":10000000,
    "address": "Redfort Area, Delhi",
    "addressCityId": "Del",
    "beds": 3,
    "baths": 3,
    "area": 1780,
    "priceId":3,
    "bedId":'three'
  },
  {
    "id": 2,
    "imgSrc": "https://res.cloudinary.com/dwwunc51b/image/upload/v1713606005/images_13_vpmxy4.jpg",
    "statusType": "FOR_SALE",
    "price": "1.2Cr",
    "amount":12000000,
    "address": "WhiteField, Bangalore",
    "addressCityId": "Ban",
    "beds": 4,
    "baths": 3,
    "area": 1900,
    "priceId":3,
    "bedId":'four'
  },
  {
    "id": 20,
    "imgSrc": "https://res.cloudinary.com/dwwunc51b/image/upload/v1713606004/images_15_vbprct.jpg",
    "statusType": "FOR_SALE",
    "price": "1.3Cr",
    "amount":13000000,
    "address": "Pune",
    "addressCityId": "Pune",
    "beds": 4,
    "baths": 3,
    "area": 2000,
    "priceId":3,
    "bedId":'four'
  },



  {
    "id": 13,
    "imgSrc": "https://res.cloudinary.com/dwwunc51b/image/upload/v1713606005/images_12_bw0ot9.jpg",
    "statusType": "FOR_SALE",
    "price": "2Cr",
    "amount":20000000,
    "address": "Bangalore",
    "addressCityId": "Ban",
    "beds": 4,
    "baths": 4,
    "area": 2300,
    "priceId":4,
    "bedId":'four'
  },
  {
    "id": 17,
    "imgSrc": "https://res.cloudinary.com/dwwunc51b/image/upload/v1713606005/images_16_teat4z.jpg",
    "statusType": "FOR_SALE",
    "price": "2.1Cr",
    "amount":21000000,
    "address": "Hyderbad",
    "addressCityId": "Hyd",
    "beds": 4,
    "baths": 4,
    "area": 2400,
    "priceId":4,
    "bedId":'four'
  },
  {
    "id": 14,
    "imgSrc": "https://res.cloudinary.com/dwwunc51b/image/upload/v1713606005/images_14_lg335i.jpg",
    "statusType": "FOR_SALE",
    "price": "2.4Cr",
    "amount":24000000,
    "address": "130 Water St, Hyderbad",
    "addressCityId": "Hyd",
    "beds": 4,
    "baths": 5,
    "area": 2700,
    "priceId":4,
    "bedId":'four'
  },
  



]




class Home extends Component {

  state = {location:'', priceRange:'', bedRooms:'', updatedPropertyList:PropertiesList, CartList:[], totalCartPrice:0}

onChangeLocation = (id) =>{
  this.setState({location:id}, this.filterProperties)
}

onChangeBedrooms = (id) =>{
  this.setState({bedRooms:id}, this.filterProperties)
}

onChangePrice = (id) =>{
  this.setState({priceRange:id}, this.filterProperties)
}

filterProperties = () => {
  const { location, priceRange, bedRooms } = this.state;
  const updatedPropertyList = PropertiesList.filter(property => {
    if (location && property.addressCityId !== location) {
      return false;
    }
    if (priceRange && property.priceId < priceRange) {
      return false;
    }
    if (bedRooms && property.bedId !== bedRooms) {
      return false;
    }
    return true;
  });
  this.setState({ updatedPropertyList });
};


onAddToCart = (details) => {
  this.setState(prevState => ({
    totalCartPrice: prevState.totalCartPrice + details.amount,
    CartList: [...prevState.CartList, details]
  }));
}

renderMainContent = () =>{
  const{updatedPropertyList} = this.state

    
  return(
    <div className="content-container">
    {updatedPropertyList.map(eachHouse =>(
      <HouseCard  details={eachHouse} key={eachHouse.id} />
    ))}
  </div>
  )
}


renderEmptyView = ()=>(
        <div className="no-products-view">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-no-products-view.png"
              className="no-products-img"
              alt="no products"
            />
            <h1 className="no-products-heading">No Products Found</h1>
            <p className="no-products-description">
              We could not find any products. Try other filters.
            </p>
          </div>
)

  render() {
    const{updatedPropertyList} = this.state

    const shouldShowProductsList = updatedPropertyList.length > 0
    
    return (
      <>
        <NavBar />
        <div className="main-content-container" >
          <div className="filter-container">
             <Filter onChangeBedrooms={this.onChangeBedrooms} onChangeLocation={this.onChangeLocation} onChangePrice={this.onChangePrice}/>
             <hr className="hr-home" />
          </div>
          {shouldShowProductsList ? this.renderMainContent() : this.renderEmptyView()}
    
        </div>

      </>
    );
  }
}

export default Home;

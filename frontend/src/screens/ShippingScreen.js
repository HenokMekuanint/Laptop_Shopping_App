import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { saveShippingAddress } from "../Redux/Actions/cartActions";

const ShippingScreen = ({history}) => {
  window.scrollTo(0, 0);

  const cart =useSelector((state) => state.cart);
  const {shippingAddress}=cart

  const [address,setAddress]=useState(shippingAddress.address);
  const [city,setCity]=useState(shippingAddress.city);
  const [postalCode,setPostalCode]=useState(shippingAddress.postalCode);
  const [country,setCountry]=useState(shippingAddress.country);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({address,city,postalCode,country}))
    history.push("/payment")
  };
  return (
    <>
      <Header />
      <div className="container d-flex justify-content-center align-items-center login-center">
        <form
          className="Login col-md-8 col-lg-4 col-11"
          onSubmit={submitHandler}
        >
          <h6>DELIVERY ADDRESS</h6>
          <input type="text" placeholder="Enter address" value={address} onChange={(e) => setAddress(e.target.value)}/>
          <input type="text" placeholder="Enter city"  value={city} onChange={(e) => setCity(e.target.value)}/>
          <input type="text" placeholder="Enter postal code" value={postalCode} onChange={(e) => setPostalCode(e.target.value)}/>
          <input type="text" placeholder="Enter country" value={country} onChange={(e) => setCountry(e.target.value)}/>
          <button type="submit">
            <Link to="/payment" className="text-white">
              Continue
            </Link>
          </button>
        </form>
      </div>
    </>
  );
};

export default ShippingScreen;

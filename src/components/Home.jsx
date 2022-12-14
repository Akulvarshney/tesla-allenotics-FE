import React from "react";
import M3 from "../assets/m3.jpeg";
import MY from "../assets/my.jpeg";
import MS from "../assets/ms.jpeg";
import MX from "../assets/mx.jpeg";
import SP from "../assets/sp.jpeg";
import ACC from "../assets/acc.jpeg";
import HomeCars from "./HomeCars";

const Home = () => {
  return (
    <div>
      <HomeCars
        id="model3"
        carImage={M3}
        title="Model 3"
        para="Schedule a Test Drive"
        buttonOne="Custom Order"
        buttontwo="Existing Inventory"
      />
      <HomeCars
        id="modely"
        carImage={MY}
        title="Model Y"
        para="Schedule a Test Drive"
        buttonOne="Custom Order"
        buttontwo="Existing Inventory"
      />
      <HomeCars
        id="models"
        carImage={MS}
        title="Model S"
        para="Schedule a Test Drive"
        buttonOne="Custom Order"
        buttontwo="Existing Inventory"
      />
      <HomeCars
        id="modelx"
        carImage={MX}
        title="Model X"
        para="Schedule a Test Drive"
        buttonOne="Custom Order"
        buttontwo="Existing Inventory"
      />
      <HomeCars
        carImage={SP}
        title="Solar Panels"
        para="Lowest Cost Solar Panels in America"
        buttonOne="Order Now"
        buttontwo="Learn Now"
      />
      <HomeCars
        carImage={ACC}
        title="Accessories"
        buttonOne="Shop Now"
        buttontwo="Learn Now"
      />
    </div>
  );
};

export default Home;

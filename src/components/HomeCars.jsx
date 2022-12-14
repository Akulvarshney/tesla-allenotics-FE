import React from "react";

const HomeCars = (props) => {
  return (
    <div>
      <div
        className="home_car"
        id={props.id}
        style={{
          backgroundImage: `url(${props.carImage})`,
        }}
      >
        <div className="head">
          <h1>{props.title}</h1>
          <p>
            <u>{props.para}</u>
          </p>
        </div>
        <div className="buttons">
          <button className=" buttonTwo buttonOne">{props.buttonOne}</button>
          <button className=" buttonOne">{props.buttontwo}</button>
        </div>
      </div>
    </div>
  );
};

export default HomeCars;
